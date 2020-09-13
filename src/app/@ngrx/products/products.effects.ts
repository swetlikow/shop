import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType, OnInitEffects } from '@ngrx/effects';
import { Action } from '@ngrx/store';
import { Observable } from 'rxjs';
import { switchMap } from 'rxjs/operators';
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
