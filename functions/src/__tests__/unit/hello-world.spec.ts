// __tests__/unit/hello-world.spec.ts
import { handler } from "../../hello-world";
import { getContext } from "../utils/contexts";
import { getApigwEvent } from "../utils/events";

afterEach(() => {
  jest.restoreAllMocks();
});

test("hello-world handler", async () => {
  const spy = jest.spyOn(console, "log").mockImplementation();
  const apigwEvent = getApigwEvent();
  const context = getContext();
  const res = await handler(apigwEvent, context);
  const body = JSON.parse(res.body);

  expect(res.statusCode).toBe(200);
  expect(body.message).toBe("Hello World");
  expect(spy).toHaveBeenCalledWith("Begin execute handler");
});
