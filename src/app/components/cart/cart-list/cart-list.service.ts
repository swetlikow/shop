import { Injectable } from '@angular/core';
import { Product } from '../../products/product/product';

@Injectable({
    providedIn: 'root'
})
export class CartListService {

    constructor() { }

    getBoughtProducts(): Product[] {
        const products: Product[] = [
            {
                id: 1,
                name: 'Milk'
            },
            {
                id: 2,
                name: 'Potato'
            }
        ];

        return products;
    }

    showBoughtProducts(): boolean {
        return this.getBoughtProducts().length !== 0;
    }
}
