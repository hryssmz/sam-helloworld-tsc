// __tests__/utils/contexts.ts
import type { Context } from "aws-lambda";

export function getContext() {
  const context: Context = {
    awsRequestId: "AWS_REQUEST_ID",
    callbackWaitsForEmptyEventLoop: true,
    functionName: "FUNCTION_NAME",
    functionVersion: "FUNCTION_VERSION",
    invokedFunctionArn: "INVOKED_FUNCTION_ARN",
    logGroupName: "LOG_GROUP_NAME",
    logStreamName: "LOG_STREAM_NAME",
    memoryLimitInMB: "MEMORY_LIMIT_IN_MB",
    getRemainingTimeInMillis() {
      return 3000;
    },
    done() {
      //
    },
    fail() {
      //
    },
    succeed() {
      //
    },
  };
  return context;
}
