import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import { useAuthStore } from './auth/store';
import { Layout } from './components/layout/Layout';
import { Landing } from './pages/public/Landing';
import { Login } from './pages/public/Login';
import { Register } from './pages/public/Register';
import { Subscription } from './pages/public/Subscription';
import { Pitch } from './pages/public/Pitch';
import { TermsOfService } from './pages/public/TermsOfService';
import { PrivacyPolicy } from './pages/public/PrivacyPolicy';
import { UnderConstruction } from './pages/public/UnderConstruction';
import { AuthCallback } from './pages/public/AuthCallback';
import { Dashboard } from './pages/dashboard/Dashboard';
import { ModuleFrame } from './components/modules/ModuleFrame';
import { modules } from './config/modules';

function App() {
  const isAuthenticated = useAuthStore((state) => state.isAuthenticated());

  return (
    <BrowserRouter>
      <Routes>
        {/* Public routes */}
        <Route path="/" element={<Landing />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/subscription" element={<Subscription />} />
        <Route path="/pitch" element={<Pitch />} />
        <Route path="/terms-of-service" element={<TermsOfService />} />
        <Route path="/privacy-policy" element={<PrivacyPolicy />} />
        <Route path="/auth/callback" element={<AuthCallback />} />

        {/* Protected routes */}
        <Route element={<Layout />}>
          <Route path="/dashboard" element={isAuthenticated ? <Dashboard /> : <Navigate to="/login" />} />
          
          {/* Module routes */}
          {modules.map((module) => (
            <Route
              key={module.id}
              path={`${module.path}/*`}
              element={
                isAuthenticated
                  ? (module.disabled ? <UnderConstruction /> : <ModuleFrame module={module} />)
                  : <Navigate to="/login" />
              }
            />
          ))}
        </Route>

        {/* Catch all */}
        <Route path="*" element={<Navigate to="/" replace />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
