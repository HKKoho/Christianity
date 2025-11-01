# Translation String Mapping - Detailed File References

This document maps every user-facing string to its exact file location for translation.

---

## MAIN PLATFORM

### 1. Landing.tsx
**File**: `/Users/aibyml/Christianity/christian-platform/main-platform/src/pages/public/Landing.tsx`

| Line | Current English | Context | Type |
|------|-----------------|---------|------|
| 25 | "Christian Community" | Brand name in header | Navigation |
| 55 | "Join Us" | Header CTA button | Button |
| 101 | "Kindness. Inspiration. Fellowship." | Main hero headline | Marketing |
| 125 | "A unified platform integrating powerful AI-driven tools for Christians" | Hero subheading | Marketing |
| 138 | "Explore Culture. Learn Bible. Research Theology. Manage Church." | Hero subheading 2 | Marketing |
| 171 | "Begin Your Journey" | CTA button text | Button |
| 203 | "Four Paths to Understand Christianity" | Section heading | Heading |
| 212 | "Tailored AI-powered tools designed for seekers, scholars, students, and church leaders" | Section subheading | Marketing |
| 252 | "Empowering faith, connecting hearts, transforming lives through technology and grace" | Footer tagline | Marketing |
| 256 | "© 2025 Christian Community Platform. Built with love and purpose." | Footer copyright | Footer |

**Total**: 10 strings

---

### 2. Login.tsx
**File**: `/Users/aibyml/Christianity/christian-platform/main-platform/src/pages/public/Login.tsx`

| Line | Current English | Context | Type |
|------|-----------------|---------|------|
| 44 | "Christian Platform" | Logo/header | Navigation |
| 48 | "Welcome back" | Page heading | Heading |
| 51 | "Don't have an account?" | Registration prompt text | Helper text |
| 53 | "Sign up for free" | Registration link text | Link |
| 74 | "Email address" | Form label | Form label |
| 85 | "you@example.com" | Email input placeholder | Placeholder |
| 91 | "Password" | Form label | Form label |
| 102 | "••••••••" | Password placeholder | Placeholder |
| 118 | "Signing in..." | Loading state button text | Button |
| 121 | "Sign in" | Submit button text | Button |
| 129 | "← Back to home" | Footer link | Link |
| 30 | "Login failed. Please try again." | Error message (from backend catch) | Error message |

**Total**: 12 strings

---

### 3. Register.tsx
**File**: `/Users/aibyml/Christianity/christian-platform/main-platform/src/pages/public/Register.tsx`

**Auth View** (First screen):

| Line | Current English | Context | Type |
|------|-----------------|---------|------|
| 118 | "Join Christian Community" | Page heading | Heading |
| 121 | "Create an account to explore our platform" | Subheading | Helper text |
| 144 | "Enter your email" | Email input placeholder | Placeholder |
| 155 | "Continue with Email" | Primary button | Button |
| 165 | "OR" | Divider text | Divider |
| 178 | "Continue with Google" | Social auth button | Button |
| 189 | "Continue with GitHub" | Social auth button | Button |
| 200 | "Continue with WhatsApp" | Social auth button | Button |
| 216 | "Terms of Service" | Link text | Link |
| 220 | "Privacy Policy" | Link text | Link |
| 214-221 | "I agree to the Terms of Service and Privacy Policy" | Checkbox label | Checkbox label |
| 228 | "Forgot password?" | Link | Link |
| 235 | "Already have an account?" | Prompt text | Helper text |
| 237 | "Sign in" | Link text | Link |
| 245 | "← Back to home" | Link | Link |
| 50 | "Please accept the Terms of Service and Privacy Policy" | Error message | Error message |

**Details View** (Second screen):

| Line | Current English | Context | Type |
|------|-----------------|---------|------|
| 260 | "Complete Your Profile" | Heading | Heading |
| 263 | "Creating account for {email}" | Info text (dynamic) | Info text |
| 277 | "Full Name" | Form label | Form label |
| 286 | "Enter your full name" | Placeholder | Placeholder |
| 293 | "Password" | Form label | Form label |
| 303 | "Create a password (min. 8 characters)" | Placeholder | Placeholder |
| 306 | "Must be at least 8 characters" | Helper text | Helper text |
| 325 | "Back" | Button | Button |
| 317 | "Create Account" | Button (normal state) | Button |
| 317 | "Creating Account..." | Button (loading state) | Button |
| 62 | "Password must be at least 8 characters" | Error message | Error message |
| 80 | "Registration failed. Please try again." | Error message (from catch) | Error message |

**Success View** (Third screen):

| Line | Current English | Context | Type |
|------|-----------------|---------|------|
| 354 | "Account Created!" | Success heading | Heading |
| 357 | "Welcome to Christian Community, {name}!" | Success message (dynamic) | Success message |
| 360 | "Redirecting to your dashboard..." | Info text | Info text |

**Total**: 40+ strings

---

### 4. Dashboard.tsx
**File**: `/Users/aibyml/Christianity/christian-platform/main-platform/src/pages/dashboard/Dashboard.tsx`

| Line | Current English | Context | Type |
|------|-----------------|---------|------|
| 13 | "Welcome back, {name}!" | Page heading (dynamic) | Heading |
| 16 | "Choose a module below to get started with your Christian learning journey." | Subheading | Helper text |
| 118 | "Launch Module" | Button on module cards | Button |
| 133 | "Your Progress" | Stat card heading | Heading |
| 134 | "0%" | Stat value | Stat |
| 135 | "Complete your profile to track progress" | Stat helper text | Helper text |
| 139 | "Available Modules" | Stat card heading | Heading |
| 141 | "Specialized learning tools" | Stat helper text | Helper text |
| 145 | "Account Type" | Stat card heading | Heading |
| 146 | "Free" | Stat value | Stat |
| 147 | "Full access to all modules" | Stat helper text | Helper text |

**Total**: 11 strings

---

### 5. modules.ts (Configuration)
**File**: `/Users/aibyml/Christianity/christian-platform/main-platform/src/config/modules.ts`

**Culture Module** (Lines 15-35):
| Line | Current English | Context | Type |
|------|-----------------|---------|------|
| 19 | "Christian Culture Explorer" | displayName | Module name |
| 20 | "Explore the rich tapestry of Christian culture through our senses to experience in person" | description | Module description |
| 26 | "Eat (Cultural Approach)" | features[0] | Feature |
| 27 | "Walk" | features[1] | Feature |
| 28 | "Listen" | features[2] | Feature |
| 29 | "See" | features[3] | Feature |
| 30 | "Read" | features[4] | Feature |
| 31 | "Think" | features[5] | Feature |
| 34 | "Seekers" | targetAudience | Audience |

**Christianity Module** (Lines 36-54):
| Line | Current English | Context | Type |
|------|-----------------|---------|------|
| 39 | "Christian Theology & Research" | displayName | Module name |
| 40 | "Advanced theological research platform with 11 LLM models for scholarly work" | description | Module description |
| 46 | "Bible Research (Academic)" | features[0] | Feature |
| 47 | "Theology Assistant" | features[1] | Feature |
| 48 | "Document Analysis" | features[2] | Feature |
| 49 | "Assignment Helper" | features[3] | Feature |
| 50 | "Theologian Journal" | features[4] | Feature |
| 53 | "Scholars" | targetAudience | Audience |

**Bible-Know Module** (Lines 55-73):
| Line | Current English | Context | Type |
|------|-----------------|---------|------|
| 58 | "Bible Knowledge & Learning" | displayName | Module name |
| 59 | "Interactive Bible learning with Hebrew & Greek language mastery" | description | Module description |
| 65 | "Interactive Bible Quests" | features[0] | Feature |
| 66 | "Hebrew Learning" | features[1] | Feature |
| 67 | "Greek Learning" | features[2] | Feature |
| 68 | "AI Pronunciation" | features[3] | Feature |
| 69 | "Prepare Bible Study" | features[4] | Feature |
| 72 | "Students" | targetAudience | Audience |

**Church-Admin Module** (Lines 74-92):
| Line | Current English | Context | Type |
|------|-----------------|---------|------|
| 77 | "Church Administration & Ministry" | displayName | Module name |
| 78 | "Comprehensive church management with sermon generation and attendance tracking" | description | Module description |
| 84 | "AI Sermon Generator" | features[0] | Feature |
| 85 | "Roll Call System" | features[1] | Feature |
| 86 | "Class Management" | features[2] | Feature |
| 87 | "Lesson Planning" | features[3] | Feature |
| 88 | "Participants Review" | features[4] | Feature |
| 91 | "Leaders" | targetAudience | Audience |

**Total**: 37 strings

---

### 6. Layout.tsx (Navigation Header)
**File**: `/Users/aibyml/Christianity/christian-platform/main-platform/src/components/layout/Layout.tsx`

| Line | Current English | Context | Type |
|------|-----------------|---------|------|
| 22 | "Christian Platform" | Header logo/link | Navigation |
| 31 | "Dashboard" | Nav link | Link |
| 39 | {module.name} | Nav links (dynamic from modules.ts) | Navigation |
| 52 | "Logout" | Button | Button |

**Total**: 4 strings (1 dynamic)

---

### 7. CanvasModuleCard.tsx
**File**: `/Users/aibyml/Christianity/christian-platform/main-platform/src/components/CanvasModuleCard.tsx`

| Line | Current English | Context | Type |
|------|-----------------|---------|------|
| 216 | "For {targetAudience}" | Badge text (dynamic) | Badge |
| 286 | "Explore Now" | Button text | Button |

**Total**: 2 strings (1 dynamic)

---

## BACKEND API

### 8. authController.ts (API Messages)
**File**: `/Users/aibyml/Christianity/christian-platform/backend-api/src/controllers/authController.ts`

| Line | Current English | Context | Type |
|------|-----------------|---------|------|
| 12 | "All fields are required" | Registration validation error | Error message |
| 21 | "User already exists" | Registration duplicate check | Error message |
| 54 | "Registration failed" | Catch-all registration error | Error message |
| 63 | "Email and password are required" | Login validation error | Error message |
| 72 | "Invalid credentials" | Login failed (user not found) | Error message |
| 78 | "Invalid credentials" | Login failed (password wrong) | Error message |
| 95 | "Login failed" | Catch-all login error | Error message |
| 107 | "User not found" | Get profile error | Error message |
| 113 | "Failed to fetch profile" | Catch-all profile error | Error message |

**Total**: 9 strings (8 unique + 1 duplicate)

---

## MODULES

### 9. church-admin/constants.ts
**File**: `/Users/aibyml/Christianity/christian-platform/modules/church-admin/constants.ts`

**NOTE**: This file already has TRADITIONAL CHINESE translations. Current content is mixed English/Chinese.

**Class Groups Descriptions** (Lines 3-28):
- Already translated to Chinese - no action needed unless standardization required
- Contains: CHILDREN, YOUTH, GRADUATES, MATURE, PERSPECTIVE, ELDERLY

**AI Personas** (Lines 37-74):
- Persona names: English (Sparky, Alex, Chloe, Marcus, Eleanor, Samuel)
- Titles: Chinese only
- Biographies: Mixed English/Chinese
- Expertise: Mostly Chinese

**Consider**: Whether to keep English persona names or translate them as well.

**Total**: 6 class groups + 6 personas (already Chinese)

---

## SUMMARY COUNT

| Category | Count | Notes |
|----------|-------|-------|
| Landing | 10 | All new |
| Login | 12 | All new |
| Register | 40+ | All new |
| Dashboard | 11 | All new |
| Module Config | 37 | All new |
| Layout | 4 | All new (1 dynamic) |
| Card Component | 2 | All new (1 dynamic) |
| **Frontend Total** | **~116 strings** | Main platform |
| Backend API | 9 | All new |
| **TOTAL UNIQUE** | **~125 strings** | Across frontend + backend |

---

## Dynamic Content Variables

The following strings contain template variables that need special handling:

1. **Register.tsx line 263**: "Creating account for {email}"
   - Variable: {email}
   - Handled by: useState emailValue

2. **Register.tsx line 357**: "Welcome to Christian Community, {name}!"
   - Variable: {name}
   - Handled by: useState nameValue

3. **Dashboard.tsx line 13**: "Welcome back, {name}!"
   - Variable: {name}
   - Handled by: useAuthStore user?.name

4. **CanvasModuleCard.tsx line 216**: "For {targetAudience}"
   - Variable: {targetAudience}
   - Handled by: Component props

5. **Layout.tsx line 39**: Module names (dynamic)
   - Variable: {module.name}
   - Handled by: .map() over modules array

**Important for i18n**: Use template syntax like:
- `t('auth.welcome', { name: user.name })`
- Or: `i18n.t('auth.welcome').replace('{name}', user.name)`

---

## Next Steps

1. Copy all strings above into translation service/files
2. Translate each string to Traditional Chinese
3. Store in appropriate JSON structure (by page/function)
4. Implement i18n framework in main-platform
5. Update backend API message strings
6. Test all pages with translations active

All line references are exact for easy find/replace or manual review.
