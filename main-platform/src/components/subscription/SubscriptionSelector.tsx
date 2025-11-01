import { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { PlanType } from '../../types/subscription';
import type { SubscriptionPlan } from '../../types/subscription';
import { getIndividualPlans, getOrganizationPlans } from '../../config/subscription-plans';
import { SubscriptionCard } from './SubscriptionCard';
import { PlanTypeToggle } from './PlanTypeToggle';

interface SubscriptionSelectorProps {
  onSelectPlan: (plan: SubscriptionPlan) => void;
}

export function SubscriptionSelector({ onSelectPlan }: SubscriptionSelectorProps) {
  const { t } = useTranslation();
  const [selectedPlanType, setSelectedPlanType] = useState<PlanType>(PlanType.Individual);

  const plansToShow = selectedPlanType === PlanType.Individual
    ? getIndividualPlans(t)
    : getOrganizationPlans(t);

  return (
    <div className="max-w-2xl mx-auto px-6">
      {/* Title */}
      <div className="text-center mb-4">
        <h1 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4 tracking-tight">
          {t('subscription.title')}
        </h1>
        <p className="text-lg text-gray-600 leading-relaxed">
          {t('subscription.subtitle')}
        </p>
      </div>

      {/* Plan Type Toggle */}
      <div className="flex justify-center mb-8">
        <PlanTypeToggle selectedType={selectedPlanType} onSelectType={setSelectedPlanType} />
      </div>

      {/* Subscription Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8 mb-8">
        {plansToShow.map((plan) => (
          <SubscriptionCard key={plan.id} plan={plan} onSelect={() => onSelectPlan(plan)} />
        ))}
      </div>
    </div>
  );
}
