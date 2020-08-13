import { Injectable } from '@angular/core';
import { Product } from '../products/product/product';

@Injectable({
    providedIn: 'root'
})
export class CartListService {
    boughtProducts: Product[] = [];
    totalProductsQuantity: number;
    totalProductsSum: number;

    constructor() { }

    addBoughtProduct(product: Product): void {
        const prod = this.boughtProducts.find(x => x.id === product.id);
        if (prod) {
            prod.count = prod.count + 1;
        }
        else {
            const boughtProduct = new Product(product.id, product.name, 1, product.price, product.bought);
            this.boughtProducts.push(boughtProduct);
        }
        this.updateBoughtProductSumAndCount();
    }

    getBoughtProduct(): Product[] {
        return this.boughtProducts;
    }

    removeBoughtProduct(product: Product): void {
        const prod = this.boughtProducts.find(x => x.id === product.id);
        if (prod.count > 1) {
            prod.count = prod.count - 1;
        }
        else {
            const index = this.boughtProducts.findIndex(x => x.id === product.id);
            this.boughtProducts.splice(index, 1);
        }
        this.updateBoughtProductSumAndCount();
    }

    updateBoughtProductSumAndCount(): void {
        this.totalProductsQuantity = 0;
        this.boughtProducts.forEach(x => this.totalProductsQuantity += x.count);

        this.totalProductsSum = 0;
        this.boughtProducts.forEach(x => this.totalProductsSum += (x.price * x.count));
    }

    getBoughtProductsQuantity(): number {
        return this.totalProductsQuantity;
    }

    getBoughtProductsSum(): number {
        return this.totalProductsSum;
    }
}
