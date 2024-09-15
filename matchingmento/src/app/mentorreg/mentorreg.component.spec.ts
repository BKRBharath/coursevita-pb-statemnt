import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MentorregComponent } from './mentorreg.component';

describe('MentorregComponent', () => {
  let component: MentorregComponent;
  let fixture: ComponentFixture<MentorregComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [MentorregComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MentorregComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
