import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Buyer } from '../../login/buyer';
import { LoginComponent } from '../../login/login.component';
import { RequestService } from './request.service';
import { Request } from './request';

class ImageSnippet {
  constructor(public src: string, public file: File) {}
}

@Component({
  selector: 'app-buyer-request',
  templateUrl: './buyer-request.component.html',
  styleUrls: ['./buyer-request.component.css']
})
export class BuyerRequestComponent implements OnInit {

  request = new Request();
  public requestPetForm!: FormGroup
  loggedUser!: Buyer;
  selectedFile!: ImageSnippet;
 
  

  constructor(private service: RequestService, private router: Router,private formBuilder: FormBuilder) { }

  ngOnInit(): void {
  
    this.loggedUser = LoginComponent.getLoggedBuyer();
    console.log(this.loggedUser);

    this.requestPetForm = new FormGroup({
      species: new FormControl({ value: '' }, Validators.compose([Validators.required])),
      breed: new FormControl({ value: '' }, Validators.compose([Validators.required])),
      age: new FormControl({ value: '' }, Validators.compose([Validators.required])),
      gender: new FormControl({ value: '' }, Validators.compose([Validators.required]))
    });
  }

  requestPet() {
    this.request.bId = this.loggedUser.bId;

    this.service.requestPet(this.request).subscribe(
      data => {
        console.log(data);
        this.router.navigate(['/']);
      },
      error => {
        console.log(error);
      }
    );
  }

  processFile(imageInput: any) {
    const file: File = imageInput.files[0];
    const reader = new FileReader();

    reader.addEventListener('load', (event: any) => {

      this.selectedFile = new ImageSnippet(event.target.result, file);

      this.service.uploadPetImage(this.selectedFile.file).subscribe(
        (res) => {
          console.log(res);
        },
        (err) => {
          console.log(err);
        })
    });

    reader.readAsDataURL(file);
  }

}


