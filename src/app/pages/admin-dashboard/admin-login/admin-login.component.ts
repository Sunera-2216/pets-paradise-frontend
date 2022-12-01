import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Admin } from './admin';
import { AdminService } from './admin.service';

@Component({
  selector: 'app-admin-login',
  templateUrl: './admin-login.component.html',
  styleUrls: ['./admin-login.component.css']
})
export class AdminLoginComponent implements OnInit {
  static loggedAdmin: Admin;
  static AdminLoginComponent: Admin;
  public adminloginForm !: FormGroup;

  admin = new Admin();
  loggedAdmin!: Admin;

  constructor(private adminService : AdminService, private router: Router, private formBuilder: FormBuilder) { }

  ngOnInit(): void {
    this.adminloginForm = new FormGroup({
      email: new FormControl({ value: '' }, Validators.compose([Validators.required])),
      password: new FormControl({ value: '' }, Validators.compose([Validators.required]))
    });
  }

  loginAdmin(){
    this.adminService.loginAdmin(this.admin).subscribe((data: Admin)=> {
      console.log(data);

      if (data) {
        AdminLoginComponent.loggedAdmin = data;
        this.router.navigate(['/admin']);
      } else {
        (document.getElementById('loginError') as HTMLElement).textContent = "Email or password is invalid!";
      }

   },
      (error: any) => console.log(error));
  }
}
