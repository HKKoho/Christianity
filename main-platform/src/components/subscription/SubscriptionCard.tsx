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
    ? 'border-2 shadow-2xl scale-100 md:scale-105'
    : 'border border-slate-200 shadow-lg';

  return (
    <div
      className={`relative bg-white rounded-2xl p-8 flex flex-col transition-all duration-300 hover:shadow-2xl hover:scale-105 ${cardClasses}`}
      style={{ borderColor: plan.isFeatured ? '#ff6b6b' : undefined }}
    >
      {plan.isFeatured && (
        <div
          className="absolute top-0 right-8 -translate-y-1/2 text-white text-xs font-bold px-3 py-1 rounded-full uppercase tracking-wider"
          style={{ backgroundColor: '#ff6b6b' }}
        >
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
            <CheckIcon className="h-5 w-5 flex-shrink-0 mr-3" style={{ color: '#10b981' }} />
            <span className="text-slate-600">{feature}</span>
          </li>
        ))}
      </ul>
      <button
        onClick={onSelect}
        className="w-full mt-10 py-3 px-6 rounded-lg font-semibold text-lg transition-all duration-300"
        style={{
          backgroundColor: plan.isFeatured ? '#ff6b6b' : '#fecaca',
          color: plan.isFeatured ? '#ffffff' : '#ff6b6b',
        }}
        onMouseEnter={(e) => {
          e.currentTarget.style.backgroundColor = plan.isFeatured ? '#ff5252' : '#fca5a5';
        }}
        onMouseLeave={(e) => {
          e.currentTarget.style.backgroundColor = plan.isFeatured ? '#ff6b6b' : '#fecaca';
        }}
      >
        {plan.billingInterval === 'one-time' ? t('subscription.donate_now') : t('subscription.select_plan')}
      </button>
    </div>
  );
}
