import { Component, OnInit } from '@angular/core';
import { AppInfo } from '../shared/models/appInfo';
import { constantsInstance, ConstantsService } from '../shared/services/constants.service';

@Component({
    selector: 'app-about',
    templateUrl: './about.component.html',
    styleUrls: ['./about.component.css'],
    providers: [{ provide: ConstantsService, useValue: constantsInstance }]
})
export class AboutComponent implements OnInit {
    about: AppInfo;

    constructor(private constInstance: ConstantsService) { }

    ngOnInit(): void {
        this.about = this.constInstance.getTaskInfo();
    }

}
