import express from 'express';
import userRoute from './user.route';
import projectRoute from './project.route';

const Router = express.Router();
Router.use('/users', userRoute);
Router.use('/projects', projectRoute);
export default Router;
