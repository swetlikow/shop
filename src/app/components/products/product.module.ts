import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CartModule } from '../carts/cart.module';
import { SharedModule } from '../shared/shared.module';
import { ProductDetailsComponent } from './product-details/product-details.component';
import { ProductListComponent } from './product-list/product-list.component';
import { ProductComponent } from './product/product.component';
import { ProductsComponent } from './products/products.component';

const routes: Routes = [
    {
        path: 'product/details/:id',
        component: ProductDetailsComponent,
    },
];

@NgModule({
    declarations: [ProductsComponent, ProductComponent, ProductListComponent, ProductDetailsComponent],
    imports: [RouterModule.forChild(routes), CommonModule, CartModule, SharedModule],
    exports: [ProductsComponent]
})

export class ProductModule { }

