import { Component, OnInit } from '@angular/core';
import { CartService } from '../../services/cart.service';
import { LoginService } from '../../services/login.service';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {
  constructor(private cartService: CartService, private loginService: LoginService) { }
  // cartItems = this.cartService.cartItems;
  userId;

  ngOnInit() {
    this.loginService.loggedInUser.subscribe(user => {
      this.userId = user['userId'];
      this.cartService.getUserCart(this.userId);
    })

    this.cartService.addedProduct.subscribe(item => {
      for (let i of this.cartService.cartItems) {
        if (i.name === item.name) {
          i.price += item.price;
          i.amount += item.amount;
          this.cartService.updateCartItem(this.userId, i);
          return;
        }
      }
      this.cartService.cartItems.push(item);
      this.cartService.saveItemToCart(this.userId, item);
    })
  }
  getCartItems() {
    return this.cartService.cartItems;
  }
}
