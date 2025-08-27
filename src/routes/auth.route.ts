import { createInsertSchema } from "drizzle-typebox"
import Elysia, { t } from "elysia"
import { AuthController } from "../controllers/auth.controller"
import { DatabaseInterface } from "../db/db.interface"
import { schema } from "../db/schema"

const user = createInsertSchema(schema.users, {
  email: t.String({ format: "email" })
})

export const authRoutes = (db: DatabaseInterface) =>
  new Elysia({ prefix: "/auth" }).post(
    "/register",
    AuthController(db).register,
    {
      body: t.Omit(user, ["id", "createdAt"])
    }
  )
