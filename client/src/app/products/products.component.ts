import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router/';
import { MatSidenavModule } from '@angular/material/sidenav';
import { LoginService } from '../services/login.service';
import { Element } from '@angular/compiler';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})


export class ProductsComponent implements OnInit {
  @ViewChild('myBtn') myBtn: ElementRef;
  constructor(private route: ActivatedRoute, private router: Router, private loginService: LoginService) { }
  toggleClick;
  ngOnInit() {
    this.toggleClick = true;
    this.loginService.getUser();
    this.myBtn.nativeElement.click();
    
  }

}
