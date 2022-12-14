import { Request, Response } from 'express';

import { StatusCodes } from 'http-status-codes';

import OrderService from '../services/order.service';

class OrderController {
  constructor(private orderService = new OrderService()) { }

  public getAll = async (req: Request, res: Response) => {
    const result = await this.orderService.getAll();
    res.status(StatusCodes.OK).json(result);
  };
}

export default OrderController; 