import { DatabaseInterface } from "../db/db.interface"
import { UserRepository } from "../repositories/user.repository"
import { CreateUser } from "../types"

export const UserService = (db: DatabaseInterface) => {
  const repo = UserRepository(db)

  return {
    createUser: async (payload: CreateUser) => {
      return repo.create(payload)
    }
  }
}
