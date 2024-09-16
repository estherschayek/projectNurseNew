import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PlaceNurseComponent } from './place-nurse.component';

describe('PlaceNurseComponent', () => {
  let component: PlaceNurseComponent;
  let fixture: ComponentFixture<PlaceNurseComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PlaceNurseComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(PlaceNurseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
