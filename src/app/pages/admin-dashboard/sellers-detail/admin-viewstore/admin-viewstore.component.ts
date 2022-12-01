import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Store } from 'src/app/pages/seller-dashboard/view-store/store';
import { StoreService } from 'src/app/pages/seller-dashboard/view-store/store.service';
import { Seller } from '../seller';
import { SellersDetailComponent } from '../sellers-detail.component';
import { AdminViewstoreService } from './admin-viewstore.service';

@Component({
  selector: 'app-admin-viewstore',
  templateUrl: './admin-viewstore.component.html',
  styleUrls: ['./admin-viewstore.component.css']
})
export class AdminViewstoreComponent implements OnInit {
  selectedSeller!: Seller;
  storeList: Store[] = [];
  static selectedStore: Store;

  constructor(private service: AdminViewstoreService, private router: Router) { }

  ngOnInit(): void {
    this.selectedSeller = SellersDetailComponent.getSellectedSeller();
    this.getStores(this.selectedSeller.sId);
  }

  onClick(store: Store){
    AdminViewstoreComponent.selectedStore = store;
    this.router.navigate(['/admin-store-details']);
  }

  getStores(sellerId: String) {
    this.service.getStores(sellerId).subscribe(
      (data: Store[]) => {
        this.storeList = data;
      }
    );
  }

  public setSelectedStore(event: any, item: any) {
    AdminViewstoreComponent.selectedStore = item;
    this.router.navigate(['/store-details']);
  }

  static getSelectedStore(): Store {
    return this.selectedStore;
  }
}
