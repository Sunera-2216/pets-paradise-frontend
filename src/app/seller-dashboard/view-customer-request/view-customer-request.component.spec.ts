import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewCustomerRequestComponent } from './view-customer-request.component';

describe('ViewCustomerRequestComponent', () => {
  let component: ViewCustomerRequestComponent;
  let fixture: ComponentFixture<ViewCustomerRequestComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ViewCustomerRequestComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ViewCustomerRequestComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
