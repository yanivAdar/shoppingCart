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
    this.loginService.loggedInUser.subscribe(user => {
      this.loggedUser = user;
    })

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
  editItem(event, product) {
    event.stopPropagation();
    this.openDialog(product);
    console.log('product: ', product);

  }

  openDialog(product): void {

    let dialogRef = this.dialog.open(AddProductListComponent, {
      data: {
        product: product,
        categories: this.categories,
        currentCategory: this.currentCategory
      }
    });

    dialogRef.afterClosed().subscribe(result => result ? this.currentCategory = result: null);
  }

  openAddItemToCart(product, isEditMode) {
    let addToCartDialogRef = this.dialog.open(AddProductToCartComponent, {
      data: {
        product: product,
        user: this.loggedUser,
        isEditMode: isEditMode
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
  product = this.data.product;
  editMode;

  constructor(private productService: ProductsService, public dialogRef: MatDialogRef<AddProductListComponent>, @Inject(MAT_DIALOG_DATA) public data: any, private categoriesService: CategoriesService) { }

  ngOnInit() {
    this.product ? this.editMode = true : this.editMode = false;
    this.initAddingProductsForm();
  }

  initAddingProductsForm() {
    if (this.product) {
      this.addingProductsForm = new FormGroup({
        'name': new FormControl(this.product.name, Validators.required),
        'imagePath': new FormControl(this.product.imagePath, Validators.required),
        'price': new FormControl(this.product.price, Validators.required),
        'category': new FormControl(this.current._id)
      });
    } else {
      this.addingProductsForm = new FormGroup({
        'name': new FormControl(null, Validators.required),
        'imagePath': new FormControl(null, Validators.required),
        'price': new FormControl(null, Validators.required),
        'category': new FormControl(this.current._id)
      });
    }
  }
  onSubmit() {
    if (this.editMode) {
      this.addingProductsForm.value['productId'] = this.product._id;
      this.productService.updateProductByCategory(this.addingProductsForm.value).subscribe(res => {
        this.categoriesService.getCategory(this.addingProductsForm.controls.category.value).subscribe((res) => {
          this.dialogRef.close(res[0]);
        })
      })
    } else {
      this.productService.addProductByCategory(this.addingProductsForm.value).subscribe(res => {
        this.categoriesService.categoryId$$.next(res._id);
      });
    }
  }
  onNoClick(): void {
    this.dialogRef.close();
  }
}

//----------Add Product To Cart Component-----------

let user;
@Component({
  selector: 'add-product-to-cart',
  templateUrl: 'add-product-to-cart.component.html',
  styleUrls: ['./product-list.component.css']
})
export class AddProductToCartComponent implements OnInit {
  product = this.data.product;
  addingProductToCartForm: FormGroup
  isEditMode = this.data.isEditMode;

  constructor(private loginService: LoginService, private cartService: CartService, private productService: ProductsService, public dialogRef: MatDialogRef<AddProductToCartComponent>, @Inject(MAT_DIALOG_DATA) public data: any, private categoriesService: CategoriesService) { }

  ngOnInit() {
    this.initAddingProductToCartForm();
  }
  initAddingProductToCartForm() {
    console.log(this.product.amount);

    this.addingProductToCartForm = new FormGroup({
      'amount': new FormControl(this.product.amount ? this.product.amount : 1, Validators.required)
    });
  }

  onSubmit() {
    let newCartItem = new Cart(
      this.product.name,
      this.product.price,
      this.addingProductToCartForm.controls.amount.value
    )
    this.loginService.loggedInUser.subscribe(user => {
      console.log(user);

      if (this.isEditMode) {
        for (let i of this.cartService.cartItems) {
          i.name === newCartItem.name ? i.amount = newCartItem.amount : null;
        }
        return this.cartService.updateCartItem(user['userId'], newCartItem);
      }
      return this.cartService.addedProduct.emit(newCartItem);
    })
  }

  onClose() {
    this.dialogRef.close();
  }
}