import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NursePersonalCalendarComponent } from './nurse-personal-calendar.component';

describe('NursePersonalCalendarComponent', () => {
  let component: NursePersonalCalendarComponent;
  let fixture: ComponentFixture<NursePersonalCalendarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [NursePersonalCalendarComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(NursePersonalCalendarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
