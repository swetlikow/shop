import { Component, OnInit } from '@angular/core';
import { CartListService } from '../../carts/cart-list.service';
import { ProductsService } from '../../products/products.service';
import { Product } from '../product/product';

@Component({
    selector: 'app-products',
    templateUrl: './products.component.html',
    styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit {

    showBoughtProducts: boolean;
    boughtProducts: Product[] = [];
    products: Product[];
    boughtProductsQuantity: number;
    boughtProductsSum: number;
    order: boolean;

    constructor(
        private cartListService: CartListService,
        private productsService: ProductsService) { }

    ngOnInit(): void {
        this.productsService.getProducts()
            .then((response) => this.products = response);
    }

    onBuyProduct(product: Product): void {
        this.showBoughtProducts = true;
        this.cartListService.addBoughtProduct(product);
        this.boughtProducts = this.cartListService.getBoughtProduct();
        this.boughtProductsQuantity = this.cartListService.getBoughtProductsQuantity();
        this.boughtProductsSum = this.cartListService.getBoughtProductsSum();

        this.productsService.addProduct(product);
        this.productsService.getProducts()
            .then((response) => this.products = response);
    }

    onRemoveProduct(product: Product): void {
        this.cartListService.removeBoughtProduct(product);
        this.boughtProducts = this.cartListService.getBoughtProduct();
        this.boughtProductsQuantity = this.cartListService.getBoughtProductsQuantity();
        this.boughtProductsSum = this.cartListService.getBoughtProductsSum();

        this.productsService.removeProduct(product);
        this.productsService.getProducts()
            .then((response) => this.products = response);

        if (this.boughtProducts.length === 0) {
            this.showBoughtProducts = false;
        }
    }

    onToggleProductsOrder(value: boolean): void {
        this.order = value;
    }

}
