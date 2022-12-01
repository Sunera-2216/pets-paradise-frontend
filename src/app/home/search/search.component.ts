import { Component, OnInit } from '@angular/core';
import { HomeComponent } from '../home.component';
import { Product } from '../../seller-dashboard/view-store/product';
import { SearchService } from './search.service';
import { Pet } from '../../seller-dashboard/view-store/add-pet/pet';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {

  searchKeyword: string = "";
  selectedCatMenu: string = "";
  prediction: string = "";
  searchList: Product[] = [];

  constructor(private service: SearchService) { }

  ngOnInit(): void {
    this.searchKeyword = HomeComponent.getSearchKeyword();
    this.prediction = HomeComponent.getPrediction();
    this.selectedCatMenu = HomeComponent.getFilterCategory();

    if (this.searchKeyword !== "") {
      this.searchProduct();
      //(document.getElementById('search-input') as HTMLElement).textContent = this.searchKeyword;
    }
    
    if (this.prediction !== "") {
      this.searchKeyword = this.prediction.split(" ")[0];
      this.imageSearch();
    }

    if (this.selectedCatMenu !== "") {
      this.filterCategory();
    }

  }

  searchProduct() {
    this.service.searchProduct(this.searchKeyword).subscribe(
      (data: Product[]) => {
        this.searchList = data;
      },
      (err: any) => {
        console.log(err);
      }
    );
  }

  imageSearch() {
    this.service.imageSearch(this.prediction).subscribe(
      (data: Product[]) => {
        this.searchList = data;
        console.log(data);
      },
      (err: any) => {
        console.log(err);
      }
    );
  }

  filterCategory() {
    this.service.filterCategory(this.selectedCatMenu).subscribe(
      (data: Product[]) => {
        this.searchList = data;
        console.log(data);
      },
      (err: any) => {
        console.log(err);
      }
    );
  }

}
