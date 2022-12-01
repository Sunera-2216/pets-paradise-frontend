import { TestBed } from '@angular/core/testing';

import { StoreDetailsService } from './store-details.service';

describe('StoreDetailsService', () => {
  let service: StoreDetailsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(StoreDetailsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
