import { Component, Inject, OnInit } from '@angular/core';
import { AppInfo } from '../shared/models/appInfo';
import { User } from '../shared/models/user';
import { ConfigOptionsService } from '../shared/services/config-options.service';
import { constantsInstance, ConstantsService } from '../shared/services/constants.service';
import { GenerateToken, GeneratorFactory } from '../shared/services/generator.factory';
import { GeneratorService } from '../shared/services/generator.service';
import { LocalStorageService } from '../shared/services/local-storage.service';

@Component({
    selector: 'app-about',
    templateUrl: './about.component.html',
    styleUrls: ['./about.component.css'],
    providers: [
        { provide: ConstantsService, useValue: constantsInstance },
        { provide: ConfigOptionsService, useClass: LocalStorageService },
        { provide: GenerateToken, useFactory: GeneratorFactory(5), deps: [GeneratorService] }]
})
export class AboutComponent implements OnInit {
    about: AppInfo;
    currentUser: User;

    constructor(
        private constInstance: ConstantsService,
        private configOptionsService: ConfigOptionsService,
        @Inject(GenerateToken) private generateToken: string) { }

    ngOnInit(): void {
        this.configOptionsService.setCurrentUser(new User(1, 'svietlikov', 'andrii_svietliko@epam.com'));
        this.currentUser = this.configOptionsService.getCurrentUser();
        this.about = this.constInstance.getTaskInfo();
        console.log(this.generateToken);

    }

}
