import jwt from "@elysiajs/jwt"
import swagger from "@elysiajs/swagger"
import { Elysia } from "elysia"
import pkg from "../package.json"
import { container } from "./container"
import { userRoutes } from "./routes/user.route"

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
  .use(
    jwt({
      name: "jwt",
      secret: Bun.env.JWT_SECRET || "default_secret"
    })
  )
  .use(userRoutes(container.database))
  .get("/health", () => ({
    status: "ok"
  }))
  .listen(3000)

console.log(
  `🦊 Elysia is running at ${app.server?.hostname}:${app.server?.port}`
)
