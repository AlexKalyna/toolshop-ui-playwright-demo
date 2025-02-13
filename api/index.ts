import { AuthController } from './auth.controller';
import { BaseController } from './base.controller';
import { RequestHolder } from './requestHolder';

export class API extends RequestHolder {
  public readonly auth = new AuthController(this.request);
  public readonly base = new BaseController(this.request);
}
