import { Pipe, PipeTransform } from '@angular/core';
import { Product } from '../../products/product/product';

@Pipe({
    name: 'orderProducts'
})
export class OrderProductsPipe implements PipeTransform {

    transform(value: Product[], order: boolean): Product[] {
        let sortAsc = (p1: Product, p2: Product) => { return p1.count - p2.count; }
        let sortDesc = (p1: Product, p2: Product) => { return p2.count - p1.count; }

        if (order === true) {
            return value.sort(sortAsc);
        }
        else if (order === false) {
            return value.sort(sortDesc);
        }
        else {
            return value;
        }
    }
}
