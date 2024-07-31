import { ComponentFixture, TestBed } from '@angular/core/testing';
import { FormsModule } from '@angular/forms';
import { CarRentalListComponent } from './carrental.component';

describe('CarRentalListComponent', () => {
  let component: CarRentalListComponent;
  let fixture: ComponentFixture<CarRentalListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [CarRentalListComponent],
      imports: [FormsModule] // Import FormsModule for ngModel
    }).compileComponents();

    fixture = TestBed.createComponent(CarRentalListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
