import { AfterViewInit, Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { CartListService } from './components/carts/cart-list.service';
import { Product } from './components/products/product/product';
import { ProductsService } from './components/products/products.service';
import { User } from './components/shared/models/user';
import { ConfigOptionsService } from './components/shared/services/config-options.service';
import { LocalStorageService } from './components/shared/services/local-storage.service';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.css'],
    providers: [{ provide: ConfigOptionsService, useClass: LocalStorageService }]
})
export class AppComponent implements OnInit, AfterViewInit {
    @ViewChild('appTitle') appTitle: ElementRef<HTMLHeadingElement>;
    showBoughtProducts: boolean;
    boughtProducts: Product[] = [];
    products: Product[] = [];
    boughtProductsQuantity: number;
    boughtProductsSum: number;
    currentUser: User;

    constructor(
        private cartListService: CartListService,
        private productsService: ProductsService,
        private configOptionsService: ConfigOptionsService) { }

    ngOnInit(): void {
        this.products = this.productsService.getProducts();
        this.configOptionsService.setCurrentUser(new User(1, 'svietlikov', 'andrii_svietliko@epam.com'));

        this.currentUser = this.configOptionsService.getCurrentUser();
    }

    ngAfterViewInit(): void {
        this.appTitle.nativeElement.innerText = 'SHOP';

    }

    onBuyProduct(product: Product): void {
        this.showBoughtProducts = true;
        this.cartListService.addBoughtProduct(product);
        this.boughtProducts = this.cartListService.getBoughtProduct();
        this.boughtProductsQuantity = this.cartListService.getBoughtProductsQuantity();
        this.boughtProductsSum = this.cartListService.getBoughtProductsSum();
    }

    onRemoveProduct(product: Product): void {
        this.cartListService.removeBoughtProduct(product);
        this.boughtProducts = this.cartListService.getBoughtProduct();
        this.boughtProductsQuantity = this.cartListService.getBoughtProductsQuantity();
        this.boughtProductsSum = this.cartListService.getBoughtProductsSum();

        this.productsService.removeProducts(product);
        this.products = this.productsService.getProducts();

        if (this.boughtProducts.length === 0) {
            this.showBoughtProducts = false;
        }
    }
}
