import { expect } from '@playwright/test';
import { shopTest } from '../../fixtures';

shopTest(
  'Login page',
  {
    tag: ['@C261569']
  },
  async ({ app, page }) => {
    app.login.open();
    await expect(page).toHaveScreenshot('login-page.png');
  }
);
