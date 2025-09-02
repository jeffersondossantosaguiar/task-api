import { DatabaseInterface } from "../db/db.interface"
import { CreateUser } from "../types"

export const UserRepository = (db: DatabaseInterface) => ({
  create: async (payload: CreateUser) => {
    await db.createUser(payload)
  }
})
