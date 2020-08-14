import { Injectable } from '@angular/core';
import { AppInfo } from '../models/appInfo';

@Injectable()
export class ConstantsService {
    getTaskInfo(): AppInfo {
        return new AppInfo('Shop', '1.0', 'http://localhost:4200');
    }
}

export const constantsInstance = new ConstantsService();


