import { IProduct } from './iproduct';

export class Product implements IProduct {
  constructor(
    public id: number = null,
    public name: string,
    public count: number,
    public price: number,
    public bought: boolean = false
  ) {}
}
