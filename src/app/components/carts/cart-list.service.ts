import { Injectable } from '@angular/core';
import { Product } from '../products/product/product';

@Injectable({
    providedIn: 'root'
})
export class CartListService {

    boughtProducts: Product[] = [];
    constructor() { }

    addBoughtProduct(product: Product): void {
        this.boughtProducts.push(product);
        console.log(this.boughtProducts);
    }

    getBoughtProduct(): Product[] {
        return this.boughtProducts;
    }
}
