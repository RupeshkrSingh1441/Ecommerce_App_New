import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { CartComponent } from "./cart/cart.component";
import { HomeComponent } from "./home/home.component";
import { OrderComponent } from "./order/order.component";
import { PageNotFoundComponent } from "./page-not-found/page-not-found.component";
import { ProductdetailsComponent } from "./productdetails/productdetails.component";
import { ProductsComponent } from "./products/products.component";

const routes: Routes = [
  {path:'home', component:HomeComponent},
  {path:'products', component:ProductsComponent},
  {path:'product-details', component:ProductdetailsComponent},
  {path:'cart', component:CartComponent},
  {path:'orders', component:OrderComponent},
  {path:'',redirectTo:'/home', pathMatch:'full'},
  {path:'**', component:PageNotFoundComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
