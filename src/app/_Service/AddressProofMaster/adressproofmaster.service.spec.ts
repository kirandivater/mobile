import { TestBed } from '@angular/core/testing';

import { AdressproofmasterService } from './adressproofmaster.service';

describe('AdressproofmasterService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: AdressproofmasterService = TestBed.get(AdressproofmasterService);
    expect(service).toBeTruthy();
  });
});
