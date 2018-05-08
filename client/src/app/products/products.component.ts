import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router/';
import { MatSidenavModule } from '@angular/material/sidenav';
import { LoginService } from '../services/login.service';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit {
  constructor(private route: ActivatedRoute, private router: Router, private loginService: LoginService) { }
  toggleClick;
  ngOnInit() {
    this.toggleClick = true;
    this.loginService.getUser();
  }

}
