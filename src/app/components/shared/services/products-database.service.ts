import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Product } from '../../products/product/product';

@Injectable({
    providedIn: 'root'
})
export class ProductsDatabaseService {

    private baseUrl = 'http://localhost:3000/products';

    constructor(private http: HttpClient) { }

    getProducts(): Observable<Product[]> {
        return this.http.get<Product[]>(this.baseUrl);
    }

    updateProduct(product: Product): Promise<Product> {
        const url = `${this.baseUrl}/${product.id}`;
        const body = JSON.stringify(product);
        const options = {
            headers: new HttpHeaders({ 'Content-Type': 'application/json' })
        };

        return this.http
            .put(url, body, options)
            .toPromise()
            .then(response => response as Product)
            .catch(this.handleError);
    }

    private handleError(error: any): Promise<any> {
        console.error('An error occurred', error);
        return Promise.reject(error.message || error);
    }
}
