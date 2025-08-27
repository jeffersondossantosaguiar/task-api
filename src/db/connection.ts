import { drizzle } from "drizzle-orm/node-postgres"
import { Pool } from "pg"
import { schema } from "./schema"

const pool = new Pool({
  connectionString: Bun.env.DATABASE_URL
})

export const dbConnection = drizzle(pool, { schema })
export type DbConnection = typeof dbConnection
