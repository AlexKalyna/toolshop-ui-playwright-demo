import { Header } from '../../../../components/header.component';
import { Page } from '@playwright/test';
import { getBugUrls } from '../../../../../utils/environmentHelper';

export class Sprint5WithBugsHeader extends Header {
  constructor(page: Page) {
    super(page);
  }

  async clickHomePage() {
    // Call parent method to click the button
    await super.clickHomePage();
    // Override navigation to use BUG_BASE_URL
    const bugUrls = getBugUrls();
    const baseUrl = bugUrls.BASE_URL.replace(/\/$/, ''); // Remove trailing slash
    await this.page.goto(`${baseUrl}/`);
  }
}
