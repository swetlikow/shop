import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AboutComponent } from './components/about/about.component';
import { CartModule } from './components/carts/cart.module';
import { ProductModule } from './components/products/product.module';
import { SharedModule } from './components/shared/shared.module';


@NgModule({
    declarations: [
        AppComponent,
        AboutComponent
    ],
    imports: [
        BrowserModule,
        CartModule,
        ProductModule,
        SharedModule,
        AppRoutingModule
    ],
    bootstrap: [AppComponent]
})
export class AppModule { }
