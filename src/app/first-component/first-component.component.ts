import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-first-component',
  templateUrl: './first-component.component.html',
  styleUrls: ['./first-component.component.css']
})
export class FirstComponentComponent implements OnInit {
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

enum CategoryEnum {
  junior,
  middle,
  senior
}


