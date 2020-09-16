import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType, OnInitEffects } from '@ngrx/effects';
import { Action } from '@ngrx/store';
import { Observable } from 'rxjs';
import { concatMap, pluck, switchMap } from 'rxjs/operators';
import { Product } from 'src/app/components/products/product/product';
import { ProductsService } from 'src/app/components/products/products.service';
import * as ProductsActions from './products.actions';

@Injectable()
export class ProductsEffects implements OnInitEffects {
  getProducts$: Observable<Action> = createEffect(() =>
    this.actions$.pipe(
      ofType(ProductsActions.getProducts),
      switchMap((action) =>
        this.productsService
          .getProductsFromDb()
          .toPromise()
          .then((products) => ProductsActions.getProductsSuccess({ products }))
          .catch((error) => ProductsActions.getProductsError({ error }))
      )
    )
  );

  buyProduct$: Observable<Action> = createEffect(() =>
    this.actions$.pipe(
      ofType(ProductsActions.buyProduct),
      pluck('product'),
      concatMap((product: Product) =>
        this.productsService
          .removeProductFromDb(product)
          .then((updatedProduct: Product) => {
            return ProductsActions.buyProductSuccess({
              product: updatedProduct,
            });
          })
          .catch((error) => ProductsActions.buyProductError({ error }))
      )
    )
  );

  deleteProduct$: Observable<Action> = createEffect(() =>
    this.actions$.pipe(
      ofType(ProductsActions.deleteProduct),
      pluck('product'),
      concatMap((product: Product) =>
        this.productsService
          .addProductToDb(product)
          .then((removedProduct: Product) => {
            return ProductsActions.deleteProductSuccess({
              product: removedProduct,
            });
          })
          .catch((error) => ProductsActions.deleteProductError({ error }))
      )
    )
  );

  constructor(
    private actions$: Actions,
    private productsService: ProductsService
  ) {
    console.log('[PRODUCTS EFFECTS]');
  }

  ngrxOnInitEffects(): Action {
    console.log('ngrxOnInitEffects is called');
    return { type: '[ProductsEffects]: Init' };
  }
}
