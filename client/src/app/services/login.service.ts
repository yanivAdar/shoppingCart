import { Injectable, EventEmitter } from "@angular/core";
import { Http } from "@angular/http";
import { Router } from "@angular/router";
import { Subject } from "rxjs/Subject";
import { ReplaySubject } from "rxjs/ReplaySubject";
import { CartService } from "./cart.service";

@Injectable()
export class LoginService {
    private url = 'http://localhost:4500/';
    constructor(private http: Http, private router: Router, private cartService: CartService) { }
    loggedInUser = new ReplaySubject<object>(1);
   async isAuthenticated() {
       try {
           const isAuth = await this.http.get(this.url + 'isAuthenticated').toPromise();
           return isAuth;
       } catch (error) {
           return error;
       }
    }
    postLogin(data) {
        return this.http.post(this.url + 'login', data).map(res => {
            document.cookie = JSON.stringify(res.json());
            this.router.navigate(['../shopping-main']);
            if(res.json().cart.length > 0){
                this.cartService.cartItems = res.json().cart;
            }
        })
    }
    logout() {
        this.http.get(this.url + 'logout').toPromise().then(res=>{
            delete document.cookie;
            document['cookie'] = '';
            window.location.href = res.url;
        })
    }
}