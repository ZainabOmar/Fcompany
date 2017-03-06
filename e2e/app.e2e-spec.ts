import { CompanyAppPage } from './app.po';

describe('company-app App', () => {
  let page: CompanyAppPage;

  beforeEach(() => {
    page = new CompanyAppPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
