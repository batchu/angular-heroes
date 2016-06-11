import { ClientPhrRegPage } from './app.po';

describe('client-phr-reg App', function() {
  let page: ClientPhrRegPage;

  beforeEach(() => {
    page = new ClientPhrRegPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('client-phr-reg works!');
  });
});
