import { IProduct } from 'src/app/components/products/product/iproduct';

export interface ProductsState {
  data: ReadonlyArray<IProduct>;
  readonly loaded: boolean;
  readonly error: Error | string;
}

export const initialProductsState: ProductsState = {
  data: [],
  loaded: false,
  error: null,
};
