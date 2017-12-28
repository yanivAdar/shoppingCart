import { Injectable } from '@angular/core';
import { Http } from '@angular/http';

@Injectable()
export class ProductsService {
  private url = 'http://localhost:4500/products/';

  constructor(private http: Http) { }
  addProductByCategory(data){
    return this.http.put(this.url,data).map(res => res.json())
  }
}
