import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { LanguageSwitcher } from '../../components/LanguageSwitcher';

export function UnderConstruction() {
  const { t } = useTranslation();

  return (
    <div className="min-h-screen bg-gray-50 flex flex-col">
      {/* Header with Language Switcher */}
      <header className="bg-white shadow-sm">
        <div className="max-w-4xl mx-auto px-6 py-4 flex justify-between items-center">
          <Link to="/" className="inline-flex items-center gap-2 text-indigo-600 hover:text-indigo-700">
            <span className="text-2xl">{t('common.cross')}</span>
            <span className="text-xl font-bold">{t('layout.brand_name')}</span>
          </Link>
          <LanguageSwitcher />
        </div>
      </header>

      {/* Main Content */}
      <div className="flex-1 flex items-center justify-center px-6">
        <div className="max-w-2xl w-full text-center">
          <div className="bg-gradient-to-br from-indigo-600 to-indigo-800 rounded-lg shadow-lg p-12">
            {/* Icon */}
            <div className="mb-6">
              <svg
                className="mx-auto h-24 w-24 text-white"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M12 6V4m0 2a2 2 0 100 4m0-4a2 2 0 110 4m-6 8a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4m6 6v10m6-2a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4"
                />
              </svg>
            </div>

            {/* Title */}
            <h1 className="text-4xl font-bold text-white mb-4">
              {t('under_construction.title')}
            </h1>

            {/* Subtitle */}
            <p className="text-xl text-white mb-8">
              {t('under_construction.subtitle')}
            </p>

            {/* Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                to="/"
                className="inline-flex items-center justify-center px-6 py-3 bg-white text-indigo-600 rounded-lg hover:bg-gray-100 transition-colors font-medium"
              >
                {t('common.back_to_home')}
              </Link>
              <Link
                to="/dashboard"
                className="inline-flex items-center justify-center px-6 py-3 bg-white/10 text-white border-2 border-white rounded-lg hover:bg-white/20 transition-colors font-medium"
              >
                {t('under_construction.back_to_dashboard')}
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
