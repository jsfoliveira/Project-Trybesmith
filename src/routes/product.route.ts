import { Router } from 'express';
import ProductController from '../controlles/product.controller';

const product = Router();

const productController = new ProductController();

product.post('/', productController.create);

product.get('/', productController.getAll);

export default product;