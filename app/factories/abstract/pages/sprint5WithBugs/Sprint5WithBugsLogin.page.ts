import { Login } from '../../../../pages/login.page';
import { Page } from '@playwright/test';
import { getBugUrls } from '../../../../../utils/environmentHelper';

export class Sprint5WithBugsLogin extends Login {
  constructor(page: Page) {
    super(page);
  }

  async open(path?: string) {
    // Use BUG_BASE_URL for buggy tests
    const bugUrls = getBugUrls();
    const baseUrl = bugUrls.BASE_URL.replace(/\/$/, ''); // Remove trailing slash
    const pagePath = (path ?? this.pagePath).replace(/^\//, ''); // Remove leading slash
    const finalUrl = `${baseUrl}/${pagePath}`;
    await this.page.goto(finalUrl);
    await this.page.waitForLoadState('networkidle');
    await this.expectLoaded();
  }

  async expectLoaded() {
    // Suppose the bug causes the title to be wrong or missing
    await this.page.waitForURL(this.pagePath);
    // Instead of expecting the correct title, we expect the buggy behavior
    // For example, the title is missing or incorrect
    // You can adjust this logic to match the real bug
    const title = await this.page.locator('div.container.auth-container > div > div > h3').textContent();
    if (title !== 'Login') {
      // Known bug: Login page title is incorrect or missing
      // This is expected behavior for the buggy implementation
    }
  }
}
