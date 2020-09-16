import { createAction, props } from '@ngrx/store';
import { IProduct } from 'src/app/components/products/product/iproduct';

export const getProducts = createAction(
  '[Product List Page (App)] GET_PRODUCTS'
);

export const getProduct = createAction(
  '[Product List Page (App)] GET_PRODUCT',
  props<{ productID: number }>()
);

export const getProductsSuccess = createAction(
  '[Get Products Effect] GET_PRODUCTS_SUCCESS',
  props<{ products: ReadonlyArray<IProduct> }>()
);

export const getProductsError = createAction(
  '[Get Products Effect] GET_PRODUCTS_ERROR',
  props<{ error: Error | string }>()
);

export const buyProduct = createAction(
  '[Product List Page (App)] BUY_PRODUCT',
  props<{ product: IProduct }>()
);

export const buyProductSuccess = createAction(
  '[Buy Product Effect] BUY_PRODUCT_SUCCESS',
  props<{ product: IProduct }>()
);

export const buyProductError = createAction(
  '[Buy Product Effect] BUY_PRODUCT_ERROR',
  props<{ error: Error | string }>()
);

export const deleteProduct = createAction(
  '[Cart List Page (App)] DELETE_PRODUCT',
  props<{ product: IProduct }>()
);

export const deleteProductSuccess = createAction(
  '[Delete Product Effect] DELETE_PRODUCT_SUCCESS',
  props<{ product: IProduct }>()
);

export const deleteProductError = createAction(
  '[Delete Product Effect] DELETE_PRODUCT_ERROR',
  props<{ error: Error | string }>()
);
