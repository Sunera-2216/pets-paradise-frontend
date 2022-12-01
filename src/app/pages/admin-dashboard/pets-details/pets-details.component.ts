import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Pet } from '../../seller-dashboard/view-store/add-pet/pet';
import { PetDetailsService } from './pet-details.service';

@Component({
  selector: 'app-pets-details',
  templateUrl: './pets-details.component.html',
  styleUrls: ['./pets-details.component.css']
})
export class PetsDetailsComponent implements OnInit {
  pet: Pet[] = [];
  petsList: Pet[] = [];

  constructor(private service: PetDetailsService, private router: Router) { }

  ngOnInit(): void {
    this.getPet();
  }

  private getPet(){
    this.service.getPetsList().subscribe(data =>{
      this.pet = data;
    })
  }
}
