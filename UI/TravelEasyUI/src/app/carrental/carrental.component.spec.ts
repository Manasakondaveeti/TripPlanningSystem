import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CarRentalListComponent } from './carrental.component';

describe('CarRentalListComponent', () => {
  let component: CarRentalListComponent;
  let fixture: ComponentFixture<CarRentalListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CarRentalListComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(CarRentalListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
