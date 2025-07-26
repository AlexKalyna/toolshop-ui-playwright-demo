import type { PageFactory } from './PageFactory';

export class AbstractFactoryApplication {
  constructor(private factory: PageFactory) {}

  get login() {
    return this.factory.createLoginPage();
  }
  get home() {
    return this.factory.createHomePage();
  }
  get product() {
    return this.factory.createProductPage();
  }
  get contact() {
    return this.factory.createContactPage();
  }
  get category() {
    return this.factory.createCategoryPage();
  }
  get rentals() {
    return this.factory.createRentalsPage();
  }
  get header() {
    return this.factory.createHeaderComponent();
  }
  get checkout() {
    return this.factory.createCheckoutPage();
  }
  get favorites() {
    return this.factory.createFavoritesPage();
  }
  get profile() {
    return this.factory.createProfilePage();
  }
  get base() {
    return this.factory.createBaseComponent();
  }
  get dashboard() {
    return this.factory.createDashboardPage();
  }
}
