import { Component, OnInit } from '@angular/core';
import { CartListService } from './cart-list/cart-list.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'shop';
  showBoughtProducts: boolean;

  constructor(private cartListService: CartListService) { }

  ngOnInit(): void {
    // эту маленькую бизнес логику спрятать в самом сервисе и предоставить свойство сервиса для чтения
    this.showBoughtProducts = this.cartListService.getBoughtProducts().length !== 0;
  }
}
