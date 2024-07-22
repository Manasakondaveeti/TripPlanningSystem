import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OurStoryComponent } from './our-story.component';

describe('OurStoryComponent', () => {
  let component: OurStoryComponent;
  let fixture: ComponentFixture<OurStoryComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [OurStoryComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(OurStoryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
