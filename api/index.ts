import { AuthController } from './auth.controller';
import { ProductController } from './product.controller';
import { RequestHolder } from './requestHolder';

export class API extends RequestHolder {
  public readonly auth = new AuthController(this.request);
  public readonly product = new ProductController(this.request);
}
