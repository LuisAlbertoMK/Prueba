import { TestBed } from '@angular/core/testing';

import { CargoOrdesService } from './cargo-ordes.service';

describe('CargoOrdesService', () => {
  let service: CargoOrdesService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CargoOrdesService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
