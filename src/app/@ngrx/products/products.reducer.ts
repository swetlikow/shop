import { Action, createReducer, on } from '@ngrx/store';
import * as ProductsActions from './products.actions';
import { initialProductsState, ProductsState } from './products.state';

const reducer = createReducer(
  initialProductsState,
  on(ProductsActions.getProducts, (state) => {
    console.log('GET_PRODUCTS action being handled!');
    return { ...state };
  }),
  on(ProductsActions.getProductsSuccess, (state, { products }) => {
    console.log('GET_PRODUCTS_SUCCESS action being handled!');
    const data = [...products];
    return {
      ...state,
      data,
      loaded: true,
    };
  }),
  on(ProductsActions.getProductsError, (state, { error }) => {
    console.log('GET_PRODUCTS_ERROR action being handled!');
    return {
      ...state,
      loaded: false,
      error,
    };
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
