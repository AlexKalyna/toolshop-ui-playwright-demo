import { expect } from '@playwright/test';
import { step } from '../../misc/reporters/step';
import { AppPage } from '../abstractClasses';

export class Home extends AppPage {
  public pagePath = '/';

  private readonly priceRangeTitle = this.page.getByText('Price Range');
  private readonly searchInput = this.page.getByPlaceholder('Search');
  private readonly searchButton = this.page.getByRole('button', { name: 'Search' });

  private targetProduct(name: string) {
    return this.page.getByAltText(name);
  }

  @step()
  async expectLoaded(message = 'Expected Home page to be opened') {
    await expect(this.page).toHaveURL(this.pagePath);
    await expect(this.searchInput).toBeVisible();
    await expect(this.priceRangeTitle, message).toBeVisible();
  }

  @step()
  async searchProduct(productName: string) {
    await this.searchInput.fill(productName);
    await this.searchButton.click();
  }

  @step()
  async selectProduct(productName: string) {
    await this.targetProduct(productName).click();
  }
}
