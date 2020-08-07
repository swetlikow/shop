import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Product } from '../../products/product/product';

@Component({
    selector: 'app-cart',
    templateUrl: './cart.component.html',
    styleUrls: ['./cart.component.css']
})
export class CartComponent {

    @Input() product: Product;
    @Output() removeProduct: EventEmitter<Product> = new EventEmitter();

    constructor() { }

    onRemoveProduct(): void {
        this.removeProduct.emit(this.product);
    }

}
