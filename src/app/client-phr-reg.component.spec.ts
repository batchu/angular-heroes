import {
  beforeEachProviders,
  describe,
  expect,
  it,
  inject
} from '@angular/core/testing';
import { ClientPhrRegAppComponent } from '../app/client-phr-reg.component';

beforeEachProviders(() => [ClientPhrRegAppComponent]);

describe('App: ClientPhrReg', () => {
  it('should create the app',
      inject([ClientPhrRegAppComponent], (app: ClientPhrRegAppComponent) => {
    expect(app).toBeTruthy();
  }));

  it('should have as title \'client-phr-reg works!\'',
      inject([ClientPhrRegAppComponent], (app: ClientPhrRegAppComponent) => {
    expect(app.title).toEqual('client-phr-reg works!');
  }));
});
