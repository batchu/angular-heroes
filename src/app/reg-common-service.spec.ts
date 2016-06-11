import {
  beforeEachProviders,
  it,
  describe,
  expect,
  inject
} from '@angular/core/testing';
import { RegCommonService } from './reg-common-service';

describe('RegCommonService Service', () => {
  beforeEachProviders(() => [RegCommonService]);

  it('should ...',
      inject([RegCommonService], (service: RegCommonService) => {
    expect(service).toBeTruthy();
  }));
});
