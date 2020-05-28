import express from 'express';
import projectController from '../controllers/project.controller';
import { validateProject } from '../helpers/validate.helper';


const router = express.Router();

router.post('/', validateProject, projectController.createProject);


export default router;
