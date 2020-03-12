import { TestBed } from '@angular/core/testing';

import { AddressProofService } from './address-proof.service';

describe('AddressProofService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: AddressProofService = TestBed.get(AddressProofService);
    expect(service).toBeTruthy();
  });
});
