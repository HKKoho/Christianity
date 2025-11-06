# OAuth Authentication Setup Guide

This guide explains how to set up OAuth authentication for the Christian Platform using Google, GitHub, and WhatsApp.

## Table of Contents
1. [Google OAuth Setup](#google-oauth-setup)
2. [GitHub OAuth Setup](#github-oauth-setup)
3. [WhatsApp Business API Setup](#whatsapp-business-api-setup)
4. [Environment Variables](#environment-variables)
5. [Testing OAuth Flows](#testing-oauth-flows)

---

## Google OAuth Setup

### 1. Create a Google Cloud Project
1. Go to [Google Cloud Console](https://console.cloud.google.com/)
2. Create a new project or select an existing one
3. Navigate to "APIs & Services" > "Credentials"

### 2. Configure OAuth Consent Screen
1. Click "OAuth consent screen" in the left sidebar
2. Select "External" user type
3. Fill in the required fields:
   - App name: `Christian Platform`
   - User support email: Your email
   - Developer contact information: Your email
4. Add scopes: `userinfo.email`, `userinfo.profile`
5. Add test users (for testing phase)
6. Click "Save and Continue"

### 3. Create OAuth 2.0 Credentials
1. Click "Create Credentials" > "OAuth client ID"
2. Application type: "Web application"
3. Name: `Christian Platform Web`
4. Authorized JavaScript origins:
   - `http://localhost:5173` (development)
   - `https://christianityplatform.vercel.app` (production)
5. Authorized redirect URIs:
   - `http://localhost:3001/api/auth/google/callback` (development)
   - `https://your-backend-url.railway.app/api/auth/google/callback` (production)
6. Click "Create"
7. Copy the **Client ID** and **Client Secret**

### 4. Update Environment Variables
Add to `backend-api/.env`:
```env
GOOGLE_CLIENT_ID=your-google-client-id-here
GOOGLE_CLIENT_SECRET=your-google-client-secret-here
GOOGLE_CALLBACK_URL=http://localhost:3001/api/auth/google/callback
```

---

## GitHub OAuth Setup

### 1. Create OAuth App
1. Go to [GitHub Settings](https://github.com/settings/developers)
2. Click "OAuth Apps" > "New OAuth App"
3. Fill in the details:
   - Application name: `Christian Platform`
   - Homepage URL: `https://christianityplatform.vercel.app`
   - Authorization callback URL: `http://localhost:3001/api/auth/github/callback`
4. Click "Register application"

### 2. Generate Client Secret
1. After creating the app, click "Generate a new client secret"
2. Copy the **Client ID** and **Client Secret** immediately (you won't see the secret again)

### 3. Update Environment Variables
Add to `backend-api/.env`:
```env
GITHUB_CLIENT_ID=your-github-client-id-here
GITHUB_CLIENT_SECRET=your-github-client-secret-here
GITHUB_CALLBACK_URL=http://localhost:3001/api/auth/github/callback
```

---

## WhatsApp Business API Setup

### 1. Create Facebook Developer Account
1. Go to [Facebook for Developers](https://developers.facebook.com/)
2. Create an account or log in
3. Click "My Apps" > "Create App"

### 2. Set Up WhatsApp Business API
1. Select "Business" as app type
2. Fill in app details and create the app
3. Add "WhatsApp" product to your app
4. Follow the setup wizard

### 3. Get Phone Number ID and Access Token
1. In the WhatsApp setup, you'll receive a test phone number
2. Copy the **Phone Number ID**
3. Generate a **Temporary Access Token** (for testing)
4. For production, create a **Permanent Access Token**

### 4. Set Up Webhook (for receiving messages)
1. Create a verify token (any random string)
2. Set webhook URL: `https://your-backend-url/api/auth/whatsapp/webhook`
3. Subscribe to `messages` events

### 5. Update Environment Variables
Add to `backend-api/.env`:
```env
WHATSAPP_PHONE_NUMBER_ID=your-phone-number-id-here
WHATSAPP_ACCESS_TOKEN=your-access-token-here
WHATSAPP_VERIFY_TOKEN=your-verify-token-here
```

---

## Environment Variables

### Backend (.env)
```env
# OAuth Configuration
GOOGLE_CLIENT_ID=your-google-client-id
GOOGLE_CLIENT_SECRET=your-google-client-secret
GOOGLE_CALLBACK_URL=http://localhost:3001/api/auth/google/callback

GITHUB_CLIENT_ID=your-github-client-id
GITHUB_CLIENT_SECRET=your-github-client-secret
GITHUB_CALLBACK_URL=http://localhost:3001/api/auth/github/callback

WHATSAPP_PHONE_NUMBER_ID=your-whatsapp-phone-number-id
WHATSAPP_ACCESS_TOKEN=your-whatsapp-access-token
WHATSAPP_VERIFY_TOKEN=your-whatsapp-verify-token
```

### Frontend (.env.local)
```env
VITE_API_URL=http://localhost:3001
```

---

## Testing OAuth Flows

### Local Development

1. **Start Backend**:
   ```bash
   cd backend-api
   npm run dev
   ```

2. **Start Frontend**:
   ```bash
   cd main-platform
   npm run dev
   ```

3. **Test Google OAuth**:
   - Go to `http://localhost:5173/register`
   - Check the "I agree to Terms" checkbox
   - Click "Continue with Google"
   - You should be redirected to Google login
   - After successful login, you'll be redirected back to the dashboard

4. **Test GitHub OAuth**:
   - Same as Google, but click "Continue with GitHub"
   - Authorize the app on GitHub
   - You'll be redirected back to the dashboard

5. **Test WhatsApp OTP** (requires WhatsApp Business API setup):
   - Currently requires custom implementation for phone number input
   - Send OTP: POST to `/api/auth/whatsapp/send-otp` with `{ "phoneNumber": "+1234567890" }`
   - Verify OTP: POST to `/api/auth/whatsapp/verify-otp` with `{ "phoneNumber": "+1234567890", "otp": "123456", "name": "John Doe" }`

### Production Deployment

1. **Update OAuth Redirect URIs**:
   - Google: Add production URLs in Google Cloud Console
   - GitHub: Add production URLs in GitHub OAuth App settings

2. **Update Environment Variables**:
   - Set production callback URLs in Railway/Vercel
   - Update `FRONTEND_URL` to production URL

3. **Test Each Flow**:
   - Test all OAuth providers in production
   - Verify user creation and login

---

## Troubleshooting

### Google OAuth Issues
- **Error: redirect_uri_mismatch**: Make sure the callback URL in code matches exactly with Google Cloud Console
- **Error: access_denied**: User didn't grant permissions or app not verified

### GitHub OAuth Issues
- **Error: Application not found**: Check GitHub OAuth App settings
- **Error: redirect_uri_mismatch**: Verify callback URL matches GitHub app settings

### WhatsApp Issues
- **OTP not received**: Check WhatsApp Business API configuration
- **Invalid token**: Regenerate access token in Meta Business Suite

### General Issues
- **CORS errors**: Verify `CORS_ORIGIN` in backend includes frontend URL
- **Token invalid**: Check JWT_SECRET is set correctly
- **Database errors**: Verify MongoDB connection string

---

## Security Best Practices

1. **Never commit `.env` files** to version control
2. **Use environment variables** for all sensitive data
3. **Rotate OAuth secrets** regularly
4. **Use HTTPS** in production
5. **Implement rate limiting** for OTP requests
6. **Verify email ownership** before account creation
7. **Add CSRF protection** for production

---

## Next Steps

1. Implement WhatsApp OTP UI in frontend
2. Add email verification for email/password registration
3. Implement account linking (allow users to connect multiple OAuth providers)
4. Add social login buttons to Login page (currently only on Register)
5. Implement "Sign in with Apple" (if needed)

---

## Support

For issues or questions:
- Email: support@christianplatform.com
- GitHub Issues: [Create an issue](https://github.com/your-repo/issues)
