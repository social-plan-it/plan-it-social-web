import type { ActionFunctionArgs } from '@remix-run/node';
import { redirect } from '@remix-run/node';
import { Form, useParams, useSubmit } from '@remix-run/react';

import { db } from '~/modules/database/db.server';

import { Card } from '~/components/ui/containers';
import { Input, TextArea } from '~/components/ui/forms';
import { Button } from '~/components/ui/button';

import { H1 } from '~/components/ui/headers';
import React from 'react';

/*
  name        String
  date        DateTime
  description String   @db.Text
  imgUrl      String?
  imgAlt      String?
  location    String?
  group       Group    @relation(fields: [groupId], references: [id])
  groupId     String
  users       User[]
  */

export async function action({ request }: ActionFunctionArgs) {
  const form = await request.formData();
  const name = form.get('name') as string | null;
  const date = form.get('date') as Date | null;
  const description = form.get('description') as string | null;
  const groupId = form.get('groupId') as string | null;

  console.log(groupId, 'groupId', name, 'name', date, 'date', description, 'description');

  if (!groupId) {
    throw Error('Group not found.');
  }

  const eventData = {
    name: name || '',
    date: date ? new Date(date) : new Date(), // TODO: make DB supports null too?
    description: description || '',
    groupId: groupId,
  };

  await db.event.create({ data: eventData });

  return redirect(`/groups/${groupId}`);
}

export default function GroupNew() {
  const { groupId } = useParams();

  const submit = useSubmit();

  function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    let rawform = event.currentTarget;
    let formData = new FormData(rawform);
    formData.append('groupId', groupId ?? '');
    submit(formData, {
      method: rawform.getAttribute('method') ?? rawform.method,
      action: rawform.getAttribute('action') ?? rawform.action,
    });
  }

  return (
    <div className="grow py-20 lg:py-40 bg-secondary w-full flex flex-col items-center justify-center">
      <div className="flex w-full items-center justify-center flex-col">
        <div className="max-w-[900px] w-full flex flex-col gap-3">
          <H1>Create New Event</H1>

          <Card>
            <Form method="post" onSubmit={handleSubmit}>
              <Input label="Event Name" name="name" />
              <Input label="Date and Time" type="datetime-local" name="date" />
              <TextArea label="Description" name="description" />
              <Input label="Location" name="location" />

              <div>Attach Image</div>
              <div className="flex pt-4 w-full">
                <Button type="submit" variant="warm" buttonStyle="fullyRounded">
                  Create New Event
                </Button>
              </div>
            </Form>
          </Card>
        </div>
      </div>
    </div>
  );
}
