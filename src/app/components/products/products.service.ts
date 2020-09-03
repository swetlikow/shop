import { Injectable } from '@angular/core';
import { ProductsDatabaseService } from '../shared/services/products-database.service';
import { Product } from './product/product';

@Injectable({
    providedIn: 'root'
})
export class ProductsService {

    constructor(private productsDatabaseService: ProductsDatabaseService) { }

    getProducts(): Promise<Product[]> {
        return this.productsDatabaseService.getProducts();
    }

    removeProduct(product: Product): void {
        this.productsDatabaseService.getProducts()
            .then((response) => {
                const prod = response.find(x => x.id === product.id);
                prod.count = prod.count + 1;
                prod.bought = false;

                this.productsDatabaseService.updateProduct(prod);
            })
            .catch(err => console.log(err));
    }

    addProduct(product: Product): void {
        this.productsDatabaseService.getProducts()
            .then((response) => {
                const prod = response.find(x => x.id === product.id);
                prod.count = prod.count - 1;
                if (prod.count === 0) {
                    prod.bought = true;
                }

                this.productsDatabaseService.updateProduct(prod);
            })
            .catch(err => console.log(err));
    }
}
