import { Component } from '@angular/core';
import { Product } from '../../products/product/product';

@Component({
    selector: 'app-cart-list',
    templateUrl: './cart-list.component.html',
    styleUrls: ['./cart-list.component.css']
})
export class CartListComponent {

    boughtProducts: Product[];

    constructor() { }

}
