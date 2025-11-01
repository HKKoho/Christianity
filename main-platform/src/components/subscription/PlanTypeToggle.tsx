import { useTranslation } from 'react-i18next';
import { PlanType } from '../../types/subscription';

interface PlanTypeToggleProps {
  selectedType: PlanType;
  onSelectType: (type: PlanType) => void;
}

export function PlanTypeToggle({ selectedType, onSelectType }: PlanTypeToggleProps) {
  const { t } = useTranslation();
  const isIndividual = selectedType === PlanType.Individual;

  return (
    <div className="relative flex items-center gap-4 bg-gray-100 p-1 rounded-full shadow-inner">
      <button
        onClick={() => onSelectType(PlanType.Individual)}
        className={`px-6 py-2 rounded-full text-sm font-semibold transition-colors duration-300 relative z-10 ${
          isIndividual ? 'text-orange-600' : 'text-gray-600 hover:text-gray-800'
        }`}
      >
        {t('subscription.individual')}
      </button>
      <button
        onClick={() => onSelectType(PlanType.Organization)}
        className={`px-6 py-2 rounded-full text-sm font-semibold transition-colors duration-300 relative z-10 ${
          !isIndividual ? 'text-orange-600' : 'text-gray-600 hover:text-gray-800'
        }`}
      >
        {t('subscription.organization')}
      </button>
      <div
        className="absolute top-1 bottom-1 bg-white rounded-full shadow-md transition-transform duration-300 ease-in-out"
        style={{
          width: isIndividual ? 'calc(50% - 12px)' : 'calc(50% - 12px)',
          transform: isIndividual ? 'translateX(4px)' : 'translateX(calc(100% + 12px))',
        }}
      />
    </div>
  );
}
