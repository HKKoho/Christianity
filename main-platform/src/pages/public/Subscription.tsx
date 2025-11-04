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
    navigate('/register', { state: { selectedPlan: plan } });
  };

  return (
    <div className="min-h-screen bg-white">
      {/* Simple Header */}
      <header className="bg-white border-b border-gray-200">
        <nav className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
          {/* Brand */}
          <Link to="/" className="flex items-center gap-3">
            <span className="text-4xl">{t('common.cross')}</span>
            <span className="text-2xl font-bold text-red-500">
              {t('landing.brand_name')}
            </span>
          </Link>

          {/* Actions */}
          <div className="flex items-center gap-4">
            <button
              onClick={toggleLanguage}
              className="px-4 py-2 rounded-lg shadow-md hover:shadow-lg transition-all duration-300 flex items-center gap-2"
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
            <Link
              to="/"
              className="px-4 py-2 rounded-lg shadow-md hover:shadow-lg transition-all duration-300"
              style={{
                backgroundColor: '#ff6b6b',
                color: '#ffffff',
                padding: '10px 20px',
                borderRadius: '8px',
                fontSize: '16px',
                fontWeight: '600',
                textDecoration: 'none',
                transition: 'all 0.3s ease'
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.backgroundColor = '#ff5252';
                e.currentTarget.style.transform = 'translateY(-2px)';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.backgroundColor = '#ff6b6b';
                e.currentTarget.style.transform = 'translateY(0)';
              }}
            >
              {t('subscription.back_to_home')}
            </Link>
          </div>
        </nav>
      </header>

      {/* Main Content */}
      <main className="flex items-center justify-center min-h-[calc(100vh-200px)] py-16">
        <SubscriptionSelector onSelectPlan={handleSelectPlan} />
      </main>

      {/* Simple Footer */}
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
