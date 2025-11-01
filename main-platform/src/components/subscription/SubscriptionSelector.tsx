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
    <div className="max-w-6xl mx-auto px-6">
      {/* Title */}
      <div className="text-center mb-12">
        <h1 className="text-4xl font-bold text-gray-900 mb-4">
          {t('subscription.title')}
        </h1>
        <p className="text-lg text-gray-600">
          {t('subscription.subtitle')}
        </p>
      </div>

      {/* Plan Type Toggle */}
      <div className="flex justify-center mb-12">
        <PlanTypeToggle selectedType={selectedPlanType} onSelectType={setSelectedPlanType} />
      </div>

      {/* Subscription Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
        {plansToShow.map((plan) => (
          <SubscriptionCard key={plan.id} plan={plan} onSelect={() => onSelectPlan(plan)} />
        ))}
      </div>
    </div>
  );
}
