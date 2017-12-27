import { Component, OnInit, OnDestroy, Inject } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { CategoriesService } from '../../services/categories.service';
import { Subject } from 'rxjs/Subject';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';
import 'rxjs/add/operator/takeUntil';
import 'rxjs/add/operator/do';
import 'rxjs/add/operator/switchMap';
import { FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent implements OnInit, OnDestroy {
  private ngUnsubscribe = new Subject<void>();
  currentCategory;
  id;
  productForm: FormGroup
  
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
  }

  initForm(){
    this.productForm = new FormGroup({
      'name': new FormControl(null, Validators.required),
      'imagePath': new FormControl(null, Validators.required),
      'description': new FormControl(null, Validators.required),
    });
  }

  openDialog(): void {
    let dialogRef = this.dialog.open(AddProductListComponent, {
      // width: '250px',
      data: { 
        
      }
      // this.initForm()
    });

    dialogRef.afterClosed().subscribe(result => {
      // this.animal = result;
    });
  }

  // this.router.navigate(['../../'], { relativeTo: this.activatedRoute });
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
export class AddProductListComponent {

  constructor(
    public dialogRef: MatDialogRef<AddProductListComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any) { }

  onNoClick(): void {
    this.dialogRef.close();
  }
}
