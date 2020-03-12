import { TestBed } from '@angular/core/testing';

import { BalUserDetailsService } from './bal-user-details.service';

describe('BalUserDetailsServiceService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: BalUserDetailsService = TestBed.get(BalUserDetailsService);
    expect(service).toBeTruthy();
  });
});
