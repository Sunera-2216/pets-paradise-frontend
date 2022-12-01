import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { LoginSellerComponent } from '../../login-seller/login-seller.component';
import { LoginComponent } from '../../login/login.component';
import { SignupSellerComponent } from '../../signup-seller/signup-seller.component';
import { Store } from '../view-store/store';
import { StoreService } from '../view-store/store.service';
import { CreateStoreService } from './create-store.service';

@Component({
  selector: 'app-create-store',
  templateUrl: './create-store.component.html',
  styleUrls: ['./create-store.component.css']
})
export class CreateStoreComponent implements OnInit {

  store = new Store();

  static selectedStore: Store;

  constructor(private service: CreateStoreService, private router: Router) { }

  ngOnInit(): void {
  }

  createStore() {
    this.store.sellerId = LoginSellerComponent.getLoggedSeller().sId;
    this.service.createStore(this.store).subscribe(data => {
      console.log(data);
      this.router.navigate(['/view-store'])
    }, 
    error => console.log(error));
  }

}
