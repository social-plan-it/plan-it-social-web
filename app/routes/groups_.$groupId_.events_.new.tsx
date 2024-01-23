import type { ActionFunction } from '@remix-run/node';
import { redirect } from '@remix-run/node';
import { Form } from '@remix-run/react';

import { db } from '~/modules/database/db.server';

import { Card } from '~/components/ui/containers';
import { Button, Input, TextArea } from '~/components/ui/forms';
import { H1, H2 } from '~/components/ui/headers';

export let action: ActionFunction = async ({ request, params }) => {
  const form = await request.formData();
  const name = form.get('eventName');
  const description = form.get('description');
  const location = form.get('location');
  const dateStr = form.get('date');

  if (!params.groupId) return redirect('/groups');
  if (
    typeof name !== 'string' ||
    typeof description !== 'string' ||
    typeof location !== 'string' ||
    typeof dateStr !== 'string'
  ) {
    return { formError: `Form not submitted correctly.` };
  }
  const date = new Date(dateStr);

  const ret = await db.event.create({
    data: { name, description, location, date, groupId: params.groupId ?? '' },
  });

  return redirect(`/events/${ret.id}`);
};

export default function GroupNew() {
  return (
    <div className="grow py-20 lg:py-40 bg-secondary w-full flex flex-col items-center justify-center">
      <div className="flex w-full items-center justify-center flex-col">
        <div className="max-w-[900px] w-full flex flex-col gap-3">
          <H1>Create New Event</H1>
          <Card>
            <Form method="post">
              <div className="flex pt-4 w-full">
                <div className="w-1/2">
                  <div className="w-1/2 pb-4">
                    <Input label="Event Name:" name="eventName" required />
                  </div>
                  <div className="w-1/2 pb-4">
                    <Input label="Location:" name="location" required />
                  </div>
                  <div className="w-1/2 pb-4">
                    <Input label="Date:" name="date" type="datetime-local" required />
                  </div>
                </div>
              </div>
              <div className="flex-col pb-4">
                <TextArea
                  label="Description:"
                  name="description"
                  rows={5}
                  placeholder="what we are doing ? anything to be aware of ? special instructions."
                  required
                />
              </div>
              <div className="flex-row justify-end">
                <Button>Create New Event</Button>
              </div>
            </Form>
          </Card>
        </div>
      </div>
    </div>
  );
}
