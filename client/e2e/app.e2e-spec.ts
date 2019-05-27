import { QuoNowPage } from './app.po';

describe('quo-now App', () => {
  let page: QuoNowPage;

  beforeEach(() => {
    page = new QuoNowPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!!');
  });
});
