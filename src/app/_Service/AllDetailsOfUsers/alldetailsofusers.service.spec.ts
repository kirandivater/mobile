import { TestBed } from '@angular/core/testing';

import { AlldetailsofusersService } from './alldetailsofusers.service';

describe('AlldetailsofusersService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: AlldetailsofusersService = TestBed.get(AlldetailsofusersService);
    expect(service).toBeTruthy();
  });
});
