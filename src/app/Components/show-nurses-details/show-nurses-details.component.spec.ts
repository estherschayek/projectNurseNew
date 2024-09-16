import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ShowNursesDetailsComponent } from './show-nurses-details.component';

describe('ShowNursesDetailsComponent', () => {
  let component: ShowNursesDetailsComponent;
  let fixture: ComponentFixture<ShowNursesDetailsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ShowNursesDetailsComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ShowNursesDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
