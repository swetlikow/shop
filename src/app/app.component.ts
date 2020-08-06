import { Component, OnInit } from '@angular/core';
import { CartListService } from './components/cart/cart-list/cart-list.service';

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
        this.showBoughtProducts = this.cartListService.showBoughtProducts();
    }
}
