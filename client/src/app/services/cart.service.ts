import { Injectable, EventEmitter } from "@angular/core";
import { Cart } from "../products/cart/cart.model";
import { Http } from "@angular/http";
import { LoginService } from "./login.service";

@Injectable()
export class CartService {
    constructor(private http: Http) { }
    cartItems = [];
    userId;
    totalPrice = 0;
    url = 'http://localhost:4500/users/cart/'
    addedProduct = new EventEmitter<Cart>();

    getTotalPrice() {
        this.totalPrice = 0;
        this.cartItems.forEach(item => {
            this.totalPrice += item.price * item.amount;
        })
        return this.totalPrice;
    }

    getUserCart(userId) {
        this.http.get(this.url + userId).toPromise().then(res => {
            this.cartItems = res.json();
        });
    }
    saveItemToCart(userId, item) {
        this.http.put(this.url + userId, item).toPromise();
    }
    updateCartItem(userId, item) {
        this.http.post(this.url + userId, item).toPromise();
    }
    deleteItemFromCart(userId, item) {
        this.http.post(this.url + 'delete/' + userId, item).toPromise();
    }
    clearCart(){
        this.http.delete(this.url + 'deleteAll').toPromise();
    }

}

