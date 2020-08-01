import { User } from '../entities/User' // eslint-disable-line

export interface IUserRepository {
    findByEmail(email: string): Promise<User>,
    save(user: User): Promise<void>
}
