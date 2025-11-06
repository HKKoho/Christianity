import { Router } from 'express';
import { register, login, getProfile } from '../controllers/authController';
import {
  googleAuth,
  googleCallback,
  githubAuth,
  githubCallback,
  whatsappSendOTP,
  whatsappVerifyOTP,
} from '../controllers/oauthController';
import { authenticate } from '../middleware/auth';

export const authRoutes = Router();

// Traditional authentication
authRoutes.post('/register', register);
authRoutes.post('/login', login);
authRoutes.get('/profile', authenticate, getProfile);

// Google OAuth
authRoutes.get('/google', googleAuth);
authRoutes.get('/google/callback', googleCallback);

// GitHub OAuth
authRoutes.get('/github', githubAuth);
authRoutes.get('/github/callback', githubCallback);

// WhatsApp Authentication
authRoutes.post('/whatsapp/send-otp', whatsappSendOTP);
authRoutes.post('/whatsapp/verify-otp', whatsappVerifyOTP);
