
import React from 'react';
import type { SubscriptionPlan } from '../types';
import CheckIcon from './icons/CheckIcon';

interface UserDashboardProps {
  subscription: SubscriptionPlan;
  onChangePlan: () => void;
}

const UserDashboard: React.FC<UserDashboardProps> = ({ subscription, onChangePlan }) => {
  const getNextRenewalDate = () => {
    if (subscription.trialPeriodDays) {
      const date = new Date();
      date.setDate(date.getDate() + subscription.trialPeriodDays);
      return `Trial ends on ${date.toLocaleDateString()}`;
    }
    if (subscription.billingInterval === 'monthly') {
        const date = new Date();
        date.setMonth(date.getMonth() + 1);
        return `Renews on ${date.toLocaleDateString()}`;
    }
    return 'N/A';
  }

  return (
    <div className="max-w-4xl mx-auto">
        <div className="bg-white p-8 rounded-2xl shadow-xl border border-slate-200">
            <h2 className="text-3xl font-bold text-slate-900 mb-2">My Current Plan</h2>
            <p className="text-slate-500 mb-8">Here are the details of your active subscription.</p>
            
            <div className="bg-brand-light p-6 rounded-lg border-l-4 border-brand-primary">
                <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center">
                    <div>
                        <span className="text-sm font-semibold text-brand-dark uppercase tracking-wider">{subscription.type}</span>
                        <h3 className="text-2xl font-bold text-brand-dark mt-1">{subscription.name}</h3>
                    </div>
                    <div className="mt-4 sm:mt-0 sm:text-right">
                        <p className="text-2xl font-bold text-brand-dark">{subscription.priceText}</p>
                        <p className="text-sm text-slate-500">{getNextRenewalDate()}</p>
                    </div>
                </div>
            </div>

            <div className="mt-8">
                <h4 className="text-xl font-semibold text-slate-800 mb-4">Plan Features:</h4>
                <ul className="space-y-3">
                    {subscription.features.map((feature, index) => (
                        <li key={index} className="flex items-center">
                            <CheckIcon className="h-5 w-5 text-green-500 mr-3" />
                            <span className="text-slate-600">{feature}</span>
                        </li>
                    ))}
                </ul>
            </div>

            <div className="mt-10 border-t pt-6 text-center">
                <p className="text-slate-600 mb-4">Want to explore other options?</p>
                <button
                    onClick={onChangePlan}
                    className="bg-slate-700 text-white py-3 px-8 rounded-lg font-semibold hover:bg-slate-800 transition-colors duration-300"
                >
                    Change My Plan
                </button>
            </div>
        </div>
    </div>
  );
};

export default UserDashboard;
