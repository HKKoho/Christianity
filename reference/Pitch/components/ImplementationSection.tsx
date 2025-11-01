import React from 'react';
import { TimelineSection } from './TimelineSection';
import { CostSection } from './CostSection';
import { Language } from '../App';
import { translations } from '../lib/translations';

interface ImplementationSectionProps {
  language: Language;
}

export const ImplementationSection: React.FC<ImplementationSectionProps> = ({ language }) => {
  const t = translations[language].implementation;

  return (
    <section className="bg-white py-16 sm:py-24 px-4">
      <div className="max-w-5xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="font-serif text-5xl sm:text-6xl font-bold text-brand-purple-900 mb-4">
            {t.title}
          </h2>
          <p className="text-xl text-stone-600 max-w-3xl mx-auto">
            {t.subtitle}
          </p>
        </div>
        <div className="space-y-16">
          <TimelineSection language={language} />
          <CostSection language={language} />
        </div>
      </div>
    </section>
  );
};