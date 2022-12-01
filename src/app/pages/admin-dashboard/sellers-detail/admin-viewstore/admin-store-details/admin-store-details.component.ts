import { Component, OnInit } from '@angular/core';
import { Accessories } from 'src/app/pages/seller-dashboard/view-store/add-accessories/accessories';
import { Pet } from 'src/app/pages/seller-dashboard/view-store/add-pet/pet';
import { Store } from 'src/app/pages/seller-dashboard/view-store/store';
import { AdminViewstoreComponent } from '../admin-viewstore.component';
import { AdminStoreDetailsService } from './admin-store-details.service';

@Component({
  selector: 'app-admin-store-details',
  templateUrl: './admin-store-details.component.html',
  styleUrls: ['./admin-store-details.component.css']
})
export class AdminStoreDetailsComponent implements OnInit {

  store!: Store;
  petsList: Pet[] = [];
  itemList: Accessories[] = [];
  
  constructor(private service: AdminStoreDetailsService) { }

  ngOnInit(): void {
    this.store = AdminViewstoreComponent.getSelectedStore();
    this.getPetsList();
    this.getItemList();
  }

  getPetsList() {
    this.service.getPetsList(this.store.storeId).subscribe(
      data => {
        console.log(data);
        this.petsList = data;
      },
      err => {
        console.log(err);
      }
    );
  }

  getItemList() {
    this.service.getItemList(this.store.storeId).subscribe(
      data => {
        console.log(data);
        this.itemList = data;
      },
      err => {
        console.log(err);
      }
    );
  }

}
