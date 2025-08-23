import { drizzle } from "drizzle-orm/node-postgres"
import { Pool } from "pg"
import { schema } from "./schema"

const pool = new Pool({
  connectionString: Bun.env.DATABASE_URL
})

export const db = drizzle(pool, { schema })
export type Database = typeof db
