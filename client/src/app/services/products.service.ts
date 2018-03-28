import { Injectable } from '@angular/core';
import { Http, RequestOptions, Headers } from '@angular/http';

@Injectable()
export class ProductsService {
  private url = 'http://localhost:4500/shopping/products';
  headers: Headers;
  options: RequestOptions;

  constructor(private http: Http) {
    this.headers = new Headers({
      'Content-Type': 'application/json',
      'Accept': 'q=0.8;application/json;q=0.9'
    });
    this.options = new RequestOptions({ headers: this.headers });
  }
  addProductByCategory(data) {
    return this.http.put(this.url, data, this.options).map(res => res.json());
  }
  updateProductByCategory(data) {
    return this.http.patch(this.url + '/' + data.productId, data).map(res => res.json());
  }
}
