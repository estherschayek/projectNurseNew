import { TestBed } from '@angular/core/testing';

import { DepartementsService } from './departements.service';

describe('DepartementsService', () => {
  let service: DepartementsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(DepartementsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
