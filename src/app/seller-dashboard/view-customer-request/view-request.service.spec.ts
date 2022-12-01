import { TestBed } from '@angular/core/testing';

import { ViewRequestService } from './view-request.service';

describe('ViewRequestService', () => {
  let service: ViewRequestService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ViewRequestService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
