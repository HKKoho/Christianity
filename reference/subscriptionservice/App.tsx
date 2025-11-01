
import React, { useState } from 'react';
import AuthPage from './components/AuthPage';
import SubscriptionPage from './components/SubscriptionPage';
import { User, AuthProvider } from './types';

function App() {
  const [user, setUser] = useState<User | null>(null);

  const handleAuth = (provider: AuthProvider) => {
    // In a real application, this would involve a call to an authentication service (e.g., Firebase, Auth0, or a custom backend).
    // For this demo, we'll just simulate a successful login with mock user data.
    const mockUser: User = {
      name: `User-${Math.floor(Math.random() * 1000)}`,
      provider: provider,
    };
    console.log(`Simulating authentication with ${provider}...`);
    setUser(mockUser);
  };

  const handleSignOut = () => {
    console.log('Signing out user...');
    setUser(null);
  };

  return (
    <div className="bg-slate-50 min-h-screen flex items-center justify-center font-sans">
      <div className="w-full max-w-7xl mx-auto p-4">
        {user ? (
          <SubscriptionPage user={user} onSignOut={handleSignOut} />
        ) : (
          <AuthPage onAuth={handleAuth} />
        )}
      </div>
    </div>
  );
}

export default App;
