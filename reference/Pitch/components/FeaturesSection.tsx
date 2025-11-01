import React from 'react';
import { Zap, BrainCircuit, CheckSquare, Users, BarChart3, Palette, HelpCircle, Edit3, Link, Layers } from 'lucide-react';
import { Language } from '../App';
import { translations } from '../lib/translations';

const iconMap: { [key: string]: React.ElementType } = {
  BrainCircuit,
  CheckSquare,
  Users,
  BarChart3,
  Palette,
  HelpCircle,
  Edit3,
  Link,
  Layers,
};

interface FeaturesSectionProps {
  language: Language;
}

export const FeaturesSection: React.FC<FeaturesSectionProps> = ({ language }) => {
  const t = translations[language].features;
  
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
      
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {t.list.map((feature, index) => {
            const Icon = iconMap[feature.icon];
            return (
                <div key={index} className="bg-white p-6 rounded-xl border border-stone-200 hover:shadow-xl hover:border-brand-purple-300 transition-all duration-300 transform hover:-translate-y-1">
                <div className="flex items-start">
                    <div className="bg-brand-purple-100 text-brand-purple-700 p-4 rounded-full mr-5">
                    {Icon ? <Icon size={28} /> : null}
                    </div>
                    <div className="flex-1">
                    <h3 className="font-bold text-brand-purple-900 text-2xl mb-1">{feature.title}</h3>
                    <p className="text-lg text-stone-600 mb-3">{feature.content}</p>
                    <p className="text-base text-brand-gold-800 font-semibold bg-brand-gold-100 px-4 py-1 rounded-full inline-block">
                        {feature.benefit}
                    </p>
                    </div>
                </div>
                </div>
            );
            })}
        </div>
      </div>
    </section>
  );
};