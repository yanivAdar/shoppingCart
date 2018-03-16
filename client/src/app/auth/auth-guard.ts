import { Injectable } from '@angular/core';
import { Router, CanActivate } from '@angular/router';
import { LoginService } from '../services/login.service';

@Injectable()
export class AuthGuard implements CanActivate {

  constructor(private loginService: LoginService, public router: Router) { }

   async canActivate() {
     const res = await this.loginService.isAuthenticated();
    //token authentication needed
      if (res['status'] == 401) {
        this.router.navigate(['login']);
        return false
      }
      this.loginService.loggedInUser.next(JSON.parse(document.cookie.split(';')[1]))
      
      return true;
    }
}