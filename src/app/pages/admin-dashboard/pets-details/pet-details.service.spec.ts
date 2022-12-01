import { TestBed } from '@angular/core/testing';

import { PetDetailsService } from './pet-details.service';

describe('PetDetailsService', () => {
  let service: PetDetailsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(PetDetailsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
