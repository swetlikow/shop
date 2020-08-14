import { User } from '../models/user';

export interface IUserService {
    setCurrentUser(user: User): void;
    getCurrentUser(): User;
}
