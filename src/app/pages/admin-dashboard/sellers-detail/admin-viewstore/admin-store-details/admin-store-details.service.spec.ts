import { TestBed } from '@angular/core/testing';

import { AdminStoreDetailsService } from './admin-store-details.service';

describe('AdminStoreDetailsService', () => {
  let service: AdminStoreDetailsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AdminStoreDetailsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
