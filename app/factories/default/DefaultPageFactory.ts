import { Page } from '@playwright/test';
import { PageFactory } from '../PageFactory';
import { Login } from '../../pages/login.page';
import { Home } from '../../pages/home.page';
import { Product } from '../../pages/product.page';
import { Contact } from '../../pages/contact.page';
import { Category } from '../../pages/category.page';
import { Rentals } from '../../pages/rentals.page';
import { Header } from '../../components/header.component';
import { Checkout } from '../../pages/checkout.page';
import { Favorites } from '../../pages/user/favorites.page';
import { Profile } from '../../pages/user/profile.page';
import { Base } from '../../components/base.components';
import { Dashboard } from '../../pages/admin/dasboard.page';

export class DefaultPageFactory implements PageFactory {
  constructor(private page: Page) {}

  createLoginPage() {
    return new Login(this.page);
  }
  createHomePage() {
    return new Home(this.page);
  }
  createProductPage() {
    return new Product(this.page);
  }
  createContactPage() {
    return new Contact(this.page);
  }
  createCategoryPage() {
    return new Category(this.page);
  }
  createRentalsPage() {
    return new Rentals(this.page);
  }
  createHeaderComponent() {
    return new Header(this.page);
  }
  createCheckoutPage() {
    return new Checkout(this.page);
  }
  createFavoritesPage() {
    return new Favorites(this.page);
  }
  createProfilePage() {
    return new Profile(this.page);
  }
  createBaseComponent() {
    return new Base(this.page);
  }
  createDashboardPage() {
    return new Dashboard(this.page);
  }
}
