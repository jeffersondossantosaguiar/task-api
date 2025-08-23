import { Database } from "../db/connection"
import { schema } from "../db/schema"

export const UserRepository = (db: Database) => ({
  register: async ({
    name,
    email,
    password
  }: {
    name: string
    email: string
    password: string
  }) => {
    const [user] = await db
      .insert(schema.users)
      .values({
        email,
        name,
        password
      })
      .returning()

    return user
  }
})
