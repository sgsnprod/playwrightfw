import { test, expect } from '@playwright/test';
import { LoginPage } from '../pages/login.page';

test('getting started should contain table of contents', async ({ page }) => {
  const playwrightDev = new LoginPage(page);
  //await playwrightDev.getStarted;
  await playwrightDev.goto();
  await playwrightDev.getStarted();
  await expect(playwrightDev.tocList).toHaveText([
    `How to install Playwright`,
    `What's Installed`,
    `How to run the example test`,
    `How to open the HTML test report`,
    `Write tests using web first assertions, page fixtures and locators`,
    `Run single test, multiple tests, headed mode`,
    `Generate tests with Codegen`,
    `See a trace of your tests`
  ]);
});

