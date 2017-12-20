import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { ProductsComponent } from "./products/products.component";
import { SearchComponent } from "./search/search.component";
import { CategoriesComponent } from "./products/categories/categories.component";

const appRoutes: Routes = [
    { path: 'shopping-main', component: ProductsComponent, children: [
        { path: 'categories', component: CategoriesComponent }
    ] },
    { path: 'search', component: SearchComponent }
]

@NgModule({
    imports: [RouterModule.forRoot(appRoutes)],
    exports: [RouterModule]
})

export class AppRoutingModule {}