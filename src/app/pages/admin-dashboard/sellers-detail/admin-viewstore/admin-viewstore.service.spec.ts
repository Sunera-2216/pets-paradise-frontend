import { TestBed } from '@angular/core/testing';

import { AdminViewstoreService } from './admin-viewstore.service';

describe('AdminViewstoreService', () => {
  let service: AdminViewstoreService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AdminViewstoreService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
