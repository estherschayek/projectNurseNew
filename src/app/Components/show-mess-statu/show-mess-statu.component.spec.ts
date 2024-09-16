import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ShowMessStatuComponent } from './show-mess-statu.component';

describe('ShowMessStatuComponent', () => {
  let component: ShowMessStatuComponent;
  let fixture: ComponentFixture<ShowMessStatuComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ShowMessStatuComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ShowMessStatuComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
