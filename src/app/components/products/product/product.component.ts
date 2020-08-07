import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Product } from './product';

@Component({
    selector: 'app-product',
    templateUrl: './product.component.html',
    styleUrls: ['./product.component.css']
})
export class ProductComponent {

    @Input() product: Product;
    noProduct: boolean;

    @Output()
    buyProduct: EventEmitter<Product> = new EventEmitter();

    constructor() { }

    onBuyProduct(): void {
        if (!this.product.bought) {
            this.buyProduct.emit(this.product);
            this.noProduct = this.product.bought;
        }
    }

}
