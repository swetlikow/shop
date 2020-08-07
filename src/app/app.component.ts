import { Component } from '@angular/core';
import { CartListService } from './components/carts/cart-list.service';
import { Product } from './components/products/product/product';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.css']
})
export class AppComponent {
    title = 'shop';
    showBoughtProducts: boolean;

    constructor(private cartListService: CartListService) { }

    onBuyProduct(product: Product): void {
        this.showBoughtProducts = true;
        this.cartListService.addBoughtProduct(product);

    }
}
