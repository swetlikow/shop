import { Component, OnInit } from '@angular/core';
import { IProduct } from '../models/product';
import { CartListService } from './cart-list.service';

@Component({
    selector: 'app-cart-list',
    templateUrl: './cart-list.component.html',
    styleUrls: ['./cart-list.component.css']
})
export class CartListComponent implements OnInit {

    boughtProducts: IProduct[];
    constructor(private cartListService: CartListService) { }

    ngOnInit(): void {
        this.boughtProducts = this.cartListService.getBoughtProducts();
    }

}
