import { Request, Response } from 'express';

import { StatusCodes } from 'http-status-codes';

import UserService from '../services/user.service';

class UserController {
  constructor(private userService = new UserService()) { }

  public create = async (req: Request, res: Response) => {
    const user = req.body;

    const result = await this.userService.create(user);
    res.status(StatusCodes.CREATED).json(result);
    // falta validação do token
  };

}

export default UserController; 