import { Component, OnInit } from '@angular/core';
import { LoginSellerComponent } from '../login-seller/login-seller.component';
import { LoginComponent } from '../login/login.component';
import { Seller } from '../signup-seller/seller';
import { SignupSellerComponent } from '../signup-seller/signup-seller.component';

@Component({
  selector: 'app-seller-dashboard',
  templateUrl: './seller-dashboard.component.html',
  styleUrls: ['./seller-dashboard.component.css']
})
export class SellerDashboardComponent implements OnInit {
  loggedSeller!: Seller;

  constructor() { }

  ngOnInit(): void {
    this.loggedSeller = LoginSellerComponent.getLoggedSeller();
    console.log(this.loggedSeller);
  }

}
