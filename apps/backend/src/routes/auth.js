import { Router } from 'express';
import { startGoogleAuth, googleCallback, getSessionUser, logout } from '../controllers/authController.js';

export const authRouter = Router();
authRouter.get('/google/start', startGoogleAuth);
authRouter.get('/google/callback', googleCallback);
authRouter.get('/me', getSessionUser);
authRouter.post('/logout', logout);
