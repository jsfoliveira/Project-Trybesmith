import { Pool } from 'mysql2/promise';

import Order from '../interfaces/order.interface';

class OrderModel {
  public connection: Pool;

  public constructor(connection: Pool) {
    this.connection = connection;
  }

  // Eu preciso que agrupe pelo id e que o productsId seja retornado em formato de array. Para isso, usei o método JSON_ARRAYAGG, que não conhecia, mas que conheci na mentoria.
  public async getAll(): Promise<Order[]> {
    const query = `
    SELECT O.id, O.userId, JSON_ARRAYAGG(P.id) AS productsIds
    FROM Trybesmith.Orders AS O
    INNER JOIN Trybesmith.Products AS P ON O.id = P.orderId
    GROUP BY O.id
    ORDER BY O.userId ASC`;

    const [result] = await this.connection.query(query);
    return result as Order[];
  }
}

export default OrderModel;