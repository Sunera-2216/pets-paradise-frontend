import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, NgForm, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Buyer } from './buyer';
import { LoginService } from './login.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})

export class LoginComponent implements OnInit {
  static loggedUser: Buyer;
  static LoginComponent: Buyer;
  
  static getLoggedBuyer(): Buyer {
    return this.loggedUser;
  }

  buyer = new Buyer();
  loggedUser!: Buyer;
  public loginForm!: FormGroup;
  

  constructor(private service : LoginService, private router: Router, private formBuilder: FormBuilder) { }

  ngOnInit(): void {
    this.loginForm = new FormGroup({
      email: new FormControl({ value: '' }, Validators.compose([Validators.required])),
      password: new FormControl({ value: '' }, Validators.compose([Validators.required]))
    });
  }

  loginUser(){
    this.service.loginUser(this.buyer).subscribe((data: Buyer)=> {
      console.log(data);

      if (data) {
        LoginComponent.loggedUser = data;
        this.router.navigate(['']);
      } else {
        (document.getElementById('loginError') as HTMLElement).textContent = "Email or password is invalid!";
      }

   },
      (error: any) => console.log(error));
  }

}
