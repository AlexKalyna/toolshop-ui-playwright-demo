import { PageHolder } from './abstractClasses';
import { Login } from './pages/login.page';
import { Home } from './pages/home.page';
import { Product } from './pages/product.page';
import { Contact } from './pages/contact.page';
import { Category } from './pages/category.page';
import { Rentals } from './pages/rentals.page';
import { Header } from './components/header.component';
import { Checkout } from './pages/checkout.page';
import { API } from '../api';
import { Favorites } from './pages/user/favorites.page';
import { Profile } from './pages/user/profile.page';

export class Application extends PageHolder {
  public login = new Login(this.page);
  public home = new Home(this.page);
  public category = new Category(this.page);
  public product = new Product(this.page);
  public contact = new Contact(this.page);
  public rentals = new Rentals(this.page);
  public header = new Header(this.page);
  public checkout = new Checkout(this.page);
  public api = new API(this.page.request);
  public favorites = new Favorites(this.page);
  public profile = new Profile(this.page);

  async headlessLogin(data: { email: string; password: string }) {
    try {
      const response = await this.api.auth.login(data);
      const token = response.access_token;
      if (!token) {
        throw new Error('No access token received');
      }
      await this.setTokenToLocalStorage(token);
      console.log('Token set to local storage successfully');
    } catch (error) {
      console.error('Error during headless login:', error);
    }
  }

  async setTokenToLocalStorage(token: string) {
    await this.page.goto('/', { waitUntil: 'commit' });
    await this.page.evaluate(_token => window.localStorage.setItem('auth-token', _token), token);
  }
}
