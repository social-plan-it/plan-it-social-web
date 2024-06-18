import { Client } from '@upstash/qstash';

export async function invokeBackgroundTask(url: string, body: unknown) {
  if (process.env.ENABLE_UPSTASH !== 'true') {
    return;
  }
  if (!process.env.QSTASH_TOKEN) {
    throw new Error('QSTASH_TOKEN is not defined. Please define it in the .env file.');
  }
  const qstashClient = new Client({
    token: process.env.QSTASH_TOKEN!,
  });

  return qstashClient.publishJSON({ url, body });
}
