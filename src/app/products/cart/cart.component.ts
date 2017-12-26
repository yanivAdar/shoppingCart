import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {
  products = [{name:"cheese", amount:4, price: 34}, {name:"bread", amount:2, price: 56}];
  constructor() { }

  ngOnInit() {
  }

}
