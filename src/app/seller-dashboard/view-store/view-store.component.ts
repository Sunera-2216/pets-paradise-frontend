import { Component, OnInit } from '@angular/core';
import { Store } from './store';
import { StoreService } from './store.service';
import { CreateStoreComponent } from '../create-store/create-store.component';
import { Seller } from '../../signup-seller/seller';
import { LoginComponent } from '../../login/login.component';
import { Router } from '@angular/router';
import { SignupSellerComponent } from '../../signup-seller/signup-seller.component';
import { LoginSellerComponent } from '../../login-seller/login-seller.component';

@Component({
  selector: 'app-view-store',
  templateUrl: './view-store.component.html',
  styleUrls: ['./view-store.component.css']
})
export class ViewStoreComponent implements OnInit {

  store: Store[] = [];
  loggedSeller!: Seller;
  static selectedStore: Store;

  constructor(private storeService: StoreService, private router: Router) { }

  ngOnInit(): void {
    this.loggedSeller = LoginSellerComponent.getLoggedSeller();
    this.getStore();
  }

  private getStore(){
     this.storeService.getStoreList(this.loggedSeller.sId).subscribe(data => {
       this.store = data;
     })
  }

  public setSelectedStore(event: any, item: any) {
    ViewStoreComponent.selectedStore = item;
    this.router.navigate(['/store-details']);
  }

  static getSelectedStore(): Store {
    return this.selectedStore;
  }

}