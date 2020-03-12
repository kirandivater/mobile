import { TestBed } from '@angular/core/testing';

import { EngineerDetailsServiceService } from './engineer-details-service.service';

describe('EngineerDetailsServiceService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: EngineerDetailsServiceService = TestBed.get(EngineerDetailsServiceService);
    expect(service).toBeTruthy();
  });
});
