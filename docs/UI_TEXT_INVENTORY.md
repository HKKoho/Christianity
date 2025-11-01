# Christian Platform - User Interface Text Inventory

## Project Overview
- **Type**: Multi-module React + TypeScript application using Vite
- **Architecture**: 
  - Main platform: React with React Router, Zustand state management
  - Backend: Express.js API with MongoDB
  - Modules: 5 independent applications (Culture, Christianity, Bible-Know, Church-Admin, Roll-Call)
- **Current Localization**: NO internationalization framework detected - all text is hardcoded in English

---

## MAIN PLATFORM (main-platform/) - Priority: HIGH

### Directory Structure
```
main-platform/src/
├── pages/
│   ├── public/
│   │   ├── Landing.tsx         [HIGH] - Landing page UI
│   │   ├── Login.tsx           [HIGH] - Login form & messages
│   │   └── Register.tsx        [HIGH] - Registration form & messages
│   └── dashboard/
│       └── Dashboard.tsx        [HIGH] - Dashboard UI
├── components/
│   ├── layout/
│   │   └── Layout.tsx          [HIGH] - Header navigation
│   ├── CanvasModuleCard.tsx    [MEDIUM] - Module card display
│   ├── CanvasSymbolTransform.tsx [LOW] - Decorative animation
│   └── modules/
│       └── ModuleFrame.tsx     [MEDIUM] - Module iframe container
├── config/
│   └── modules.ts             [HIGH] - Module configuration with display text
├── auth/
│   └── store.ts               [LOW] - No UI text (state management)
├── lib/
│   └── api.ts                 [LOW] - No UI text (API calls)
└── types/
    └── index.ts               [LOW] - Type definitions only
```

### Key UI Text Files & Content

#### 1. **Landing.tsx** (263 lines)
**Location**: `/Users/aibyml/Christianity/christian-platform/main-platform/src/pages/public/Landing.tsx`

**UI Text Found**:
- "Christian Community" (brand name, line 25)
- "Join Us" (button, line 55)
- "Kindness. Inspiration. Fellowship." (hero headline, line 101)
- "A unified platform integrating powerful AI-driven tools for Christians" (subheading, line 125)
- "Explore Culture. Learn Bible. Research Theology. Manage Church." (subheading, line 138)
- "Begin Your Journey" (CTA button, line 171)
- "Four Paths to Understand Christianity" (section heading, line 203)
- "Tailored AI-powered tools designed for seekers, scholars, students, and church leaders" (section subheading, line 212)
- "Empowering faith, connecting hearts, transforming lives through technology and grace" (footer, line 252)
- "© 2025 Christian Community Platform. Built with love and purpose." (footer copyright, line 256)

#### 2. **Login.tsx** (136 lines)
**Location**: `/Users/aibyml/Christianity/christian-platform/main-platform/src/pages/public/Login.tsx`

**UI Text Found**:
- "Christian Platform" (header logo, line 44)
- "Welcome back" (heading, line 48)
- "Don't have an account?" (text, line 51)
- "Sign up for free" (link, line 53)
- "Email address" (form label, line 74)
- "you@example.com" (placeholder, line 85)
- "Password" (form label, line 91)
- "••••••••" (password placeholder, line 102)
- "Signing in..." (loading state, line 118)
- "Sign in" (button, line 121)
- "← Back to home" (link, line 129)
- Error messages from backend: "Login failed. Please try again." (line 30)

#### 3. **Register.tsx** (374 lines)
**Location**: `/Users/aibyml/Christianity/christian-platform/main-platform/src/pages/public/Register.tsx`

**UI Text Found**:
- "Join Christian Community" (heading, line 118)
- "Create an account to explore our platform" (subheading, line 121)
- "Enter your email" (placeholder, line 144)
- "Continue with Email" (button, line 155)
- "OR" (divider, line 165)
- "Continue with Google" (social button, line 178)
- "Continue with GitHub" (social button, line 189)
- "Continue with WhatsApp" (social button, line 200)
- "Terms of Service" (link, line 216)
- "Privacy Policy" (link, line 220)
- "I agree to the Terms of Service and Privacy Policy" (checkbox text, line 214-221)
- "Forgot password?" (link, line 228)
- "Already have an account?" (text, line 235)
- "Sign in" (link, line 237)
- "← Back to home" (link, line 245)
- "Complete Your Profile" (heading - details view, line 260)
- "Creating account for {email}" (info text, line 263)
- "Full Name" (form label, line 277)
- "Enter your full name" (placeholder, line 286)
- "Password" (form label, line 293)
- "Create a password (min. 8 characters)" (placeholder, line 303)
- "Must be at least 8 characters" (helper text, line 306)
- "Back" (button, line 325)
- "Create Account" (button, line 317)
- "Creating Account..." (loading state, line 317)
- "Account Created!" (success heading, line 354)
- "Welcome to Christian Community, {name}!" (success message, line 357)
- "Redirecting to your dashboard..." (text, line 360)

**Error Messages**:
- "Please accept the Terms of Service and Privacy Policy" (line 50)
- "Password must be at least 8 characters" (line 62)
- "Registration failed. Please try again." (line 80)

#### 4. **Dashboard.tsx** (152 lines)
**Location**: `/Users/aibyml/Christianity/christian-platform/main-platform/src/pages/dashboard/Dashboard.tsx`

**UI Text Found**:
- "Welcome back, {name}!" (heading, line 13)
- "Choose a module below to get started with your Christian learning journey." (text, line 16)
- "Launch Module" (button, line 118)
- "Your Progress" (stat heading, line 133)
- "0%" (progress value, line 134)
- "Complete your profile to track progress" (helper text, line 135)
- "Available Modules" (stat heading, line 139)
- "Specialized learning tools" (helper text, line 141)
- "Account Type" (stat heading, line 145)
- "Free" (value, line 146)
- "Full access to all modules" (helper text, line 147)

#### 5. **modules.ts** (101 lines)
**Location**: `/Users/aibyml/Christianity/christian-platform/main-platform/src/config/modules.ts`

**UI Text Found** - Module Configuration:

**Culture Module**:
- displayName: "Christian Culture Explorer"
- description: "Explore the rich tapestry of Christian culture through our senses to experience in person"
- features: ["Eat (Cultural Approach)", "Walk", "Listen", "See", "Read", "Think"]
- targetAudience: "Seekers"

**Christianity Module**:
- displayName: "Christian Theology & Research"
- description: "Advanced theological research platform with 11 LLM models for scholarly work"
- features: ["Bible Research (Academic)", "Theology Assistant", "Document Analysis", "Assignment Helper", "Theologian Journal"]
- targetAudience: "Scholars"

**Bible-Know Module**:
- displayName: "Bible Knowledge & Learning"
- description: "Interactive Bible learning with Hebrew & Greek language mastery"
- features: ["Interactive Bible Quests", "Hebrew Learning", "Greek Learning", "AI Pronunciation", "Prepare Bible Study"]
- targetAudience: "Students"

**Church-Admin Module**:
- displayName: "Church Administration & Ministry"
- description: "Comprehensive church management with sermon generation and attendance tracking"
- features: ["AI Sermon Generator", "Roll Call System", "Class Management", "Lesson Planning", "Participants Review"]
- targetAudience: "Leaders"

#### 6. **Layout.tsx** (65 lines)
**Location**: `/Users/aibyml/Christianity/christian-platform/main-platform/src/components/layout/Layout.tsx`

**UI Text Found**:
- "Christian Platform" (header link, line 22)
- "Dashboard" (nav link, line 31)
- Module names from config (nav links, line 39)
- "Logout" (button, line 52)

#### 7. **CanvasModuleCard.tsx** (295 lines)
**Location**: `/Users/aibyml/Christianity/christian-platform/main-platform/src/components/CanvasModuleCard.tsx`

**UI Text Found**:
- "For {targetAudience}" (badge text, line 216 - dynamically from config)
- "Explore Now" (button, line 286)

---

## BACKEND API (backend-api/) - Priority: MEDIUM

### Directory Structure
```
backend-api/src/
├── controllers/
│   └── authController.ts      [MEDIUM] - API response messages
├── middleware/
│   └── errorHandler.ts        [LOW] - Generic error handling
├── models/
│   └── User.ts               [LOW] - Data models
├── routes/
│   └── auth.ts               [LOW] - API routes
└── lib/
    └── db.ts                 [LOW] - Database connection
```

### API Response Messages in authController.ts
**Location**: `/Users/aibyml/Christianity/christian-platform/backend-api/src/controllers/authController.ts`

**User-Facing Messages**:
- "All fields are required" (line 12)
- "User already exists" (line 21)
- "Registration failed" (line 54)
- "Email and password are required" (line 63)
- "Invalid credentials" (line 72, 78)
- "Login failed" (line 95)
- "User not found" (line 107)
- "Failed to fetch profile" (line 113)

---

## MODULES (modules/) - Priority: MEDIUM-HIGH

### Each Module Structure
```
modules/
├── culture/
├── christianity/
├── bible-know/
│   ├── Bible/
│   ├── language/
│   └── theological-journey/
├── church-admin/
│   ├── constants.ts          [HIGH] - UI text for class groups and AI personas
│   └── ...
└── roll-call/
```

### Module 1: church-admin/constants.ts (74 lines)
**Location**: `/Users/aibyml/Christianity/christian-platform/modules/church-admin/constants.ts`

**Note**: This file is ALREADY IN TRADITIONAL CHINESE (partially mixed with English)

**UI Text Found**:

**Class Groups** (Chinese):
- "簡單故事、著色、詩歌和手工藝。" (CHILDREN)
- "討論開頭、實際應用、更深層問題。" (YOUTH)
- "關於職涯、人際關係和財務的聖經觀點。" (GRADUATES)
- "關於育兒、婚姻和領導力的資源。" (MATURE)
- "關於 mentorship、傳承和人生新階段的內容。" (PERSPECTIVE)
- "關於盼望、安慰和信仰反思的主題。" (ELDERLY)

**AI Personas** (MIXED English/Chinese):
- Persona Names: "Sparky", "Alex", "Chloe", "Marcus", "Eleanor", "Samuel" (English)
- Titles (Chinese): "兒童信仰啟蒙嚮導", "青少年事工導師", "青年生活教練", "家庭與領導力顧問", "傳承與 mentorship 顧問", "長者信仰伴侶"
- Biographies: Mixed English/Chinese with Chinese dominant
- Expertise tags: Mostly Chinese

### Module 2: bible-know/bible-constants.ts
**Location**: `/Users/aibyml/Christianity/christian-platform/modules/bible-know/bible-constants.ts`

**UI Text Found**:
- "NIV", "ESV", "KJV" (Bible version names - 6 lines only, minimal content)

---

## EXISTING INTERNATIONALIZATION (i18n)

### Current Status: **NONE IMPLEMENTED**
- No i18n library detected (next-i18n, react-i18next, etc. not in package.json)
- No localization files (no `/locales`, `/translations`, `/i18n` directories)
- All text is hardcoded directly in JSX components
- Exception: church-admin module has some Chinese text, but not structured for i18n

### Recommendation: Consider implementing
- **Option 1**: next-i18next or i18next (popular for React)
- **Option 2**: react-intl
- **Option 3**: Simple custom solution (JSON translation files + React context)

---

## SUMMARY TABLE

| File | Location | Lines | Type | Content |
|------|----------|-------|------|---------|
| Landing.tsx | main-platform/src/pages/public | 263 | Page | Hero, CTAs, footer text |
| Login.tsx | main-platform/src/pages/public | 136 | Page | Form labels, buttons, messages |
| Register.tsx | main-platform/src/pages/public | 374 | Page | Form, social auth, success messages |
| Dashboard.tsx | main-platform/src/pages/dashboard | 152 | Page | Welcome, stats, module launcher |
| modules.ts | main-platform/src/config | 101 | Config | 4 module descriptions + features |
| Layout.tsx | main-platform/src/components | 65 | Component | Header nav, logout button |
| CanvasModuleCard.tsx | main-platform/src/components | 295 | Component | Module card text (from config) |
| authController.ts | backend-api/src/controllers | 116 | API | 8 error/success messages |
| constants.ts | modules/church-admin | 74 | Config | 6 class groups + 6 AI personas |

---

## TEXT CATEGORIZATION BY TYPE

### 1. **Navigation & Buttons**
- "Join Us", "Begin Your Journey", "Launch Module", "Sign in", "Create Account", "Logout"
- "Dashboard", "← Back to home"

### 2. **Form Labels & Placeholders**
- "Email address", "Password", "Full Name"
- "you@example.com", "••••••••", "Enter your email", "Enter your full name"

### 3. **Marketing/Hero Text**
- "Kindness. Inspiration. Fellowship."
- "A unified platform integrating powerful AI-driven tools for Christians"
- "Four Paths to Understand Christianity"
- Module descriptions and target audiences

### 4. **Success/Error Messages**
- "Account Created!"
- "Welcome to Christian Community, {name}!"
- "Login failed. Please try again."
- "Password must be at least 8 characters"
- Backend API messages (8 variants)

### 5. **Module Content** (Configuration)
- 4 module configurations with display names, descriptions, features, and target audiences
- 6 class group descriptions (ALREADY in Chinese)
- 6 AI persona configurations with names, titles, bios, and expertise areas

---

## CONVERSION PLAN STRUCTURE

To convert to Traditional Chinese effectively:

### Phase 1: Identify all sources (COMPLETED - this document)
- [x] Landing page text
- [x] Authentication pages (Login, Register)
- [x] Dashboard
- [x] Configuration files (modules.ts)
- [x] Components
- [x] Backend API messages
- [x] Module constants

### Phase 2: Create i18n structure
- [ ] Set up i18n framework (recommend: i18next)
- [ ] Create translation file structure:
  ```
  locales/
  ├── en/
  │   ├── common.json
  │   ├── auth.json
  │   ├── dashboard.json
  │   ├── modules.json
  │   └── messages.json
  └── zh-TW/
      ├── common.json
      ├── auth.json
      ├── dashboard.json
      ├── modules.json
      └── messages.json
  ```

### Phase 3: Extract strings to translation files
- [ ] Main platform pages (Landing, Login, Register, Dashboard)
- [ ] Components (Layout, CanvasModuleCard, ModuleFrame)
- [ ] Configuration (modules.ts)
- [ ] Backend API (authController.ts messages)

### Phase 4: Integrate i18n into components
- [ ] Wrap hardcoded strings with i18n t() function
- [ ] Add language selector component
- [ ] Store language preference in localStorage/auth store

### Phase 5: Module-specific translations
- [ ] Each module may have its own i18n setup
- [ ] Sync language preference across iframe modules

---

## ESTIMATED TRANSLATION VOLUME

**Main Platform**: ~80-100 unique strings
**Backend API**: ~8 messages
**Modules**: Varies by module (church-admin already has Chinese)

**Total for comprehensive coverage**: ~150-200 strings

---

## SPECIAL CONSIDERATIONS

1. **Module Names & Descriptions**: Stored in config/modules.ts as database - needs careful translation
2. **AI Persona Content**: Currently in modules/church-admin/constants.ts, partially Chinese
3. **Error Messages**: Both frontend (React) and backend (Express) need translation
4. **Placeholders**: Form inputs need translated placeholders
5. **Button Text**: Short, consistent translations important for UX
6. **Dynamic Content**: {name}, {email} variables need careful handling in translations

---

## FILES READY FOR TRANSLATION

All text locations have been identified and documented above.
Ready to proceed with:
1. Setting up i18n framework
2. Creating translation JSON files
3. Integrating translations into codebase

