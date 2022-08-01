import express from 'express';
import userRouter from './routes/user.route';
import orderRouter from './routes/order.route';

const app = express();

app.use(express.json());

app.use('/products', userRouter);

app.use('/users', userRouter);

app.use('/orders', orderRouter);

export default app;
