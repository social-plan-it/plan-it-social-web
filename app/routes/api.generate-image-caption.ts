import type { ActionFunctionArgs } from '@remix-run/node';
import OpenAI from 'openai';
import { db } from '~/modules/database/db.server';

/**
 * Open endpoint to generate an image caption for a group image.
 * POST /api/generate-image-caption { groupId: string }
 */
export async function action({ request }: ActionFunctionArgs) {
  const body = await request.json();

  const groupId = body.groupId;
  const group = await db.group.findUnique({ where: { id: groupId } });
  if (!group) {
    return new Response('Group not found', { status: 404 });
  }

  const groupImageUrl = group.imgUrl;
  if (!groupImageUrl) {
    return new Response('Group image not found', { status: 404 });
  }

  const openai = new OpenAI({
    apiKey: process.env.OPENAI_API_KEY,
  });
  try {
    const response = await openai.chat.completions.create({
      model: 'gpt-4-o',
      messages: [
        {
          role: 'user',
          content: [
            { type: 'text', text: 'Create an alt text (image caption) for the provided image please.' },
            {
              type: 'image_url',
              image_url: {
                url: groupImageUrl,
                detail: 'auto',
              },
            },
          ],
        },
      ],
    });
    if (!response.choices[0].message.content) {
      return new Response('No response from OpenAI', { status: 500 });
    }
    const altText = response.choices[0].message.content;
    await db.group.update({ where: { id: groupId }, data: { imgAlt: altText } });
    return new Response('Image caption generated', { status: 200 });
  } catch (error) {
    console.error(error);
    return new Response('Error generating image caption', { status: 500 });
  }
}
