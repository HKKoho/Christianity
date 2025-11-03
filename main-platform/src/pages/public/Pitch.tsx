import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { ArrowLeft, AlertCircle, CheckCircle, Palette, HelpCircle, Edit3, Link as LinkIcon, Layers, BrainCircuit, Users, CheckSquare } from 'lucide-react';

export function Pitch() {
  const { t } = useTranslation();

  const features = [
    {
      icon: Palette,
      titleKey: 'pitch.step_1_title',
      contentKey: 'pitch.step_1_content',
      benefitKey: 'pitch.step_1_benefit',
      color: 'yellow'
    },
    {
      icon: HelpCircle,
      titleKey: 'pitch.step_2_title',
      contentKey: 'pitch.step_2_content',
      benefitKey: 'pitch.step_2_benefit',
      color: 'blue'
    },
    {
      icon: Edit3,
      titleKey: 'pitch.step_3_title',
      contentKey: 'pitch.step_3_content',
      benefitKey: 'pitch.step_3_benefit',
      color: 'purple'
    },
    {
      icon: LinkIcon,
      titleKey: 'pitch.step_4_title',
      contentKey: 'pitch.step_4_content',
      benefitKey: 'pitch.step_4_benefit',
      color: 'green'
    },
    {
      icon: Layers,
      titleKey: 'pitch.step_5_title',
      contentKey: 'pitch.step_5_content',
      benefitKey: 'pitch.step_5_benefit',
      color: 'orange'
    },
    {
      icon: BrainCircuit,
      titleKey: 'pitch.step_6_title',
      contentKey: 'pitch.step_6_content',
      benefitKey: 'pitch.step_6_benefit',
      color: 'indigo'
    },
    {
      icon: Users,
      titleKey: 'pitch.step_7_title',
      contentKey: 'pitch.step_7_content',
      benefitKey: 'pitch.step_7_benefit',
      color: 'pink'
    },
    {
      icon: CheckSquare,
      titleKey: 'pitch.step_8_title',
      contentKey: 'pitch.step_8_content',
      benefitKey: 'pitch.step_8_benefit',
      color: 'red'
    }
  ];

  const colorClasses = {
    yellow: {
      bg: 'bg-yellow-50',
      border: 'border-yellow-600',
      text: 'text-yellow-900',
      subtext: 'text-yellow-800'
    },
    blue: {
      bg: 'bg-blue-50',
      border: 'border-blue-600',
      text: 'text-blue-900',
      subtext: 'text-blue-800'
    },
    purple: {
      bg: 'bg-purple-50',
      border: 'border-purple-600',
      text: 'text-purple-900',
      subtext: 'text-purple-800'
    },
    green: {
      bg: 'bg-green-50',
      border: 'border-green-600',
      text: 'text-green-900',
      subtext: 'text-green-800'
    },
    orange: {
      bg: 'bg-orange-50',
      border: 'border-orange-600',
      text: 'text-orange-900',
      subtext: 'text-orange-800'
    },
    indigo: {
      bg: 'bg-indigo-50',
      border: 'border-indigo-600',
      text: 'text-indigo-900',
      subtext: 'text-indigo-800'
    },
    pink: {
      bg: 'bg-pink-50',
      border: 'border-pink-600',
      text: 'text-pink-900',
      subtext: 'text-pink-800'
    },
    red: {
      bg: 'bg-red-50',
      border: 'border-red-600',
      text: 'text-red-900',
      subtext: 'text-red-800'
    }
  };

  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <header className="bg-white shadow-sm sticky top-0 z-50">
        <nav className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
          <Link
            to="/"
            className="flex items-center gap-2 text-gray-700 hover:text-purple-700 transition-colors font-semibold"
          >
            <ArrowLeft size={20} />
            <span>{t('common.back_to_home')}</span>
          </Link>
          <div className="flex items-center gap-3">
            <span className="text-3xl">✝️</span>
            <span className="text-2xl font-bold text-purple-900">{t('landing.brand_name')}</span>
          </div>
        </nav>
      </header>

      <div className="max-w-7xl mx-auto p-8">
        {/* Hero Header */}
        <div className="text-center mb-8 pb-6 border-b-2 border-purple-600">
          <div className="text-4xl mb-2">✝️</div>
          <h1 className="text-3xl md:text-4xl font-bold text-purple-900 mb-2">
            {t('pitch.hero_title_1')}
          </h1>
          <p className="text-xl md:text-2xl text-purple-700 font-semibold mb-2">
            {t('pitch.hero_title_2')}
          </p>
          <div className="text-sm text-gray-600 mt-2" dangerouslySetInnerHTML={{ __html: t('pitch.hero_subtitle') }} />
        </div>

        {/* The Problem */}
        <section className="mb-8 bg-red-50 p-6 rounded-lg border-l-4 border-red-600">
          <h2 className="text-xl font-bold text-red-900 mb-3 flex items-center">
            <AlertCircle className="mr-2" size={24} />
            {t('pitch.crisis_title')}
          </h2>
          <div className="space-y-2 text-gray-800">
            <div dangerouslySetInnerHTML={{ __html: t('pitch.crisis_subtitle') }} className="mb-4" />
            <p className="font-semibold">{t('pitch.danger_title')}</p>
            <ul className="list-disc ml-6 space-y-1">
              <li>{t('pitch.danger_point_1')}</li>
              <li>{t('pitch.danger_point_2')}</li>
              <li>{t('pitch.danger_point_3')}</li>
              <li>{t('pitch.danger_point_4')}</li>
            </ul>
          </div>
        </section>

        {/* Our Solution */}
        <section className="mb-8 bg-green-50 p-6 rounded-lg border-l-4 border-green-600">
          <h2 className="text-xl font-bold text-green-900 mb-3 flex items-center">
            <CheckCircle className="mr-2" size={24} />
            {t('pitch.solution_title')}
          </h2>
          <div className="bg-white p-4 rounded border-2 border-green-300 mb-4">
            <div className="flex flex-wrap items-center justify-center gap-2 text-xs md:text-sm font-semibold">
              <span className="text-purple-700">{t('pitch.journey_step_1')}</span>
              <span className="text-gray-400">→</span>
              <span className="text-blue-700">{t('pitch.journey_step_2')}</span>
              <span className="text-gray-400">→</span>
              <span className="text-indigo-700">{t('pitch.journey_step_3')}</span>
              <span className="text-gray-400">→</span>
              <span className="text-orange-700">{t('pitch.journey_step_4')}</span>
              <span className="text-gray-400">→</span>
              <span className="text-red-700">{t('pitch.journey_step_5')}</span>
            </div>
          </div>
          <p className="text-gray-800 font-semibold" dangerouslySetInnerHTML={{ __html: t('pitch.solution_subtitle') }} />
        </section>

        {/* Key Features */}
        <section className="mb-8">
          <h2 className="text-2xl font-bold text-purple-900 mb-4">
            {t('pitch.features_title')}
          </h2>

          <div className="space-y-4">
            {features.map((feature, index) => {
              const Icon = feature.icon;
              const colors = colorClasses[feature.color];

              return (
                <div key={index} className={`${colors.bg} p-4 rounded-lg border-l-4 ${colors.border}`}>
                  <h3 className={`font-bold ${colors.text} mb-2 flex items-center`}>
                    <Icon className="mr-2" size={20} />
                    {index + 1}. {t(feature.titleKey)}
                  </h3>
                  <p className="text-sm text-gray-700 mb-2">
                    {t(feature.contentKey)}
                  </p>
                  <p className={`text-xs ${colors.subtext} font-semibold`}>
                    ✓ {t(feature.benefitKey)}
                  </p>
                </div>
              );
            })}
          </div>
        </section>

        {/* Call to Action */}
        <section className="mb-8 bg-gradient-to-r from-purple-50 to-blue-50 p-6 rounded-lg border-2 border-purple-300">
          <h2 className="text-2xl font-bold text-center text-purple-900 mb-4">
            {t('pitch.cta_title')}
          </h2>
          <p className="text-center text-gray-700 mb-6" dangerouslySetInnerHTML={{ __html: t('pitch.cta_subtitle') }} />
          <div className="flex justify-center">
            <Link
              to="/subscription"
              className="inline-flex items-center gap-2 px-8 py-4 bg-purple-600 text-white rounded-lg font-semibold hover:bg-purple-700 transition-all duration-300 shadow-lg hover:shadow-xl"
            >
              {t('pitch.cta_button')}
              <ArrowLeft className="rotate-180" size={20} />
            </Link>
          </div>
        </section>

        {/* Closing */}
        <section className="text-center py-6 border-t-2 border-purple-600">
          <div className="text-4xl mb-3">✝️</div>
          <p className="text-lg font-bold text-purple-900 mb-2">
            {t('pitch.closing_quote')}
          </p>
          <p className="text-sm text-gray-600 mb-4">{t('pitch.closing_reference')}</p>
          <p className="text-base font-semibold text-gray-800 italic">
            {t('pitch.closing_message')}
          </p>
        </section>
      </div>

      {/* Footer */}
      <footer className="bg-black text-white py-16 border-t border-gray-800">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center">
            <div className="flex items-center justify-center space-x-3 mb-6">
              <span className="text-3xl">{t('common.cross')}</span>
              <span className="text-2xl font-bold tracking-tight">{t('landing.footer_brand')}</span>
            </div>
            <p className="text-gray-300 mb-6 text-lg font-light max-w-2xl mx-auto text-center">
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
