import { MailTrapMailProvider } from "../../providers/implementations/MailTrapMailProvider";
import { PostgresUsersRepositories } from "../../repositories/implementations/postgresUsersRepositories";
import { CreateUserUseCase } from "./CreateUserUseCase";
import { CreateUserController } from "./CreateUserController";

const mailTrapMailProvider = new  MailTrapMailProvider()
const postrgresUsersRepository = new PostgresUsersRepositories()

const createUserUseCase = new CreateUserUseCase(
  postrgresUsersRepository,
  mailTrapMailProvider
)

const createUserController = new CreateUserController(
  createUserUseCase
)

export { createUserUseCase, createUserController }