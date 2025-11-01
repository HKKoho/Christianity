import React from 'react';
import { ThumbsDown, ThumbsUp, ShieldCheck } from 'lucide-react';
import { Language } from '../App';
import { translations } from '../lib/translations';

interface TheChoiceSectionProps {
  language: Language;
}

export const TheChoiceSection: React.FC<TheChoiceSectionProps> = ({ language }) => {
  const t = translations[language].choice;

  return (
    <section className="bg-stone-100 py-16 sm:py-24 px-4">
      <div className="max-w-5xl mx-auto">
        <div className="text-center mb-12">
            <h2 className="font-serif text-5xl sm:text-6xl font-bold text-brand-purple-900 mb-4">
                {t.title}
            </h2>
            <p className="text-xl text-stone-600 max-w-3xl mx-auto">
                {t.subtitle}
            </p>
        </div>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
        
          <div className="bg-white/70 p-8 rounded-xl border border-stone-300 shadow-lg relative opacity-80 hover:opacity-100 transition-opacity">
            <div className="flex items-center text-red-700 mb-3">
              <ThumbsDown className="mr-3" size={28}/>
              <h3 className="font-serif text-3xl font-bold">{t.path1.title}</h3>
            </div>
            <p className="text-base text-stone-600 mb-4 font-semibold">{t.path1.subtitle}</p>
            <ul className="text-base text-stone-600 space-y-2">
              {t.path1.points.map((point, index) => (
                 <li key={index} className={`flex items-start ${point.style}`}>
                    <span className={`${point.color} mr-2 mt-1`}>{point.icon}</span>
                    {point.text}
                </li>
              ))}
            </ul>
          </div>
          
          <div className="bg-white p-8 rounded-xl border-2 border-brand-gold-500 shadow-2xl relative transform lg:scale-105">
            <div className="absolute -top-4 -right-4 bg-brand-gold-500 text-white px-4 py-2 rounded-full text-base font-bold shadow-lg flex items-center">
              <ShieldCheck className="mr-2" size={16}/> {t.path2.badge}
            </div>
            <div className="flex items-center text-green-700 mb-3">
              <ThumbsUp className="mr-3" size={28}/>
              <h3 className="font-serif text-3xl font-bold">{t.path2.title}</h3>
            </div>
            <p className="text-base text-stone-600 mb-4 font-semibold">{t.path2.subtitle}</p>
            <ul className="text-base text-stone-600 space-y-2">
               {t.path2.points.map((point, index) => (
                 <li key={index} className={`flex items-start ${point.style}`}>
                    <span className={`${point.color} mr-2 mt-1`}>{point.icon}</span>
                    {point.text}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};