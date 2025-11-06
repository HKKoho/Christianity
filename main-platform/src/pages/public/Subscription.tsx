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
        <div className="w-full max-w-7xl px-6">
          {/* Not Ready Notice */}
          <div className="mb-8 bg-yellow-50 border-l-4 border-yellow-400 p-6 rounded-lg shadow-sm">
            <div className="flex items-start">
              <div className="flex-shrink-0">
                <svg className="h-8 w-8 text-yellow-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
                </svg>
              </div>
              <div className="ml-3 flex-1">
                <p className="text-lg font-semibold text-yellow-800">
                  {t('subscription.not_ready_notice').split('<0>')[0]}
                  <Link
                    to="/"
                    className="font-bold underline hover:text-yellow-900 transition-colors"
                  >
                    {t('subscription.back_to_home')}
                  </Link>
                  {t('subscription.not_ready_notice').split('</0>')[1]}
                </p>
              </div>
            </div>
          </div>

          <SubscriptionSelector onSelectPlan={handleSelectPlan} />
        </div>
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
