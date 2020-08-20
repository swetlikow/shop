import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { CartModule } from '../carts/cart.module';
import { SharedModule } from '../shared/shared.module';
import { ProductListComponent } from './product-list/product-list.component';
import { ProductComponent } from './product/product.component';
import { ProductsComponent } from './products/products.component';

@NgModule({
    declarations: [ProductsComponent, ProductComponent, ProductListComponent],
    imports: [CommonModule, CartModule, SharedModule],
    exports: [ProductsComponent]
})

export class ProductModule { }

