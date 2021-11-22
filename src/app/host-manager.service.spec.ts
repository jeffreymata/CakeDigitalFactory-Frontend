import { TestBed } from '@angular/core/testing';

import { HostManagerService } from './host-manager.service';

describe('HostManagerService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: HostManagerService = TestBed.get(HostManagerService);
    expect(service).toBeTruthy();
  });
});
