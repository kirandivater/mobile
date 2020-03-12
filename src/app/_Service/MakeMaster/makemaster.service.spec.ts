import { TestBed } from '@angular/core/testing';

import { MakemasterService } from './makemaster.service';

describe('MakemasterService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: MakemasterService = TestBed.get(MakemasterService);
    expect(service).toBeTruthy();
  });
});
