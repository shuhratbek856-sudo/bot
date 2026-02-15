import { Router } from 'express';
import { listProjects, createProject } from '../controllers/projectController.js';

export const projectRouter = Router();
projectRouter.get('/', listProjects);
projectRouter.post('/', createProject);
