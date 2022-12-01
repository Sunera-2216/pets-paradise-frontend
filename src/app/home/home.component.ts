import { Router } from '@angular/router';
import { Product } from './../seller-dashboard/view-store/product';
import { Component, OnInit, NgZone } from '@angular/core';
import { Pet } from '../seller-dashboard/view-store/add-pet/pet';
import { HomeService } from './home.service';
import { Accessories } from '../seller-dashboard/view-store/add-accessories/accessories';
import { Buyer } from '../login/buyer';
import { LoginComponent } from '../login/login.component';
import { ViewStoreComponent } from '../seller-dashboard/view-store/view-store.component';
import { Cart } from '../cart/cart';
import { CartService } from '../cart/cart.service';

declare const annyang: any;

class ImageSnippet {
  constructor(public src: string, public file: File) { }
}

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  petsList: Pet[] = [];
  itemList: Accessories[] = [];
  searchKeyword!: string;
  static sKeyword: string;
  searchResultList: Product[] = [];
  static selectedCatMenu: string = "";
  static selectedItem: Accessories;
  static selectedPet: Pet;
  static loggedUser: Buyer;
  loggedBuyerFirstName!: String;
  addedProduct!: Product;
  isVisible = false;

  selectedFile!: ImageSnippet;
  static prediction: string;

  voiceActiveSectionDisabled: boolean = true;
  voiceActiveSectionError: boolean = false;
  voiceActiveSectionSuccess: boolean = false;
  voiceActiveSectionListening: boolean = false;
  voiceText: any;

  images = [
    { img: "../../assets/images/img11.jpg" },
    { img: "../../assets/images/img9.jpg" },
    { img: "../../assets/images/img10.jpg" },
    { img: "../../assets/images/img8.jpg" },
  ];

  slideConfig = {
    "slidesToShow": 1,
    "slidesToScroll": 1,
    "dots": true,
    "infinite": true,
    "autoplay": true,
    "speed": 500,
  };

  constructor(private service: HomeService, private cartService: CartService, private router: Router, private ngZone: NgZone) { }

  ngOnInit(): void {
    this.getAllPets();
    this.getAllItems();

    HomeComponent.loggedUser = LoginComponent.getLoggedBuyer();
    //this.loggedBuyerFirstName = HomeComponent.loggedUser.fname;
    console.log(HomeComponent.loggedUser);

    //this.addedProduct = ViewStoreComponent.getAddedProduct();
    //console.log(this.addedProduct);
    if (HomeComponent.loggedUser == null) {
      this.isVisible = true;
    }
  }
  


  predict(image: any) {
    const file: File = image.files[0];
    const reader = new FileReader();

    reader.addEventListener('load', (event: any) => {

      this.selectedFile = new ImageSnippet(event.target.result, file);

      this.service.predict(this.selectedFile.file).subscribe(
        (res: string) => {
          HomeComponent.prediction = res;
          this.router.navigate(['/search']);
          //console.log(this.prediction);
        },
        (err: any) => {
          console.log(err);
        })
    });

    reader.readAsDataURL(file);
  }

  onClick(id: String){
    this.router.navigate(['/add-to-cart', id]);
  }

  getAllPets() {
    this.service.getAllPets().subscribe(
      (data: Pet[]) => {
        this.petsList = data;
      },
      (err: any) => {
        console.log(err);
      }
    );
  }

  getAllItems() {
    this.service.getAllItems().subscribe(
      (data: Accessories[]) => {
        this.itemList = data;
      },
      (err: any) => {
        console.log(err);
      }
    );
  }

  searchProduct() {
    HomeComponent.selectedCatMenu = "";
    HomeComponent.sKeyword = this.searchKeyword;

    console.log(HomeComponent.sKeyword);

    this.router.navigate(['/search']);
  }

  static getSearchKeyword(): string {
    return this.sKeyword;
  }

  static getPrediction(): string {
    return this.prediction;
  }

  filterCategory(event: any) {
    HomeComponent.selectedCatMenu = "";
    HomeComponent.sKeyword = "";

    console.log(event.target.value);

    HomeComponent.selectedCatMenu = event.target.value;

    this.router.navigate(['/search']);
  }

  static getFilterCategory(): string {
    return HomeComponent.selectedCatMenu;
  }

  selectPet(selectedPet: Pet) {
    HomeComponent.selectedPet = selectedPet;
    this.router.navigate(['/pet-details']);
  }

  static getSelectedPet() {
    return HomeComponent.selectedPet;
  }

  selectItem(event: any, selectedItem: Accessories) {
    HomeComponent.selectedItem = selectedItem;
    this.router.navigate(['/item-details']);
  }

  static getSelectedItem() {
    return HomeComponent.selectedItem;
  }

  static getLoggedUser() {
    return this.loggedUser;
  }

  get loggedBuyer() {
    return HomeComponent.loggedUser.fname;
  }

  addToCart(product: Product){
    //(document.getElementById('addToCartBtn') as HTMLInputElement).textContent = "Added to cart";
    //(document.getElementById('addToCartBtn') as HTMLInputElement).disabled = true;
    let cartItem = new Cart();
    cartItem.product = product;
    cartItem.buyer.bId = HomeComponent.getLoggedUser().bId;
    cartItem.seller.sId = product.sellerId;

    this.cartService.addtoCart(cartItem).subscribe(
      (data: Cart) => {
        console.log(data.product.name);
        
      },
      (err: any) => {
        console.log(err);
      }
    );
  }


  initializeVoiceRecognitionCallback(): void {
    annyang.addCallback('error', (err: any) => {
      if (err.error === 'network') {
        this.voiceText = "Internet is require";
        annyang.abort();
        this.ngZone.run(() => this.voiceActiveSectionSuccess = true);
      } else if (this.voiceText === undefined) {
        this.ngZone.run(() => this.voiceActiveSectionError = true);
        annyang.abort();
      }
    });

    annyang.addCallback('soundstart', (res: any) => {
      this.ngZone.run(() => this.voiceActiveSectionListening = true);
    });

    annyang.addCallback('end', () => {
      HomeComponent.sKeyword = this.voiceText;
      if (this.voiceText) {
        this.ngZone.run(() => this.router.navigate(['/search']));
      }

      if (this.voiceText === undefined) {
        this.ngZone.run(() => this.voiceActiveSectionError = true);
        annyang.abort();
      }

    });

    annyang.addCallback('result', (userSaid: any) => {
      this.ngZone.run(() => this.voiceActiveSectionError = false);

      let queryText: any = userSaid[0];

      annyang.abort();

      this.voiceText = queryText;

      this.ngZone.run(() => this.voiceActiveSectionListening = false);
      this.ngZone.run(() => this.voiceActiveSectionSuccess = true);
    });
  }

  startVoiceRecognition(): void {
    this.voiceActiveSectionDisabled = false;
    this.voiceActiveSectionError = false;
    this.voiceActiveSectionSuccess = false;
    this.voiceText = undefined;

    if (annyang) {
      let commands = {
        'demo-annyang': () => { }
      };

      annyang.addCommands(commands);

      this.initializeVoiceRecognitionCallback();

      annyang.start({ autoRestart: false });
    }
  }

  closeVoiceRecognition(): void {
    this.voiceActiveSectionDisabled = true;
    this.voiceActiveSectionError = false;
    this.voiceActiveSectionSuccess = false;
    this.voiceActiveSectionListening = false;
    this.voiceText = undefined;

    if (annyang) {
      annyang.abort();
    }
  }

}
