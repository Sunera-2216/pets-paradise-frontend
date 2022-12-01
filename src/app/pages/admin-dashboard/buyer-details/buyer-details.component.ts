import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Buyer } from '../../login/buyer';
import { BuyerService } from './buyer.service';

@Component({
  selector: 'app-buyer-details',
  templateUrl: './buyer-details.component.html',
  styleUrls: ['./buyer-details.component.css']
})
export class BuyerDetailsComponent implements OnInit {
  buyer: Buyer[] = [];

  constructor(private buyerService: BuyerService, private router: Router) { }

  ngOnInit(): void {
    this.getBuyer();
  }

  private getBuyer(){
    this.buyerService.getBuyerList().subscribe(data =>{
      this.buyer = data;
    })
  }
}
