import { TestBed } from '@angular/core/testing';

import { AuthorApiServiceService } from './author-api-service.service';

describe('AuthorApiServiceService', () => {
  let service: AuthorApiServiceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AuthorApiServiceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
