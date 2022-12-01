import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './pages/login/login.component';
import { SellerDashboardComponent } from './pages/seller-dashboard/seller-dashboard.component';
import { SignupSellerComponent } from './pages/signup-seller/signup-seller.component';
import { SignupComponent } from './pages/signup/signup.component';
import { HomeComponent } from './pages/home/home.component';
import { AboutusComponent } from './pages/home/aboutus/aboutus.component';
import { ContactusComponent } from './pages/home/contactus/contactus.component';
import { PrivacypolicyComponent } from './pages/home/privacypolicy/privacypolicy.component';
import { TermsconditionsComponent } from './pages/home/termsconditions/termsconditions.component';
import { CreateStoreComponent } from './pages/seller-dashboard/create-store/create-store.component';
import { ViewStoreComponent } from './pages/seller-dashboard/view-store/view-store.component';
import { ViewCustomerRequestComponent } from './pages/seller-dashboard/view-customer-request/view-customer-request.component';
import { SellerProfileComponent } from './pages/seller-dashboard/seller-profile/seller-profile.component';
import { StoreDetailsComponent } from './pages/seller-dashboard/view-store/store-details/store-details.component';
import { AddPetComponent } from './pages/seller-dashboard/view-store/add-pet/add-pet.component';
import { AddAccessoriesComponent } from './pages/seller-dashboard/view-store/add-accessories/add-accessories.component';
import { SearchComponent } from './pages/home/search/search.component';
import { ItemDetailsComponent } from './pages/item-details/item-details.component';
import { CheckoutComponent } from './pages/checkout/checkout.component';
import { AdminLoginComponent } from './pages/admin-dashboard/admin-login/admin-login.component';
import { AdminDashboardComponent } from './pages/admin-dashboard/admin-dashboard.component';
import { SellersDetailComponent } from './pages/admin-dashboard/sellers-detail/sellers-detail.component';
import { BuyerDetailsComponent } from './pages/admin-dashboard/buyer-details/buyer-details.component';
import { PetsDetailsComponent } from './pages/admin-dashboard/pets-details/pets-details.component';
import { CartComponent } from './pages/cart/cart.component';
import { LoginSellerComponent } from './pages/login-seller/login-seller.component';
import { BuyerRequestComponent } from './pages/home/buyer-request/buyer-request.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'login', component: LoginComponent },
  { path: 'signup', component: SignupComponent },
  { path: 'signup-seller', component: SignupSellerComponent },
  { path: 'login-seller', component: LoginSellerComponent },
  { path: 'request', component: BuyerRequestComponent },
  { path: 'seller-dashboard', component: SellerDashboardComponent },
  { path: 'aboutus', component: AboutusComponent },
  { path: 'contactus', component: ContactusComponent },
  { path: 'privacypolicy', component: PrivacypolicyComponent },
  { path: 'termsconditions', component: TermsconditionsComponent },
  { path: 'seller-profile', component: SellerProfileComponent },
  { path: 'create-store', component: CreateStoreComponent },
  { path: 'view-store', component: ViewStoreComponent },
  { path: 'view-customer-request', component: ViewCustomerRequestComponent },
  { path: 'store-details', component: StoreDetailsComponent },
  { path: 'add-pet', component: AddPetComponent },
  { path: 'add-item', component: AddAccessoriesComponent },
  { path: 'search', component: SearchComponent },
  { path: 'pet-details', component: ItemDetailsComponent },
  { path: 'cart', component: CartComponent },
  { path: 'checkout', component: CheckoutComponent },
  { path: 'admin-login', component: AdminLoginComponent },
  { path: 'admin', component: AdminDashboardComponent },
  { path: 'view-sellers', component: SellersDetailComponent },
  { path: 'buyer-details', component: BuyerDetailsComponent },
  { path: 'all-pets-details', component: PetsDetailsComponent },
  { path: 'all-item-details', component: ItemDetailsComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

export const routingComponents = [HomeComponent, AboutusComponent, ContactusComponent, PrivacypolicyComponent, TermsconditionsComponent, LoginComponent, SignupComponent, SignupSellerComponent, SellerDashboardComponent, StoreDetailsComponent, AddPetComponent, ItemDetailsComponent]