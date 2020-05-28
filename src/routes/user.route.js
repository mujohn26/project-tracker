import express from 'express';
import userController from '../controllers/user.controller';
import { validateUser } from '../helpers/validate.helper';


const router = express.Router();

router.post('/', validateUser, userController.createUser);


export default router;
