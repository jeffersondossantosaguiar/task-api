import { Container } from "../container"
import { UserRepository } from "../repositories/user.repository"

export const UserService = ({ db }: Container) => {
  const repo = UserRepository(db)

  return {
    registerUser: async (args: {
      name: string
      email: string
      password: string
    }) => {
      return repo.register(args)
    }
  }
}
