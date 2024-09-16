import { TestBed } from '@angular/core/testing';

import { ValidationFunService } from './validation-fun.service';

describe('ValidationFunService', () => {
  let service: ValidationFunService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ValidationFunService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
