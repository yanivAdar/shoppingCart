import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';

@Injectable()
export class CategoriesService {
  categories;
  private url = 'http://localhost:4500/';
  constructor(private http: Http) { }

  getCategories() {
    return this.http.get(this.url + 'categories').map(res => res.json())
  };
}



