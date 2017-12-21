import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';
import { Subject } from 'rxjs/Subject';

@Injectable()
export class CategoriesService {
  categories$$ = new Subject<any>();
  categories;
  categoryId = new Subject<string>();

  private url = 'http://localhost:4500/categories/';
  constructor(private http: Http) { }

  getCategories() {
    return this.http.get(this.url).map(res => res.json())
  };

  getCategory(id) {
    return this.http.get(this.url + id).map(res => res.json());
  }
}



