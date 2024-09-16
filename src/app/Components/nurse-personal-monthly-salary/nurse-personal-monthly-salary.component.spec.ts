import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NursePersonalMonthlySalaryComponent } from './nurse-personal-monthly-salary.component';

describe('NursePersonalMonthlySalaryComponent', () => {
  let component: NursePersonalMonthlySalaryComponent;
  let fixture: ComponentFixture<NursePersonalMonthlySalaryComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [NursePersonalMonthlySalaryComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(NursePersonalMonthlySalaryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
