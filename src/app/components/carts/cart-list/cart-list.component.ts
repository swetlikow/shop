import { Component, EventEmitter, Output } from '@angular/core';
import { Product } from '../../products/product/product';

@Component({
    selector: 'app-cart-list',
    templateUrl: './cart-list.component.html',
    styleUrls: ['./cart-list.component.css']
})
export class CartListComponent {

    boughtProducts: Product[];

    @Output()
    removeProduct: EventEmitter<Product> = new EventEmitter();

    constructor() { }

    onRemoveProduct(product: Product): void {
        // remove product
        this.removeProduct.emit(product);
    }

}
