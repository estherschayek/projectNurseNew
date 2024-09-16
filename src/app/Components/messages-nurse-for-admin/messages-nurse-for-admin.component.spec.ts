import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MessagesNurseForAdminComponent } from './messages-nurse-for-admin.component';

describe('MessagesNurseForAdminComponent', () => {
  let component: MessagesNurseForAdminComponent;
  let fixture: ComponentFixture<MessagesNurseForAdminComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MessagesNurseForAdminComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(MessagesNurseForAdminComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
