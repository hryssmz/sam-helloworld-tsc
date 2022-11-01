// index.ts
import { handler } from "./functions/hello-world";
import { getContext } from "./tests/utils/contexts";
import { getApigwEvent } from "./tests/utils/events";

async function main() {
  const apigwEvent = getApigwEvent();
  const context = getContext();
  const { statusCode, body } = await handler(apigwEvent, context);
  console.log(statusCode);
  console.log(JSON.parse(body));
}

main().catch(console.error);
