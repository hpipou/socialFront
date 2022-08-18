import { TestBed } from '@angular/core/testing';

import { HeadersinterceptorService } from './headersinterceptor.service';

describe('HeadersinterceptorService', () => {
  let service: HeadersinterceptorService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(HeadersinterceptorService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
