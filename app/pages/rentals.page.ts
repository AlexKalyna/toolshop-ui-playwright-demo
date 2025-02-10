import { expect } from '@playwright/test';
import { step } from '../../misc/reporters/step';
import { AppPage } from '../abstractClasses';

export class Rentals extends AppPage {
  public pagePath = '/rentals';

  private readonly title = this.page.getByTestId('page-title');

  @step()
  async expectLoaded() {
    await expect(this.page).toHaveURL(this.pagePath);
    await expect(this.title).toHaveText('Rentals');
  }
}
