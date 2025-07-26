import { Page } from '@playwright/test';
import { PageFactory } from '../PageFactory';
import { Sprint5WithBugsLogin } from './Sprint5WithBugsLogin.page';
import { DefaultPageFactory } from '../default/DefaultPageFactory';

export class Sprint5WithBugsPageFactory implements PageFactory {
  private defaultFactory: DefaultPageFactory;

  constructor(private page: Page) {
    this.defaultFactory = new DefaultPageFactory(page);
  }

  createLoginPage() {
    return new Sprint5WithBugsLogin(this.page);
  }
  createHomePage() {
    return this.defaultFactory.createHomePage();
  }
  createProductPage() {
    return this.defaultFactory.createProductPage();
  }
  createContactPage() {
    return this.defaultFactory.createContactPage();
  }
  createCategoryPage() {
    return this.defaultFactory.createCategoryPage();
  }
  createRentalsPage() {
    return this.defaultFactory.createRentalsPage();
  }
  createHeaderComponent() {
    return this.defaultFactory.createHeaderComponent();
  }
  createCheckoutPage() {
    return this.defaultFactory.createCheckoutPage();
  }
  createFavoritesPage() {
    return this.defaultFactory.createFavoritesPage();
  }
  createProfilePage() {
    return this.defaultFactory.createProfilePage();
  }
  createBaseComponent() {
    return this.defaultFactory.createBaseComponent();
  }
  createDashboardPage() {
    return this.defaultFactory.createDashboardPage();
  }
}
