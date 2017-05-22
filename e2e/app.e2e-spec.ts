import { FormationTelnetPage } from './app.po';

describe('formation-telnet App', () => {
  let page: FormationTelnetPage;

  beforeEach(() => {
    page = new FormationTelnetPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
