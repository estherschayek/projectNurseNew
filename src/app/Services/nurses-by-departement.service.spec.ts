import { TestBed } from '@angular/core/testing';

import { NursesByDepartementService } from './nurses-by-departement.service';

describe('NursesByDepartementService', () => {
  let service: NursesByDepartementService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(NursesByDepartementService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
