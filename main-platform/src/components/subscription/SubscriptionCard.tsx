import { useTranslation } from 'react-i18next';
import type { SubscriptionPlan } from '../../types/subscription';
import { CheckIcon } from './CheckIcon';

interface SubscriptionCardProps {
  plan: SubscriptionPlan;
  onSelect: () => void;
}

export function SubscriptionCard({ plan, onSelect }: SubscriptionCardProps) {
  const { t } = useTranslation();
  const cardClasses = plan.isFeatured
    ? 'border-2 border-indigo-600 shadow-2xl scale-100 md:scale-105'
    : 'border border-slate-200 shadow-lg';

  return (
    <div
      className={`relative bg-white rounded-2xl p-8 flex flex-col transition-all duration-300 hover:shadow-2xl hover:scale-105 ${cardClasses}`}
    >
      {plan.isFeatured && (
        <div className="absolute top-0 right-8 -translate-y-1/2 bg-indigo-600 text-white text-xs font-bold px-3 py-1 rounded-full uppercase tracking-wider">
          {t('subscription.most_popular')}
        </div>
      )}
      <h3 className="text-2xl font-semibold text-slate-900">{plan.name}</h3>
      <p className="mt-2 text-slate-500">{plan.description}</p>
      <div className="mt-6">
        <span className="text-4xl font-extrabold text-slate-900">{plan.priceText}</span>
        {plan.trialPeriodDays && (
          <p className="text-sm text-slate-500">{t('subscription.no_credit_card')}</p>
        )}
      </div>
      <ul className="mt-8 space-y-4 flex-grow">
        {plan.features.map((feature, index) => (
          <li key={index} className="flex items-start">
            <CheckIcon className="h-6 w-6 text-purple-600 flex-shrink-0 mr-3" />
            <span className="text-slate-600">{feature}</span>
          </li>
        ))}
      </ul>
      <button
        onClick={onSelect}
        className={`w-full mt-10 py-3 px-6 rounded-lg font-semibold text-lg transition-all duration-300 ${
          plan.isFeatured
            ? 'bg-indigo-600 text-white hover:bg-indigo-700'
            : 'bg-indigo-100 text-indigo-600 hover:bg-indigo-200'
        }`}
      >
        {plan.billingInterval === 'one-time' ? t('subscription.donate_now') : t('subscription.select_plan')}
      </button>
    </div>
  );
}
