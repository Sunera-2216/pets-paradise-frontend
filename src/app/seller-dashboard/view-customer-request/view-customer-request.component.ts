import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Request } from '../../home/buyer-request/request';
import { LoginSellerComponent } from '../../login-seller/login-seller.component';
import { Seller } from '../../signup-seller/seller';
import { SignupSellerComponent } from '../../signup-seller/signup-seller.component';
import { ViewRequestService } from './view-request.service';

@Component({
  selector: 'app-view-customer-request',
  templateUrl: './view-customer-request.component.html',
  styleUrls: ['./view-customer-request.component.css']
})
export class ViewCustomerRequestComponent implements OnInit {
  loggedSeller!: Seller;
  static selectedRequest: Request;
  static ViewCustomerRequestComponent: Request;

  request: Request[] = [];

  constructor(private service: ViewRequestService, private router: Router) { }

  ngOnInit(): void {
    this.getRequest();

    this.loggedSeller = LoginSellerComponent.getLoggedSeller();
    console.log(this.loggedSeller);
  }

  private getRequest(){
    this.service.getRequestList().subscribe(data =>{
      this.request = data;
    })
  }

  viewCustomerDetails(request: Request){
    ViewCustomerRequestComponent.selectedRequest = request;
    this.router.navigate(['/customer-details']);
  }
}
