import swagger from "@elysiajs/swagger"
import { Elysia } from "elysia"
import pkg from "../package.json"
import { db } from "./db/connection"
import { schema } from "./db/schema"

const app = new Elysia()
  .use(
    swagger({
      documentation: {
        info: {
          title: "Task API",
          version: pkg.version
        }
      }
    })
  )
  .get("/test-db", async () => {
    const result = await db.select().from(schema.users)
    return result
  })
  .get("/health", () => ({
    status: "ok"
  }))
  .listen(3000)

console.log(
  `🦊 Elysia is running at ${app.server?.hostname}:${app.server?.port}`
)
