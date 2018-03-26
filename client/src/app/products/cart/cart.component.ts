import { Component, OnInit } from '@angular/core';
import { CartService } from '../../services/cart.service';
import { LoginService } from '../../services/login.service';
import { ProductListComponent } from '../product-list/product-list.component';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.scss']
})
export class CartComponent implements OnInit {
  constructor(private cartService: CartService, private loginService: LoginService, private productListComponent: ProductListComponent) { }
  // cartItems = this.cartService.cartItems;
  userId;
  hoverDelete;

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
  getCartItems() {
    return this.cartService.cartItems;
  }

  removeItemFromCart(item){
    this.hoverDelete = false;
    console.log('name remove func: ',item);
    
    this.cartService.deleteItemFromCart(this.userId,item);
    this.cartService.cartItems = this.cartService.cartItems.filter((cartItem)=>{
      return cartItem.name !== item.name;
    })
    console.log(this.cartService.cartItems);
    
    // for(let i in this.cartService.cartItems){
    //   this.cartService.cartItems.splice[i].name === item.name ? this.cartService.cartItems.splice(i,1)
    // }
  }
  editItem(item){
    this.productListComponent.openAddItemToCart(item, true);
    console.log('edit: ', item);
  }
}
