import { Router } from 'express';
import ProductController from '../controlles/product.controller';

const product = Router();

const productController = new ProductController();
product.post('/', productController.create);

export default product;