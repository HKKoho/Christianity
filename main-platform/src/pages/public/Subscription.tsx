import { Link, useNavigate } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { SubscriptionSelector } from '../../components/subscription/SubscriptionSelector';
import type { SubscriptionPlan } from '../../types/subscription';

export function Subscription() {
  const { t, i18n } = useTranslation();
  const navigate = useNavigate();

  const toggleLanguage = () => {
    const newLang = i18n.language === 'zh-TW' ? 'en' : 'zh-TW';
    i18n.changeLanguage(newLang);
  };

  const handleSelectPlan = (plan: SubscriptionPlan) => {
    // For now, navigate to register page with plan info
    // In future, this could handle payment processing
    navigate('/register', { state: { selectedPlan: plan } });
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-slate-100">
      {/* Header */}
      <header className="bg-white fixed w-full top-0 z-50 shadow-sm">
        <nav className="container mx-auto px-6 py-5 flex justify-between items-center max-w-7xl">
          {/* Left side - Brand */}
          <Link to="/" className="flex items-center" style={{ gap: '16px' }}>
            <span className="text-6xl" style={{ fontSize: '56px' }}>
              {t('common.cross')}
            </span>
            <span
              className="text-3xl font-bold tracking-tight"
              style={{
                fontSize: '32px',
                fontWeight: '700',
                color: '#ff6b6b',
                letterSpacing: '-0.5px',
              }}
            >
              {t('landing.brand_name')}
            </span>
          </Link>

          {/* Right side - Language switcher and Back button */}
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
                transition: 'all 0.3s ease',
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
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M3 5h12M9 3v2m1.048 9.5A18.022 18.022 0 016.412 9m6.088 9h7M11 21l5-10 5 10M12.751 5C11.783 10.77 8.07 15.61 3 18.129"
                />
              </svg>
              <span style={{ fontWeight: '700' }}>{i18n.language === 'zh-TW' ? 'EN' : '中文'}</span>
            </button>

            {/* Back to Home Button */}
            <Link
              to="/"
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
                transition: 'all 0.3s ease',
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
              {t('subscription.back_to_home')}
            </Link>
          </div>
        </nav>
      </header>

      {/* Main Content */}
      <main className="pt-32 pb-20 px-6">
        <div className="max-w-7xl mx-auto">
          <SubscriptionSelector onSelectPlan={handleSelectPlan} />
        </div>
      </main>

      {/* Footer */}
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
            <p className="text-sm text-gray-500 font-light">{t('landing.footer_copyright')}</p>
          </div>
        </div>
      </footer>
    </div>
  );
}
