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
    errorMessage = new EventEmitter<String>();
    async isAuthenticated() {
        try {
            const isAuth = await this.http.get(this.url + 'isAuthenticated').toPromise();
            return isAuth;
        } catch (error) {
            console.log('error');

            return error;
        }
    }
    postLogin(data) {
        this.http.post(this.url + 'login', data).toPromise().then(res => {
            document.cookie = "userDetails=" + JSON.stringify(res.json());
            this.router.navigate(['../shopping-main']);
            if (res.json().cart.length > 0) {
                this.cartService.cartItems = res.json().cart;
            }
        }).catch(err => this.errorMessage.emit('Name or Password is incorrect'))
    }
    logout() {
        document.cookie = 'userDetails=; expires=' + Date.UTC(17, 0) + "; path=/;";
        this.http.get(this.url + 'logout').toPromise().then(res => {
            window.location.href = res.url;
        })
    }
    getUser(id) {
        return this.http.get(this.url + 'users/' + id).map(res => res.json());
    }
}