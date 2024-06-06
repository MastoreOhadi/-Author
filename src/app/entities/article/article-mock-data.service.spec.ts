import { TestBed } from '@angular/core/testing';

import { ArticleMockDataService } from './article-mock-data.service';

describe('ArticleMockDataService', () => {
  let service: ArticleMockDataService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ArticleMockDataService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
