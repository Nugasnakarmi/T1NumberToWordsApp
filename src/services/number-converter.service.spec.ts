import { TestBed } from '@angular/core/testing';

import { NumberConverterService } from './number-converter.service';

describe('NumberConverterService', () => {
  let service: NumberConverterService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(NumberConverterService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
