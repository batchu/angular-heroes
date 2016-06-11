export class ClientPhrRegPage {
  navigateTo() {
    return browser.get('/');
  }

  getParagraphText() {
    return element(by.css('client-phr-reg-app h1')).getText();
  }
}
