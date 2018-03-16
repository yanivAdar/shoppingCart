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
import { Cart } from '../cart/cart.model';
import { LoginService } from '../../services/login.service';
import { CartService } from '../../services/cart.service';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent implements OnInit, OnDestroy {
  private ngUnsubscribe = new Subject<void>();
  @Output() currentCategory;
  constructor(private loginService: LoginService, private activatedRoute: ActivatedRoute, private categoriesService: CategoriesService, private router: Router, public dialog: MatDialog) { }
  id;
  categories;
  loggedUser;
  ngOnInit() {
    this.loginService.loggedInUser.subscribe(user=>{
      this.loggedUser = user;
    })
    // this.loggedUser = JSON.parse(document.cookie.split(';')[1]);
      
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

  openAddItemToCart(product) {
    let addToCartDialogRef = this.dialog.open(AddProductToCartComponent, {
      data: {
        product: product,
        user: this.loggedUser
      }
    });
    addToCartDialogRef.afterClosed().subscribe(result => { });
  }

  ngOnDestroy() {
    this.ngUnsubscribe.next();
    this.ngUnsubscribe.complete();
  }
}




//---------------------Add Product Component .ts file--------------------
@Component({
  selector: 'add-product-list',
  templateUrl: 'add-product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class AddProductListComponent implements OnInit {
  addingProductsForm: FormGroup
  categories = this.data.categories;
  current = this.data.currentCategory;

  constructor(private productService: ProductsService, public dialogRef: MatDialogRef<AddProductListComponent>, @Inject(MAT_DIALOG_DATA) public data: any, private categoriesService: CategoriesService) { }

  ngOnInit() {
    this.initAddingProductsForm();
  }

  initAddingProductsForm() {
    this.addingProductsForm = new FormGroup({
      'name': new FormControl(null, Validators.required),
      'imagePath': new FormControl(null, Validators.required),
      'price': new FormControl(null, Validators.required),
      'category': new FormControl(this.current._id)
    });
  }
  onSubmit() {
    this.productService.addProductByCategory(this.addingProductsForm.value).subscribe(res => {
      this.categoriesService.categoryId$$.next(res._id);
    });
  }
  onNoClick(): void {
    this.dialogRef.close();
  }
}

//----------Add Product To Cart Component-----------

@Component({
  selector: 'add-product-to-cart',
  templateUrl: 'add-product-to-cart.component.html',
  styleUrls: ['./product-list.component.css']
})
export class AddProductToCartComponent implements OnInit {
  product = this.data.product;
  user = this.data.user;
  addingProductToCartForm: FormGroup

  constructor(private cartService: CartService ,private productService: ProductsService, public dialogRef: MatDialogRef<AddProductToCartComponent>, @Inject(MAT_DIALOG_DATA) public data: any, private categoriesService: CategoriesService) { }

  ngOnInit(){
    this.initAddingProductToCartForm();
  }
  initAddingProductToCartForm(){
    this.addingProductToCartForm = new FormGroup({
      'amount': new FormControl(1,Validators.required)
    });
  }
  onSubmit(){
    let newCartItem = new Cart(
      this.product.name,
      this.product.price*this.addingProductToCartForm.controls.amount.value,
      this.addingProductToCartForm.controls.amount.value
    )
    this.cartService.addedProduct.emit(newCartItem);
  }

  onClose(){
    this.dialogRef.close();
  }
}