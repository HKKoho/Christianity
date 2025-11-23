import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';

export function TermsOfService() {
  const { t } = useTranslation();

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <header className="bg-white shadow-sm">
        <div className="max-w-4xl mx-auto px-6 py-4">
          <Link to="/" className="inline-flex items-center gap-2 text-indigo-600 hover:text-indigo-700">
            <span className="text-2xl">{t('common.cross')}</span>
            <span className="text-xl font-bold">{t('landing.brand_name')}</span>
          </Link>
        </div>
      </header>

      {/* Content */}
      <div className="max-w-4xl mx-auto px-6 py-12">
        <h1 className="text-4xl font-bold text-gray-900 mb-4">{t('terms.page_title')}</h1>
        <p className="text-gray-600 mb-8">{t('terms.last_updated')}</p>

        <div className="bg-white rounded-lg shadow-sm p-8 space-y-8">
          {/* Section 1 */}
          <section>
            <h2 className="text-2xl font-bold text-gray-900 mb-4">{t('terms.section_1_title')}</h2>
            <p className="text-gray-700 leading-relaxed mb-4">{t('terms.section_1_p1')}</p>
            <p className="text-gray-700 leading-relaxed">{t('terms.section_1_p2')}</p>
          </section>

          {/* Section 2 */}
          <section>
            <h2 className="text-2xl font-bold text-gray-900 mb-4">{t('terms.section_2_title')}</h2>
            <p className="text-gray-700 leading-relaxed mb-4">{t('terms.section_2_p1')}</p>
            <ul className="list-disc list-inside text-gray-700 space-y-2 ml-4">
              <li>{t('terms.section_2_li1')}</li>
              <li>{t('terms.section_2_li2')}</li>
              <li>{t('terms.section_2_li3')}</li>
              <li>{t('terms.section_2_li4')}</li>
            </ul>
          </section>

          {/* Section 3 */}
          <section>
            <h2 className="text-2xl font-bold text-gray-900 mb-4">{t('terms.section_3_title')}</h2>
            <h3 className="text-xl font-semibold text-gray-800 mb-2">{t('terms.section_3_subtitle1')}</h3>
            <p className="text-gray-700 leading-relaxed mb-4">{t('terms.section_3_1_p1')}</p>
            <ul className="list-disc list-inside text-gray-700 space-y-2 ml-4 mb-4">
              <li>{t('terms.section_3_1_li1')}</li>
              <li>{t('terms.section_3_1_li2')}</li>
              <li>{t('terms.section_3_1_li3')}</li>
              <li>{t('terms.section_3_1_li4')}</li>
              <li>{t('terms.section_3_1_li5')}</li>
            </ul>
            <h3 className="text-xl font-semibold text-gray-800 mb-2">{t('terms.section_3_subtitle2')}</h3>
            <p className="text-gray-700 leading-relaxed">{t('terms.section_3_2_p1')}</p>
          </section>

          {/* Section 4 */}
          <section>
            <h2 className="text-2xl font-bold text-gray-900 mb-4">{t('terms.section_4_title')}</h2>
            <p className="text-gray-700 leading-relaxed mb-4">{t('terms.section_4_p1')}</p>
            <ul className="list-disc list-inside text-gray-700 space-y-2 ml-4">
              <li>{t('terms.section_4_li1')}</li>
              <li>{t('terms.section_4_li2')}</li>
              <li>{t('terms.section_4_li3')}</li>
              <li>{t('terms.section_4_li4')}</li>
              <li>{t('terms.section_4_li5')}</li>
              <li>{t('terms.section_4_li6')}</li>
              <li>{t('terms.section_4_li7')}</li>
              <li>{t('terms.section_4_li8')}</li>
              <li>{t('terms.section_4_li9')}</li>
            </ul>
          </section>

          {/* Section 5 */}
          <section>
            <h2 className="text-2xl font-bold text-gray-900 mb-4">{t('terms.section_5_title')}</h2>
            <h3 className="text-xl font-semibold text-gray-800 mb-2">{t('terms.section_5_subtitle1')}</h3>
            <p className="text-gray-700 leading-relaxed mb-4">{t('terms.section_5_1_p1')}</p>
            <h3 className="text-xl font-semibold text-gray-800 mb-2">{t('terms.section_5_subtitle2')}</h3>
            <p className="text-gray-700 leading-relaxed mb-4">{t('terms.section_5_2_p1')}</p>
            <h3 className="text-xl font-semibold text-gray-800 mb-2">{t('terms.section_5_subtitle3')}</h3>
            <p className="text-gray-700 leading-relaxed">{t('terms.section_5_3_p1')}</p>
          </section>

          {/* Section 6 */}
          <section>
            <h2 className="text-2xl font-bold text-gray-900 mb-4">{t('terms.section_6_title')}</h2>
            <p className="text-gray-700 leading-relaxed mb-4">{t('terms.section_6_p1')}</p>
            <p className="text-gray-700 leading-relaxed">{t('terms.section_6_p2')}</p>
          </section>

          {/* Section 7 */}
          <section>
            <h2 className="text-2xl font-bold text-gray-900 mb-4">{t('terms.section_7_title')}</h2>
            <h3 className="text-xl font-semibold text-gray-800 mb-2">{t('terms.section_7_subtitle1')}</h3>
            <p className="text-gray-700 leading-relaxed mb-4">{t('terms.section_7_1_p1')}</p>
            <h3 className="text-xl font-semibold text-gray-800 mb-2">{t('terms.section_7_subtitle2')}</h3>
            <p className="text-gray-700 leading-relaxed mb-4">{t('terms.section_7_2_p1')}</p>
            <h3 className="text-xl font-semibold text-gray-800 mb-2">{t('terms.section_7_subtitle3')}</h3>
            <p className="text-gray-700 leading-relaxed">{t('terms.section_7_3_p1')}</p>
          </section>

          {/* Section 8 */}
          <section>
            <h2 className="text-2xl font-bold text-gray-900 mb-4">{t('terms.section_8_title')}</h2>
            <p className="text-gray-700 leading-relaxed mb-4">{t('terms.section_8_p1')}</p>
            <p className="text-gray-700 leading-relaxed">{t('terms.section_8_p2')}</p>
          </section>

          {/* Section 9 */}
          <section>
            <h2 className="text-2xl font-bold text-gray-900 mb-4">{t('terms.section_9_title')}</h2>
            <p className="text-gray-700 leading-relaxed">{t('terms.section_9_p1')}</p>
          </section>

          {/* Section 10 */}
          <section>
            <h2 className="text-2xl font-bold text-gray-900 mb-4">{t('terms.section_10_title')}</h2>
            <p className="text-gray-700 leading-relaxed">{t('terms.section_10_p1')}</p>
          </section>

          {/* Section 11 */}
          <section>
            <h2 className="text-2xl font-bold text-gray-900 mb-4">{t('terms.section_11_title')}</h2>
            <p className="text-gray-700 leading-relaxed">{t('terms.section_11_p1')}</p>
          </section>

          {/* Section 12 */}
          <section>
            <h2 className="text-2xl font-bold text-gray-900 mb-4">{t('terms.section_12_title')}</h2>
            <p className="text-gray-700 leading-relaxed">{t('terms.section_12_p1')}</p>
          </section>

          {/* Section 13 */}
          <section>
            <h2 className="text-2xl font-bold text-gray-900 mb-4">{t('terms.section_13_title')}</h2>
            <p className="text-gray-700 leading-relaxed mb-4">{t('terms.section_13_p1')}</p>
            <div className="bg-gray-50 p-4 rounded-lg">
              <p className="text-gray-700">{t('terms.section_13_email')}</p>
              <p className="text-gray-700">{t('terms.section_13_website')}</p>
            </div>
          </section>

          {/* Biblical Foundation */}
          <section className="bg-indigo-50 p-6 rounded-lg">
            <h2 className="text-2xl font-bold text-indigo-900 mb-4">{t('terms.commitment_title')}</h2>
            <p className="text-indigo-800 leading-relaxed mb-4">{t('terms.commitment_quote')}</p>
            <p className="text-indigo-800 leading-relaxed">{t('terms.commitment_text')}</p>
          </section>
        </div>

        {/* Back Buttons */}
        <div className="mt-8 text-center flex flex-wrap justify-center gap-4">
          <Link
            to="/"
            className="inline-block px-6 py-3 bg-indigo-600 text-white rounded-lg hover:bg-indigo-700 transition-colors"
          >
            {t('common.back_to_home')}
          </Link>
          <a
            href="https://christianplatform.vercel.app/"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block px-6 py-3 bg-red-500 text-white rounded-lg hover:bg-red-600 transition-colors"
          >
            {t('common.platform_home')}
          </a>
        </div>
      </div>
    </div>
  );
}
