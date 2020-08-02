import { Component, OnInit } from '@angular/core';
import { CategoryEnum } from '../shared/enums/categoryEnum';

@Component({
    selector: 'app-first',
    templateUrl: './first.component.html',
    styleUrls: ['./first.component.css']
})

export class FirstComponent implements OnInit {
    name: string;
    description: string;
    price: number;
    isAvailable: boolean;
    category: CategoryEnum;

    constructor() { }

    ngOnInit(): void {
        this.name = 'Angular-Lesson';
        this.description = 'EPAM course';
        this.price = 0;
        this.isAvailable = true;
        this.category = CategoryEnum.senior;
    }

}


