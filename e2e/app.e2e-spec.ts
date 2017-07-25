import { PersonalProfilePage } from './app.po';

describe('personal-profile App', () => {
  let page: PersonalProfilePage;

  beforeEach(() => {
    page = new PersonalProfilePage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!');
  });
});
