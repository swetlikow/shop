import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CartModule } from './components/carts/cart.module';
import { OrderModule } from './components/orders/order.module';
import { ProductModule } from './components/products/product.module';
import { AboutComponent } from './components/about/about.component';

@NgModule({
    declarations: [
        AppComponent,
        AboutComponent
    ],
    imports: [
        BrowserModule,
        AppRoutingModule,

        ProductModule,
        OrderModule,
        CartModule
    ],
    bootstrap: [AppComponent]
})
export class AppModule { }
