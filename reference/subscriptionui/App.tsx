
import React, { useState, useCallback } from 'react';
import type { SubscriptionPlan } from './types';
import SubscriptionSelector from './components/SubscriptionSelector';
import UserDashboard from './components/UserDashboard';

const App: React.FC = () => {
  const [currentSubscription, setCurrentSubscription] = useState<SubscriptionPlan | null>(null);

  const handleSelectPlan = useCallback((plan: SubscriptionPlan) => {
    // In a real app, this would involve API calls, payment processing, etc.
    setCurrentSubscription(plan);
  }, []);

  const handleChangePlan = useCallback(() => {
    setCurrentSubscription(null);
  }, []);

  return (
    <div className="min-h-screen bg-slate-100/50 text-slate-800">
      <header className="bg-white shadow-sm">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-4 flex justify-between items-center">
          <h1 className="text-2xl font-bold text-brand-primary flex items-center">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-7 w-7 mr-2" viewBox="0 0 20 20" fill="currentColor">
              <path fillRule="evenodd" d="M5 5a3 3 0 015.292-2.121C11.163 1.107 13 0 15 0c2.761 0 5 2.239 5 5 0 1.515-.682 2.89-1.764 3.844-1.34 1.176-3.13 3.25-4.63 5.426C12.443 16.236 11.2 18.5 10 18.5s-2.443-2.264-3.606-4.23C4.893 12.094 3.102 10.02 1.764 8.844A4.982 4.982 0 010 5c0-2.761 2.239-5 5-5zm.292 1.879A1 1 0 005 6a1 1 0 001 1h8a1 1 0 100-2H6.828a3.001 3.001 0 01-1.536-.474L5 4.586v.293zM5 8a1 1 0 00-1 1v1a1 1 0 102 0V9a1 1 0 00-1-1z" clipRule="evenodd" />
            </svg>
            ServicePlan
          </h1>
          <div className="text-sm text-slate-500">
            {currentSubscription ? 'My Dashboard' : 'Choose Your Plan'}
          </div>
        </div>
      </header>
      <main className="container mx-auto p-4 sm:p-6 lg:p-8">
        {currentSubscription ? (
          <UserDashboard 
            subscription={currentSubscription} 
            onChangePlan={handleChangePlan} 
          />
        ) : (
          <SubscriptionSelector onSelectPlan={handleSelectPlan} />
        )}
      </main>
      <footer className="text-center py-6 text-slate-500 text-sm">
        <p>&copy; {new Date().getFullYear()} ServicePlan Inc. All rights reserved.</p>
        <p className="mt-1">Privacy Policy | Terms of Service</p>
      </footer>
    </div>
  );
};

export default App;
