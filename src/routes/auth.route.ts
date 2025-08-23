import { createInsertSchema } from "drizzle-typebox"
import Elysia, { t } from "elysia"
import { Container } from "../container"
import { AuthController } from "../controllers/auth.controller"
import { schema } from "../db/schema"

const user = createInsertSchema(schema.users, {
  email: t.String({ format: "email" })
})

export const authRoutes = ({ db }: Container) =>
  new Elysia({ prefix: "/auth" }).post(
    "/register",
    AuthController({ db }).register,
    {
      body: t.Omit(user, ["id", "createdAt"]),
      response: t.Object({ user: t.Omit(user, ["password"]) })
    }
  )
