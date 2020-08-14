import { Injectable } from '@angular/core';
import { User } from '../models/user';
import { IUserService } from './iuser-service';

@Injectable({
    providedIn: 'root'
})
export class LocalStorageService implements IUserService {

    currentUserKey = 'userKey';

    constructor() { }

    setCurrentUser(user: User): void {
        window.localStorage.setItem(this.currentUserKey, JSON.stringify(user));
    }

    getCurrentUser(): User {
        return JSON.parse(window.localStorage.getItem(this.currentUserKey));
    }
}
