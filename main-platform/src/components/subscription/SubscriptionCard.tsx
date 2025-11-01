import { useTranslation } from 'react-i18next';
import type { SubscriptionPlan } from '../../types/subscription';
import { CheckIcon } from './CheckIcon';

interface SubscriptionCardProps {
  plan: SubscriptionPlan;
  onSelect: () => void;
}

export function SubscriptionCard({ plan, onSelect }: SubscriptionCardProps) {
  const { t } = useTranslation();

  return (
    <div
      className={`
        w-full bg-white rounded-xl p-8
        border-2 transition-all duration-300
        hover:shadow-xl hover:-translate-y-1
        flex flex-col
        ${plan.isFeatured
          ? 'border-orange-500 shadow-lg'
          : 'border-gray-200 shadow-md'
        }
      `}
    >
      {/* Featured Badge */}
      {plan.isFeatured && (
        <div className="inline-block bg-orange-500 text-white text-xs font-bold px-4 py-1 rounded-full uppercase mb-4">
          {t('subscription.most_popular')}
        </div>
      )}

      {/* Plan Name */}
      <h3 className="text-2xl font-semibold text-gray-900 mb-2 tracking-tight">
        {plan.name}
      </h3>

      {/* Description */}
      <p className="text-gray-600 mb-6 leading-relaxed">
        {plan.description}
      </p>

      {/* Price */}
      <div className="mb-6">
        <span className="text-4xl font-bold text-gray-900 tracking-tight">
          {plan.priceText}
        </span>
        {plan.trialPeriodDays && (
          <p className="text-sm text-gray-500 mt-2">
            {t('subscription.no_credit_card')}
          </p>
        )}
      </div>

      {/* Features */}
      <ul className="space-y-4 mb-8 flex-grow">
        {plan.features.map((feature, index) => (
          <li key={index} className="flex items-start">
            <CheckIcon className="w-5 h-5 text-orange-500 mr-3 flex-shrink-0 mt-0.5" />
            <span className="text-gray-700">{feature}</span>
          </li>
        ))}
      </ul>

      {/* Select Button */}
      <button
        onClick={onSelect}
        className={`
          w-full py-3 px-6 rounded-lg font-semibold
          transition-all duration-300
          ${plan.isFeatured
            ? 'bg-orange-500 text-white hover:bg-orange-600 shadow-md hover:shadow-lg'
            : 'bg-gray-100 text-gray-900 hover:bg-gray-200'
          }
        `}
      >
        {plan.billingInterval === 'one-time'
          ? t('subscription.donate_now')
          : t('subscription.select_plan')
        }
      </button>
    </div>
  );
}
