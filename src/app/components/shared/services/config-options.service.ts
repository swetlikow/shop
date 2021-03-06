import { Injectable } from '@angular/core';
import { User } from '../models/user';
import { IUserService } from './iuser-service';

@Injectable({
    providedIn: 'root'
})
export class ConfigOptionsService implements IUserService {

    constructor() { }

    setCurrentUser(user: User): void {
        throw new Error('Method not implemented.');
    }
    getCurrentUser(): User {
        throw new Error('Method not implemented.');
    }
}
