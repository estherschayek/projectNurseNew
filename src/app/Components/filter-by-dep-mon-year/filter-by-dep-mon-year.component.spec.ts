import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FilterByDepMonYearComponent } from './filter-by-dep-mon-year.component';

describe('FilterByDepMonYearComponent', () => {
  let component: FilterByDepMonYearComponent;
  let fixture: ComponentFixture<FilterByDepMonYearComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FilterByDepMonYearComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(FilterByDepMonYearComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
