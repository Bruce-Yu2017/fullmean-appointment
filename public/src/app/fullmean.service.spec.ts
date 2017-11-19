import { TestBed, inject } from '@angular/core/testing';

import { FullmeanService } from './fullmean.service';

describe('FullmeanService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [FullmeanService]
    });
  });

  it('should be created', inject([FullmeanService], (service: FullmeanService) => {
    expect(service).toBeTruthy();
  }));
});
