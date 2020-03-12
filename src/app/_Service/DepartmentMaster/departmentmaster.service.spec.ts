import { TestBed } from '@angular/core/testing';

import { DepartmentmasterService } from './departmentmaster.service';

describe('DepartmentmasterService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: DepartmentmasterService = TestBed.get(DepartmentmasterService);
    expect(service).toBeTruthy();
  });
});
