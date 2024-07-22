import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OurMissionComponent } from './our-mission.component';

describe('OurMissionComponent', () => {
  let component: OurMissionComponent;
  let fixture: ComponentFixture<OurMissionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [OurMissionComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(OurMissionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
