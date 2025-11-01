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
          <div className="flex items-center gap-3">
            <button
              onClick={toggleLanguage}
              className="px-4 py-2 border-2 border-red-500 text-red-500 rounded-lg font-semibold hover:bg-red-500 hover:text-white transition-colors"
            >
              {i18n.language === 'zh-TW' ? 'EN' : '中文'}
            </button>
            <Link
              to="/"
              className="px-4 py-2 bg-red-500 text-white rounded-lg font-semibold hover:bg-red-600 transition-colors"
            >
              {t('subscription.back_to_home')}
            </Link>
          </div>
        </nav>
      </header>

      {/* Main Content */}
      <main className="py-16">
        <SubscriptionSelector onSelectPlan={handleSelectPlan} />
      </main>

      {/* Simple Footer */}
      <footer className="bg-gray-900 text-white py-12">
        <div className="max-w-7xl mx-auto px-6 text-center">
          <div className="flex items-center justify-center gap-2 mb-4">
            <span className="text-2xl">{t('common.cross')}</span>
            <span className="text-xl font-bold">{t('landing.footer_brand')}</span>
          </div>
          <p className="text-gray-400 mb-4">{t('landing.footer_tagline')}</p>
          <p className="text-sm text-gray-500">{t('landing.footer_copyright')}</p>
        </div>
      </footer>
    </div>
  );
}
