import { defineConfig } from "drizzle-kit"

export default defineConfig({
  schema: "./src/db/schema.ts",
  out: "./drizzle",
  dialect: "postgresql",
  dbCredentials: {
    url: Bun.env.DATABASE_URL || "postgres://user:password@localhost:5432/mydb"
  }
})
