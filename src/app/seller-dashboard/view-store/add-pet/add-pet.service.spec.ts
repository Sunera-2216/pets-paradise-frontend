import { TestBed } from '@angular/core/testing';

import { AddPetService } from './add-pet.service';

describe('AddPetService', () => {
  let service: AddPetService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AddPetService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
