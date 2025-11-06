import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';

export function PrivacyPolicy() {
  const { t } = useTranslation();

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <header className="bg-white shadow-sm">
        <div className="max-w-4xl mx-auto px-6 py-4">
          <Link to="/" className="inline-flex items-center gap-2 text-indigo-600 hover:text-indigo-700">
            <span className="text-2xl">{t('common.cross')}</span>
            <span className="text-xl font-bold">Christian Platform</span>
          </Link>
        </div>
      </header>

      {/* Content */}
      <div className="max-w-4xl mx-auto px-6 py-12">
        <h1 className="text-4xl font-bold text-gray-900 mb-4">Privacy Policy</h1>
        <p className="text-gray-600 mb-8">Last Updated: November 6, 2025</p>

        <div className="bg-white rounded-lg shadow-sm p-8 space-y-8">
          {/* Introduction */}
          <section>
            <h2 className="text-2xl font-bold text-gray-900 mb-4">1. Introduction</h2>
            <p className="text-gray-700 leading-relaxed mb-4">
              Welcome to Christian Platform ("Platform," "we," "us," or "our"). We are committed to protecting
              your privacy and handling your personal information with care and respect.
            </p>
            <p className="text-gray-700 leading-relaxed">
              This Privacy Policy explains how we collect, use, disclose, and safeguard your information when
              you use our Platform. Please read this policy carefully.
            </p>
          </section>

          {/* Information We Collect */}
          <section>
            <h2 className="text-2xl font-bold text-gray-900 mb-4">2. Information We Collect</h2>

            <h3 className="text-xl font-semibold text-gray-800 mb-2">2.1 Information You Provide</h3>
            <p className="text-gray-700 leading-relaxed mb-4">We collect information you provide directly:</p>
            <ul className="list-disc list-inside text-gray-700 space-y-2 ml-4 mb-4">
              <li><strong>Account Information:</strong> Name, email address, password</li>
              <li><strong>Profile Information:</strong> Church affiliation, role (seeker, student, scholar, leader)</li>
              <li><strong>User Content:</strong> Notes, saved content, study materials, questions asked to AI</li>
              <li><strong>Communication:</strong> Messages sent through our support system</li>
              <li><strong>Payment Information:</strong> Billing details (processed securely through third-party providers)</li>
            </ul>

            <h3 className="text-xl font-semibold text-gray-800 mb-2">2.2 Automatically Collected Information</h3>
            <p className="text-gray-700 leading-relaxed mb-4">When you use our Platform, we automatically collect:</p>
            <ul className="list-disc list-inside text-gray-700 space-y-2 ml-4 mb-4">
              <li><strong>Usage Data:</strong> Features used, time spent, pages visited</li>
              <li><strong>Device Information:</strong> Browser type, operating system, device identifiers</li>
              <li><strong>Log Data:</strong> IP address, access times, error logs</li>
              <li><strong>Cookies:</strong> Small data files stored on your device</li>
            </ul>

            <h3 className="text-xl font-semibold text-gray-800 mb-2">2.3 AI Interaction Data</h3>
            <p className="text-gray-700 leading-relaxed">
              We collect questions, prompts, and responses from your interactions with our AI tools to
              improve service quality and personalize your experience.
            </p>
          </section>

          {/* How We Use Your Information */}
          <section>
            <h2 className="text-2xl font-bold text-gray-900 mb-4">3. How We Use Your Information</h2>
            <p className="text-gray-700 leading-relaxed mb-4">We use your information to:</p>
            <ul className="list-disc list-inside text-gray-700 space-y-2 ml-4">
              <li>Provide, maintain, and improve our services</li>
              <li>Create and manage your account</li>
              <li>Process payments and subscriptions</li>
              <li>Personalize your experience and content recommendations</li>
              <li>Send important updates, newsletters, and educational content</li>
              <li>Respond to your questions and support requests</li>
              <li>Monitor and analyze usage patterns and trends</li>
              <li>Detect and prevent fraud, abuse, and security issues</li>
              <li>Comply with legal obligations</li>
              <li>Improve AI model performance and accuracy</li>
            </ul>
          </section>

          {/* How We Share Your Information */}
          <section>
            <h2 className="text-2xl font-bold text-gray-900 mb-4">4. How We Share Your Information</h2>
            <p className="text-gray-700 leading-relaxed mb-4">We do NOT sell your personal information. We may share your information:</p>

            <h3 className="text-xl font-semibold text-gray-800 mb-2">4.1 With Your Consent</h3>
            <p className="text-gray-700 leading-relaxed mb-4">
              We will share your information when you explicitly authorize us to do so.
            </p>

            <h3 className="text-xl font-semibold text-gray-800 mb-2">4.2 Service Providers</h3>
            <p className="text-gray-700 leading-relaxed mb-4">
              We work with third-party service providers who help us operate the Platform:
            </p>
            <ul className="list-disc list-inside text-gray-700 space-y-2 ml-4 mb-4">
              <li><strong>Hosting:</strong> Vercel, Railway</li>
              <li><strong>Database:</strong> MongoDB Atlas</li>
              <li><strong>AI Services:</strong> OpenAI, Anthropic, Google, and other LLM providers</li>
              <li><strong>Payment Processing:</strong> Stripe or similar (when implemented)</li>
              <li><strong>Analytics:</strong> Usage tracking and performance monitoring</li>
            </ul>

            <h3 className="text-xl font-semibold text-gray-800 mb-2">4.3 Legal Requirements</h3>
            <p className="text-gray-700 leading-relaxed mb-4">
              We may disclose your information if required by law or in response to:
            </p>
            <ul className="list-disc list-inside text-gray-700 space-y-2 ml-4 mb-4">
              <li>Court orders or legal processes</li>
              <li>Government requests</li>
              <li>Protection of our rights, property, or safety</li>
              <li>Protection of users or the public</li>
            </ul>

            <h3 className="text-xl font-semibold text-gray-800 mb-2">4.4 Business Transfers</h3>
            <p className="text-gray-700 leading-relaxed">
              If we are involved in a merger, acquisition, or sale of assets, your information may be
              transferred as part of that transaction.
            </p>
          </section>

          {/* Data Security */}
          <section>
            <h2 className="text-2xl font-bold text-gray-900 mb-4">5. Data Security</h2>
            <p className="text-gray-700 leading-relaxed mb-4">
              We implement appropriate technical and organizational measures to protect your information:
            </p>
            <ul className="list-disc list-inside text-gray-700 space-y-2 ml-4">
              <li>Encryption in transit (HTTPS/TLS)</li>
              <li>Secure password hashing (bcrypt)</li>
              <li>Regular security assessments</li>
              <li>Access controls and authentication</li>
              <li>Secure database connections</li>
            </ul>
            <p className="text-gray-700 leading-relaxed mt-4">
              However, no method of transmission over the internet is 100% secure. We cannot guarantee
              absolute security but will notify you of any significant data breaches as required by law.
            </p>
          </section>

          {/* Data Retention */}
          <section>
            <h2 className="text-2xl font-bold text-gray-900 mb-4">6. Data Retention</h2>
            <p className="text-gray-700 leading-relaxed mb-4">
              We retain your information for as long as necessary to:
            </p>
            <ul className="list-disc list-inside text-gray-700 space-y-2 ml-4">
              <li>Provide our services</li>
              <li>Comply with legal obligations</li>
              <li>Resolve disputes</li>
              <li>Enforce our agreements</li>
            </ul>
            <p className="text-gray-700 leading-relaxed mt-4">
              When you delete your account, we will delete or anonymize your personal information within
              30 days, except where we are required to retain it for legal purposes.
            </p>
          </section>

          {/* Your Rights */}
          <section>
            <h2 className="text-2xl font-bold text-gray-900 mb-4">7. Your Privacy Rights</h2>
            <p className="text-gray-700 leading-relaxed mb-4">You have the right to:</p>
            <ul className="list-disc list-inside text-gray-700 space-y-2 ml-4">
              <li><strong>Access:</strong> Request a copy of your personal information</li>
              <li><strong>Correction:</strong> Update or correct inaccurate information</li>
              <li><strong>Deletion:</strong> Request deletion of your account and data</li>
              <li><strong>Portability:</strong> Receive your data in a portable format</li>
              <li><strong>Opt-Out:</strong> Unsubscribe from marketing emails</li>
              <li><strong>Restriction:</strong> Request limitation of processing</li>
              <li><strong>Object:</strong> Object to certain types of processing</li>
            </ul>
            <p className="text-gray-700 leading-relaxed mt-4">
              To exercise these rights, contact us at privacy@christianplatform.com
            </p>
          </section>

          {/* Cookies */}
          <section>
            <h2 className="text-2xl font-bold text-gray-900 mb-4">8. Cookies and Tracking</h2>
            <p className="text-gray-700 leading-relaxed mb-4">
              We use cookies and similar tracking technologies to:
            </p>
            <ul className="list-disc list-inside text-gray-700 space-y-2 ml-4 mb-4">
              <li>Remember your preferences and settings</li>
              <li>Keep you logged in</li>
              <li>Understand how you use our Platform</li>
              <li>Improve performance and user experience</li>
            </ul>
            <p className="text-gray-700 leading-relaxed">
              You can control cookies through your browser settings. Disabling cookies may limit
              Platform functionality.
            </p>
          </section>

          {/* Children's Privacy */}
          <section>
            <h2 className="text-2xl font-bold text-gray-900 mb-4">9. Children's Privacy</h2>
            <p className="text-gray-700 leading-relaxed mb-4">
              Our Platform is designed for users aged 13 and older. We do not knowingly collect personal
              information from children under 13.
            </p>
            <p className="text-gray-700 leading-relaxed">
              For users aged 13-18, we recommend parental guidance and involvement. Churches and organizations
              using our Platform for youth ministry should ensure appropriate supervision.
            </p>
          </section>

          {/* International Users */}
          <section>
            <h2 className="text-2xl font-bold text-gray-900 mb-4">10. International Data Transfers</h2>
            <p className="text-gray-700 leading-relaxed">
              Your information may be transferred to and processed in countries other than your own.
              We ensure appropriate safeguards are in place to protect your information in accordance
              with this Privacy Policy and applicable law.
            </p>
          </section>

          {/* Third-Party Links */}
          <section>
            <h2 className="text-2xl font-bold text-gray-900 mb-4">11. Third-Party Links</h2>
            <p className="text-gray-700 leading-relaxed">
              Our Platform may contain links to third-party websites and services. We are not responsible
              for the privacy practices of these third parties. We encourage you to read their privacy policies.
            </p>
          </section>

          {/* Changes to Privacy Policy */}
          <section>
            <h2 className="text-2xl font-bold text-gray-900 mb-4">12. Changes to This Privacy Policy</h2>
            <p className="text-gray-700 leading-relaxed">
              We may update this Privacy Policy from time to time. We will notify you of significant changes
              by email or through the Platform. The "Last Updated" date will always reflect the most recent version.
            </p>
          </section>

          {/* Contact */}
          <section>
            <h2 className="text-2xl font-bold text-gray-900 mb-4">13. Contact Us</h2>
            <p className="text-gray-700 leading-relaxed mb-4">
              If you have questions or concerns about this Privacy Policy or our data practices:
            </p>
            <div className="bg-gray-50 p-4 rounded-lg space-y-2">
              <p className="text-gray-700"><strong>Email:</strong> privacy@christianplatform.com</p>
              <p className="text-gray-700"><strong>Website:</strong> https://christianityplatform.vercel.app</p>
              <p className="text-gray-700"><strong>Data Protection Officer:</strong> dpo@christianplatform.com</p>
            </div>
          </section>

          {/* GDPR Compliance */}
          <section>
            <h2 className="text-2xl font-bold text-gray-900 mb-4">14. GDPR Compliance (EU Users)</h2>
            <p className="text-gray-700 leading-relaxed mb-4">
              If you are in the European Union, you have additional rights under GDPR:
            </p>
            <ul className="list-disc list-inside text-gray-700 space-y-2 ml-4 mb-4">
              <li>Right to be informed about data processing</li>
              <li>Right to restrict processing</li>
              <li>Right to object to automated decision-making</li>
              <li>Right to lodge a complaint with a supervisory authority</li>
            </ul>
            <p className="text-gray-700 leading-relaxed">
              We process your data based on your consent, contractual necessity, legal obligations,
              and our legitimate interests in providing and improving our services.
            </p>
          </section>

          {/* Biblical Commitment */}
          <section className="bg-indigo-50 p-6 rounded-lg">
            <h2 className="text-2xl font-bold text-indigo-900 mb-4">Our Commitment to Stewardship</h2>
            <p className="text-indigo-800 leading-relaxed mb-4">
              "So then, each of us will give an account of ourselves to God." - Romans 14:12
            </p>
            <p className="text-indigo-800 leading-relaxed">
              We recognize that your information is entrusted to us, and we take this stewardship seriously.
              We are committed to handling your data with integrity, transparency, and respect, as unto the Lord.
            </p>
          </section>
        </div>

        {/* Back Button */}
        <div className="mt-8 text-center">
          <Link
            to="/"
            className="inline-block px-6 py-3 bg-indigo-600 text-white rounded-lg hover:bg-indigo-700 transition-colors"
          >
            {t('common.back_to_home')}
          </Link>
        </div>
      </div>
    </div>
  );
}
