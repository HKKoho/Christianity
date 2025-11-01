import React, { useState, useEffect } from 'react';
import { Check, ArrowRight } from 'lucide-react';
import { Language } from '../App';
import { translations } from '../lib/translations';

interface Step {
  id: number;
  text: string;
  checked: boolean;
}

interface CallToActionSectionProps {
  language: Language;
}

export const CallToActionSection: React.FC<CallToActionSectionProps> = ({ language }) => {
  const t = translations[language].cta;

  const getInitialSteps = (): Step[] => t.steps.map((text, index) => ({
    id: index + 1,
    text: text,
    checked: false,
  }));

  const [steps, setSteps] = useState(getInitialSteps);

  useEffect(() => {
    // When language changes, reset the steps with the new text but preserve checked state if possible
    setSteps(prevSteps => {
        return t.steps.map((text, index) => {
            const existingStep = prevSteps.find(s => s.id === index + 1);
            return {
                id: index + 1,
                text: text,
                checked: existingStep ? existingStep.checked : false,
            }
        });
    });
  }, [language, t.steps]);


  const handleToggle = (id: number) => {
    setSteps(
      steps.map((step) =>
        step.id === id ? { ...step, checked: !step.checked } : step
      )
    );
  };

  return (
    <section className="bg-brand-purple-900 text-white py-16 sm:py-24 px-4">
      <div className="max-w-4xl mx-auto text-center">
        <h2 className="font-serif text-5xl sm:text-6xl font-bold mb-4">
          {t.title}
        </h2>
        <blockquote className="font-serif text-3xl text-brand-purple-200 mb-2 max-w-3xl mx-auto italic">
          {t.quote.text}
        </blockquote>
        <p className="text-lg text-brand-purple-300 mb-12">{t.quote.reference}</p>
        
        <div className="bg-white/10 p-6 sm:p-8 rounded-xl border border-brand-purple-700 text-left">
            <h3 className="font-serif text-3xl font-bold mb-6 text-white">{t.checklistTitle}</h3>
            <div className="space-y-4">
            {steps.map((step) => (
            <label 
                key={step.id} 
                className={`flex items-start p-4 rounded-lg transition-all duration-300 cursor-pointer border ${step.checked ? 'bg-green-500/30 border-green-400' : 'bg-brand-purple-800/50 hover:bg-brand-purple-700/50 border-brand-purple-700'}`}
            >
                <div 
                className={`w-7 h-7 rounded-md mr-4 mt-0.5 flex-shrink-0 flex items-center justify-center border-2 transition-all ${step.checked ? 'bg-brand-gold-400 border-brand-gold-400' : 'border-brand-purple-400'}`}
                >
                {step.checked && <Check className="text-brand-purple-950" size={18} />}
                </div>
                <input
                type="checkbox"
                className="hidden"
                checked={step.checked}
                onChange={() => handleToggle(step.id)}
                />
                <span className={`flex-1 text-lg ${step.checked ? 'line-through text-brand-purple-300' : 'text-brand-purple-100'}`}>
                {step.text}
                </span>
            </label>
            ))}
        </div>
        </div>
        <div className="mt-12">
          <a
            href="mailto:victor.hung@aibyml.com?subject=Discipleship%20Platform%20Proposal"
            className="inline-block bg-brand-gold-400 text-brand-purple-950 font-bold text-xl px-10 py-5 rounded-lg shadow-lg hover:bg-brand-gold-300 transition-transform transform hover:scale-105"
          >
            {t.contactButton}
            <ArrowRight className="inline-block ml-2" size={24} />
          </a>
        </div>
      </div>
    </section>
  );
};