import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpModule } from '@angular/http';
import { MatSidenavModule } from '@angular/material/sidenav';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatDialogModule } from '@angular/material';


import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { ProductsComponent } from './products/products.component';
import { ProductListComponent, AddProductListComponent, AddProductToCartComponent } from './products/product-list/product-list.component';
import { AppRoutingModule } from './app-routing.module';
import { SearchComponent } from './search/search.component';
import { CartComponent } from './products/cart/cart.component';
import { CategoriesComponent } from './products/categories/categories.component';
import { CategoriesHeaderComponent } from './products/categories/categories-header/categories-header.component';
import { LoginComponent } from './login/login.component';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { CategoriesService } from './services/categories.service';
import { ProductsService } from './services/products.service';
import { LoginService } from './services/login.service';
import { AuthGuard } from './auth/auth-guard';
import { RegisterComponent } from './login/register/register.component';
import { RegisterService } from './services/register.service';
import { CartService } from './services/cart.service';
import { OrderComponent } from './order/order.component';

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
    AddProductListComponent,
    LoginComponent,
    RegisterComponent,
    AddProductToCartComponent,
    OrderComponent
  ],
  entryComponents: [AddProductListComponent, AddProductToCartComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpModule,
    MatSidenavModule,
    BrowserAnimationsModule,
    MatDialogModule,
    ReactiveFormsModule,
    FormsModule

  ],
  providers: [CategoriesService, ProductsService, LoginService, AuthGuard, RegisterService, CartService, ProductListComponent],
  bootstrap: [AppComponent]
})
export class AppModule { }
