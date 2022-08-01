import { Request, Response } from 'express';

import { StatusCodes } from 'http-status-codes';

import UserService from '../services/user.service';

import tokenMiddleware from '../middleware/token';

class UserController {
  constructor(private usersService = new UserService()) { }

  public create = async (req: Request, res: Response) => {
    const users = req.body;
    const result = await this.usersService.create(users);

    const token = tokenMiddleware.create(result);

    res.status(StatusCodes.CREATED).json({ token });
  };
}

export default UserController; 