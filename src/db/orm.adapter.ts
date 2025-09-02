import { CreateUser } from "../types"
import { DbConnection } from "./connection"
import { DatabaseInterface } from "./db.interface"
import { schema } from "./schema"

export const DbAdapter = (db: DbConnection): DatabaseInterface => ({
  createUser: async (payload: CreateUser) => {
    const { email, name, password } = payload
    try {
      await db
        .insert(schema.users)
        .values({
          email,
          name,
          password
        })
        .returning()
    } catch (error) {
      console.log(error)
    }
  }
})
