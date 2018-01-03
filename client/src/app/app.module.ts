import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpModule } from '@angular/http';
import { MatSidenavModule } from '@angular/material/sidenav';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatDialogModule } from '@angular/material';


import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { ProductsComponent } from './products/products.component';
import { ProductListComponent, AddProductListComponent } from './products/product-list/product-list.component';
import { AppRoutingModule } from './app-routing.module';
import { SearchComponent } from './search/search.component';
import { CartComponent } from './products/cart/cart.component';
import { CategoriesComponent } from './products/categories/categories.component';
import { CategoriesHeaderComponent } from './products/categories/categories-header/categories-header.component';
import { CategoriesService } from './services/categories.service';
import { ReactiveFormsModule } from '@angular/forms';
import { ProductsService } from './services/products.service';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    ProductsComponent,
    ProductListComponent,
    SearchComponent,
    CartComponent,
    CategoriesComponent,
    CategoriesHeaderComponent,
    AddProductListComponent
  ],
  entryComponents: [AddProductListComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpModule,
    MatSidenavModule,
    BrowserAnimationsModule,
    MatDialogModule,
    ReactiveFormsModule,

  ],
  providers: [CategoriesService, ProductsService],
  bootstrap: [AppComponent]
})
export class AppModule { }
