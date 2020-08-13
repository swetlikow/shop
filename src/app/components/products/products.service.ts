import { Injectable } from '@angular/core';
import { Product } from './product/product';

@Injectable({
    providedIn: 'root'
})
export class ProductsService {
    products: Product[] = [];

    constructor() {
        this.products = [
            new Product(1, 'Milk', 2, 5),
            new Product(2, 'Potato', 3, 3),
            new Product(3, 'Banana', 1, 2),
        ];
    }

    getProducts(): Product[] {
        return this.products;
    }

    removeProducts(product: Product): void {
        const prod = this.products.find(x => x.id === product.id);
        prod.count = prod.count + 1;
        prod.bought = false;
    }
}
