import { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { PlanType } from '../../types/subscription';
import type { SubscriptionPlan } from '../../types/subscription';
import { INDIVIDUAL_PLANS, ORGANIZATION_PLANS } from '../../config/subscription-plans';
import { SubscriptionCard } from './SubscriptionCard';
import { PlanTypeToggle } from './PlanTypeToggle';

interface SubscriptionSelectorProps {
  onSelectPlan: (plan: SubscriptionPlan) => void;
}

export function SubscriptionSelector({ onSelectPlan }: SubscriptionSelectorProps) {
  const { t } = useTranslation();
  const [selectedPlanType, setSelectedPlanType] = useState<PlanType>(PlanType.Individual);

  const plansToShow = selectedPlanType === PlanType.Individual ? INDIVIDUAL_PLANS : ORGANIZATION_PLANS;

  return (
    <div className="flex flex-col items-center">
      <div className="text-center mb-8">
        <h2 className="text-3xl md:text-4xl font-extrabold text-slate-900">
          {t('subscription.title')}
        </h2>
        <p className="mt-4 text-lg text-slate-600 max-w-2xl mx-auto">
          {t('subscription.subtitle')}
        </p>
      </div>

      <PlanTypeToggle selectedType={selectedPlanType} onSelectType={setSelectedPlanType} />

      <div className="mt-10 w-full grid grid-cols-1 sm:grid-cols-2 gap-8 max-w-5xl">
        {plansToShow.map((plan) => (
          <SubscriptionCard key={plan.id} plan={plan} onSelect={() => onSelectPlan(plan)} />
        ))}
      </div>
    </div>
  );
}
