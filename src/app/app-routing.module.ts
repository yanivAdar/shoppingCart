import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { ProductsComponent } from "./products/products.component";
import { SearchComponent } from "./search/search.component";

const appRoutes: Routes = [
    { path: 'shopping-main', component: ProductsComponent },
    { path: 'search', component: SearchComponent }
]




@NgModule({
    imports: [RouterModule.forRoot(appRoutes)],
    exports: [RouterModule]
})

export class AppRoutingModule {}