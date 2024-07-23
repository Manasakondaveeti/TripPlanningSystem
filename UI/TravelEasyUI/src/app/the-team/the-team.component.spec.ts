import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TheTeamComponent } from './the-team.component';

describe('TheTeamComponent', () => {
  let component: TheTeamComponent;
  let fixture: ComponentFixture<TheTeamComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TheTeamComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TheTeamComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
