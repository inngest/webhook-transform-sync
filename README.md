# Webhook transform sync

This is a basic demo showing how to use the Inngest REST API's webhook endpoints for updating webhooks.

## Updating webhooks

Create a `.env` file with your `INNGEST_SIGNING_KEY`:

```
INNGEST_SIGNING_KEY=signkey-prod-fj484ertyuiop...
```

Run the script to sync all transforms in the `webhooks` directory:

```
node --env-file .env ./updateWebhooks.mjs
```

## Testing transforms

Transform tests can be written in any `*.test.mjs` file in the webhooks directory. Tests can be run using Node's native test runner, or you can use whatever you prefer.

```
node --test
```

## Requirements

Node 20.x or greater.
