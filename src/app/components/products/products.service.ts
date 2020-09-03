import { Injectable } from '@angular/core';
import { ProductsDatabaseService } from '../shared/services/products-database.service';
import { Product } from './product/product';

@Injectable({
    providedIn: 'root'
})
export class ProductsService {

    constructor(private productsDatabaseService: ProductsDatabaseService) { }

    getProductsFromDb(): Promise<Product[]> {
        return this.productsDatabaseService.getProducts();
    }

    removeProductFromDb(product: Product): void {
        this.productsDatabaseService.updateProduct(product);
    }

    addProductToDb(product: Product): void {
        this.productsDatabaseService.getProducts()
            .then((response) => {
                const prod = response.find(x => x.id === product.id);
                prod.count = prod.count + 1;
                prod.bought = false;
                this.productsDatabaseService.updateProduct(prod);
            })
            .catch(err => console.log(err));
    }
}
