import { Router } from 'express';
import UserController from '../controlles/user.controller';

const user = Router();

const userController = new UserController();

user.post('/', userController.create);

export default user;