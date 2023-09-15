import { TestBed } from '@angular/core/testing';

import { PasseportService } from './passeport.service';

describe('PasseportService', () => {
  let service: PasseportService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(PasseportService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
