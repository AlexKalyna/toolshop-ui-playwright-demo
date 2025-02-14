import { expect } from '@playwright/test';
import { shopTest } from '../../fixtures';

shopTest(
  'Contact page',
  {
    tag: ['@C261568']
  },
  async ({ app, page }) => {
    await app.contact.open();
    await expect(page).toHaveScreenshot('contact-page-no-auth-linux.png', {
      mask: [page.getByRole('link', { name: 'Practice Software Testing - Toolshop' })]
    });
  }
);
