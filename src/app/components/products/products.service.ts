import { Injectable } from '@angular/core';
import { Product } from './product/product';

@Injectable({
    providedIn: 'root'
})
export class ProductsService {
    products: Product[];

    constructor() { }

    getProductsFromDb(): Promise<Product[]> {
        return new Promise<Product[]>((resolve, reject) => {
            try {
                const products = [
                    new Product(1, 'Milk', 2, 5),
                    new Product(2, 'Potato', 3, 3),
                    new Product(3, 'Banana', 1, 2),
                ];

                this.products = products;
                resolve(products);

            } catch (error) {
                reject(error);
            }
        });
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
