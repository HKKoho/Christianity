import React from 'react';
import { ArrowDown, Languages } from 'lucide-react';
import { translations } from '../lib/translations';
import { Language } from '../App';

interface HeroSectionProps {
  language: Language;
  setLanguage: (language: Language) => void;
}

export const HeroSection: React.FC<HeroSectionProps> = ({ language, setLanguage }) => {
  const t = translations[language].hero;

  const toggleLanguage = () => {
    setLanguage(language === 'en' ? 'zh-hant' : 'en');
  };

  return (
    <section className="bg-brand-purple-900 text-white text-center py-20 sm:py-32 px-4 relative">
      <div className="absolute top-4 right-4">
        <button
          onClick={toggleLanguage}
          className="flex items-center bg-white/10 hover:bg-white/20 text-white font-semibold py-2 px-4 rounded-lg transition-colors"
          aria-label="Toggle language"
        >
          <Languages size={20} className="mr-2" />
          {language === 'en' ? '中文' : 'English'}
        </button>
      </div>
      <div className="max-w-4xl mx-auto">
        <h1
          className="font-serif text-5xl sm:text-7xl font-bold leading-snug"
          dangerouslySetInnerHTML={{ __html: t.title }}
        >
        </h1>
        <p
          className="text-2xl sm:text-3xl mt-6 text-brand-purple-200 font-light max-w-3xl mx-auto"
          dangerouslySetInnerHTML={{ __html: t.subtitle }}
        />
        <div className="mt-10">
          <a
            href="#introduction"
            className="inline-block bg-brand-gold-400 text-brand-purple-950 font-bold text-xl px-10 py-5 rounded-lg shadow-lg hover:bg-brand-gold-300 transition-transform transform hover:scale-105"
          >
            {t.cta}
            <ArrowDown className="inline-block ml-2" size={24} />
          </a>
        </div>
      </div>
    </section>
  );
};