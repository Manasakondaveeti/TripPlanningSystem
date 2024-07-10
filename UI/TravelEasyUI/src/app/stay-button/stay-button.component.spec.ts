import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StayButtonComponent } from './stay-button.component';

describe('StayButtonComponent', () => {
  let component: StayButtonComponent;
  let fixture: ComponentFixture<StayButtonComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [StayButtonComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(StayButtonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
