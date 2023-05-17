import { test } from "vitest";
import { DuitkuClient } from "../src";

test("getPaymentMethods", async () => {
  const client = new DuitkuClient(
    process.env.API_KEY || "",
    process.env.MERCHANT_CODE || "",
    { sandbox: true },
  );
  const paymentMethods = await client.getPaymentMethods(100000);
  expect(paymentMethods).toBeDefined();
});
