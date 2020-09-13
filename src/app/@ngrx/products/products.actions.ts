import { createAction, props } from '@ngrx/store';
import { Product } from 'src/app/components/products/product/product';

export const getProducts = createAction(
  '[Product List Page (App)] GET_PRODUCTS'
);

export const getProduct = createAction(
  '[Product List Page (App)] GET_PRODUCT',
  props<{ productID: number }>()
);

export const buyProduct = createAction(
  '[Product List Page (App)] BUY_PRODUCT',
  props<{ product: Product }>()
);

export const deleteProduct = createAction(
  '[Cart List Page (App)] DELETE_PRODUCT',
  props<{ product: Product }>()
);

export const getProductsSuccess = createAction(
  '[Get Products Effect] GET_PRODUCTS_SUCCESS',
  props<{ products: Product[] }>()
);

export const getProductsError = createAction(
  '[Get Products Effect] GET_PRODUCTS_ERROR',
  props<{ error: Error | string }>()
);
