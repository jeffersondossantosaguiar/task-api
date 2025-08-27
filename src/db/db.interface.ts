import { CreateUser } from "../types"

export interface DatabaseInterface {
  createUser: (params: CreateUser) => Promise<void>
}
