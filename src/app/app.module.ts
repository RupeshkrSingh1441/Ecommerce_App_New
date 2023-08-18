import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";
import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./app.component";
import { ProductComponent } from "./product/product.component";
import { SuggestedProductsComponent } from "./suggested-products/suggested-products.component";
import { HomeComponent } from "./home/home.component";
import { ProductsComponent } from "./products/products.component";
import { CommonModule } from "@angular/common";
import { ProductdetailsComponent } from "./productdetails/productdetails.component";
import { CartComponent } from "./cart/cart.component";
import { OrderComponent } from "./order/order.component";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { HeaderComponent } from "./header/header.component";
import { FooterComponent } from "./footer/footer.component";
import { PageNotFoundComponent } from "./page-not-found/page-not-found.component";
import { OpenProductsDirective } from "./open-products.directive";
import { OpenProductDetailsDirective } from "./open-product-details.directive";
import { RegisterComponent } from "./register/register.component";
import { LoginComponent } from "./login/login.component";
import { HttpClientModule } from "@angular/common/http";
import { RouterModule } from "@angular/router";

@NgModule({
  declarations: [
    AppComponent,
    ProductComponent,
    SuggestedProductsComponent,
    HomeComponent,
    ProductsComponent,
    ProductdetailsComponent,
    CartComponent,
    OrderComponent,
    HeaderComponent,
    FooterComponent,
    PageNotFoundComponent,
    OpenProductsDirective,
    OpenProductDetailsDirective,
    RegisterComponent,
    LoginComponent,
  ],
  imports: [
    CommonModule,
    BrowserModule,
    FormsModule,
    AppRoutingModule,
    ReactiveFormsModule,
    HttpClientModule,
    RouterModule
  ],
  providers: [],
  exports: [CommonModule, FormsModule, ReactiveFormsModule],
  bootstrap: [AppComponent],
})
export class AppModule {}
