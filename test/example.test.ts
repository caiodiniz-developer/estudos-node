import { expect, test } from "vitest";

test("o usuario consegue criar uma nova transacao", () => {
  //fazer chamada http para criar uma nova transacao
  const responseStatusCode = 201;

  expect(responseStatusCode).toEqual(201);
});
