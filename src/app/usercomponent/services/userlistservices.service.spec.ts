import { TestBed, inject } from '@angular/core/testing';

import { UserlistservicesService } from './userlistservices.service';

describe('UserlistservicesService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [UserlistservicesService]
    });
  });

  it('should be created', inject([UserlistservicesService], (service: UserlistservicesService) => {
    expect(service).toBeTruthy();
  }));
});
