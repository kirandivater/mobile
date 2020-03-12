import { TestBed } from '@angular/core/testing';

import { DeptmasterService } from './deptmaster.service';

describe('DeptmasterService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: DeptmasterService = TestBed.get(DeptmasterService);
    expect(service).toBeTruthy();
  });
});
