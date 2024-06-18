import type { ActionFunctionArgs } from '@remix-run/node';
import { db } from '~/modules/database/db.server';
import { generateTextContent } from '~/modules/gpt/generate';

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

  try {
    const altText = await generateTextContent(
      'Create an alt text (image caption) for the provided image please.',
      groupImageUrl,
    );
    await db.group.update({ where: { id: groupId }, data: { imgAlt: altText } });
    return new Response('Image caption generated', { status: 200 });
  } catch (error) {
    console.error(error);
    return new Response('Error generating image caption', { status: 500 });
  }
}
