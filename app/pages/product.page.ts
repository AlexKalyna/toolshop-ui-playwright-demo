import { expect } from '@playwright/test';
import { step } from '../../misc/reporters/step';
import { AppPage } from '../abstractClasses';

export class Product extends AppPage {
  public pagePath = 'product/01JKEGXA2QN0WQFDVCFYBEVPS7';

  private readonly productDescription = this.page.getByTestId('product-description');
  private readonly addToCartButton = this.page.getByRole('button', { name: 'Add to Cart' });
  private readonly addToFavoritesButton = this.page.getByRole('button', { name: ' Add to favourites' });
  private readonly quantityInput = this.page.getByTestId('quantity');
  private readonly successToast = this.page.locator('#toast-container.toast-top-right.toast-container');
  private readonly shoppingCartIcon = this.page.getByTestId('nav-cart');
  @step()
  async expectLoaded() {
    await expect(this.page).toHaveURL(this.pagePath);
    await expect(this.productDescription).toBeVisible();
  }

  @step()
  async addToCart() {
    await this.addToCartButton.click();
  }

  @step()
  async addToFavorites() {
    await this.addToFavoritesButton.click();
  }

  @step()
  async expectProductIsAddedToFavorites() {
    await expect(this.successToast).toHaveText('Product added to your favorites list.');
    await this.successToast.click();
  }

  @step()
  async expectProductIsAddedToCart() {
    await expect(this.successToast).toHaveText('Product added to shopping cart.');
    await this.successToast.click();
    await expect(this.shoppingCartIcon).toBeVisible();
  }

  @step()
  async setQuantity(quantity: number) {
    await this.quantityInput.fill(quantity.toString());
  }
}
