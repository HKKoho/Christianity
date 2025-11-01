import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { ArrowLeft } from 'lucide-react';

export function Pitch() {
  const { t } = useTranslation();

  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <header className="bg-white shadow-sm sticky top-0 z-50">
        <nav className="container mx-auto px-6 py-4 flex justify-between items-center max-w-7xl">
          <Link
            to="/"
            className="flex items-center gap-2 text-gray-700 hover:text-red-500 transition-colors"
          >
            <ArrowLeft size={20} />
            <span className="font-semibold">{t('common.back_to_home')}</span>
          </Link>
          <div className="flex items-center gap-3">
            <span className="text-3xl">✝️</span>
            <span className="text-2xl font-bold text-red-500">{t('landing.brand_name')}</span>
          </div>
        </nav>
      </header>

      {/* Hero Section */}
      <section className="bg-gradient-to-br from-purple-900 via-purple-800 to-purple-900 text-white text-center py-20 px-4">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-5xl md:text-7xl font-bold leading-tight mb-6">
            Let's Stop Making
            <br />
            <span className="text-yellow-400 text-6xl md:text-8xl">"Shadow Believers"</span>
          </h1>
          <p className="text-2xl md:text-3xl mt-6 text-purple-200 font-light">
            From knowing <em>about</em> God
            <br />
            to truly <em>knowing</em> Him together.
          </p>
        </div>
      </section>

      {/* The Crisis */}
      <section className="py-16 px-4 bg-gray-50">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-4xl font-bold text-center mb-8 text-gray-800">The Discipleship Crisis</h2>
          <p className="text-xl text-center mb-12 text-gray-700">
            Many know <em>about</em> God, but don't truly <em>know</em> Him.
            <br />
            We bridge the gap from passive knowledge to active, shared faith.
          </p>

          <div className="bg-red-50 border-l-4 border-red-500 p-6 rounded">
            <h3 className="text-2xl font-bold mb-4 text-red-800">The Danger of Passive Faith</h3>
            <ul className="space-y-3 text-gray-700">
              <li className="flex items-start">
                <span className="text-red-500 mr-2">•</span>
                Creates a false sense of maturity
              </li>
              <li className="flex items-start">
                <span className="text-red-500 mr-2">•</span>
                Puts passive knowledge over active faith
              </li>
              <li className="flex items-start">
                <span className="text-red-500 mr-2">•</span>
                Inoculates against Jesus' transformational call
              </li>
              <li className="flex items-start">
                <span className="text-red-500 mr-2">•</span>
                Leads to a lack of genuine relationship with Christ
              </li>
            </ul>
          </div>
        </div>
      </section>

      {/* Our Vision */}
      <section className="py-16 px-4 bg-white">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-4xl font-bold text-center mb-8 text-gray-800">
            Our Vision: A Living Walk,
            <br />
            Not a Program
          </h2>

          <div className="bg-purple-50 p-8 rounded-lg mb-12">
            <p className="text-xl italic text-center text-gray-700 mb-2">
              "The fear of the LORD is the beginning of wisdom, and the knowledge of the Holy One is insight."
            </p>
            <p className="text-center text-gray-600">— Proverbs 9:10</p>
          </div>

          <p className="text-xl text-center mb-12 text-gray-700">
            We nurture a genuine walk with God: from knowledge, to practice, to shared experience.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-8">
            <div className="text-center">
              <div className="bg-purple-100 rounded-full w-20 h-20 flex items-center justify-center mx-auto mb-4">
                <span className="text-3xl">💡</span>
              </div>
              <h3 className="font-bold text-purple-700 mb-2">SPARK KNOWLEDGE</h3>
              <p className="text-gray-600">Truth</p>
            </div>
            <div className="text-center">
              <div className="bg-blue-100 rounded-full w-20 h-20 flex items-center justify-center mx-auto mb-4">
                <span className="text-3xl">🙏</span>
              </div>
              <h3 className="font-bold text-blue-700 mb-2">INSPIRE PRACTICE</h3>
              <p className="text-gray-600">Practice</p>
            </div>
            <div className="text-center">
              <div className="bg-orange-100 rounded-full w-20 h-20 flex items-center justify-center mx-auto mb-4">
                <span className="text-3xl">✨</span>
              </div>
              <h3 className="font-bold text-orange-700 mb-2">CULTIVATE EXPERIENCE</h3>
              <p className="text-gray-600">Experience</p>
            </div>
            <div className="text-center">
              <div className="bg-red-100 rounded-full w-20 h-20 flex items-center justify-center mx-auto mb-4">
                <span className="text-3xl">🤝</span>
              </div>
              <h3 className="font-bold text-red-700 mb-2">DEEPEN FELLOWSHIP</h3>
              <p className="text-gray-600">Fellowship</p>
            </div>
          </div>

          <p className="text-center text-xl font-semibold text-gray-700">
            Knowledge → Practice → Shared Experience
          </p>
        </div>
      </section>

      {/* 8-Step Transformation */}
      <section className="py-16 px-4 bg-gray-50">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold text-center mb-4 text-gray-800">Our 8-Step Transformation Pathway</h2>
          <p className="text-xl text-center mb-12 text-gray-600">
            Guiding users from cultural curiosity to genuine discipleship.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {[
              {
                icon: '🎨',
                title: '1. Cultural Entry Point',
                content: 'Engage with beautiful art, music, and history as a non-threatening entry point.',
                benefit: 'Low-Friction Entry'
              },
              {
                icon: '❓',
                title: '2. The "Why" Question',
                content: 'Shift focus from "what" to "why" to spark deeper, reflective thought.',
                benefit: 'Sparks Active Reflection'
              },
              {
                icon: '✍️',
                title: '3. Guided Reflection',
                content: 'Optional prompts connect truths to personal life, bridging knowledge and experience.',
                benefit: 'Personalizes Truth'
              },
              {
                icon: '🔗',
                title: '4. Progressive Disclosure',
                content: 'Users naturally click their way from aesthetics to doctrine.',
                benefit: 'User-Led Path to Depth'
              },
              {
                icon: '📚',
                title: '5. Layered Content',
                content: 'Each topic has levels: Surface, Intermediate, and Deep. Users choose their depth.',
                benefit: 'Empowers User Choice'
              },
              {
                icon: '🧠',
                title: '6. Active Retrieval',
                content: 'Quizzes and spaced repetition ensure users actively learn and retain core truths.',
                benefit: 'Builds Lasting Knowledge'
              },
              {
                icon: '👥',
                title: '7. Community Discussion',
                content: 'Users discuss what they\'re learning, asking real questions to solidify understanding.',
                benefit: 'Deepens Through Fellowship'
              },
              {
                icon: '✅',
                title: '8. Gentle Accountability',
                content: 'Follow-ups on personal application goals provide encouragement to turn intention into action.',
                benefit: 'Turns Intention into Action'
              }
            ].map((step, index) => (
              <div key={index} className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow">
                <div className="flex items-start gap-4">
                  <div className="text-4xl flex-shrink-0">{step.icon}</div>
                  <div>
                    <h3 className="text-xl font-bold mb-2 text-gray-800">{step.title}</h3>
                    <p className="text-gray-700 mb-3">{step.content}</p>
                    <span className="inline-block bg-purple-100 text-purple-700 px-3 py-1 rounded-full text-sm font-semibold">
                      {step.benefit}
                    </span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-16 px-4 bg-gradient-to-br from-purple-900 to-purple-800 text-white">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl font-bold mb-6">Join Us in This Mission</h2>
          <p className="text-xl mb-8 text-purple-200">
            Help us transform passive knowledge into active, vibrant faith.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              to="/subscription"
              className="bg-yellow-400 text-purple-900 px-8 py-4 rounded-lg font-bold text-lg hover:bg-yellow-300 transition-colors"
            >
              Get Started
            </Link>
            <Link
              to="/"
              className="bg-white/10 text-white px-8 py-4 rounded-lg font-bold text-lg hover:bg-white/20 transition-colors border-2 border-white"
            >
              Explore Modules
            </Link>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-black text-white py-8 text-center">
        <p className="text-gray-400">
          © 2025 {t('landing.brand_name')}. {t('landing.footer_tagline')}
        </p>
      </footer>
    </div>
  );
}
