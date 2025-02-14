import { expect } from '@playwright/test';
import { shopTest } from '../../fixtures';

shopTest(
  'Home page',
  {
    tag: ['@C261567']
  },
  async ({ app, page }) => {
    await app.home.open();
    await expect(page).toHaveScreenshot('home-page-no-auth-linux.png', {
      mask: [page.getByRole('link', { name: 'Practice Software Testing - Toolshop' })]
    });
  }
);
