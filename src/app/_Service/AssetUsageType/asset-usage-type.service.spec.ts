import { TestBed } from '@angular/core/testing';

import { AssetUsageTypeServiceService } from './asset-usage-type.service';

describe('AssetUsageTypeServiceService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: AssetUsageTypeServiceService = TestBed.get(AssetUsageTypeServiceService);
    expect(service).toBeTruthy();
  });
});
