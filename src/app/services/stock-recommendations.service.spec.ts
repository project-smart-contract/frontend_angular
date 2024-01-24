import { TestBed } from '@angular/core/testing';

import { StockRecommendationsService } from './stock-recommendations.service';

describe('StockRecommendationsService', () => {
  let service: StockRecommendationsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(StockRecommendationsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
