import type { ActionFunctionArgs } from '@remix-run/node';
import { redirect } from '@remix-run/node';
import { Form } from '@remix-run/react';

import { db } from '~/modules/database/db.server';
import { Card } from '~/components/ui/containers';
import { Input, TextArea } from '~/components/ui/forms';
import { Button } from '~/components/ui/button';
import { H1 } from '~/components/ui/headers';

export async function action({ request, params }: ActionFunctionArgs) {
  const form = await request.formData();
  const name = form.get('name') as string | null;
  const date = form.get('date') as Date | null;
  const description = form.get('description') as string | null;

  const eventData = {
    name: name || '',
    date: date ? new Date(date) : new Date(), // TODO: make DB supports null too?
    description: description || '',
    groupId: params.groupId || '',
  };

  if (!eventData.groupId) {
    throw Error('Group ID not Provided.');
  }
  await db.event.create({ data: eventData });

  return redirect(`/groups/${eventData.groupId}`);
}

export default function Page() {
  return (
    <div className="grow py-20 lg:py-40 bg-secondary w-full flex flex-col items-center justify-center">
      <div className="flex w-full items-center justify-center flex-col">
        <div className="max-w-[900px] w-full flex flex-col gap-3">
          <H1>Create New Event</H1>

          <Card>
            <Form method="post">
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
