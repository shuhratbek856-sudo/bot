import { Router } from 'express';
import { assistantChat } from '../controllers/assistantController.js';

export const assistantRouter = Router();
assistantRouter.post('/chat', assistantChat);
