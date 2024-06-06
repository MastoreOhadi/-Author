import { TestBed } from '@angular/core/testing';

import { AuthorMockDataService } from './author-mock-data.service';

describe('AuthorMockDataServiceService', () => {
  let service: AuthorMockDataService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AuthorMockDataService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

});
