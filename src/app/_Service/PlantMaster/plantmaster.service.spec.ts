import { TestBed } from '@angular/core/testing';

import { PlantmasterService } from './plantmaster.service';

describe('PlantmasterService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: PlantmasterService = TestBed.get(PlantmasterService);
    expect(service).toBeTruthy();
  });
});
