import { Product } from 'src/app/components/products/product/product';

export interface ProductsState {
  data: Product[];
  readonly loaded: boolean;
  readonly error: Error | string;
}

export const initialProductsState: ProductsState = {
  data: [],
  loaded: false,
  error: null,
};
