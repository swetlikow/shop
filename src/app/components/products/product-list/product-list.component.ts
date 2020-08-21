import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Product } from '../product/product';

@Component({
    selector: 'app-product-list',
    templateUrl: './product-list.component.html',
    styleUrls: ['./product-list.component.css']
})
export class ProductListComponent {

    @Input() products: Product[];
    @Output() buyProduct: EventEmitter<Product> = new EventEmitter();

    constructor() { }

    onBuyProduct(product: Product): void {
        product.count = product.count - 1;
        if (product.count === 0) {
            product.bought = true;
        }
        this.buyProduct.emit(product);
    }

}
