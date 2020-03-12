import { TestBed } from '@angular/core/testing';

import { UndefinedvaluesService } from './undefinedvalues.service';

describe('UndefinedvaluesService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: UndefinedvaluesService = TestBed.get(UndefinedvaluesService);
    expect(service).toBeTruthy();
  });
});
