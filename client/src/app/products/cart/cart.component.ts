import { Component, OnInit } from '@angular/core';
import { CartService } from '../../services/cart.service';
import { LoginService } from '../../services/login.service';
import { ProductListComponent } from '../product-list/product-list.component';
import { Router } from '@angular/router';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.scss']
})
export class CartComponent implements OnInit {
  constructor(private router: Router, private cartService: CartService, private loginService: LoginService, private productListComponent: ProductListComponent) { }
  userId;
  hoverDelete;
  totalPrice: number;
  
  ngOnInit() {
    this.hoverDelete = false;
    this.loginService.loggedInUser.subscribe(user => {
      this.userId = user['userId'];
      this.cartService.getUserCart(this.userId);
    })

    this.cartService.addedProduct.subscribe(item => {
      for (let i of this.cartService.cartItems) {
        if (i.name === item.name) {
          i.amount += item.amount;
          this.cartService.updateCartItem(this.userId, i);
          return;
        }
      }
      this.cartService.cartItems.push(item);
      this.cartService.saveItemToCart(this.userId, item);
    })
  }

  getTotalPrice() {
    this.totalPrice = 0;
    this.cartService.cartItems.map(item => {
      this.totalPrice += item.price * item.amount;
    })
  }
  getCartItems() {
    this.getTotalPrice();
    return this.cartService.cartItems;
  }

  removeItemFromCart(item) {
    this.hoverDelete = false;
    this.cartService.deleteItemFromCart(this.userId, item);
    this.cartService.cartItems = this.cartService.cartItems.filter((cartItem) => {
      return cartItem.name !== item.name;
    })
  }
  editItem(item) {
    this.productListComponent.openAddItemToCart(item, true);
  }
  orderCart(){
    this.router.navigate(['/order']);
  }
}
