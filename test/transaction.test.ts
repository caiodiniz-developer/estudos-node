import { it, beforeAll, afterAll, describe } from "vitest";
import request from "supertest";
import { app } from "../src/app.js";

//todo teste deve se excluir d qualquer contexto, jamais escrever um teste que depende de outro teste

describe("Transactions routes", () => {
  beforeAll(async () => {
    await app.ready();
  });

  afterAll(async () => {
    await app.close();
  });

  it("User can create new transaction", async () => {
    await request(app.server)
      .post("/transactions")
      .send({
        title: "New transaction",
        amount: 5000,
        type: "credit",
      })
      .expect(201);
  });

  it("should be able to list all transactions", async () => {
    const createTransactionResponse = await request(app.server)
      .post("/transactions")
      .send({
        title: "New transaction",
        amount: 5000,
        type: "credit",
      });

    const cookie = createTransactionResponse.get("Set-Cookie");
  });
});
