import { Action, createReducer, on } from '@ngrx/store';
import * as ProductsActions from './products.actions';
import { initialProductsState, ProductsState } from './products.state';

const reducer = createReducer(
  initialProductsState,
  on(ProductsActions.getProducts, (state) => {
    console.log('GET_PRODUCTS action being handled!');
    return { ...state };
  }),
  on(ProductsActions.getProduct, (state) => {
    console.log('GET_PRODUCT action being handled!');
    return { ...state };
  }),
  on(ProductsActions.buyProduct, (state) => {
    console.log('BUY_PRODUCT action being handled!');
    return { ...state };
  }),
  on(ProductsActions.deleteProduct, (state) => {
    console.log('DELETE_PRODUCT action being handled!');
    return { ...state };
  })
);

export function productsReducer(
  state: ProductsState | undefined,
  action: Action
): any {
  return reducer(state, action);
}
