import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CartService } from '../services/cart.service';
import { LoginService } from '../services/login.service';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Popup } from 'ng2-opd-popup';





@Component({
  selector: 'app-order',
  templateUrl: './order.component.html',
  styleUrls: ['./order.component.css']
})
export class OrderComponent implements OnInit {

  constructor(private router: Router, private cartService: CartService, private loginService: LoginService, private popup: Popup) { }
  recite = ['Recite \r\n'];

  cartItems;
  totalSum = 0;
  user: object = {
    name: '',
    last: ''
  }
  orderForm: FormGroup;
  showing = false;

  ngOnInit() {
    this.initOrderForm(null, null);
    if (this.cartService.cartItems.length != 0) {
      this.cartItems = this.cartService.cartItems;
      this.cartService.cartItems.forEach(item => {
        this.totalSum += item.price * item.amount;
      })
      this.loginService.loggedInUser.subscribe(user => {
        this.user = user;
        this.initOrderForm(user['city'], user['street']);
      })
    }
    else this.router.navigate(['/shopping-main']);
    this.initPopupOption();
  }

  navigateBack() {
    this.router.navigate(['/shopping-main']);
  }
  initOrderForm(city, street) {
    this.orderForm = new FormGroup({
      'city': new FormControl(city, Validators.required),
      'street': new FormControl(street, Validators.required),
      'date': new FormControl(null, Validators.required)
    });
  }
  onSubmit() {
    this.popup.show();
  }

  initPopupOption() {
    this.popup.options = {
      animationDuration: 0.3,
      header: 'Order complete',
      color: '#3ac47d',
      showButtons: false
    }
  }
  backShopping(recite) {
    if (recite.checked) this.downloadRecite();
    this.cartService.clearCart();
    this.router.navigate(['/shopping-main']);
  }
  logout(recite) {
    if (recite.checked) this.downloadRecite();
    this.loginService.logout();
  }
  downloadRecite() {
    let a = window.document.createElement('a');
    a.href = window.URL.createObjectURL(new Blob(this.createRecite(), { type: 'text/csv' }));
    a.download = 'recite.txt';
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
  }
  
  createRecite() {
    this.cartItems.forEach(item => {
      this.recite.push('Item name: ' + item.name + ', Amount: ' + item.amount + ', Price: ' + item.price + '\r\n');
    })
    this.recite.push('Total Price: ' + this.totalSum);
    return this.recite;
    // let recite = document.getElementById('recite');
  }
}
