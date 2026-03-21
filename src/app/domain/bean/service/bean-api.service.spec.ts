import { TestBed } from '@angular/core/testing';

import { BeanApiService } from './bean-api.service';

describe('BeanApiService', () => {
  let service: BeanApiService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(BeanApiService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
