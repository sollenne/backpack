import { BackpackPage } from './app.po';

describe('backpack App', () => {
  let page: BackpackPage;

  beforeEach(() => {
    page = new BackpackPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!!');
  });
});
