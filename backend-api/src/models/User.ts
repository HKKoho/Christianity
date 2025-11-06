import { ObjectId } from 'mongodb';

export interface User {
  _id?: ObjectId;
  name: string;
  email: string;
  password: string;
  role?: string;
  authProvider?: 'google' | 'github' | 'whatsapp' | 'email';
  authProviderId?: string;
  profilePicture?: string;
  phoneNumber?: string; // For WhatsApp authentication
  createdAt: Date;
  updatedAt: Date;
}

export interface UserResponse {
  id: string;
  name: string;
  email: string;
  role?: string;
  authProvider?: string;
  profilePicture?: string;
  createdAt: Date;
}

export function sanitizeUser(user: User): UserResponse {
  return {
    id: user._id!.toString(),
    name: user.name,
    email: user.email,
    role: user.role,
    authProvider: user.authProvider,
    profilePicture: user.profilePicture,
    createdAt: user.createdAt,
  };
}
