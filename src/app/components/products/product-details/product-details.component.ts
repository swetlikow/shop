import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Product } from '../product/product';

@Component({
    selector: 'app-product-details',
    templateUrl: './product-details.component.html',
    styleUrls: ['./product-details.component.css']
})
export class ProductDetailsComponent {

    product: Product;

    constructor(private router: Router) {
        this.product = this.router.getCurrentNavigation().extras.state as Product;
    }

    onGoBack(): void {
        this.router.navigate(['products']);
    }
}
