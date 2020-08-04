import { Injectable } from '@angular/core';
import { IProduct } from '../../products/product/product';

@Injectable({
    providedIn: 'root'
})
export class CartListService {

    constructor() { }

    getBoughtProducts(): IProduct[] {
        const products: IProduct[] = [
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
}
