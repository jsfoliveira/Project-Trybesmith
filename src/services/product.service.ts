import connection from '../models/connection';
import ProductsModel from '../models/product.model';
import Product from '../interfaces/product.interface';

class ProductService {
  public model: ProductsModel;

  constructor() {
    this.model = new ProductsModel(connection);
  }

  public async create(product: Product): Promise<Product> {
    const result = await this.model.create(product);
    return result;
  }

  public async getAll(): Promise<Product[]> {
    const result = await this.model.getAll();
    return result as Product[];
  }
}

export default ProductService;