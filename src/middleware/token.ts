import jwt from 'jsonwebtoken';
import Users from '../interfaces/user.interface';

const tokenMiddleware = {
  create: (users: Users) => {
    const token = jwt.sign({ users }, 'senhasecreta');
    return token;
  },
};
export default tokenMiddleware;