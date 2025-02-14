import { expect } from '@playwright/test';
import { shopTest } from '../../fixtures';

shopTest(
  'Contact page',
  {
    tag: ['@C261568']
  },
  async ({ app, page }) => {
    app.contact.open();
    await expect(page).toHaveScreenshot('contact-page-no-auth.png');
  }
);
