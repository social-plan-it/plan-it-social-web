import { OpenAI } from 'openai';

export async function generateTextContent(prompt: string, imageUrl?: string) {
  if (process.env.MOCK_OPENAI === 'true') {
    console.log(
      'OpenAI is disabled. Returning a mock response. This can be changed in .env file by setting MOCK_OPENAI to false',
    );
    return 'OpenAI is disabled. This is a mock response.';
  }
  if (!process.env.OPENAI_API_KEY) {
    throw new Error('OpenAI API key is not set. Set OPENAI_API_KEY in .env file.');
  }
  const openai = new OpenAI({
    apiKey: process.env.OPENAI_API_KEY,
  });
  const content: OpenAI.Chat.Completions.ChatCompletionContentPart[] = [{ type: 'text', text: prompt }];
  if (imageUrl) {
    content.push({
      type: 'image_url',
      image_url: {
        url: imageUrl,
        detail: 'auto',
      },
    });
  }
  const response = await openai.chat.completions.create({
    model: 'gpt-4-o',
    messages: [
      {
        role: 'user',
        content,
      },
    ],
  });
  if (!response.choices[0].message.content) {
    throw new Error('No response from OpenAI');
  }
  return response.choices[0].message.content;
}
