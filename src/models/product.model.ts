import { Pool, ResultSetHeader } from 'mysql2/promise';

import Product from '../interfaces/product.interface';

class ProductsModel {
  public connection: Pool;

  public constructor(connection: Pool) {
    this.connection = connection;
  }

  public async create(product: Product): Promise<Product> {
    const {
      name,
      amount,
    } = product;
    const query = `INSERT INTO Trybesmith.Products (name, amount)
    VALUES (?, ?)`;
    const result = await this.connection.execute<ResultSetHeader>(
      query,
      [name, amount],
    );

    const [dataInserted] = result;
    const { insertId } = dataInserted;
    const data = { id: insertId, ...product };
    return data;
  }
}

export default ProductsModel;