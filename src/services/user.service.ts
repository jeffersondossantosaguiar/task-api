import { DatabaseInterface } from "../db/db.interface"
import { UserRepository } from "../repositories/user.repository"
import { CreateUser } from "../types"

export const UserService = (db: DatabaseInterface) => {
  const repo = UserRepository(db)

  return {
    registerUser: async (payload: CreateUser) => {
      return repo.register(payload)
    }
  }
}
