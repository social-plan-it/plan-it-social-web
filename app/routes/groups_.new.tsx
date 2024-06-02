import type { ActionFunctionArgs, LoaderFunctionArgs } from '@remix-run/node';
import { redirect } from '@remix-run/node';
import { Form, useActionData } from '@remix-run/react';
import { createClient } from '@supabase/supabase-js';
import { z } from 'zod';

import { db } from '~/modules/database/db.server';

import { Card } from '~/components/ui/containers';
import { ACCEPTED_IMAGE_TYPES, ImageUpload, Input, MAX_FILE_SIZE_MB, TextArea } from '~/components/ui/forms';
import { Button } from '~/components/ui/button';
import { H1, H2 } from '~/components/ui/headers';
import { requireUserSession } from '~/modules/session/session.server';
import { badRequest } from '~/modules/response/response.server';

export async function loader({ request }: LoaderFunctionArgs) {
  return requireUserSession(request);
}

export async function action({ request }: ActionFunctionArgs) {
  const userSession = await requireUserSession(request);
  const form = await request.formData();
  const name = form.get('groupName');
  const description = form.get('description');
  const groupImage = form.get('groupImage');

  if (typeof name !== 'string' || typeof description !== 'string') {
    return { error: { message: `Form not submitted correctly.` } };
  }

  const formObject = Object.fromEntries(form);
  const newGroupFrom = await z
    .object({
      groupName: z.string().min(1, 'Group name is required.'),
      description: z.string().min(1, 'Description is required.'),
      groupImage: z
        .instanceof(File)
        .refine(
          (file) => !file || file?.size <= MAX_FILE_SIZE_MB * 1024 * 1024,
          `File size can't exceed ${MAX_FILE_SIZE_MB}MB.`,
        )
        .refine(
          (file) => ACCEPTED_IMAGE_TYPES.split(', ').includes(file.type),
          `Only ${ACCEPTED_IMAGE_TYPES} are supported.`,
        ),
    })
    .safeParseAsync(formObject);

  if (!newGroupFrom.success) {
    return badRequest({
      success: false,
      fields: {
        groupName: formObject.groupName,
        description: formObject.description,
        groupImage: formObject.groupImage,
      },
      error: { message: `the following fields contains errors: ${newGroupFrom.error}` },
    });
  }

  let groupImageUrl = null;
  if (groupImage && groupImage instanceof File && groupImage.name) {
    // Create a single supabase client for interacting with your database
    if (!process.env.SUPABASE_SECRET) throw new Error('SUPABASE_SECRET is not defined');
    const supabase = createClient('https://fzzehiiwadkmbvpouotf.supabase.co', process.env.SUPABASE_SECRET);
    const uuid = crypto.randomUUID();
    const { data, error } = await supabase.storage
      .from('group-cover-images')
      .upload(`${uuid}-${groupImage.name}`, groupImage, {
        cacheControl: '3600',
        upsert: false,
      });
    if (error) {
      return { error: { message: `Error uploading image: ${error.message}` } };
    }
    groupImageUrl = `https://fzzehiiwadkmbvpouotf.supabase.co/storage/v1/object/public/group-cover-images/${data.path}`;
  }

  // TODO generate alt text or prompt user for alt text
  const new_group = await db.group.create({
    data: { name, description, imgUrl: groupImageUrl, imgAlt: 'Group image' },
  });
  await db.userGroup.create({ data: { userId: userSession.userId, groupId: new_group.id, role: 'ADMIN' } });
  return redirect(`/groups/`);
}

export default function GroupNew() {
  const actionData = useActionData<typeof action>();
  return (
    <div className="grow py-20 lg:py-40 bg-secondary w-full flex flex-col items-center justify-center">
      <div className="flex w-full items-center justify-center flex-col">
        <div className="max-w-[900px] w-full flex flex-col gap-3">
          <H1>Create New Group</H1>
          <H2>Your Community Starts Here</H2>
          <Card>
            <Form method="post" encType="multipart/form-data">
              <div className="flex pt-4 w-full">
                <div className="w-1/2">
                  <div className="w-1/2 pb-4">
                    <Input label="Group Name:" name="groupName" required />
                  </div>
                  <div className="w-1/2 pb-4">
                    <Input label="Location:" name="location" required />
                  </div>
                </div>
                <div className="w-full">
                  <div className="w-1/2 pb-4">
                    <label>
                      Group Topics:
                      <select name="groupTopics" id="groupTopics">
                        <option value="Tennis">Tennis</option>
                        <option value="Golf">Golf</option>
                        <option value="Pickleball">Pickleball</option>
                        <option value="D&D">D&D</option>
                      </select>
                    </label>
                  </div>
                  <div className="w-1/2 pb-4">
                    <Input label="Discord Channel:" name="discordChannel" />
                  </div>
                </div>
              </div>
              <div className="flex-col pb-4">
                <TextArea label="Description:" name="description" rows={5} required />
              </div>
              <div className="flex-row pb-4">
                <ImageUpload label="Attach Image" name="groupImage" />
              </div>
              <div className="flex-row justify-end">
                <Button variant="warm" buttonStyle="fullyRounded">
                  Create a group
                </Button>
                {actionData && <div>{actionData.error.message}</div>}
              </div>
            </Form>
          </Card>
        </div>
      </div>
    </div>
  );
}
