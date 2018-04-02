import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { ProductsComponent } from "./products/products.component";
import { SearchComponent } from "./search/search.component";
import { CategoriesComponent } from "./products/categories/categories.component";
import { ProductListComponent } from "./products/product-list/product-list.component";
import { LoginComponent } from "./login/login.component";
import { AuthGuard } from "./auth/auth-guard";
import { RegisterComponent } from "./login/register/register.component";
import { OrderComponent } from "./order/order.component";

const appRoutes: Routes = [
    { path: 'login', component: LoginComponent },
    { path: 'register', component: RegisterComponent },
    {
        path: 'shopping-main', canActivate: [AuthGuard], component: ProductsComponent, children: [
            { path: ':category/products',canActivate: [AuthGuard], component: ProductListComponent },
            { path: 'search', component: SearchComponent }
        ]
    },
    { path: 'order', canActivate: [AuthGuard], component: OrderComponent }
    // { path: '', canActivate: [AuthGuard], component: ProductsComponent }
    
]

@NgModule({
    imports: [RouterModule.forRoot(appRoutes)],
    exports: [RouterModule]
})

export class AppRoutingModule { }