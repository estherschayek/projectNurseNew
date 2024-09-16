import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CalendarNursesForAdminComponent } from './calendar-nurses-for-admin.component';

describe('CalendarNursesForAdminComponent', () => {
  let component: CalendarNursesForAdminComponent;
  let fixture: ComponentFixture<CalendarNursesForAdminComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CalendarNursesForAdminComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(CalendarNursesForAdminComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
