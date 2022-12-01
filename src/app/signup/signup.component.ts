import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Buyer } from '../login/buyer';
import { SignupBuyerService } from './signup-buyer.service';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {
  static loggedUser: Buyer;
  static SignupComponent: Buyer;

  static getLoggedBuyer(): Buyer {
    return this.loggedUser;
  }

  buyer = new Buyer();

  public signupBuyerForm !: FormGroup

  constructor(private service : SignupBuyerService, private router: Router) { }

  ngOnInit(): void {
    this.signupBuyerForm = new FormGroup({
      fname: new FormControl({ value: '' }, Validators.compose([Validators.required])),
      lname: new FormControl({ value: '' }, Validators.compose([Validators.required])),
      address: new FormControl({ value: '' }, Validators.compose([Validators.required])),
      contact_number: new FormControl({ value: '' }, Validators.compose([Validators.required])),
      email: new FormControl({ value: '' }, Validators.compose([Validators.required])),
      password: new FormControl({ value: '' }, Validators.compose([Validators.required]))
    });
  }

  validateData() {
    this.service.validateData(this.buyer).subscribe((data: any) => {
      console.log(data);

      if (data) {
        SignupComponent.loggedUser = data;
        this.router.navigate(['']);
      }
    },
      (error: any) => console.log(error));
  }

}
