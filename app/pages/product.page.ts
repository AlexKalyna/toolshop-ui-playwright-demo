import { expect, Page } from '@playwright/test';
import { step } from '../../misc/reporters/step';
import { AppPage } from '../abstractClasses';
import { Application } from '..';

export class Product extends AppPage {
  app: Application;

  constructor(page: Page, app: Application) {
    super(page);
    this.page = page;
    this.app = app;
  }

  public pagePath = 'product/**';

  private readonly productDescription = this.page.getByTestId('product-description');
  private readonly addToCartButton = this.page.getByRole('button', { name: 'Add to Cart' });
  private readonly addToFavoritesButton = this.page.getByRole('button', { name: ' Add to favourites' });
  private readonly quantityInput = this.page.getByTestId('quantity');
  private readonly shoppingCartIcon = this.page.getByTestId('nav-cart');

  @step()
  async expectLoaded() {
    await expect(this.page).toHaveURL(this.pagePath);
    if (!this.productDescription) {
      throw new Error('There is no products added to favorites list');
    }
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
    const message = 'Product added to your favorites list.';
    await this.app.base.expectToastMessageToBe(message);
  }

  @step()
  async expectProductIsAddedToCart() {
    const message = 'Product added to shopping cart.';
    await this.app.base.expectToastMessageToBe(message);
    await expect(this.shoppingCartIcon).toBeVisible();
  }

  @step()
  async setQuantity(quantity: number) {
    await this.quantityInput.fill(quantity.toString());
  }
}
