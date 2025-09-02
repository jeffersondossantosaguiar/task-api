import { createInsertSchema } from "drizzle-typebox"
import Elysia, { t } from "elysia"
import { UserController } from "../controllers/user.controller"
import { DatabaseInterface } from "../db/db.interface"
import { schema } from "../db/schema"

const user = createInsertSchema(schema.users, {
  email: t.String({ format: "email" })
})

export const userRoutes = (db: DatabaseInterface) =>
  new Elysia({ prefix: "/users" }).post("", UserController(db).create, {
    body: t.Omit(user, ["id", "createdAt"])
  })
