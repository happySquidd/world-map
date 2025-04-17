import { TestBed } from '@angular/core/testing';

import { CountryinfoService } from './countryinfo.service';

describe('CountryinfoService', () => {
  let service: CountryinfoService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CountryinfoService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
