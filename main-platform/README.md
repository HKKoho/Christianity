# Christian Community Platform - Main Platform

A unified platform integrating powerful AI-driven tools for Christians, featuring four specialized modules for seekers, scholars, students, and church leaders.

## Live Deployment

**Production URL:** [https://main-platform-dyy0npbfl-cklbcs-projects.vercel.app](https://main-platform-dyy0npbfl-cklbcs-projects.vercel.app)

## Features

- **Christian Culture Explorer** - For Seekers: Explore Christian culture through immersive sensory experiences
- **Christian Theology & Research** - For Scholars: Advanced theological research platform with 11 LLM models
- **Bible Knowledge & Learning** - For Students: Interactive Bible learning with Hebrew & Greek language mastery
- **Church Administration & Ministry** - For Leaders: Comprehensive church management tools

## Tech Stack

- React 19.1.1 + TypeScript
- Vite 7.1.7 for blazing fast builds
- Tailwind CSS 4.1.15 for styling
- React Router 7.9.4 for navigation
- i18next for internationalization (English & Traditional Chinese)
- Zustand for state management

## Getting Started

### Development

```bash
npm install
npm run dev
```

The app will be available at `http://localhost:5173`

### Build for Production

```bash
npm run build
```

### Preview Production Build

```bash
npm run preview
```

## Deployment

This project is deployed on Vercel. To deploy your own instance:

```bash
# Install Vercel CLI
npm i -g vercel

# Deploy to production
vercel --prod
```

## Expanding the ESLint configuration

If you are developing a production application, we recommend updating the configuration to enable type-aware lint rules:

```js
export default defineConfig([
  globalIgnores(['dist']),
  {
    files: ['**/*.{ts,tsx}'],
    extends: [
      // Other configs...

      // Remove tseslint.configs.recommended and replace with this
      tseslint.configs.recommendedTypeChecked,
      // Alternatively, use this for stricter rules
      tseslint.configs.strictTypeChecked,
      // Optionally, add this for stylistic rules
      tseslint.configs.stylisticTypeChecked,

      // Other configs...
    ],
    languageOptions: {
      parserOptions: {
        project: ['./tsconfig.node.json', './tsconfig.app.json'],
        tsconfigRootDir: import.meta.dirname,
      },
      // other options...
    },
  },
])
```

You can also install [eslint-plugin-react-x](https://github.com/Rel1cx/eslint-react/tree/main/packages/plugins/eslint-plugin-react-x) and [eslint-plugin-react-dom](https://github.com/Rel1cx/eslint-react/tree/main/packages/plugins/eslint-plugin-react-dom) for React-specific lint rules:

```js
// eslint.config.js
import reactX from 'eslint-plugin-react-x'
import reactDom from 'eslint-plugin-react-dom'

export default defineConfig([
  globalIgnores(['dist']),
  {
    files: ['**/*.{ts,tsx}'],
    extends: [
      // Other configs...
      // Enable lint rules for React
      reactX.configs['recommended-typescript'],
      // Enable lint rules for React DOM
      reactDom.configs.recommended,
    ],
    languageOptions: {
      parserOptions: {
        project: ['./tsconfig.node.json', './tsconfig.app.json'],
        tsconfigRootDir: import.meta.dirname,
      },
      // other options...
    },
  },
])
```
