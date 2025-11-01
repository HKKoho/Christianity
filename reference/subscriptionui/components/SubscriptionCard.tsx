
import React from 'react';
import type { SubscriptionPlan } from '../types';
import CheckIcon from './icons/CheckIcon';

interface SubscriptionCardProps {
  plan: SubscriptionPlan;
  onSelect: () => void;
}

const SubscriptionCard: React.FC<SubscriptionCardProps> = ({ plan, onSelect }) => {
  const cardClasses = plan.isFeatured 
    ? "border-2 border-brand-primary shadow-2xl scale-100 md:scale-105" 
    : "border border-slate-200 shadow-lg";

  return (
    <div className={`relative bg-white rounded-2xl p-8 flex flex-col transition-all duration-300 hover:shadow-2xl hover:scale-105 ${cardClasses}`}>
      {plan.isFeatured && (
        <div className="absolute top-0 right-8 -translate-y-1/2 bg-brand-primary text-white text-xs font-bold px-3 py-1 rounded-full uppercase tracking-wider">
          Most Popular
        </div>
      )}
      <h3 className="text-2xl font-semibold text-slate-900">{plan.name}</h3>
      <p className="mt-2 text-slate-500">{plan.description}</p>
      <div className="mt-6">
        <span className="text-4xl font-extrabold text-slate-900">{plan.priceText}</span>
        {plan.trialPeriodDays && (
          <p className="text-sm text-slate-500">No credit card required</p>
        )}
      </div>
      <ul className="mt-8 space-y-4 flex-grow">
        {plan.features.map((feature, index) => (
          <li key={index} className="flex items-start">
            <CheckIcon className="h-6 w-6 text-brand-secondary flex-shrink-0 mr-3" />
            <span className="text-slate-600">{feature}</span>
          </li>
        ))}
      </ul>
      <button
        onClick={onSelect}
        className={`w-full mt-10 py-3 px-6 rounded-lg font-semibold text-lg transition-all duration-300 ${plan.isFeatured ? 'bg-brand-primary text-white hover:bg-brand-dark' : 'bg-brand-light text-brand-primary hover:bg-indigo-200'}`}
      >
        {plan.billingInterval === 'one-time' ? 'Donate Now' : 'Select Plan'}
      </button>
    </div>
  );
};

export default SubscriptionCard;
