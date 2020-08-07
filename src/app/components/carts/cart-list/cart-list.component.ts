import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Product } from '../../products/product/product';

@Component({
    selector: 'app-cart-list',
    templateUrl: './cart-list.component.html',
    styleUrls: ['./cart-list.component.css']
})
export class CartListComponent {

    @Input() boughtProducts: Product[];
    @Output() removeProduct: EventEmitter<Product> = new EventEmitter();

    constructor() { }

    onRemoveProduct(product: Product): void {
        this.removeProduct.emit(product);
    }
}
