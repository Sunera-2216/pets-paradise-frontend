import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Seller } from '../signup-seller/seller';
import { LoginSellerService } from './login-seller.service';

@Component({
  selector: 'app-login-seller',
  templateUrl: './login-seller.component.html',
  styleUrls: ['./login-seller.component.css']
})
export class LoginSellerComponent implements OnInit {
  static loggedSeller: Seller;
  seller = new Seller();

  static getLoggedSeller(): Seller {
    return this.loggedSeller;
  }

  public loginsellerForm !: FormGroup
  
  constructor(private service: LoginSellerService, private router: Router, private formBuilder: FormBuilder) { }

  ngOnInit(): void {
    this.loginsellerForm = new FormGroup({
      sEmail: new FormControl({ value: '' }, Validators.compose([Validators.required])),
      sPassword: new FormControl({ value: '' }, Validators.compose([Validators.required]))
    });
  }

  loginSeller() {
    this.service.loginSeller(this.seller).subscribe((data: Seller) => {
      console.log(data);

      if (data) {
        LoginSellerComponent.loggedSeller = data;
        this.router.navigate(['/seller-dashboard']);
      } else {
        (document.getElementById('loginError') as HTMLElement).textContent = "Email or password is invalid!";
      }

    },
      (error: any) => console.log(error));
  }
}
