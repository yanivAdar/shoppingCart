import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { CategoriesService } from '../../services/categories.service';
import { Subject } from 'rxjs/Subject';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent implements OnInit {
  currentCategory;
  id;
  constructor(private activatedRoute: ActivatedRoute, private categoriesService: CategoriesService, private router: Router) { }

  ngOnInit() {
    if (this.categoriesService.categories) {
      this.activatedRoute.params.subscribe((res) => {
        this.id = this.categoriesService.getIdFromCategory(res.category);
      })
      this.categoriesService.getCategory(this.id).subscribe(res => {
          this.currentCategory = res[0];
        console.log(this.currentCategory);
      });
    }
    
   // this.router.navigate(['../../'], { relativeTo: this.activatedRoute });
  }
}
