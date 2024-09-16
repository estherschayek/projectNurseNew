import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminGenComponent } from './admin-gen.component';

describe('AdminGenComponent', () => {
  let component: AdminGenComponent;
  let fixture: ComponentFixture<AdminGenComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AdminGenComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(AdminGenComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
