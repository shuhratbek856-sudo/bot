import { Router } from 'express';
import { authRouter } from './auth.js';
import { assistantRouter } from './assistant.js';
import { projectRouter } from './projects.js';

export const apiRouter = Router();
apiRouter.use('/auth', authRouter);
apiRouter.use('/assistant', assistantRouter);
apiRouter.use('/projects', projectRouter);
