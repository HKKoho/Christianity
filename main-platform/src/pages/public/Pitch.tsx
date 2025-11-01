import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { ArrowLeft, CheckCircle, AlertCircle, ArrowRight, Palette, HelpCircle, Edit3, Link as LinkIcon, Layers, BrainCircuit, Users, CheckSquare } from 'lucide-react';

export function Pitch() {
  const { t } = useTranslation();

  const features = [
    {
      icon: Palette,
      title: '1. Cultural Entry Point',
      content: 'Engage with beautiful art, music, and history as a non-threatening entry point.',
      benefit: 'Low-Friction Entry'
    },
    {
      icon: HelpCircle,
      title: '2. The "Why" Question',
      content: 'Shift focus from "what" to "why" to spark deeper, reflective thought.',
      benefit: 'Sparks Active Reflection'
    },
    {
      icon: Edit3,
      title: '3. Guided Reflection',
      content: 'Optional prompts connect truths to personal life, bridging knowledge and experience.',
      benefit: 'Personalizes Truth'
    },
    {
      icon: LinkIcon,
      title: '4. Progressive Disclosure',
      content: 'Users naturally click their way from aesthetics to doctrine.',
      benefit: 'User-Led Path to Depth'
    },
    {
      icon: Layers,
      title: '5. Layered Content',
      content: 'Each topic has levels: Surface, Intermediate, and Deep. Users choose their depth.',
      benefit: 'Empowers User Choice'
    },
    {
      icon: BrainCircuit,
      title: '6. Active Retrieval',
      content: 'Quizzes and spaced repetition ensure users actively learn and retain core truths.',
      benefit: 'Builds Lasting Knowledge'
    },
    {
      icon: Users,
      title: '7. Community Discussion',
      content: 'Users discuss what they\'re learning, asking real questions to solidify understanding.',
      benefit: 'Deepens Through Fellowship'
    },
    {
      icon: CheckSquare,
      title: '8. Gentle Accountability',
      content: 'Follow-ups on personal application goals provide encouragement to turn intention into action.',
      benefit: 'Turns Intention into Action'
    }
  ];

  return (
    <div className="min-h-screen bg-white font-sans text-stone-700" style={{ lineHeight: 1.8 }}>
      {/* Header */}
      <header className="bg-white shadow-sm sticky top-0 z-50">
        <nav className="container mx-auto px-6 py-4 flex justify-between items-center max-w-7xl">
          <Link
            to="/"
            className="flex items-center gap-2 text-gray-700 hover:text-purple-700 transition-colors font-semibold"
          >
            <ArrowLeft size={20} />
            <span>{t('common.back_to_home')}</span>
          </Link>
          <div className="flex items-center gap-3">
            <span className="text-3xl">✝️</span>
            <span className="text-2xl font-bold" style={{ color: '#4c1d95' }}>{t('landing.brand_name')}</span>
          </div>
        </nav>
      </header>

      {/* Hero Section */}
      <section
        className="text-white text-center px-4 relative"
        style={{
          background: '#4c1d95',
          paddingTop: '5rem',
          paddingBottom: '8rem'
        }}
      >
        <div className="max-w-4xl mx-auto">
          <h1
            className="font-bold leading-snug mb-6"
            style={{
              fontSize: 'clamp(2.25rem, 5vw, 5rem)',
              fontFamily: 'Georgia, serif',
              letterSpacing: '-0.025em'
            }}
          >
            {t('pitch.hero_title_1')}<br/>
            <span style={{ color: '#fbbf24', fontSize: 'clamp(2.5rem, 6vw, 6rem)' }}>
              {t('pitch.hero_title_2')}
            </span>
          </h1>
          <p
            className="mt-6 font-light"
            style={{
              fontSize: 'clamp(1.5rem, 3vw, 2rem)',
              color: '#ddd6fe',
              lineHeight: 1.8
            }}
            dangerouslySetInnerHTML={{ __html: t('pitch.hero_subtitle') }}
          />
        </div>
      </section>

      {/* Introduction - The Crisis */}
      <section style={{ background: '#f5f5f4', paddingTop: '4rem', paddingBottom: '6rem' }} className="px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h2
            style={{
              fontFamily: 'Georgia, serif',
              fontSize: 'clamp(2.5rem, 5vw, 4.5rem)',
              fontWeight: 'bold',
              color: '#4c1d95',
              letterSpacing: '-0.025em',
              marginBottom: '1.5rem'
            }}
          >
            {t('pitch.crisis_title')}
          </h2>
          <p
            style={{ fontSize: '2rem', color: '#57534e', marginBottom: '3rem', lineHeight: 1.8 }}
            dangerouslySetInnerHTML={{ __html: t('pitch.crisis_subtitle') }}
          />

          <div
            className="p-6 rounded-xl border max-w-3xl mx-auto"
            style={{
              background: 'rgba(254, 202, 202, 0.8)',
              borderColor: '#fecaca'
            }}
          >
            <h3
              className="flex items-center justify-center mb-4"
              style={{
                fontFamily: 'Georgia, serif',
                fontSize: '1.875rem',
                fontWeight: 'bold',
                color: '#7f1d1d'
              }}
            >
              <AlertCircle className="mr-3 flex-shrink-0" size={32} style={{ color: '#ef4444' }} />
              {t('pitch.danger_title')}
            </h3>
            <div className="text-center">
              <ul className="list-none space-y-2 text-stone-600 inline-block text-left" style={{ fontSize: '1.25rem' }}>
                <li className="flex items-start">
                  <span className="mr-2">•</span>
                  <span>{t('pitch.danger_point_1')}</span>
                </li>
                <li className="flex items-start">
                  <span className="mr-2">•</span>
                  <span>{t('pitch.danger_point_2')}</span>
                </li>
                <li className="flex items-start">
                  <span className="mr-2">•</span>
                  <span>{t('pitch.danger_point_3')}</span>
                </li>
                <li className="flex items-start">
                  <span className="mr-2">•</span>
                  <span>{t('pitch.danger_point_4')}</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Vision Section */}
      <section style={{ background: 'white', paddingTop: '4rem', paddingBottom: '6rem' }} className="px-4">
        <div className="max-w-5xl mx-auto text-center">
          <CheckCircle className="mx-auto mb-4" size={52} style={{ color: '#16a34a' }} />
          <h2
            style={{
              fontFamily: 'Georgia, serif',
              fontSize: 'clamp(2.25rem, 4.5vw, 4.5rem)',
              fontWeight: 'bold',
              color: '#14532d',
              letterSpacing: '-0.025em',
              marginBottom: '1rem',
              lineHeight: 1.2
            }}
            dangerouslySetInnerHTML={{ __html: t('pitch.vision_title') }}
          />

          <div className="mb-8">
            <blockquote
              style={{
                fontFamily: 'Georgia, serif',
                fontSize: '2rem',
                color: '#57534e',
                fontStyle: 'italic'
              }}
            >
              "{t('pitch.vision_quote')}"
            </blockquote>
            <p style={{ fontSize: '1.125rem', color: '#78716c', marginTop: '0.5rem' }}>{t('pitch.vision_quote_ref')}</p>
          </div>

          <p style={{ fontSize: '1.875rem', color: '#57534e', marginBottom: '3rem', lineHeight: 1.8 }} className="max-w-4xl mx-auto">
            {t('pitch.vision_subtitle')}
          </p>

          <div
            className="p-8 rounded-xl border-2 shadow-inner"
            style={{
              background: 'rgba(220, 252, 231, 0.8)',
              borderColor: '#86efac'
            }}
          >
            <div className="flex flex-col items-center justify-center gap-y-6">
              {/* First Row */}
              <div className="flex flex-col sm:flex-row items-center justify-around text-center font-semibold flex-wrap gap-y-6">
                <div className="flex flex-col items-center px-4">
                  <span className="text-2xl" style={{ color: '#5b21b6' }}>SPARK KNOWLEDGE</span>
                  <span className="text-lg text-stone-500 mt-1">Truth</span>
                </div>
                <ArrowRight className="text-stone-300 mx-4 hidden sm:block" size={28} />
                <div className="flex flex-col items-center px-4">
                  <span className="text-2xl" style={{ color: '#1d4ed8' }}>INSPIRE PRACTICE</span>
                  <span className="text-lg text-stone-500 mt-1">Practice</span>
                </div>
                <ArrowRight className="text-stone-300 mx-4 hidden sm:block" size={28} />
                <div className="flex flex-col items-center px-4">
                  <span className="text-2xl" style={{ color: '#c2410c' }}>CULTIVATE EXPERIENCE</span>
                  <span className="text-lg text-stone-500 mt-1">Experience</span>
                </div>
              </div>

              {/* Second Row */}
              <div className="flex flex-col items-center text-center font-semibold mt-4">
                <div className="flex flex-col items-center">
                  <span className="text-2xl" style={{ color: '#b91c1c' }}>DEEPEN FELLOWSHIP</span>
                  <span className="text-lg text-stone-500 mt-1">Fellowship</span>
                </div>
              </div>
            </div>
          </div>

          <p
            style={{
              fontFamily: 'Georgia, serif',
              fontSize: '2.5rem',
              color: '#15803d',
              fontStyle: 'italic',
              marginTop: '2.5rem'
            }}
          >
            {t('pitch.vision_conclusion')}
          </p>
        </div>
      </section>

      {/* 8-Step Transformation */}
      <section style={{ background: '#f5f5f4', paddingTop: '4rem', paddingBottom: '6rem' }} className="px-4">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-12">
            <h2
              style={{
                fontFamily: 'Georgia, serif',
                fontSize: 'clamp(2.25rem, 4.5vw, 4.5rem)',
                fontWeight: 'bold',
                color: '#4c1d95',
                letterSpacing: '-0.025em',
                marginBottom: '1rem'
              }}
            >
              {t('pitch.pathway_title')}
            </h2>
            <p style={{ fontSize: '1.25rem', color: '#57534e' }} className="max-w-3xl mx-auto">
              {t('pitch.pathway_subtitle')}
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {features.map((feature, index) => {
              const Icon = feature.icon;
              return (
                <div
                  key={index}
                  className="bg-white p-6 rounded-xl border hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1"
                  style={{
                    borderColor: '#e7e5e4',
                    cursor: 'pointer'
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.borderColor = '#c4b5fd';
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.borderColor = '#e7e5e4';
                  }}
                >
                  <div className="flex items-start">
                    <div
                      className="p-4 rounded-full mr-5"
                      style={{
                        background: '#ede9fe',
                        color: '#6d28d9'
                      }}
                    >
                      <Icon size={28} />
                    </div>
                    <div className="flex-1">
                      <h3
                        className="font-bold mb-1"
                        style={{
                          color: '#4c1d95',
                          fontSize: '1.5rem'
                        }}
                      >
                        {feature.title}
                      </h3>
                      <p style={{ fontSize: '1.125rem', color: '#57534e', marginBottom: '0.75rem' }}>
                        {feature.content}
                      </p>
                      <span
                        className="px-4 py-1 rounded-full inline-block text-base font-semibold"
                        style={{
                          background: '#fef3c7',
                          color: '#92400e'
                        }}
                      >
                        {feature.benefit}
                      </span>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section
        className="text-white px-4"
        style={{
          background: '#4c1d95',
          paddingTop: '4rem',
          paddingBottom: '6rem'
        }}
      >
        <div className="max-w-4xl mx-auto text-center">
          <h2
            style={{
              fontFamily: 'Georgia, serif',
              fontSize: '2.5rem',
              fontWeight: 'bold',
              marginBottom: '1.5rem'
            }}
          >
            {t('pitch.cta_title')}
          </h2>
          <p style={{ fontSize: '1.25rem', color: '#ddd6fe', marginBottom: '2rem' }}>
            {t('pitch.cta_subtitle')}
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              to="/subscription"
              className="px-8 py-4 rounded-lg font-bold text-lg transition-transform transform hover:scale-105"
              style={{
                background: '#fbbf24',
                color: '#2e1065'
              }}
            >
              {t('pitch.cta_button_1')}
            </Link>
            <Link
              to="/"
              className="px-8 py-4 rounded-lg font-bold text-lg border-2 border-white transition-all"
              style={{
                background: 'rgba(255, 255, 255, 0.1)',
                color: 'white'
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.background = 'rgba(255, 255, 255, 0.2)';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.background = 'rgba(255, 255, 255, 0.1)';
              }}
            >
              {t('pitch.cta_button_2')}
            </Link>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-black text-white py-8 text-center">
        <p className="text-gray-400">
          {t('landing.footer_copyright')}
        </p>
      </footer>
    </div>
  );
}
