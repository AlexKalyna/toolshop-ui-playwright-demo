import { env } from '../env';
import { ProductData } from '../models/api-models/products';
import { RequestHolder } from './requestHolder';

export class ProductController extends RequestHolder {
  private readonly PRODUCTS_PATH = `${env.API_URL}products`;

  async getProducts(queryString: string = '/'): Promise<ProductData> {
    const productsResponse = await this.request.get(this.PRODUCTS_PATH, { params: queryString });
    return productsResponse.json();
  }
}
