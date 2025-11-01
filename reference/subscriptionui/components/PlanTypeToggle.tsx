
import React from 'react';
import { PlanType } from '../types';

interface PlanTypeToggleProps {
  selectedType: PlanType;
  onSelectType: (type: PlanType) => void;
}

const PlanTypeToggle: React.FC<PlanTypeToggleProps> = ({ selectedType, onSelectType }) => {
  const isIndividual = selectedType === PlanType.Individual;

  return (
    <div className="relative flex items-center bg-slate-200/70 p-1 rounded-full shadow-inner">
      <button
        onClick={() => onSelectType(PlanType.Individual)}
        className={`px-6 py-2 rounded-full text-sm font-semibold transition-colors duration-300 relative z-10 ${
          isIndividual ? 'text-brand-primary' : 'text-slate-600 hover:text-slate-800'
        }`}
      >
        Individual
      </button>
      <button
        onClick={() => onSelectType(PlanType.Organization)}
        className={`px-6 py-2 rounded-full text-sm font-semibold transition-colors duration-300 relative z-10 ${
          !isIndividual ? 'text-brand-primary' : 'text-slate-600 hover:text-slate-800'
        }`}
      >
        Organization
      </button>
      <div
        className="absolute top-1 bottom-1 bg-white rounded-full shadow-md transition-transform duration-300 ease-in-out"
        style={{
          width: isIndividual ? 'calc(50% - 4px)' : 'calc(50% - 4px)',
          transform: isIndividual ? 'translateX(4px)' : 'translateX(calc(100% + 4px))',
        }}
      />
    </div>
  );
};

export default PlanTypeToggle;
