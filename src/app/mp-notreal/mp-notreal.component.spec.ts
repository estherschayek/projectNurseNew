import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MpNOTREALComponent } from './mp-notreal.component';

describe('MpNOTREALComponent', () => {
  let component: MpNOTREALComponent;
  let fixture: ComponentFixture<MpNOTREALComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MpNOTREALComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(MpNOTREALComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
