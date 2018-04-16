import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CartService } from '../services/cart.service';
import { LoginService } from '../services/login.service';
import { FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-order',
  templateUrl: './order.component.html',
  styleUrls: ['./order.component.css']
})
export class OrderComponent implements OnInit {

  constructor(private router: Router, private cartService: CartService, private loginService: LoginService) { }

  cartItems;
  totalSum = 0;
  user;
  orderForm: FormGroup;

  ngOnInit() {
    this.initOrderForm();
    if (this.cartService.cartItems.length != 0) {
      this.cartItems = this.cartService.cartItems;
      this.cartService.cartItems.forEach(item => {
        this.totalSum += item.price * item.amount;
      })
      this.loginService.loggedInUser.subscribe(user => {
        this.loginService.getUser(user['userId']).subscribe(user => {
        })
      })
    }
    else this.router.navigate(['/shopping-main']);
  }
  navigateBack() {
    this.router.navigate(['/shopping-main']);
  }
  initOrderForm() {
    this.orderForm = new FormGroup({
      'city': new FormControl(null, Validators.required),
      'street': new FormControl(null, Validators.required),
      'date': new FormControl(null, Validators.required)
    });
  }
  onSubmit(){
    console.log('bla');
    
  }
}
