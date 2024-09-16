import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FilterByMonYearComponent } from './filter-by-mon-year.component';

describe('FilterByMonYearComponent', () => {
  let component: FilterByMonYearComponent;
  let fixture: ComponentFixture<FilterByMonYearComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FilterByMonYearComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(FilterByMonYearComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
