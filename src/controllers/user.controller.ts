import { DatabaseInterface } from "../db/db.interface"
import { UserService } from "../services/user.service"

export const UserController = (db: DatabaseInterface) => {
  const service = UserService(db)

  return {
    create: async ({ body }: any) => {
      await service.createUser(body)
    }
  }
}
