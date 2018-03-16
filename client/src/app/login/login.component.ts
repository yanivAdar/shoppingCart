import { Component, OnInit, Output, EventEmitter, AfterContentInit } from '@angular/core'
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { LoginService } from '../services/login.service';
import { Router } from '@angular/router';
import { RegisterService } from '../services/register.service';
import 'rxjs/add/operator/first';
let registerdUsername;
let registerdUserPass;
@Component({
    selector: 'app-login',
    templateUrl: './login.component.html',
    styleUrls: ['./login.component.css']
})

export class LoginComponent implements OnInit {

    constructor(private loginService: LoginService, private router: Router, private registerService: RegisterService) {
    }

    @Output() isAuthenticated = new EventEmitter<boolean>();
    loginForm: FormGroup;

    ngOnInit() {
        delete document.cookie;
        document['cookie'] = '';
        this.inItLoginForm(registerdUsername, registerdUserPass);
        this.registerService.userLoginDetails.first().subscribe(user => {
            registerdUsername = user.name;
            registerdUserPass = user.pass;
        })
    }

    inItLoginForm(name,pass) {
        this.loginForm = new FormGroup({
            'username': new FormControl(name, Validators.required),
            'password': new FormControl(pass, Validators.required)
        })
    }

    onSubmit() {
        this.loginService.postLogin(this.loginForm.value).subscribe(res => {
            this.router.navigate(['/shopping-main']);

        })
    }
    onRegister() {
        this.router.navigate(['/register']);
    }
}