import { Component, OnInit } from '@angular/core';
import { CategoriesService } from '../../../services/categories.service';

@Component({
  selector: 'app-categories-header',
  templateUrl: './categories-header.component.html',
  styleUrls: ['./categories-header.component.css']
})
export class CategoriesHeaderComponent implements OnInit {
  categories = [];
  constructor(private categoriesService: CategoriesService) { }

  ngOnInit() {
    this.categoriesService.getCategories().subscribe(
      data => this.categories = data,
      err => console.log('err: ' + err), 
      () => console.log('done'));
  }
}
