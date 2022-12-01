import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SellersDetailComponent } from './sellers-detail.component';

describe('SellersDetailComponent', () => {
  let component: SellersDetailComponent;
  let fixture: ComponentFixture<SellersDetailComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SellersDetailComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SellersDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
