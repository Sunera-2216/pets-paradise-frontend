import { Component, OnInit } from '@angular/core';
import { Accessories } from '../add-accessories/accessories';
import { Pet } from '../add-pet/pet';
import { Store } from '../store';
import { ViewStoreComponent } from '../view-store.component';
import { StoreDetailsService } from './store-details.service';

@Component({
  selector: 'app-store-details',
  templateUrl: './store-details.component.html',
  styleUrls: ['./store-details.component.css']
})
export class StoreDetailsComponent implements OnInit {

  store!: Store;
  petsList: Pet[] = [];
  itemList: Accessories[] = [];

  constructor(private service: StoreDetailsService) { }

  ngOnInit(): void {
    this.store = ViewStoreComponent.getSelectedStore();
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
