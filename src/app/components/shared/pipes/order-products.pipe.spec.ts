import { Product } from '../../products/product/product';
import { OrderProductsPipe } from './order-products.pipe';

describe('OrderProductsPipe', () => {
  const pipe = new OrderProductsPipe();
  let products: Product[] = [
    new Product(1, 'First', 1, 10),
    new Product(2, 'Second', 2, 20),
    new Product(3, 'Third', 3, 30),
  ];

  it('transforms product list order asc', () => {
    expect(pipe.transform(products, true)[0].count).toBe(1);
  });

  it('transforms product list order desc', () => {
    expect(pipe.transform(products, false)[0].count).toBe(3);
  });
});
