import { Container } from "../container"
import { UserService } from "../services/user.service"

export const AuthController = ({ db }: Container) => {
  const service = UserService({ db })

  return {
    register: async ({ body }: any) => {
      const user = await service.registerUser(body)
      return { user }
    }
  }
}
