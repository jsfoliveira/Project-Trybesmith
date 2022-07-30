import { Request, Response } from 'express';

import { StatusCodes } from 'http-status-codes';

import ProductsService from '../services/product.service';

class ProductsController {
  constructor(private productsService = new ProductsService()) { }

  public create = async (req: Request, res: Response) => {
    const product = req.body;

    const createdProduct = await this.productsService.create(product);
    res.status(StatusCodes.CREATED).json(createdProduct);
  };

  public getAll = async (req: Request, res: Response) => {
    const result = await this.productsService.getAll();
    res.status(StatusCodes.OK).json(result);
  };
}

export default ProductsController; 