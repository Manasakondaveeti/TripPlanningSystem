import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HotelsComponent } from './hotel-list.component';

describe('HotelListComponent', () => {
  let component: HotelsComponent;
  let fixture: ComponentFixture<HotelsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [HotelsComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(HotelsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
