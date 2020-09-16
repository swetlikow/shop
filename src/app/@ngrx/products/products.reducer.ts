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
  on(ProductsActions.buyProductSuccess, (state, { product }) => {
    console.log('BUY_PRODUCT_SUCCESS action being handled!');
    const data = [...state.data];

    const index = data.findIndex((t) => t.id === product.id);

    data[index] = { ...product };

    return {
      ...state,
      data,
    };
  }),
  on(ProductsActions.buyProductError, (state, { error }) => {
    console.log('BUY_PRODUCT_ERROR action being handled!');
    return {
      ...state,
      error,
    };
  }),
  on(ProductsActions.deleteProduct, (state) => {
    console.log('DELETE_PRODUCT action being handled!');
    return { ...state };
  }),
  on(ProductsActions.deleteProductSuccess, (state, { product }) => {
    console.log('DELETE_PRODUCT_SUCCESS action being handled!');
    const data = [...state.data];

    const index = data.findIndex((t) => t.id === product.id);

    data[index] = { ...product };

    return {
      ...state,
      data,
    };
  }),
  on(ProductsActions.deleteProductError, (state, { error }) => {
    console.log('DELETE_PRODUCT_ERROR action being handled!');
    return {
      ...state,
      error,
    };
  })
);

export function productsReducer(
  state: ProductsState | undefined,
  action: Action
): any {
  return reducer(state, action);
}
