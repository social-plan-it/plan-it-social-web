import type { ActionFunction } from '@remix-run/node';
import { redirect } from '@remix-run/node';
import { Form } from '@remix-run/react';

import { db } from '~/modules/database/db.server';

import { Card } from '~/components/ui/containers';
import { Input, TextArea } from '~/components/ui/forms';
import { Button } from '~/components/ui/button';

import { H1, H2 } from '~/components/ui/headers';

export let action: ActionFunction = async ({ request }) => {
  const form = await request.formData();
  const name = form.get('groupName');
  const description = form.get('description');

  if (typeof name !== 'string' || typeof description !== 'string') {
    return { formError: `Form not submitted correctly.` };
  }

  await db.group.create({ data: { name, description } });

  return redirect(`/groups/`);
};

export default function GroupNew() {
  return (
    <div className="grow py-20 lg:py-40 bg-secondary w-full flex flex-col items-center justify-center">
      <div className="flex w-full items-center justify-center flex-col">
        <div className="max-w-[900px] w-full flex flex-col gap-3">
          <H1>Create New Group</H1>
          <H2>Your Community Starts Here</H2>
          <Card>
            <Form method="post">
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
              <div className="flex-row justify-end">
                <div>
                  <label>Attach Image</label>
                </div>
                <Button variant="warm" buttonStyle="fullyRounded">
                  Create a group
                </Button>
              </div>
            </Form>
          </Card>
        </div>
      </div>
    </div>
  );
}
