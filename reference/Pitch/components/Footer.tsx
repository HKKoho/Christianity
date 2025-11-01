import React from 'react';
import { Language } from '../App';
import { translations } from '../lib/translations';

interface FooterProps {
  language: Language;
}

export const Footer: React.FC<FooterProps> = ({ language }) => {
  const t = translations[language].footer;

  return (
    <footer className="text-center text-sm text-brand-purple-300/70 py-8 px-4">
      <p>{t.line1}</p>
      <p>{t.line2}</p>
    </footer>
  );
};