import express from 'express';
import taskController from '../controllers/task.controller';
import { validateTask } from '../helpers/validate.helper';


const router = express.Router();

router.post('/', validateTask, taskController.createTask);
router.get('/', taskController.getTasks);


export default router;
