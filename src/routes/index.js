import express from 'express';
import userRoute from './user.route';

const Router = express.Router();
Router.use('/users', userRoute);
export default Router;
