// functions/hello-world/index.ts
import { getGlobalIp } from "../../layers/utils";
import type {
  APIGatewayProxyEvent,
  APIGatewayProxyResult,
  Context,
} from "aws-lambda";

export const handler = async (
  event: APIGatewayProxyEvent,
  context: Context
): Promise<APIGatewayProxyResult> => {
  console.log("Begin execute handler");
  const body = {
    path: event.path,
    logStreamName: context.logStreamName,
    message: "Hello World",
    globalIp: await getGlobalIp(),
  };
  const headers = {
    "X-Custom-Header": "My custom value",
  };
  const response: APIGatewayProxyResult = {
    statusCode: 200,
    headers,
    body: JSON.stringify(body),
  };
  return response;
};
