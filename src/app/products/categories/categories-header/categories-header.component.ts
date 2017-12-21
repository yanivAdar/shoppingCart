import { Component, OnInit } from '@angular/core';
import { CategoriesService } from '../../../services/categories.service';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { Subject } from 'rxjs/Subject';

@Component({
  selector: 'app-categories-header',
  templateUrl: './categories-header.component.html',
  styleUrls: ['./categories-header.component.css']
})
export class CategoriesHeaderComponent implements OnInit {
  categories = [];
  id = '';
  constructor(private categoriesService: CategoriesService, private activeRoute: ActivatedRoute, private router: Router) { }

  ngOnInit() {
    this.categoriesService.getCategories().subscribe(
      data => {
        this.categoriesService.categories$$.next(data);
        this.categories = data
      },
      err => console.log('err: ' + err),
      () => console.log(this.categories));
  }
  displayProd(data) {
    this.categoriesService.categoryId.next(data.currentTarget.id);
  }
}
