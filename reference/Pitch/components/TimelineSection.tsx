import React from 'react';
import { Clock } from 'lucide-react';
import { Language } from '../App';
import { translations } from '../lib/translations';

interface TimelineSectionProps {
  language: Language;
}

export const TimelineSection: React.FC<TimelineSectionProps> = ({ language }) => {
  const t = translations[language].timeline;

  return (
    <div className="bg-brand-purple-50/50 p-6 sm:p-8 rounded-xl">
      <h3 className="font-serif text-4xl font-bold text-brand-purple-900 mb-8 text-center flex items-center justify-center">
        <Clock className="mr-4" size={32} />
        {t.title}
      </h3>
      <div className="relative max-w-2xl mx-auto">
        <div className="absolute left-4 top-0 h-full w-0.5 bg-brand-purple-200" aria-hidden="true"></div>

        <div className="space-y-8">
          {t.items.map((item, index) => (
            <div key={index} className="relative pl-12">
              <div className={`absolute left-0 top-1 w-8 h-8 rounded-full ${item.color} flex items-center justify-center text-white font-bold transform -translate-x-1/2`}>
                {index + 1}
              </div>
              <div>
                <p className="text-base font-semibold text-stone-500">{item.weeks}</p>
                <h4 className="font-bold text-xl text-brand-purple-800 mt-1">{item.title}</h4>
                <p className="text-base text-stone-600 mt-1">{item.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
      <div className="mt-10 pt-6 border-t border-brand-purple-200 text-center">
        <p className="text-lg text-stone-700">
          <strong>{t.total.label}:</strong> {t.total.value}
        </p>
        <p className="text-base text-stone-500">{t.total.sublabel}</p>
      </div>
    </div>
  );
};