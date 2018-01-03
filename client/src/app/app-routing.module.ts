import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { ProductsComponent } from "./products/products.component";
import { SearchComponent } from "./search/search.component";
import { CategoriesComponent } from "./products/categories/categories.component";
import { ProductListComponent } from "./products/product-list/product-list.component";

const appRoutes: Routes = [
    { path: 'shopping-main', component: ProductsComponent, children: [
        { path: ':category/products', component: ProductListComponent }
    ] },
    { path: 'search', component: SearchComponent }
]

@NgModule({
    imports: [RouterModule.forRoot(appRoutes)],
    exports: [RouterModule]
})

export class AppRoutingModule {}