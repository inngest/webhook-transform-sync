import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

async function main() {
  const files = fs.readdirSync(path.join(__dirname, './webhooks'));
  const webhookFiles = files.filter((file) => !file.includes('test'));

  for (const webhookFile of webhookFiles) {
    const [, name, webhookId] = webhookFile.match(/(\w+)\.([\w-]+)/);
    const fileContents = fs.readFileSync(
      path.join(__dirname, './webhooks/', webhookFile)
    );
    const response = await fetch(
      `https://api.inngest.com/v1/webhooks/${webhookId}`,
      {
        method: 'PUT',
        headers: {
          accept: 'application/json',
          'content-type': 'application/json',
          authorization: `Bearer ${process.env.INNGEST_SIGNING_KEY}`,
        },
        body: JSON.stringify({
          name,
          transform: fileContents.toString(),
        }),
      }
    );
    if (response.status !== 200) {
      const body = await response.json();
      throw new Error(body.error || 'unknown error');
    }
  }
  console.log(`Updated ${webhookFiles.length} webhook transforms`);
}

main();
