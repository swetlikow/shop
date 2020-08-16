import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Product } from '../../products/product/product';

@Component({
    selector: 'app-cart-list',
    templateUrl: './cart-list.component.html',
    styleUrls: ['./cart-list.component.css']
})
export class CartListComponent {

    @Input() boughtProducts: Product[];
    @Input() boughtProductsQuantity: number;
    @Input() boughtProductsSum: number;
    order = false;
    @Output() removeProduct: EventEmitter<Product> = new EventEmitter();
    @Output() toggleProductsOrder: EventEmitter<boolean> = new EventEmitter();

    constructor() { }

    onRemoveProduct(product: Product): void {
        this.removeProduct.emit(product);
    }

    onToggleProductsOrder(): void {
        this.order = !this.order;
        this.toggleProductsOrder.emit(this.order);
    }
}
