import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { ArrowLeft, AlertCircle, CheckCircle, ArrowDown, ArrowRight, Check, ThumbsUp, ThumbsDown, ShieldCheck, Palette, HelpCircle, Edit3, Link as LinkIcon, Layers, BrainCircuit, Users, CheckSquare } from 'lucide-react';

export function Pitch() {
  const { t, i18n } = useTranslation();
  const [checkedSteps, setCheckedSteps] = useState<number[]>([]);
  const [showContent, setShowContent] = useState(false);
  const [currentSlide, setCurrentSlide] = useState(0);

  const toggleLanguage = () => {
    const newLang = i18n.language === 'zh-TW' ? 'en' : 'zh-TW';
    i18n.changeLanguage(newLang);
  };

  const handleDiscoverClick = () => {
    setShowContent(true);
    setTimeout(() => {
      const introSection = document.getElementById('introduction');
      if (introSection) {
        introSection.scrollIntoView({ behavior: 'smooth', block: 'start' });
      }
    }, 100);
  };

  const features = [
    { icon: Palette, titleKey: 'pitch.step_1_title', contentKey: 'pitch.step_1_content', benefitKey: 'pitch.step_1_benefit' },
    { icon: HelpCircle, titleKey: 'pitch.step_2_title', contentKey: 'pitch.step_2_content', benefitKey: 'pitch.step_2_benefit' },
    { icon: Edit3, titleKey: 'pitch.step_3_title', contentKey: 'pitch.step_3_content', benefitKey: 'pitch.step_3_benefit' },
    { icon: LinkIcon, titleKey: 'pitch.step_4_title', contentKey: 'pitch.step_4_content', benefitKey: 'pitch.step_4_benefit' },
    { icon: Layers, titleKey: 'pitch.step_5_title', contentKey: 'pitch.step_5_content', benefitKey: 'pitch.step_5_benefit' },
    { icon: BrainCircuit, titleKey: 'pitch.step_6_title', contentKey: 'pitch.step_6_content', benefitKey: 'pitch.step_6_benefit' },
    { icon: Users, titleKey: 'pitch.step_7_title', contentKey: 'pitch.step_7_content', benefitKey: 'pitch.step_7_benefit' },
    { icon: CheckSquare, titleKey: 'pitch.step_8_title', contentKey: 'pitch.step_8_content', benefitKey: 'pitch.step_8_benefit' },
  ];

  const nextSteps = [
    t('pitch.next_step_1'),
    t('pitch.next_step_2'),
    t('pitch.next_step_3'),
    t('pitch.next_step_4'),
  ];

  const toggleStep = (index: number) => {
    setCheckedSteps(prev =>
      prev.includes(index) ? prev.filter(i => i !== index) : [...prev, index]
    );
  };

  // Rotating hero slides - Translated via i18n
  const heroSlides = [
    {
      title: t('pitch.hero_slide_1_title'),
      subtitle: t('pitch.hero_slide_1_subtitle'),
      highlight: t('pitch.hero_slide_1_highlight')
    },
    {
      title: t('pitch.hero_slide_2_title'),
      subtitle: t('pitch.hero_slide_2_subtitle'),
      highlight: t('pitch.hero_slide_2_highlight')
    },
    {
      title: t('pitch.hero_slide_3_title'),
      subtitle: t('pitch.hero_slide_3_subtitle'),
      highlight: t('pitch.hero_slide_3_highlight')
    }
  ];

  // Auto-rotate slides every 10 seconds
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % heroSlides.length);
    }, 10000); // Change slide every 10 seconds

    return () => clearInterval(timer);
  }, [heroSlides.length]);

  return (
    <div className="min-h-screen bg-white font-sans text-stone-700">
      {/* Rotating Hero Section - Landing Page Style */}
      <section
        className="min-h-screen flex items-center justify-center text-center pb-10 relative overflow-hidden"
        style={{
          paddingTop: '120px',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
          backgroundImage: 'url(/LoveFaithHope.png)',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundRepeat: 'no-repeat'
        }}
      >
        {/* Subtle overlay for better text readability */}
        <div className="absolute inset-0 bg-white/60"></div>

        {/* Back button */}
        <div className="absolute top-4 left-4 z-20">
          <Link
            to="/"
            className="flex items-center gap-2 text-gray-800 hover:text-gray-900 transition-colors font-semibold bg-white/80 hover:bg-white px-4 py-2 rounded-lg shadow-md"
          >
            <ArrowLeft size={20} />
            <span>{t('common.back_to_home')}</span>
          </Link>
        </div>

        {/* Language toggle */}
        <div className="absolute top-4 right-4 z-20">
          <button
            onClick={toggleLanguage}
            className="flex items-center bg-white/80 hover:bg-white text-gray-800 font-semibold py-2 px-4 rounded-lg transition-colors shadow-md"
          >
            <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5h12M9 3v2m1.048 9.5A18.022 18.022 0 016.412 9m6.088 9h7M11 21l5-10 5 10M12.751 5C11.783 10.77 8.07 15.61 3 18.129" />
            </svg>
            {i18n.language === 'zh-TW' ? 'EN' : '中文'}
          </button>
        </div>

        {/* Rotating content */}
        <div
          className="relative z-10 w-full px-6 transition-opacity duration-1000"
          style={{
            maxWidth: '1280px',
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            justifyContent: 'center',
            textAlign: 'center',
            opacity: 1
          }}
        >
          <h1
            className="text-5xl md:text-6xl font-bold mb-6 leading-tight tracking-tight"
            style={{
              fontSize: 'clamp(36px, 7vw, 50px)',
              lineHeight: '1.1',
              textAlign: 'center',
              width: '100%',
              color: '#1f2937',
              textShadow: '2px 2px 4px rgba(255, 255, 255, 0.8)'
            }}
          >
            {heroSlides[currentSlide].title}
          </h1>

          <div
            className="mb-12"
            style={{
              maxWidth: '900px',
              width: '100%',
              textAlign: 'center',
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center'
            }}
          >
            <p
              className="text-2xl md:text-3xl font-bold text-purple-700 mb-4"
              style={{
                fontSize: 'clamp(20px, 3vw, 28px)',
                textShadow: '1px 1px 2px rgba(255, 255, 255, 0.9)'
              }}
            >
              {heroSlides[currentSlide].highlight}
            </p>

            <p
              className="text-xl md:text-2xl leading-relaxed font-light text-center mt-4"
              style={{
                fontSize: 'clamp(16px, 2.5vw, 24px)',
                lineHeight: '1.6',
                width: '100%',
                color: '#374151',
                textShadow: '1px 1px 3px rgba(255, 255, 255, 0.8)'
              }}
            >
              {heroSlides[currentSlide].subtitle}
            </p>
          </div>

          {/* Slide indicators */}
          <div className="flex gap-2 mb-8">
            {heroSlides.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentSlide(index)}
                className={`w-3 h-3 rounded-full transition-all duration-300 ${
                  index === currentSlide
                    ? 'bg-purple-700 w-8'
                    : 'bg-gray-400 hover:bg-gray-600'
                }`}
                aria-label={`Go to slide ${index + 1}`}
              />
            ))}
          </div>

          {/* Discover button */}
          <div className="mt-8">
            <button
              onClick={handleDiscoverClick}
              className="inline-block bg-purple-700 text-white font-bold text-xl px-10 py-5 rounded-lg shadow-lg hover:bg-purple-800 transition-all transform hover:scale-105 cursor-pointer"
            >
              {t('pitch.discover_button')}
              <ArrowDown className="inline-block ml-2" size={24} />
            </button>
          </div>
        </div>
      </section>

      {showContent && (
        <>
      {/* Introduction Section - The Crisis */}
      <section id="introduction" className="bg-stone-100 py-16 sm:py-24 px-4">
        <div className="max-w-7xl mx-auto text-center">
          <h2 className="font-serif text-5xl sm:text-6xl font-bold text-purple-900 mt-12 mb-6">
            {t('pitch.crisis_title')}
          </h2>
          <p className="text-2xl text-stone-600 mb-12 leading-relaxed" dangerouslySetInnerHTML={{ __html: t('pitch.crisis_subtitle') }} />
          <div className="flex justify-center">
            <div className="bg-red-50/80 p-6 rounded-xl border border-red-200 text-center max-w-4xl w-full">
              <h3 className="font-serif text-4xl font-bold text-red-900 mt-12 mb-4 flex items-center justify-center">
                <AlertCircle className="mr-3 text-red-500 flex-shrink-0" size={32} />
                {t('pitch.danger_title')}
              </h3>
              <ul className="list-disc space-y-3 text-stone-600 text-xl text-left inline-block mx-auto">
                <li>{t('pitch.danger_point_1')}</li>
                <li>{t('pitch.danger_point_2')}</li>
                <li>{t('pitch.danger_point_3')}</li>
                <li>{t('pitch.danger_point_4')}</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Vision Section */}
      <section className="bg-white py-16 sm:py-24 px-4">
        <div className="max-w-7xl mx-auto text-center">
          <CheckCircle className="mx-auto text-green-600 mb-4" size={52} />
          <h2 className="font-serif text-5xl sm:text-6xl font-bold text-green-900 mb-6 leading-tight" dangerouslySetInnerHTML={{ __html: t('pitch.solution_title') }} />
          <p className="text-3xl text-stone-600 mb-12 leading-relaxed text-center" dangerouslySetInnerHTML={{ __html: t('pitch.solution_subtitle') }} />
          <div className="bg-green-50/80 p-8 rounded-xl border-2 border-green-200 shadow-inner">
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4 text-center font-semibold flex-wrap">
              <div className="flex flex-col items-center px-4">
                <span className="text-2xl text-purple-700">{t('pitch.journey_step_1')}</span>
                <span className="text-lg text-stone-500 mt-1">{t('common.truth')}</span>
              </div>
              <ArrowRight className="text-stone-300 mx-4 hidden sm:block" size={28}/>
              <div className="flex flex-col items-center px-4">
                <span className="text-2xl text-blue-700">{t('pitch.journey_step_2')}</span>
                <span className="text-lg text-stone-500 mt-1">{t('common.practice')}</span>
              </div>
              <ArrowRight className="text-stone-300 mx-4 hidden sm:block" size={28}/>
              <div className="flex flex-col items-center px-4">
                <span className="text-2xl text-indigo-700">{t('pitch.journey_step_3')}</span>
                <span className="text-lg text-stone-500 mt-1">{t('common.experience')}</span>
              </div>
              <ArrowRight className="text-stone-300 mx-4 hidden sm:block" size={28}/>
              <div className="flex flex-col items-center px-4">
                <span className="text-2xl text-orange-700">{t('pitch.journey_step_4')}</span>
                <span className="text-lg text-stone-500 mt-1">{t('common.fellowship')}</span>
              </div>
            </div>
          </div>
          <p className="font-serif text-4xl text-green-800 italic mt-8">
            {t('pitch.journey_step_5')}
          </p>
        </div>
      </section>

      {/* Features Section - 8-Step Transformation */}
      <section className="bg-stone-100 py-16 sm:py-24 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="font-serif text-5xl sm:text-6xl font-bold text-purple-900 mt-12 mb-6">
              {t('pitch.features_title')}
            </h2>
            <p className="text-xl text-stone-600 max-w-3xl mx-auto text-center mb-12">
              {t('pitch.features_subtitle')}
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {features.map((feature, index) => {
              const Icon = feature.icon;
              return (
                <div key={index} className="bg-white p-6 rounded-xl border border-stone-200 hover:shadow-xl hover:border-purple-300 transition-all duration-300 transform hover:-translate-y-1">
                  <div className="flex items-start">
                    <div className="bg-purple-100 text-purple-700 p-4 rounded-full mr-5 flex-shrink-0">
                      <Icon size={28} />
                    </div>
                    <div className="flex-1">
                      <h3 className="font-bold text-purple-900 text-2xl mb-4">{t(feature.titleKey)}</h3>
                      <p className="text-lg text-stone-600 mb-12">{t(feature.contentKey)}</p>
                      <p className="text-base text-yellow-800 font-semibold bg-yellow-100 px-4 py-1 rounded-full inline-block">
                        {t(feature.benefitKey)}
                      </p>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* The Choice Section */}
      <section className="bg-white py-16 sm:py-24 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="font-serif text-5xl sm:text-6xl font-bold text-purple-900 mt-12 mb-6">
              {t('pitch.choice_title')}
            </h2>
            <p className="text-xl text-stone-600 max-w-3xl mx-auto text-center mb-12">
              {t('pitch.choice_subtitle')}
            </p>
          </div>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-start">
            {/* Path 1 */}
            <div className="bg-white/70 p-8 rounded-xl border border-stone-300 shadow-lg relative opacity-80 hover:opacity-100 transition-opacity">
              <div className="flex items-center text-red-700 mb-3">
                <ThumbsDown className="mr-3 flex-shrink-0" size={28}/>
                <h3 className="font-serif text-3xl font-bold">{t('pitch.path1_title')}</h3>
              </div>
              <p className="text-base text-stone-600 mb-6 font-semibold">{t('pitch.path1_subtitle')}</p>
              <ul className="text-base text-stone-600 space-y-2">
                <li className="flex items-start">
                  <span className="text-green-600 mr-2 mt-1">✓</span>
                  {t('pitch.path1_point_1')}
                </li>
                <li className="flex items-start">
                  <span className="text-green-600 mr-2 mt-1">✓</span>
                  {t('pitch.path1_point_2')}
                </li>
                <li className="flex items-start">
                  <span className="text-green-600 mr-2 mt-1">✓</span>
                  {t('pitch.path1_point_3')}
                </li>
                <li className="flex items-start font-bold text-red-800">
                  <span className="text-red-600 mr-2 mt-1">✗</span>
                  {t('pitch.path1_point_4')}
                </li>
                <li className="flex items-start font-bold text-red-800">
                  <span className="text-red-600 mr-2 mt-1">✗</span>
                  {t('pitch.path1_point_5')}
                </li>
              </ul>
            </div>

            {/* Path 2 */}
            <div className="bg-white p-8 rounded-xl border-2 border-yellow-500 shadow-2xl relative transform lg:scale-105">
              <div className="absolute -top-4 -right-4 bg-yellow-500 text-white px-4 py-2 rounded-full text-base font-bold shadow-lg flex items-center">
                <ShieldCheck className="mr-2" size={16}/> {t('pitch.path2_badge')}
              </div>
              <div className="flex items-center text-green-700 mb-3">
                <ThumbsUp className="mr-3 flex-shrink-0" size={28}/>
                <h3 className="font-serif text-3xl font-bold">{t('pitch.path2_title')}</h3>
              </div>
              <p className="text-base text-stone-600 mb-6 font-semibold">{t('pitch.path2_subtitle')}</p>
              <ul className="text-base text-stone-600 space-y-2">
                <li className="flex items-start font-bold text-green-800">
                  <span className="text-green-600 mr-2 mt-1">✓</span>
                  {t('pitch.path2_point_1')}
                </li>
                <li className="flex items-start font-bold text-green-800">
                  <span className="text-green-600 mr-2 mt-1">✓</span>
                  {t('pitch.path2_point_2')}
                </li>
                <li className="flex items-start font-bold text-green-800">
                  <span className="text-green-600 mr-2 mt-1">✓</span>
                  {t('pitch.path2_point_3')}
                </li>
                <li className="flex items-start text-yellow-700">
                  <span className="text-yellow-600 mr-2 mt-1">⚠</span>
                  {t('pitch.path2_point_4')}
                </li>
                <li className="flex items-start text-yellow-700">
                  <span className="text-yellow-600 mr-2 mt-1">⚠</span>
                  {t('pitch.path2_point_5')}
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action Section */}
      <section className="bg-purple-900 text-white py-16 sm:py-24 px-4">
        <div className="max-w-7xl mx-auto text-center">
          <h2 className="font-serif text-5xl sm:text-6xl font-bold mb-6">
            {t('pitch.cta_title')}
          </h2>
          <blockquote className="font-serif text-3xl text-purple-200 mb-8 max-w-3xl mx-auto italic">
            {t('pitch.closing_quote')}
          </blockquote>
          <p className="text-lg text-purple-300 mb-12">{t('pitch.closing_reference')}</p>

          <div className="bg-white/10 p-6 sm:p-8 rounded-xl border border-purple-700 max-w-3xl mx-auto">
            <h3 className="font-serif text-3xl font-bold mb-4 text-white text-center">{t('pitch.next_steps_title')}</h3>
            <div className="space-y-4">
              {nextSteps.map((step, index) => (
                <label
                  key={index}
                  className={`flex items-start p-4 rounded-lg transition-all duration-300 cursor-pointer border ${checkedSteps.includes(index) ? 'bg-green-500/30 border-green-400' : 'bg-purple-800/50 hover:bg-purple-700/50 border-purple-700'}`}
                >
                  <div
                    className={`w-7 h-7 rounded-md mr-4 mt-0.5 flex-shrink-0 flex items-center justify-center border-2 transition-all ${checkedSteps.includes(index) ? 'bg-yellow-400 border-yellow-400' : 'border-purple-400'}`}
                  >
                    {checkedSteps.includes(index) && <Check className="text-purple-950" size={18} />}
                  </div>
                  <input
                    type="checkbox"
                    className="hidden"
                    checked={checkedSteps.includes(index)}
                    onChange={() => toggleStep(index)}
                  />
                  <span className={`flex-1 text-lg ${checkedSteps.includes(index) ? 'line-through text-purple-300' : 'text-purple-100'}`}>
                    {step}
                  </span>
                </label>
              ))}
            </div>
          </div>
          <div className="mt-12">
            <Link
              to="/subscription"
              className="inline-block bg-yellow-400 text-purple-950 font-bold text-xl px-10 py-5 rounded-lg shadow-lg hover:bg-yellow-300 transition-transform transform hover:scale-105"
            >
              {t('pitch.cta_button')}
              <ArrowRight className="inline-block ml-2" size={24} />
            </Link>
          </div>
        </div>
      </section>
        </>
      )}

      {/* Footer */}
      <footer className="bg-black text-white py-16 border-t border-gray-800">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center">
            <div className="flex items-center justify-center space-x-3 mb-6">
              <span className="text-3xl">{t('common.cross')}</span>
              <span className="text-2xl font-bold tracking-tight">{t('landing.footer_brand')}</span>
            </div>
            <p className="text-gray-300 mb-6 text-lg font-light text-center">
              {t('landing.footer_tagline')}
            </p>
            <div className="w-16 h-px bg-gray-700 mx-auto mb-6"></div>
            <p className="text-sm text-gray-500 font-light text-center">
              {t('landing.footer_copyright')}
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}
