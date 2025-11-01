import React from 'react';
import { AlertCircle } from 'lucide-react';
import { Language } from '../App';
import { translations } from '../lib/translations';

interface IntroductionSectionProps {
  language: Language;
}

export const IntroductionSection: React.FC<IntroductionSectionProps> = ({ language }) => {
  const t = translations[language].introduction;
  
  return (
    <section id="introduction" className="bg-stone-100 py-16 sm:py-24 px-4">
      <div className="max-w-4xl mx-auto text-center">
        <h2 className="font-serif text-5xl sm:text-6xl font-bold text-brand-purple-900 mb-6">
          {t.title}
        </h2>
        <p className="text-2xl text-stone-600 mb-12 leading-relaxed" dangerouslySetInnerHTML={{ __html: t.paragraph }} />
        <div className="bg-red-50/80 p-6 rounded-xl border border-red-200 text-left max-w-3xl mx-auto">
          <h3 className="font-serif text-4xl font-bold text-red-900 mb-4 flex items-center">
            <AlertCircle className="mr-3 text-red-500 flex-shrink-0" size={32} />
            {t.danger.title}
          </h3>
          <div className="space-y-3 text-stone-700 pl-12">
            <ul className="list-disc ml-2 space-y-2 text-stone-600 text-xl">
              {t.danger.points.map((point, index) => (
                <li key={index}>{point}</li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};