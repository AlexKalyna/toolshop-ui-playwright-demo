import { expect } from '@playwright/test';
import { shopTest } from '../../fixtures';

shopTest(
  'Login page',
  {
    tag: ['@C261569']
  },
  async ({ app, page }) => {
    await app.login.open();
    await expect(page).toHaveScreenshot('login-page-linux.png', {
      mask: [page.getByRole('link', { name: 'Practice Software Testing - Toolshop' })]
    });
  }
);
