import { expect } from '@playwright/test';
import { AppPage } from '../../abstractClasses';
import { step } from '../../../misc/reporters/step';

export class Favorites extends AppPage {
  public pagePath = 'account/favorites';

  private readonly pageTitle = this.page.getByTestId('page-title');
  private readonly favoriteItem = this.page.locator('.no-gutters');
  private readonly noFavoritesText = this.page.locator(
    '//app-favorites//div[contains(text(), "There are no favorites yet")]'
  );
  private readonly deleteIcon = this.page.getByTestId('delete');

  @step()
  async expectLoaded() {
    await expect(this.page).toHaveURL(this.pagePath);
    await expect(this.pageTitle).toHaveText('Favorites');
  }

  @step()
  async expectEmptyFavoritesList() {
    await expect(this.favoriteItem).toBeVisible({ visible: false });
    await expect(this.noFavoritesText).toBeVisible();
  }

  @step()
  async clickDeleteItem() {
    await this.deleteIcon.click();
  }
}
