import { Component, OnInit, OnDestroy, Inject, Output } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { CategoriesService } from '../../services/categories.service';
import { Subject } from 'rxjs/Subject';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';
import 'rxjs/add/operator/takeUntil';
import 'rxjs/add/operator/do';
import 'rxjs/add/operator/switchMap';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { ProductsService } from '../../services/products.service';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent implements OnInit, OnDestroy {
  private ngUnsubscribe = new Subject<void>();
  @Output() currentCategory;
  id;
  categories;

  constructor(private activatedRoute: ActivatedRoute, private categoriesService: CategoriesService, private router: Router, public dialog: MatDialog) { }
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
    this.categoriesService.categories$$.subscribe((res) => {
      this.categories = res;
    });
  }


  openDialog(): void {

    let dialogRef = this.dialog.open(AddProductListComponent, {
      data: {
        categories: this.categories,
        currentCategory: this.currentCategory
      }
    });

    dialogRef.afterClosed().subscribe(result => { });
  }
  ngOnDestroy() {
    this.ngUnsubscribe.next();
    this.ngUnsubscribe.complete();
  }

}




//---------------------Dialog Component .ts file--------------------
@Component({
  selector: 'add-product-list',
  templateUrl: 'add-product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class AddProductListComponent implements OnInit {
  productForm: FormGroup
  categories = this.data.categories;
  current = this.data.currentCategory; 

  constructor(private productService: ProductsService, public dialogRef: MatDialogRef<AddProductListComponent>, @Inject(MAT_DIALOG_DATA) public data: any, private categoriesService: CategoriesService) { }

  ngOnInit() {
    this.initForm();
  }
  
  initForm() {
    this.productForm = new FormGroup({
      'name': new FormControl(null, Validators.required),
      'imagePath': new FormControl(null, Validators.required),
      'price': new FormControl(null, Validators.required),
      'category': new FormControl(this.current._id)
    });
  }
  onSubmit() {
    console.log(this.productForm.value);
  
    this.productService.addProductByCategory(this.productForm.value).subscribe(res=>{
      console.log('the result of the adding is: ',res);
    this.categoriesService.categoryId$$.next(res._id);
    });
  }
  onNoClick(): void {
    this.dialogRef.close();
  }
}
