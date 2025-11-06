import { Request, Response } from 'express';
import jwt from 'jsonwebtoken';
import { getDB } from '../lib/db';
import { User, sanitizeUser } from '../models/User';
import { WithId } from 'mongodb';

// Type definitions for OAuth responses
interface GoogleTokenResponse {
  access_token: string;
}

interface GoogleUserInfo {
  id: string;
  name: string;
  email: string;
  picture: string;
}

interface GitHubTokenResponse {
  access_token: string;
}

interface GitHubUserInfo {
  id: number;
  login: string;
  name: string | null;
  email: string | null;
  avatar_url: string;
}

interface GitHubEmail {
  email: string;
  primary: boolean;
  verified: boolean;
}

// Helper function to generate JWT token
function generateToken(user: WithId<User>): string {
  const jwtSecret = process.env.JWT_SECRET || 'fallback-secret-key';
  return jwt.sign(
    { id: user._id.toString(), email: user.email, name: user.name },
    jwtSecret,
    { expiresIn: '7d' }
  );
}

// Google OAuth - Initiate
export const googleAuth = (req: Request, res: Response) => {
  const googleAuthUrl = `https://accounts.google.com/o/oauth2/v2/auth?client_id=${process.env.GOOGLE_CLIENT_ID}&redirect_uri=${process.env.GOOGLE_CALLBACK_URL}&response_type=code&scope=profile email`;
  res.redirect(googleAuthUrl);
};

// Google OAuth - Callback
export const googleCallback = async (req: Request, res: Response) => {
  try {
    const { code } = req.query;

    if (!code) {
      return res.redirect(`${process.env.FRONTEND_URL}/register?error=no_code`);
    }

    // Exchange code for tokens
    const tokenResponse = await fetch('https://oauth2.googleapis.com/token', {
      method: 'POST',
      headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
      body: new URLSearchParams({
        code: code as string,
        client_id: process.env.GOOGLE_CLIENT_ID!,
        client_secret: process.env.GOOGLE_CLIENT_SECRET!,
        redirect_uri: process.env.GOOGLE_CALLBACK_URL!,
        grant_type: 'authorization_code',
      }),
    });

    const tokens = (await tokenResponse.json()) as GoogleTokenResponse;

    // Get user info
    const userInfoResponse = await fetch('https://www.googleapis.com/oauth2/v2/userinfo', {
      headers: { Authorization: `Bearer ${tokens.access_token}` },
    });

    const googleUser = (await userInfoResponse.json()) as GoogleUserInfo;

    // Find or create user
    const db = getDB();
    const usersCollection = db.collection<User>('users');

    let user = await usersCollection.findOne({ email: googleUser.email });

    if (!user) {
      // Create new user
      const newUser: User = {
        name: googleUser.name,
        email: googleUser.email,
        password: '', // No password for OAuth users
        role: 'user',
        authProvider: 'google',
        authProviderId: googleUser.id,
        profilePicture: googleUser.picture,
        createdAt: new Date(),
        updatedAt: new Date(),
      };

      const result = await usersCollection.insertOne(newUser);
      user = { ...newUser, _id: result.insertedId };
    } else if (!user.authProvider) {
      // Link Google account to existing user
      await usersCollection.updateOne(
        { _id: user._id },
        {
          $set: {
            authProvider: 'google' as const,
            authProviderId: googleUser.id,
            profilePicture: googleUser.picture,
            updatedAt: new Date(),
          },
        }
      );
      user.authProvider = 'google';
      user.authProviderId = googleUser.id;
      user.profilePicture = googleUser.picture;
    }

    // Generate token
    const token = generateToken(user);

    // Redirect to frontend with token
    res.redirect(`${process.env.FRONTEND_URL}/auth/callback?token=${token}&provider=google`);
  } catch (error) {
    console.error('Google OAuth error:', error);
    res.redirect(`${process.env.FRONTEND_URL}/register?error=oauth_failed`);
  }
};

// GitHub OAuth - Initiate
export const githubAuth = (req: Request, res: Response) => {
  const githubAuthUrl = `https://github.com/login/oauth/authorize?client_id=${process.env.GITHUB_CLIENT_ID}&redirect_uri=${process.env.GITHUB_CALLBACK_URL}&scope=user:email`;
  res.redirect(githubAuthUrl);
};

// GitHub OAuth - Callback
export const githubCallback = async (req: Request, res: Response) => {
  try {
    const { code } = req.query;

    if (!code) {
      return res.redirect(`${process.env.FRONTEND_URL}/register?error=no_code`);
    }

    // Exchange code for access token
    const tokenResponse = await fetch('https://github.com/login/oauth/access_token', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        Accept: 'application/json',
      },
      body: JSON.stringify({
        client_id: process.env.GITHUB_CLIENT_ID,
        client_secret: process.env.GITHUB_CLIENT_SECRET,
        code: code as string,
        redirect_uri: process.env.GITHUB_CALLBACK_URL,
      }),
    });

    const tokens = (await tokenResponse.json()) as GitHubTokenResponse;

    // Get user info
    const userInfoResponse = await fetch('https://api.github.com/user', {
      headers: {
        Authorization: `Bearer ${tokens.access_token}`,
        Accept: 'application/json',
      },
    });

    const githubUser = (await userInfoResponse.json()) as GitHubUserInfo;

    // Get user emails
    const emailsResponse = await fetch('https://api.github.com/user/emails', {
      headers: {
        Authorization: `Bearer ${tokens.access_token}`,
        Accept: 'application/json',
      },
    });

    const emails = (await emailsResponse.json()) as GitHubEmail[];
    const primaryEmail = emails.find((e) => e.primary)?.email || emails[0]?.email || `${githubUser.login}@github.user`;

    // Find or create user
    const db = getDB();
    const usersCollection = db.collection<User>('users');

    let user = await usersCollection.findOne({ email: primaryEmail });

    if (!user) {
      // Create new user
      const newUser: User = {
        name: githubUser.name || githubUser.login,
        email: primaryEmail,
        password: '', // No password for OAuth users
        role: 'user',
        authProvider: 'github',
        authProviderId: githubUser.id.toString(),
        profilePicture: githubUser.avatar_url,
        createdAt: new Date(),
        updatedAt: new Date(),
      };

      const result = await usersCollection.insertOne(newUser);
      user = { ...newUser, _id: result.insertedId };
    } else if (!user.authProvider) {
      // Link GitHub account to existing user
      await usersCollection.updateOne(
        { _id: user._id },
        {
          $set: {
            authProvider: 'github' as const,
            authProviderId: githubUser.id.toString(),
            profilePicture: githubUser.avatar_url,
            updatedAt: new Date(),
          },
        }
      );
      user.authProvider = 'github';
      user.authProviderId = githubUser.id.toString();
      user.profilePicture = githubUser.avatar_url;
    }

    // Generate token
    const token = generateToken(user);

    // Redirect to frontend with token
    res.redirect(`${process.env.FRONTEND_URL}/auth/callback?token=${token}&provider=github`);
  } catch (error) {
    console.error('GitHub OAuth error:', error);
    res.redirect(`${process.env.FRONTEND_URL}/register?error=oauth_failed`);
  }
};

// WhatsApp Authentication - Send OTP
export const whatsappSendOTP = async (req: Request, res: Response) => {
  try {
    const { phoneNumber } = req.body;

    if (!phoneNumber) {
      return res.status(400).json({ message: 'Phone number is required' });
    }

    // Generate 6-digit OTP
    const otp = Math.floor(100000 + Math.random() * 900000).toString();

    // Store OTP in database with expiration (5 minutes)
    const db = getDB();
    const otpCollection = db.collection('otps');

    await otpCollection.insertOne({
      phoneNumber,
      otp,
      createdAt: new Date(),
      expiresAt: new Date(Date.now() + 5 * 60 * 1000), // 5 minutes
    });

    // Send OTP via WhatsApp Business API
    if (process.env.WHATSAPP_ACCESS_TOKEN && process.env.WHATSAPP_PHONE_NUMBER_ID) {
      await fetch(`https://graph.facebook.com/v18.0/${process.env.WHATSAPP_PHONE_NUMBER_ID}/messages`, {
        method: 'POST',
        headers: {
          Authorization: `Bearer ${process.env.WHATSAPP_ACCESS_TOKEN}`,
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          messaging_product: 'whatsapp',
          to: phoneNumber,
          type: 'text',
          text: {
            body: `Your Christian Platform verification code is: ${otp}. This code expires in 5 minutes.`,
          },
        }),
      });
    }

    res.json({ message: 'OTP sent successfully' });
  } catch (error) {
    console.error('WhatsApp OTP error:', error);
    res.status(500).json({ message: 'Failed to send OTP' });
  }
};

// WhatsApp Authentication - Verify OTP
export const whatsappVerifyOTP = async (req: Request, res: Response) => {
  try {
    const { phoneNumber, otp, name } = req.body;

    if (!phoneNumber || !otp) {
      return res.status(400).json({ message: 'Phone number and OTP are required' });
    }

    // Verify OTP
    const db = getDB();
    const otpCollection = db.collection('otps');

    const otpRecord = await otpCollection.findOne({
      phoneNumber,
      otp,
      expiresAt: { $gt: new Date() },
    });

    if (!otpRecord) {
      return res.status(400).json({ message: 'Invalid or expired OTP' });
    }

    // Delete used OTP
    await otpCollection.deleteOne({ _id: otpRecord._id });

    // Find or create user
    const usersCollection = db.collection<User>('users');
    const email = `${phoneNumber}@whatsapp.user`;

    let user = await usersCollection.findOne({ phoneNumber });

    if (!user) {
      // Create new user
      const newUser: User = {
        name: name || phoneNumber,
        email,
        password: '', // No password for OAuth users
        role: 'user',
        authProvider: 'whatsapp',
        authProviderId: phoneNumber,
        phoneNumber,
        createdAt: new Date(),
        updatedAt: new Date(),
      };

      const result = await usersCollection.insertOne(newUser);
      user = { ...newUser, _id: result.insertedId };
    }

    // Generate token
    const token = generateToken(user);

    res.json({
      token,
      user: sanitizeUser(user),
    });
  } catch (error) {
    console.error('WhatsApp verify error:', error);
    res.status(500).json({ message: 'Failed to verify OTP' });
  }
};
