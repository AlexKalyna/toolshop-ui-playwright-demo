import { Page } from '@playwright/test';
import { PageFactory } from '../interfaces/PageFactory';
import { Sprint5WithBugsLogin } from '../pages/sprint5WithBugs/Sprint5WithBugsLogin.page';
import { Sprint5WithBugsHome } from '../pages/sprint5WithBugs/Sprint5WithBugsHome.page';
import { Sprint5WithBugsContact } from '../pages/sprint5WithBugs/Sprint5WithBugsContact.page';
import { Sprint5WithBugsHeader } from '../pages/sprint5WithBugs/Sprint5WithBugsHeader.page';
import { DefaultPageFactory } from './DefaultPageFactory';
import { Product } from '../../../pages/product.page';

export class Sprint5WithBugsPageFactory implements PageFactory {
  private defaultFactory: DefaultPageFactory;

  constructor(private page: Page) {
    this.defaultFactory = new DefaultPageFactory(page);
  }

  createLoginPage() {
    return new Sprint5WithBugsLogin(this.page);
  }
  createHomePage() {
    return new Sprint5WithBugsHome(this.page);
  }
  createProductPage() {
    // For buggy factory, we don't have an Application instance
    // Return a mock Product that will never be used in buggy tests
    return {} as Product;
  }
  createContactPage() {
    return new Sprint5WithBugsContact(this.page);
  }
  createCategoryPage() {
    return this.defaultFactory.createCategoryPage();
  }
  createRentalsPage() {
    return this.defaultFactory.createRentalsPage();
  }
  createHeaderComponent() {
    return new Sprint5WithBugsHeader(this.page);
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
