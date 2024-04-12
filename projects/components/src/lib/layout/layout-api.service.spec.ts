import { TestBed } from '@angular/core/testing';

import { LayoutApiService } from './layout-api.service';

describe('LayoutApiService', () => {
  let service: LayoutApiService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(LayoutApiService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
