import React from 'react';
import { DollarSign, Server, UserPlus } from 'lucide-react';
import { Language } from '../App';
import { translations } from '../lib/translations';

interface CostSectionProps {
  language: Language;
}

export const CostSection: React.FC<CostSectionProps> = ({ language }) => {
  const t = translations[language].cost;

  return (
    <div>
      <h3 className="font-serif text-4xl font-bold text-brand-purple-900 mb-8 text-center flex items-center justify-center">
        <DollarSign className="mr-4" size={32} />
        {t.title}
      </h3>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="bg-green-50/50 p-6 rounded-xl border border-green-200 text-center">
          <h4 className="font-bold text-lg text-green-900 mb-2 flex items-center justify-center"><Server className="mr-2" />{t.hosting.title}</h4>
          <p className="text-5xl font-bold text-green-700">{t.hosting.price}</p>
          <p className="text-sm text-stone-500 mt-2">{t.hosting.description}</p>
        </div>
        <div className="bg-blue-50/50 p-6 rounded-xl border border-blue-200 text-center">
          <h4 className="font-bold text-lg text-blue-900 mb-2 flex items-center justify-center"><UserPlus className="mr-2" />{t.setup.title}</h4>
          <p className="text-5xl font-bold text-blue-700">{t.setup.price}</p>
          <p className="text-sm text-stone-500 mt-2">{t.setup.description}</p>
        </div>
      </div>
      <div className="mt-6 bg-brand-gold-50/80 p-6 rounded-xl border border-brand-gold-200 text-center">
        <h4 className="font-bold text-lg text-brand-gold-900 mb-2">{t.development.title}</h4>
        <p className="text-4xl font-bold text-brand-gold-800">{t.development.price}</p>
        <p className="text-base text-stone-600 mt-2" dangerouslySetInnerHTML={{ __html: t.development.description }} />
      </div>
    </div>
  );
};