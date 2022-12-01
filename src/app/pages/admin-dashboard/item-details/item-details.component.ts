import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Accessories } from '../../seller-dashboard/view-store/add-accessories/accessories';
import { ItemDetailsService } from './item-details.service';


@Component({
  selector: 'app-item-details',
  templateUrl: './item-details.component.html',
  styleUrls: ['./item-details.component.css']
})
export class ItemDetailsComponent implements OnInit {

  item: Accessories[] = [];
  itemList: Accessories[] = [];

  constructor(private service: ItemDetailsService, private router: Router) { }

  ngOnInit(): void {
    this.getItem();
  }

  private getItem(){
    this.service.getItemList().subscribe(data =>{
      this.item = data;
    })
  }

}
