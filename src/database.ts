import setupKnex from "knex";
import type { Knex } from "knex";
import { env } from "./env/index.js";

if (!process.env.DATABASE_URL) {
  throw new Error("DATABASE_ULR env not found");
}

export const config: Knex.Config = {
  client: "sqlite3",
  connection: {
    filename: env.DATABASE_URL,
  },
  useNullAsDefault: true,
  migrations: {
    extension: "ts",
    directory: "./dataBase/migrations",
  },
};

export const knex = setupKnex(config);
