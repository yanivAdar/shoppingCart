import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { CategoriesService } from '../../services/categories.service';
import { Subject } from 'rxjs/Subject';
import 'rxjs/add/operator/takeUntil';
import 'rxjs/add/operator/do';
import 'rxjs/add/operator/switchMap';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent implements OnInit {
  currentCategory;
  id;
  ngUnsubscribe = new Subject<void>()
  constructor(private activatedRoute: ActivatedRoute, private categoriesService: CategoriesService, private router: Router) { }

  ngOnInit() {
    this.categoriesService.categoryId$$
      .takeUntil(this.ngUnsubscribe)
      .do((id) => { this.id = id; })
      .switchMap((id) => {
        return this.categoriesService.getCategory(this.id);
      })
      .map(res => res[0])
      .subscribe((res) => {
        this.currentCategory = res;
      })
  }

  // ngOnInit() {
  //   this.categoriesService.categoryId$$.subscribe(id => {
  //     this.id = id;
  //     this.categoriesService.getCategory(this.id).subscribe(res => {
  //       this.currentCategory = res[0];
  //       console.log(this.currentCategory);
  //     });
  //   });
  // }

  // this.router.navigate(['../../'], { relativeTo: this.activatedRoute });
  ngOnDestroy() {
    this.ngUnsubscribe.next();
    this.ngUnsubscribe.complete();
  }

}
