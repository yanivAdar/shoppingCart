import { Injectable } from "@angular/core";
import { Http } from "@angular/http";
import { Router } from "@angular/router";
import { Subject } from "rxjs/Subject";

@Injectable()

export class RegisterService {
    constructor(private http: Http, private router: Router) { }
    url = 'http://localhost:4500/';
    userLoginDetails = new Subject<any>();
    

    postRegister(data) {
        return this.http.put(this.url + 'users', data).map(res => res.json())
    }
    checkEmail(email) {
        return this.http.post(this.url + 'checkEmail', email).map(res => res.json());
    }
}

