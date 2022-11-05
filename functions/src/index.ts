// index.ts
import { handler } from "./hello-world";
import { getContext } from "./__tests__/utils/contexts";
import { getApigwEvent } from "./__tests__/utils/events";

async function main() {
  const apigwEvent = getApigwEvent();
  const context = getContext();
  const { statusCode, body } = await handler(apigwEvent, context);
  console.log(statusCode);
  console.log(JSON.parse(body));
}

main().catch(console.error);
