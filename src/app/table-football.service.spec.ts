import { TestBed } from '@angular/core/testing';

import { TableFootballService } from './table-football.service';

describe('TableFootballService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: TableFootballService = TestBed.get(TableFootballService);
    expect(service).toBeTruthy();
  });
});
