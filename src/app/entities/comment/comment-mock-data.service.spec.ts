import { TestBed } from '@angular/core/testing';

import { CommentMockDataService } from './comment-mock-data.service';

describe('CommentMockDataService', () => {
  let service: CommentMockDataService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CommentMockDataService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
