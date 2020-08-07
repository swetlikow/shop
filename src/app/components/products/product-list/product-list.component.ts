import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { Product } from '../product/product';
import { ProductsService } from '../products.service';

@Component({
    selector: 'app-product-list',
    templateUrl: './product-list.component.html',
    styleUrls: ['./product-list.component.css']
})
export class ProductListComponent implements OnInit {

    products: Product[];

    @Output()
    buyProduct: EventEmitter<Product> = new EventEmitter();

    constructor(private productsService: ProductsService) { }

    ngOnInit(): void {
        this.products = this.productsService.getProducts();
    }

    onBuyProduct(product: Product): void {
        product.bought = true;
        this.buyProduct.emit(product);
    }

}
