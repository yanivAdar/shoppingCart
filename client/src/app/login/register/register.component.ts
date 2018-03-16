import { Component, OnInit, ViewChild, Output, EventEmitter } from "@angular/core";
import { FormGroup, FormControl, Validators } from "@angular/forms";
import { RegisterService } from "../../services/register.service";
import { Router } from "@angular/router";

@Component({
    selector: 'app-register',
    templateUrl: './register.component.html',
    styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
    constructor(private registerService: RegisterService, private router: Router) { }
    registerForm: FormGroup;
    view: string;
    errorMessage: string;
    confPass;
    emailMessage: string;
    @Output() userPassword = new EventEmitter<string>();
    ngOnInit() {
        this.view = 'partOne'
        this.registerFormInit();
    }

    registerFormInit() {
        this.registerForm = new FormGroup({
            'idNumber': new FormControl(null, Validators.required),
            'email': new FormControl(null, [Validators.required, Validators.email]),
            'password': new FormControl(null, Validators.required),
            'city': new FormControl(null, Validators.required),
            'street': new FormControl(null, Validators.required),
            'name': new FormControl(null, Validators.required),
            'last': new FormControl(null, Validators.required),
            'role': new FormControl('user')
        })
    }

    onNext() {
        return this.view = 'partTwo';
    }

    onBack() {
        this.view = 'partOne';
    }

    validateEmail(email) {
        if (this.registerForm.controls.email.invalid) {
            this.emailMessage = 'Invalid email';
        } else {
            this.registerService.checkEmail({ 'email': email }).subscribe(res => {
                this.emailMessage = res;
            })
        }
    }
    onSubmit() {
        this.registerService.postRegister(this.registerForm.value).subscribe(res => {
            console.log('name: ', res.name, 'pass: ', res.password, 'res: ', res);

            this.registerService.userLoginDetails.next({ name: res.name, pass: res.password });
            this.router.navigate(['/login']);
        })
    }
}