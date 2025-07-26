import type { Login } from '../../../pages/login.page';
import type { Home } from '../../../pages/home.page';
import type { Product } from '../../../pages/product.page';
import type { Contact } from '../../../pages/contact.page';
import type { Category } from '../../../pages/category.page';
import type { Rentals } from '../../../pages/rentals.page';
import type { Header } from '../../../components/header.component';
import type { Checkout } from '../../../pages/checkout.page';
import type { Favorites } from '../../../pages/user/favorites.page';
import type { Profile } from '../../../pages/user/profile.page';
import type { Base } from '../../../components/base.components';
import type { Dashboard } from '../../../pages/admin/dasboard.page';

export interface PageFactory {
  createLoginPage(): Login;
  createHomePage(): Home;
  createProductPage(): Product;
  createContactPage(): Contact;
  createCategoryPage(): Category;
  createRentalsPage(): Rentals;
  createHeaderComponent(): Header;
  createCheckoutPage(): Checkout;
  createFavoritesPage(): Favorites;
  createProfilePage(): Profile;
  createBaseComponent(): Base;
  createDashboardPage(): Dashboard;
}
