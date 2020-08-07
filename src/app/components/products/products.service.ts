import { Injectable } from '@angular/core';
import { Product } from './product/product';

@Injectable({
    providedIn: 'root'
})
export class ProductsService {
    products: Product[] = [];

    constructor() {
        this.products = [
            new Product(1, 'Milk', 2),
            new Product(2, 'Potato', 3),
            new Product(3, 'Banana', 1),
        ];
    }

    getProducts(): Product[] {
        return this.products;
    }

    removeProducts(product: Product) {
        const prod = this.products.find(x => x.id === product.id);
        prod.count = prod.count + 1;
        prod.bought = false;
    }
}
