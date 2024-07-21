import { TestBed } from '@angular/core/testing';

import { ScreenLoaderService } from './screen-loader.service';

describe('ScreenLoaderService', () => {
  let service: ScreenLoaderService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ScreenLoaderService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
