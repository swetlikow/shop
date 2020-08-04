import { Injectable } from '@angular/core';
import { IProduct } from './product';

@Injectable({
    providedIn: 'root'
})
export class ProductsService {

    constructor() { }

    getProducts(): IProduct[] {
        const products: IProduct[] = [
            {
                id: 1,
                name: 'Milk'
            },
            {
                id: 2,
                name: 'Potato'
            },
            {
                id: 3,
                name: 'Banana'
            }
        ];

        return products;
    }
}
