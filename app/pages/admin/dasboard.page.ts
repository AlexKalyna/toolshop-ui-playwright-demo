import { expect } from '@playwright/test';
import { step } from '../../../misc/reporters/step';
import { AppPage } from '../../abstractClasses';

export class Dashboard extends AppPage {
  pagePath = 'admin/dashboard';

  private readonly dashboardChart = this.page.locator('.chart');
  private readonly dashboardTable = this.page.locator('.table');

  @step('Dashboard page is opened')
  async expectLoaded() {
    await expect(this.page).toHaveURL(this.pagePath);
    await expect(this.dashboardChart).toBeVisible();
    await expect(this.dashboardTable).toBeVisible();
  }
}
