import { Component, OnInit } from '@angular/core';
import { IProduct } from '../models/product';
import { ProductsService } from '../product/products.service';

@Component({
    selector: 'app-product-list',
    templateUrl: './product-list.component.html',
    styleUrls: ['./product-list.component.css']
})
export class ProductListComponent implements OnInit {

    products: IProduct[];
    constructor(private productsService: ProductsService) { }

    ngOnInit(): void {
        this.products = this.productsService.getProducts();
    }

}
