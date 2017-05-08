import { HeroStaffingPage } from './app.po';

describe('hero-staffing App', () => {
  let page: HeroStaffingPage;

  beforeEach(() => {
    page = new HeroStaffingPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
