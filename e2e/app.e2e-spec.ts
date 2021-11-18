import { ManagementuserfrontPage } from './app.po';

describe('managementuserfront App', function() {
  let page: ManagementuserfrontPage;

  beforeEach(() => {
    page = new ManagementuserfrontPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
