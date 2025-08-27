import { DatabaseInterface } from "../db/db.interface"
import { UserService } from "../services/user.service"

export const AuthController = (db: DatabaseInterface) => {
  const service = UserService(db)

  return {
    register: async ({ body }: any) => {
      await service.registerUser(body)
    }
  }
}
