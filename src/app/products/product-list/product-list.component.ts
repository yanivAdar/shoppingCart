import { Component, OnInit, OnDestroy } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { CategoriesService } from '../../services/categories.service';
import { Subject } from 'rxjs/Subject';
import 'rxjs';



@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent implements OnInit, OnDestroy {
  private ngUnsubscribe = new Subject<void>();
  currentCategory;
  id;
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

  // this.router.navigate(['../../'], { relativeTo: this.activatedRoute });


  ngOnDestroy() {
    this.ngUnsubscribe.next();
    this.ngUnsubscribe.complete();
  }

}
