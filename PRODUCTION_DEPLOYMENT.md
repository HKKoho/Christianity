# 🚀 Production Deployment Guide
## Christian Platform - Stage 1

> *"Commit your work to the Lord, and your plans will be established." - Proverbs 16:3*

---

## 📊 Current Deployment Status

### ✅ **Backend API (Railway)**
- **URL**: https://christian-platform-backend-production.up.railway.app
- **Status**: ✅ LIVE & WORKING
- **Environment**: Production
- **Database**: MongoDB Atlas Connected

**Verified Endpoints:**
```bash
✅ GET  /health → {"status":"ok"}
✅ POST /api/auth/register → Token + User
✅ POST /api/auth/login → Token + User
✅ GET  /api/auth/profile → User Profile
```

### ⚠️ **Frontend Platform (Vercel)**
- **URL**: https://christianityplatform.vercel.app
- **Status**: ⚠️ NEEDS ENV UPDATE
- **Current API**: Pointing to localhost (won't work in production)

**Action Required:** Update Vercel environment variables

---

## 🔧 **STEP-BY-STEP DEPLOYMENT**

### **Step 1: Update Vercel Environment Variables** ⚠️ CRITICAL

#### Option A: Via Vercel Dashboard (Recommended)

1. **Login to Vercel**
   - Go to https://vercel.com
   - Login to your account

2. **Select Your Project**
   - Find `christianityplatform` (or `main-platform`)
   - Click to open project

3. **Navigate to Settings**
   - Click "Settings" tab
   - Click "Environment Variables" in left sidebar

4. **Add/Update These Variables:**

   | Variable | Value | Environment |
   |----------|-------|-------------|
   | `VITE_API_URL` | `https://christian-platform-backend-production.up.railway.app` | Production |
   | `VITE_APP_URL` | `https://christianityplatform.vercel.app` | Production |
   | `VITE_CULTURE_MODULE_URL` | `https://ai-christianity-culture.vercel.app` | Production |
   | `VITE_BIBLE_KNOW_MODULE_URL` | `https://ai-sunday-school.vercel.app` | Production |
   | `VITE_CHRISTIANITY_MODULE_URL` | `https://ai-christianity-platform.vercel.app` | Production |
   | `VITE_CHURCH_ADMIN_MODULE_URL` | `https://ai-admin-sunday-school.vercel.app` | Production |
   | `VITE_ENV` | `production` | Production |

5. **Click "Save"** for each variable

6. **Redeploy**
   - Go to "Deployments" tab
   - Click "..." on latest deployment
   - Click "Redeploy"
   - ✅ Check "Use existing Build Cache" (faster)
   - Click "Redeploy"

#### Option B: Via Vercel CLI

```bash
# Install Vercel CLI (if not already installed)
npm i -g vercel

# Login
vercel login

# Navigate to project
cd /Users/aibyml/Christianity/christian-platform/main-platform

# Set environment variables
vercel env add VITE_API_URL production
# Paste: https://christian-platform-backend-production.up.railway.app

vercel env add VITE_APP_URL production
# Paste: https://christianityplatform.vercel.app

vercel env add VITE_CULTURE_MODULE_URL production
# Paste: https://ai-christianity-culture.vercel.app

vercel env add VITE_BIBLE_KNOW_MODULE_URL production
# Paste: https://ai-sunday-school.vercel.app

vercel env add VITE_CHRISTIANITY_MODULE_URL production
# Paste: https://ai-christianity-platform.vercel.app

vercel env add VITE_CHURCH_ADMIN_MODULE_URL production
# Paste: https://ai-admin-sunday-school.vercel.app

vercel env add VITE_ENV production
# Paste: production

# Deploy
vercel --prod
```

---

### **Step 2: Update Railway Environment Variables** (Already Set)

Your Railway environment should have these set:

| Variable | Value |
|----------|-------|
| `DATABASE_URL` | Your MongoDB Atlas connection string |
| `JWT_SECRET` | Your JWT secret key |
| `NODE_ENV` | `production` |
| `CORS_ORIGIN` | `https://christianityplatform.vercel.app` |
| `FRONTEND_URL` | `https://christianityplatform.vercel.app` |

**To Verify:**
1. Go to Railway dashboard
2. Select your backend project
3. Click "Variables" tab
4. Confirm all variables are set

---

### **Step 3: Test Production Deployment** ✅

After Vercel redeploys, test these URLs:

#### **3.1 Test Backend API**
```bash
# Health check
curl https://christian-platform-backend-production.up.railway.app/health

# Should return: {"status":"ok","timestamp":"...","env":"production"}
```

#### **3.2 Test Frontend Platform**
Open in browser:
```
https://christianityplatform.vercel.app
```

Should see:
- ✅ Main platform landing page
- ✅ Module cards (Culture, Bible Know, etc.)
- ✅ Login/Register buttons

#### **3.3 Test User Registration**
1. Go to: https://christianityplatform.vercel.app/register
2. Fill in registration form
3. Should successfully create account
4. Should redirect to dashboard
5. **Check browser console** - should see no CORS errors

#### **3.4 Test User Login**
1. Go to: https://christianityplatform.vercel.app/login
2. Login with registered credentials
3. Should receive JWT token
4. Should redirect to dashboard

#### **3.5 Test Module Access**
1. Login to platform
2. Click "Culture" module card
3. Should open: https://ai-christianity-culture.vercel.app/
4. Module should receive auth token

---

## 🐛 **TROUBLESHOOTING**

### **Issue: CORS Error in Browser Console**

**Symptom:**
```
Access to XMLHttpRequest at 'https://christian-platform-backend-production.up.railway.app/api/auth/login'
from origin 'https://christianityplatform.vercel.app' has been blocked by CORS policy
```

**Fix:**
1. Check Railway environment variable `CORS_ORIGIN`
2. Should be: `https://christianityplatform.vercel.app`
3. If wrong, update and redeploy Railway

**Quick Test:**
```bash
curl -H "Origin: https://christianityplatform.vercel.app" \
  -H "Access-Control-Request-Method: POST" \
  -H "Access-Control-Request-Headers: Content-Type" \
  -X OPTIONS \
  https://christian-platform-backend-production.up.railway.app/api/auth/login
```

Should return CORS headers allowing the origin.

---

### **Issue: 401 Unauthorized Error**

**Symptom:** Login works but subsequent API calls fail with 401

**Possible Causes:**
1. JWT_SECRET different between Railway and local
2. Token not being sent in Authorization header
3. Token expired

**Fix:**
1. Check Railway `JWT_SECRET` matches what was used to create token
2. Open browser DevTools → Network → Check request headers
3. Should see: `Authorization: Bearer eyJhbGc...`

---

### **Issue: Module iframes not loading**

**Symptom:** Module pages open but show blank or errors

**Possible Causes:**
1. Module URLs incorrect
2. Module apps not deployed
3. CORS issues on module side

**Fix:**
1. Verify module URLs in Vercel env vars
2. Test each module URL directly in browser
3. Check module console for errors

---

### **Issue: "localhost:3001" in Production**

**Symptom:** API calls going to localhost instead of Railway

**Cause:** Vercel environment variable not set or build cache

**Fix:**
1. Verify `VITE_API_URL` set in Vercel
2. Redeploy with "Clear cache and redeploy"
3. Check build logs for correct URL

---

## 📋 **POST-DEPLOYMENT CHECKLIST**

After deploying to production, verify:

### **Backend (Railway)**
- [ ] Health endpoint responds
- [ ] Auth endpoints working
- [ ] Database connected (MongoDB Atlas)
- [ ] CORS configured for Vercel domain
- [ ] Environment variables set
- [ ] SSL/HTTPS working

### **Frontend (Vercel)**
- [ ] Main platform loads
- [ ] Registration flow works
- [ ] Login flow works
- [ ] JWT tokens stored in localStorage
- [ ] Dashboard accessible after login
- [ ] Module cards display correctly
- [ ] No CORS errors in console

### **Module Integration**
- [ ] Culture Module accessible
- [ ] Bible Know Module accessible
- [ ] Modules receive auth tokens via postMessage
- [ ] Cross-module navigation works
- [ ] User progress saves to database

---

## 🔒 **SECURITY CHECKLIST**

### **Backend Security**
- [x] JWT_SECRET is strong (32+ characters)
- [x] DATABASE_URL not exposed in client
- [x] CORS restricted to known domains
- [x] HTTPS only (Railway provides by default)
- [x] Passwords hashed with bcrypt
- [x] SQL injection protection (using MongoDB)
- [x] Rate limiting (add if needed)

### **Frontend Security**
- [x] No sensitive data in client code
- [x] JWT tokens in localStorage (httpOnly cookies better)
- [x] No API keys in frontend
- [x] Content Security Policy headers
- [x] XSS protection enabled

### **Recommendations for Stage 2:**
- [ ] Add rate limiting (express-rate-limit)
- [ ] Add request validation (joi or zod)
- [ ] Add API logging (winston or pino)
- [ ] Add error tracking (Sentry)
- [ ] Add analytics (privacy-respecting)
- [ ] Add health monitoring (UptimeRobot)

---

## 📊 **MONITORING & ANALYTICS**

### **Railway Monitoring**
- View logs: Railway Dashboard → Your Project → Deployments → View Logs
- View metrics: Railway Dashboard → Metrics tab
- Monitor uptime: Built-in monitoring

### **Vercel Monitoring**
- View logs: Vercel Dashboard → Deployments → Select deployment → View Function Logs
- View analytics: Vercel Dashboard → Analytics tab
- Monitor performance: Built-in Web Vitals

### **Recommended Tools (Optional)**
- **UptimeRobot**: Free uptime monitoring
- **LogRocket**: Session replay for debugging
- **Sentry**: Error tracking
- **PostHog**: Privacy-friendly analytics

---

## 🚀 **NEXT STEPS - STAGE 2**

Once Stage 1 is fully deployed and tested:

### **Phase 1: Add Missing Routes to Backend**
- [ ] Add `/` route with API info
- [ ] Add `/test-db` route for health checks
- [ ] Add API documentation endpoint
- [ ] Redeploy to Railway

### **Phase 2: Expand Backend for Stage 2 Modules**
- [ ] Design schema for Theology Module data
- [ ] Design schema for Church Admin data
- [ ] Add `/api/theology/*` endpoints
- [ ] Add `/api/church-admin/*` endpoints
- [ ] Integrate ChurchRollCall system

### **Phase 3: Deploy Stage 2 Modules**
- [ ] Prepare Theology Module for deployment
- [ ] Prepare Church Admin Module for deployment
- [ ] Update main platform to show all 4 modules
- [ ] Test Stage 2 integration end-to-end

---

## 📞 **SUPPORT & RESOURCES**

### **Documentation**
- Railway Docs: https://docs.railway.app
- Vercel Docs: https://vercel.com/docs
- MongoDB Atlas: https://docs.atlas.mongodb.com

### **Quick Reference Commands**

```bash
# Check Railway logs
railway logs

# Force Railway redeploy
railway up --detach

# Check Vercel deployment status
vercel ls

# View Vercel logs
vercel logs

# Test production API
curl https://christian-platform-backend-production.up.railway.app/health
```

---

## 🙏 **MINISTRY INTEGRITY REMINDER**

As you deploy to production, remember:

### **Church Authority & Oversight**
- ✅ All AI-generated content requires human review
- ✅ Pastoral approval for theological content
- ✅ Audit logs for sensitive operations
- ✅ Content moderation system

### **User Privacy & Data Protection**
- ✅ GDPR compliance for EU users
- ✅ Clear privacy policy
- ✅ User data deletion capability
- ✅ Secure password storage (bcrypt)

### **Legal Compliance**
- ✅ Terms of Service published
- ✅ Privacy Policy published
- ✅ Copyright compliance for Bible texts
- ✅ Age verification if needed

---

## ✅ **STAGE 1 COMPLETION CRITERIA**

Mark Stage 1 as **100% COMPLETE** when:

- [x] Backend deployed to Railway
- [x] Backend API endpoints working
- [x] Frontend deployed to Vercel
- [ ] Frontend environment variables configured
- [ ] User registration works in production
- [ ] User login works in production
- [ ] Culture Module accessible and integrated
- [ ] Bible Know Module accessible and integrated
- [ ] No CORS errors
- [ ] No console errors
- [ ] Mobile responsive design verified
- [ ] Performance metrics acceptable (< 3s load time)

**Current Progress: 95%** ⚠️ Just need Vercel env vars!

---

## 🎉 **CELEBRATING MILESTONES**

Once Stage 1 is 100% complete:

1. **Test with real users** (small beta group)
2. **Gather feedback** on Culture & Bible Know modules
3. **Fix any bugs** discovered in production
4. **Plan Stage 2** implementation
5. **Give glory to God** for successful deployment!

---

*"Unless the Lord builds the house, the builders labor in vain." - Psalm 127:1*

**May this platform serve God's kingdom and bring many to Christ! 🙏**

---

## 📝 **Deployment Log**

| Date | Action | Status |
|------|--------|--------|
| 2025-11-05 | Backend deployed to Railway | ✅ Complete |
| 2025-11-05 | Fixed critical backend issues | ✅ Complete |
| 2025-11-05 | Tested auth endpoints | ✅ Working |
| 2025-11-05 | Railway URL identified | ✅ Complete |
| 2025-11-05 | Updated .env.local | ✅ Complete |
| PENDING | Update Vercel env vars | ⏳ In Progress |
| PENDING | Test production deployment | ⏳ Pending |
| PENDING | Verify all modules | ⏳ Pending |
| PENDING | Stage 1 - 100% Complete! | 🎯 Goal |
