import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './pages/login/login.component';
import { SignupComponent } from './pages/signup/signup.component';
import { SignupSellerComponent } from './pages/signup-seller/signup-seller.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { SellerDashboardComponent } from './pages/seller-dashboard/seller-dashboard.component';
import { HomeComponent } from './pages/home/home.component';
import { CreateStoreComponent } from './pages/seller-dashboard/create-store/create-store.component';
import { ViewStoreComponent } from './pages/seller-dashboard/view-store/view-store.component';
import { ViewCustomerRequestComponent } from './pages/seller-dashboard/view-customer-request/view-customer-request.component';
import { SellerProfileComponent } from './pages/seller-dashboard/seller-profile/seller-profile.component';
import { StoreDetailsComponent } from './pages/seller-dashboard/view-store/store-details/store-details.component';
import { AddPetComponent } from './pages/seller-dashboard/view-store/add-pet/add-pet.component';
import { AddAccessoriesComponent } from './pages/seller-dashboard/view-store/add-accessories/add-accessories.component';
import { SlickCarouselModule } from 'ngx-slick-carousel';
import { SearchComponent } from './pages/home/search/search.component';
import { ItemDetailsComponent } from './pages/item-details/item-details.component';
import { CheckoutComponent } from './pages/checkout/checkout.component';
import { AdminLoginComponent } from './pages/admin-dashboard/admin-login/admin-login.component';
import { AdminDashboardComponent } from './pages/admin-dashboard/admin-dashboard.component';
import { SellersDetailComponent } from './pages/admin-dashboard/sellers-detail/sellers-detail.component';
import { AdminStoreDetailsComponent } from './pages/admin-dashboard/sellers-detail/admin-viewstore/admin-store-details/admin-store-details.component';
import { PetsDetailsComponent } from './pages/admin-dashboard/pets-details/pets-details.component';
import { BuyerRequestComponent } from './pages/home/buyer-request/buyer-request.component';
import { BuyerDetailsComponent } from './pages/admin-dashboard/buyer-details/buyer-details.component';
import { CartComponent } from './pages/cart/cart.component';
import { LoginSellerComponent } from './pages/login-seller/login-seller.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    LoginComponent,
    SignupComponent,
    SignupSellerComponent,
    SellerDashboardComponent,
    CreateStoreComponent,
    ViewStoreComponent,
    ViewCustomerRequestComponent,
    SellerProfileComponent,
    CreateStoreComponent,
    ViewCustomerRequestComponent,
    ViewStoreComponent,
    SellerProfileComponent,
    StoreDetailsComponent,
    AddPetComponent,
    AddAccessoriesComponent,
    SearchComponent,
    ItemDetailsComponent,
    CheckoutComponent,
    AdminLoginComponent,
    AdminDashboardComponent,
    SellersDetailComponent,
    AdminStoreDetailsComponent,
    PetsDetailsComponent,
    BuyerRequestComponent,
    BuyerDetailsComponent,
    CartComponent,
    LoginSellerComponent,
    BuyerRequestComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    SlickCarouselModule
  ],

  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

