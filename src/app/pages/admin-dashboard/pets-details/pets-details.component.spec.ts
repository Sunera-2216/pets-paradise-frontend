import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PetsDetailsComponent } from './pets-details.component';

describe('PetsDetailsComponent', () => {
  let component: PetsDetailsComponent;
  let fixture: ComponentFixture<PetsDetailsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PetsDetailsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PetsDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
