import React, { useState } from 'react';
import { HeroSection } from './components/HeroSection';
import { IntroductionSection } from './components/IntroductionSection';
import { VisionSection } from './components/VisionSection';
import { FeaturesSection } from './components/FeaturesSection';
import { ImplementationSection } from './components/ImplementationSection';
import { TheChoiceSection } from './components/TheChoiceSection';
import { CallToActionSection } from './components/CallToActionSection';
import { Footer } from './components/Footer';

export type Language = 'en' | 'zh-hant';

function App() {
  const [language, setLanguage] = useState<Language>('en');

  return (
    <div className="font-sans text-stone-700">
      <HeroSection language={language} setLanguage={setLanguage} />
      <main>
        <IntroductionSection language={language} />
        <VisionSection language={language} />
        <FeaturesSection language={language} />
        <ImplementationSection language={language} />
        <TheChoiceSection language={language} />
        <CallToActionSection language={language} />
      </main>
      <Footer language={language} />
    </div>
  );
}

export default App;