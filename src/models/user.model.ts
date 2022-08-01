import { Pool, ResultSetHeader } from 'mysql2/promise';

import User from '../interfaces/user.interface';

class UserModel {
  public connection: Pool;

  public constructor(connection: Pool) {
    this.connection = connection;
  }

  public async create(user: User): Promise<User> {
    const { username, classe, level, password } = user;

    const query = `INSERT INTO Trybesmith.Users (username, classe, level, password)
    VALUES (?, ?, ?, ?)`;
    const values = [username, classe, level, password];
  
    const result = await this.connection.query<ResultSetHeader>(query, values);

    const [dataInserted] = result;
    const { insertId } = dataInserted;
  
    return { id: insertId, ...user };
  }
}

export default UserModel;