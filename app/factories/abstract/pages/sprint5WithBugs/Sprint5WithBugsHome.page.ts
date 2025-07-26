import { Home } from '../../../../pages/home.page';
import { Page } from '@playwright/test';
import { getBugUrls } from '../../../../../utils/environmentHelper';

export class Sprint5WithBugsHome extends Home {
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
}
