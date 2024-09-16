import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NurseGenComponent } from './nurse-gen.component';

describe('NurseGenComponent', () => {
  let component: NurseGenComponent;
  let fixture: ComponentFixture<NurseGenComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [NurseGenComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(NurseGenComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
