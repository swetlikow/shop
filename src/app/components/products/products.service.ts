import { Injectable } from '@angular/core';
import { Product } from './product/product';

@Injectable({
    providedIn: 'root'
})
export class ProductsService {

    constructor() { }

    getProducts(): Product[] {
        return [
            new Product(1, 'Milk', 2),
            new Product(2, 'Potato', 3),
            new Product(3, 'Banana', 1),
        ];
    }
}
