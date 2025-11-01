# Translation to Traditional Chinese - Quick Reference

## Critical Files to Translate (PRIORITY ORDER)

### TIER 1 (User-Facing, High Priority)
1. **main-platform/src/pages/public/Landing.tsx** - Landing page (10 strings)
2. **main-platform/src/pages/public/Login.tsx** - Login form (12 strings)
3. **main-platform/src/pages/public/Register.tsx** - Registration (40+ strings)
4. **main-platform/src/pages/dashboard/Dashboard.tsx** - Dashboard (10 strings)
5. **main-platform/src/config/modules.ts** - Module definitions (4 modules x 4 fields = 16 strings)

### TIER 2 (Components & Navigation)
6. **main-platform/src/components/layout/Layout.tsx** - Navigation (3 strings)
7. **main-platform/src/components/CanvasModuleCard.tsx** - Module cards (2 strings)

### TIER 3 (Backend & API)
8. **backend-api/src/controllers/authController.ts** - API messages (8 strings)

### TIER 4 (Module-Specific)
9. **modules/church-admin/constants.ts** - Already has Chinese but needs standardization

---

## Quick String Extraction List

### Landing Page (Landing.tsx)
- Line 25: "Christian Community"
- Line 55: "Join Us"
- Line 101: "Kindness. Inspiration. Fellowship."
- Line 125: "A unified platform integrating powerful AI-driven tools for Christians"
- Line 138: "Explore Culture. Learn Bible. Research Theology. Manage Church."
- Line 171: "Begin Your Journey"
- Line 203: "Four Paths to Understand Christianity"
- Line 212: "Tailored AI-powered tools designed for seekers, scholars, students, and church leaders"
- Line 252: "Empowering faith, connecting hearts, transforming lives through technology and grace"
- Line 256: "© 2025 Christian Community Platform. Built with love and purpose."

### Login Form (Login.tsx)
- Line 44: "Christian Platform"
- Line 48: "Welcome back"
- Line 51: "Don't have an account?"
- Line 53: "Sign up for free"
- Line 74: "Email address"
- Line 85: "you@example.com" (placeholder)
- Line 91: "Password"
- Line 102: "••••••••" (password placeholder)
- Line 118: "Signing in..."
- Line 121: "Sign in"
- Line 129: "← Back to home"
- Line 30: "Login failed. Please try again."

### Registration Form (Register.tsx)
- Multiple sections: auth view, details view, success view
- Key strings: headings, form labels, placeholders, buttons, error messages
- Dynamic content: {email}, {name}

### Dashboard (Dashboard.tsx)
- Heading with {name} variable
- Module launch section
- Stats section (Your Progress, Available Modules, Account Type)

### Module Configuration (modules.ts)
Four modules with: displayName, description, features[], targetAudience

### API Messages (authController.ts)
- "All fields are required"
- "User already exists"
- "Registration failed"
- "Email and password are required"
- "Invalid credentials"
- "Login failed"
- "User not found"
- "Failed to fetch profile"

---

## Recommended i18n Implementation Strategy

### Option A: React i18next (Recommended)
```bash
npm install i18next react-i18next i18next-browser-languagedetector
```

### Option B: Simple JSON Solution
1. Create `locales/en.json` and `locales/zh-TW.json`
2. Create custom context hook for translation
3. Minimal dependencies, easy to understand

### File Structure (Recommended)
```
main-platform/
├── src/
│   ├── locales/
│   │   ├── en/
│   │   │   ├── common.json      (Navigation, headers, general)
│   │   │   ├── auth.json        (Login, Register messages)
│   │   │   ├── dashboard.json   (Dashboard specific)
│   │   │   └── modules.json     (Module descriptions)
│   │   └── zh-TW/
│   │       ├── common.json
│   │       ├── auth.json
│   │       ├── dashboard.json
│   │       └── modules.json
│   ├── hooks/
│   │   └── useTranslation.ts    (Custom hook if not using i18next)
│   └── ...
```

---

## Text Classification for Translation

### 1. BRAND/MARKETING (Keep consistent, culturally adapted)
- "Christian Community"
- "Christian Platform"
- Taglines and hero text

### 2. UI CONTROLS (Short, consistent)
- Buttons: Join Us, Sign in, Create Account, Launch Module
- Links: Back to home, Sign up for free
- Navigation: Dashboard, Logout

### 3. FORM FIELDS (Consistent terminology)
- Email address, Password, Full Name
- Placeholders: Enter your email, Enter your full name

### 4. SYSTEM MESSAGES (Clear, helpful)
- Success: "Account Created!", "Welcome to..."
- Errors: "All fields are required", "Invalid credentials"

### 5. MODULE CONTENT (Descriptive, accurate)
- Module names, descriptions, features, target audiences
- Requires subject matter expertise for theology terms

---

## Translation Tips & Considerations

### Characters to Handle
- {name} - Dynamic user name variable
- {email} - Dynamic email variable
- Use template syntax: {{name}}, {name}, $name etc.

### Tone & Voice
- Professional but warm (聖經、信仰相關)
- Clear and accessible (usable by Christians of all backgrounds)
- Culturally appropriate for Traditional Chinese speakers

### Key Terms (Suggested Translation Consistency)
- "Christian Community" → "基督教社區" or "基督信仰社群"
- "Theology" → "神學"
- "Bible Learning" → "聖經學習"
- "Sermon" → "講道"
- "Faith" → "信仰"
- "Church" → "教會"

### Testing Checklist
- [ ] All strings extracted and translated
- [ ] No hardcoded English remaining (except where needed)
- [ ] Language switcher working
- [ ] Preference persists across sessions
- [ ] Dynamic content ({name}, etc.) works correctly
- [ ] Backend error messages also translated
- [ ] Mobile/responsive layout still works

---

## Total Translation Scope

| Area | Count | Effort |
|------|-------|--------|
| Landing Page | 10 | 30 min |
| Login Page | 12 | 30 min |
| Register Page | 40+ | 1 hour |
| Dashboard | 10 | 20 min |
| Module Config | 16+ | 1 hour |
| Components | 5 | 15 min |
| API Messages | 8 | 15 min |
| **TOTAL** | **~100+** | **~4 hours** |

---

## Getting Started

1. Choose i18n approach (i18next recommended)
2. Create folder structure for locales
3. Extract strings into JSON files
4. Set up language context/provider
5. Add language selector component
6. Update components to use translation hook
7. Test all pages in both languages
8. Update backend API response messages
9. Handle module-specific translations

All file paths and line numbers are documented in `UI_TEXT_INVENTORY.md`
