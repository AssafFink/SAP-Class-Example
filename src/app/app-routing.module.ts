import { ContactUsComponent } from './components/contact-us-area/contact-us/contact-us.component';
import { HomeComponent } from './components/home-area/home/home.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProductListComponent } from './components/products-area/product-list/product-list.component';
import { HomeModule } from './components/home-area/home.module';
import { ProductsModule } from './components/products-area/products.module';
import { ContactUsModule } from './components/contact-us-area/contact-us.module';
import { PageNotFoundComponent } from './components/layout-area/page-not-found/page-not-found.component';
import { ProductDetailsComponent } from './components/products-area/product-details/product-details.component';
import { AddProductComponent } from './components/products-area/add-product/add-product.component';

const routes: Routes = [

    { path: "home", component: HomeComponent },
    { path: "products", component: ProductListComponent },
    { path: "products/details/:id", component: ProductDetailsComponent },
    { path: "products/new", component: AddProductComponent },
    { path: "contact-us", component: ContactUsComponent },
    { path: "sellers", loadChildren: () => import("./components/sellers-area/sellers.module").then(m => m.SellersModule) },
    { path: "", redirectTo: "/home", pathMatch: "full" }, // full = exact empty string
    { path: "**", component: PageNotFoundComponent }

];

@NgModule({
    imports: [
        RouterModule.forRoot(routes),
        HomeModule,
        ProductsModule,
        ContactUsModule
    ],
    exports: [RouterModule]
})
export class AppRoutingModule { }
