import { Injectable, EventEmitter } from "@angular/core";
import { Cart } from "../products/cart/cart.model";
import { Http } from "@angular/http";
import { LoginService } from "./login.service";

@Injectable()
export class CartService {
    constructor(private http: Http) { }
    cartItems = [];
    userId;
    url = 'http://localhost:4500/users/cart/'
    addedProduct = new EventEmitter<Cart>();

    saveCartToUser(userId) {
        this.http.put(this.url + userId, this.cartItems).toPromise().then(res => this.cartItems = res.json().cart);
    }
}
