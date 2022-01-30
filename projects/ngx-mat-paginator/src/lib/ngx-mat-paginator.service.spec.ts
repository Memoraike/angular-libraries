import { TestBed } from '@angular/core/testing';

import { NgxMatPaginatorService } from './ngx-mat-paginator.service';

describe('NgxMatPaginatorService', () => {
  let service: NgxMatPaginatorService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(NgxMatPaginatorService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
