import React from 'react';
import { CheckCircle, ArrowRight } from 'lucide-react';
import { Language } from '../App';
import { translations } from '../lib/translations';

interface VisionSectionProps {
  language: Language;
}

export const VisionSection: React.FC<VisionSectionProps> = ({ language }) => {
  const t = translations[language].vision;

  return (
    <section className="bg-white py-16 sm:py-24 px-4">
      <div className="max-w-5xl mx-auto text-center">
        <CheckCircle className="mx-auto text-green-600 mb-4" size={52} />
        <h2 
          className="font-serif text-5xl sm:text-6xl font-bold text-green-900 mb-4 leading-tight"
          dangerouslySetInnerHTML={{ __html: t.title }}
        />
        {t.quote && (
            <div className="mb-8">
                <blockquote className="font-serif text-2xl text-stone-600 italic">
                    "{t.quote.text}"
                </blockquote>
                <p className="text-lg text-stone-500 mt-2">{t.quote.reference}</p>
            </div>
        )}
        <p className="text-3xl text-stone-600 mb-12 leading-relaxed max-w-4xl mx-auto">
          {t.paragraph}
        </p>
        <div className="bg-green-50/80 p-8 rounded-xl border-2 border-green-200 shadow-inner">
          <div className="flex flex-col items-center justify-center gap-y-6">
            {/* First Row */}
            <div className="flex flex-col sm:flex-row items-center justify-around text-center font-semibold flex-wrap gap-y-6">
              {t.pathway.slice(0, 3).map((step, index) => (
                <React.Fragment key={index}>
                  <div className="flex flex-col items-center px-4">
                    <span className={`text-2xl ${step.color}`}>{step.title}</span>
                    <span className="text-lg text-stone-500 mt-1">{step.subtitle}</span>
                  </div>
                  {index < 2 && <ArrowRight className="text-stone-300 mx-4 hidden sm:block" size={28}/>}
                </React.Fragment>
              ))}
            </div>

            {/* Second Row */}
            {t.pathway.length > 3 && (
                <div className="flex flex-col items-center text-center font-semibold mt-4">
                    <div className="flex flex-col items-center">
                        <span className={`text-2xl ${t.pathway[3].color}`}>{t.pathway[3].title}</span>
                        <span className="text-lg text-stone-500 mt-1">{t.pathway[3].subtitle}</span>
                    </div>
                </div>
            )}
          </div>
        </div>
        <p className="font-serif text-4xl text-green-800 italic mt-10">
          {t.conclusion}
        </p>
      </div>
    </section>
  );
};