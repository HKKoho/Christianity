import { useState } from 'react';
import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { getTranslatedModules } from '../../config/modules-i18n';
import { CanvasSymbolTransform } from '../../components/CanvasSymbolTransform';
import { CanvasModuleCard } from '../../components/CanvasModuleCard';
import { MockLogin } from '../../components/MockLogin';

export function Landing() {
  const { t, i18n } = useTranslation();
  const modules = getTranslatedModules(t);
  const [showMockLogin, setShowMockLogin] = useState(false);

  const toggleLanguage = () => {
    const newLang = i18n.language === 'zh-TW' ? 'en' : 'zh-TW';
    i18n.changeLanguage(newLang);
  };

  return (
    <div className="min-h-screen bg-white">
      {/* Header - Redesigned with Bigger Fonts */}
      <header className="bg-white fixed w-full top-0 z-50" style={{ borderBottom: 'none', paddingTop: '8px', paddingBottom: '8px' }}>
        <nav className="container mx-auto px-6 py-5 flex justify-between items-center max-w-7xl">
          {/* Left side - Bigger brand text */}
          <div className="flex items-center" style={{ gap: '16px' }}>
            <span className="text-6xl" style={{ fontSize: '56px' }}>{t('common.cross')}</span>
            <span
              className="text-3xl font-bold tracking-tight"
              style={{
                fontSize: '32px',
                fontWeight: '700',
                color: '#ff6b6b',
                letterSpacing: '-0.5px'
              }}
            >
              {t('landing.brand_name')}
            </span>
          </div>
          {/* Right side - Language switcher and Join Us button */}
          <div className="flex items-center gap-4">
            {/* Language Switcher Button */}
            <button
              onClick={toggleLanguage}
              className="px-4 py-2 rounded-lg font-semibold shadow-md hover:shadow-lg transition-all duration-300 flex items-center gap-2"
              style={{
                backgroundColor: '#ffffff',
                color: '#ff6b6b',
                border: '2px solid #ff6b6b',
                padding: '10px 20px',
                borderRadius: '8px',
                fontSize: '16px',
                fontWeight: '600',
                cursor: 'pointer',
                transition: 'all 0.3s ease'
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.backgroundColor = '#ff6b6b';
                e.currentTarget.style.color = '#ffffff';
                e.currentTarget.style.transform = 'translateY(-2px)';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.backgroundColor = '#ffffff';
                e.currentTarget.style.color = '#ff6b6b';
                e.currentTarget.style.transform = 'translateY(0)';
              }}
              title={i18n.language === 'zh-TW' ? 'Switch to English' : '切換至繁體中文'}
            >
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5h12M9 3v2m1.048 9.5A18.022 18.022 0 016.412 9m6.088 9h7M11 21l5-10 5 10M12.751 5C11.783 10.77 8.07 15.61 3 18.129" />
              </svg>
              <span style={{ fontWeight: '700' }}>
                {i18n.language === 'zh-TW' ? 'EN' : '中文'}
              </span>
            </button>

            {/* Join Us Button */}
            <Link
              to="/register"
              className="px-6 py-2.5 rounded-lg font-semibold shadow-md hover:shadow-xl hover:-translate-y-0.5 transition-all duration-300"
              style={{
                backgroundColor: '#ff6b6b',
                color: '#ffffff',
                padding: '12px 28px',
                borderRadius: '8px',
                fontSize: '18px',
                fontWeight: '600',
                textDecoration: 'none',
                boxShadow: '0 4px 6px -1px rgb(255 107 107 / 0.3)',
                transition: 'all 0.3s ease'
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.backgroundColor = '#ff5252';
                e.currentTarget.style.transform = 'translateY(-2px)';
                e.currentTarget.style.boxShadow = '0 8px 12px -2px rgb(255 107 107 / 0.4)';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.backgroundColor = '#ff6b6b';
                e.currentTarget.style.transform = 'translateY(0)';
                e.currentTarget.style.boxShadow = '0 4px 6px -1px rgb(255 107 107 / 0.3)';
              }}
            >
              {t('landing.join_us')}
            </Link>
          </div>
        </nav>
      </header>

      {/* Hero Section - Elegant Minimalist */}
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

        <div
          className="relative z-10 w-full px-6"
          style={{
            maxWidth: '1200px',
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            justifyContent: 'center',
            textAlign: 'center'
          }}
        >
          <h1
            className="text-5xl md:text-6xl font-bold mb-6 leading-tight tracking-tight"
            style={{
              fontSize: 'clamp(36px, 7vw, 50px)',
              lineHeight: '1.1',
              textAlign: 'center',
              width: '100%',
              color: '#ffffff',
              textShadow: '2px 2px 4px rgba(0, 0, 0, 0.3)'
            }}
          >
            {t('landing.hero_title')}
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
              className="text-xl md:text-2xl mb-4 leading-relaxed font-light"
              style={{
                fontSize: 'clamp(16px, 2.5vw, 24px)',
                lineHeight: '1.6',
                textAlign: 'center',
                width: '100%',
                color: '#ffffff',
                textShadow: '1px 1px 3px rgba(0, 0, 0, 0.3)'
              }}
            >
              {t('landing.hero_subtitle_1')}
            </p>
            <p
              className="text-xl md:text-2xl leading-relaxed font-light"
              style={{
                fontSize: 'clamp(16px, 2.5vw, 24px)',
                lineHeight: '1.6',
                textAlign: 'center',
                width: '100%',
                color: '#ffffff',
                textShadow: '1px 1px 3px rgba(0, 0, 0, 0.3)'
              }}
            >
              {t('landing.hero_subtitle_2')}
            </p>
          </div>

          {/* Canvas-Based Symbol Transformation */}
          <div
            className="relative my-12"
            style={{
              width: '100%',
              maxWidth: '500px',
              aspectRatio: '1 / 1',
              margin: '0 auto',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center'
            }}
          >
            <CanvasSymbolTransform />
          </div>

          <div className="mt-6 flex justify-center items-center gap-6 flex-wrap">
            <Link
              to="/register"
              className="rounded-lg font-bold hover:shadow-xl hover:-translate-y-1 transition-all duration-300"
              style={{
                display: 'inline-block',
                textDecoration: 'none',
                backgroundColor: 'transparent',
                color: '#ffffff',
                border: 'none',
                textShadow: '2px 2px 4px rgba(0, 0, 0, 0.6)',
                padding: '16px 48px',
                fontSize: '22px'
              }}
            >
              {t('landing.hero_cta')}
            </Link>

            <button
              onClick={() => setShowMockLogin(true)}
              className="rounded-lg font-bold hover:shadow-xl hover:-translate-y-1 transition-all duration-300"
              style={{
                display: 'inline-block',
                backgroundColor: 'rgba(255, 255, 255, 0.9)',
                color: '#4a90e2',
                border: '3px solid #ffffff',
                textShadow: 'none',
                cursor: 'pointer',
                transition: 'all 0.3s ease',
                padding: '16px 48px',
                fontSize: '22px'
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.backgroundColor = '#ffffff';
                e.currentTarget.style.transform = 'translateY(-4px)';
                e.currentTarget.style.boxShadow = '0 10px 25px rgba(0, 0, 0, 0.2)';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.backgroundColor = 'rgba(255, 255, 255, 0.9)';
                e.currentTarget.style.transform = 'translateY(0)';
                e.currentTarget.style.boxShadow = 'none';
              }}
            >
              {t('landing.preview_modules')}
            </button>
          </div>
        </div>

        {/* Elegant decorative elements */}
        <div className="absolute top-20 left-10 w-32 h-32 border border-gray-200 rounded-full opacity-30"></div>
        <div className="absolute bottom-20 right-10 w-40 h-40 border border-gray-200 rounded-full opacity-20"></div>
        <div className="absolute top-1/3 right-1/4 w-24 h-24 border border-gray-300 rounded-full opacity-25"></div>
      </section>

      {/* Modules Section - Elegant 2x2 Grid */}
      <section
        className="py-20"
        style={{
          backgroundImage: 'url(/LoveFaithHope.png)',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundRepeat: 'no-repeat',
          position: 'relative',
          paddingTop: '120px'
        }}
      >
        <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 relative z-10">
          <div className="text-center" style={{ marginBottom: '80px' }}>
            <h2
              className="text-6xl md:text-7xl font-bold mb-8 tracking-tight"
              style={{
                fontSize: 'clamp(48px, 8vw, 72px)',
                color: '#ffffff',
                textShadow: '2px 2px 4px rgba(0, 0, 0, 0.4)'
              }}
            >
              {t('landing.modules_title')}
            </h2>
            <p
              className="text-2xl md:text-3xl max-w-4xl mx-auto font-light leading-relaxed mb-8"
              style={{
                fontSize: 'clamp(20px, 3vw, 28px)',
                color: '#ffffff',
                textShadow: '1px 1px 3px rgba(0, 0, 0, 0.4)'
              }}
            >
              {t('landing.modules_subtitle')}
            </p>

            {/* AI Region Caution - Moved to Modules Section */}
            <div className="flex justify-center items-center mt-6">
              <div
                className="px-6 py-3 rounded-lg backdrop-blur-sm"
                style={{
                  backgroundColor: 'rgba(255, 107, 107, 0.15)',
                  border: '1px solid rgba(255, 107, 107, 0.4)',
                  maxWidth: '700px'
                }}
              >
                <div className="flex items-center gap-3 justify-center">
                  <svg
                    className="flex-shrink-0"
                    style={{ width: '20px', height: '20px', color: '#ff6b6b' }}
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path
                      fillRule="evenodd"
                      d="M8.257 3.099c.765-1.36 2.722-1.36 3.486 0l5.58 9.92c.75 1.334-.213 2.98-1.742 2.98H4.42c-1.53 0-2.493-1.646-1.743-2.98l5.58-9.92zM11 13a1 1 0 11-2 0 1 1 0 012 0zm-1-8a1 1 0 00-1 1v3a1 1 0 002 0V6a1 1 0 00-1-1z"
                      clipRule="evenodd"
                    />
                  </svg>
                  <p
                    className="text-sm font-medium"
                    style={{
                      color: '#ffffff',
                      textShadow: '1px 1px 2px rgba(0, 0, 0, 0.4)'
                    }}
                  >
                    {t('landing.ai_caution')}
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* 2x2 Grid with Canvas-Enhanced Cards */}
          <div
            className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-6xl mx-auto"
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(2, 1fr)',
              gap: '32px',
              maxWidth: '1200px',
              margin: '0 auto'
            }}
          >
            {modules.map((module) => (
              <CanvasModuleCard
                key={module.id}
                icon={module.icon}
                displayName={module.displayName}
                description={module.description}
                features={module.features}
                targetAudience={module.targetAudience}
                path={module.path}
                color={module.color}
              />
            ))}
          </div>
        </div>
      </section>

      {/* Footer - Elegant Black */}
      <footer className="bg-black text-white py-16 border-t border-gray-800">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center">
            <div className="flex items-center justify-center space-x-3 mb-6">
              <span className="text-3xl">{t('common.cross')}</span>
              <span className="text-2xl font-bold tracking-tight">{t('landing.footer_brand')}</span>
            </div>
            <p className="text-gray-300 mb-6 text-lg font-light max-w-2xl mx-auto">
              {t('landing.footer_tagline')}
            </p>
            <div className="w-16 h-px bg-gray-700 mx-auto mb-6"></div>
            <p className="text-sm text-gray-500 font-light">
              {t('landing.footer_copyright')}
            </p>
          </div>
        </div>
      </footer>

      {/* Mock Login Modal */}
      <MockLogin isOpen={showMockLogin} onClose={() => setShowMockLogin(false)} />
    </div>
  );
}
