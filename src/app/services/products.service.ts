import { Injectable } from '@angular/core';
import { Http, RequestOptions, Headers } from '@angular/http';

@Injectable()
export class ProductsService {
  private url = 'http://localhost:4500/products';
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

    return this.http.put(this.url, JSON.stringify(data), this.options).map(res => res.json())
  }
}
