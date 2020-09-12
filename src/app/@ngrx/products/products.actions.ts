import { createAction, props } from '@ngrx/store';
import { IProduct } from './../../components/products/product/iproduct';

export const getProducts = createAction(
  '[Product List Page (App)] GET_PRODUCTS'
);

export const getProduct = createAction(
  '[Product List Page (App)] GET_PRODUCT',
  props<{ productID: number }>()
);

export const buyProduct = createAction(
  '[Product List Page (App)] BUY_PRODUCT',
  props<{ product: IProduct }>()
);

export const deleteProduct = createAction(
  '[Cart List Page (App)] DELETE_PRODUCT',
  props<{ product: IProduct }>()
);
