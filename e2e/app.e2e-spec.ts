import { AngularRecipePage } from './app.po';

describe('angular-recipe App', () => {
  let page: AngularRecipePage;

  beforeEach(() => {
    page = new AngularRecipePage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!');
  });
});
