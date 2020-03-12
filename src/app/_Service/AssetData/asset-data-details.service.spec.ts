import { TestBed } from '@angular/core/testing';

import { AssetDataDetailsService } from './asset-data-details.service';

describe('AssetDataDetailsService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: AssetDataDetailsService = TestBed.get(AssetDataDetailsService);
    expect(service).toBeTruthy();
  });
});
