import express from 'express';
import userRoute from './user.route';
import projectRoute from './project.route';
import taskRoute from './task.route';

const Router = express.Router();
Router.use('/users', userRoute);
Router.use('/projects', projectRoute);
Router.use('/tasks', taskRoute);
export default Router;
