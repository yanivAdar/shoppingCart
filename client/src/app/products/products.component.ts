import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router/';
import { MatSidenavModule } from '@angular/material/sidenav';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit {
  constructor(private route: ActivatedRoute, private router: Router) { }
  toggleClick;
  ngOnInit() {
    this.toggleClick = true;
  }

}
