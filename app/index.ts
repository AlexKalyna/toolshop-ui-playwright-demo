import { PageHolder } from './abstractClasses';
import { Login } from './pages/login.page';
import { Home } from './pages/home.page';
import { Product } from './pages/product.page';
import { Contact } from './pages/contact.page';
import { Category } from './pages/category.page';
import { Rentals } from './pages/rentals.page';

export class Application extends PageHolder {
  public login = new Login(this.page);
  public home = new Home(this.page);
  public category = new Category(this.page);
  public product = new Product(this.page);
  public contact = new Contact(this.page);
  public rentals = new Rentals(this.page);

  //   async headlessLogin(data: { email: string; password: string }) {
  //     const token = (await this.api.auth.login(data)).token;
  //     await this.setTokenToLocalStorage(token);
  //   }

  //   async setTokenToLocalStorage(token: string) {
  //     await this.page.goto("/", { waitUntil: "commit" });
  //     await this.page.evaluate(
  //       (_token) => window.localStorage.setItem("token", _token),
  //       token
  //     );
  // }
}
