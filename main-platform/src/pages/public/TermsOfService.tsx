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
            <span className="text-xl font-bold">Christian Platform</span>
          </Link>
        </div>
      </header>

      {/* Content */}
      <div className="max-w-4xl mx-auto px-6 py-12">
        <h1 className="text-4xl font-bold text-gray-900 mb-4">Terms of Service</h1>
        <p className="text-gray-600 mb-8">Last Updated: November 6, 2025</p>

        <div className="bg-white rounded-lg shadow-sm p-8 space-y-8">
          {/* Introduction */}
          <section>
            <h2 className="text-2xl font-bold text-gray-900 mb-4">1. Acceptance of Terms</h2>
            <p className="text-gray-700 leading-relaxed mb-4">
              Welcome to Christian Platform ("Platform," "we," "us," or "our"). By accessing or using our services,
              you agree to be bound by these Terms of Service ("Terms"). If you do not agree to these Terms,
              please do not use our services.
            </p>
            <p className="text-gray-700 leading-relaxed">
              These Terms apply to all users, including visitors, registered members, and contributors to the Platform.
            </p>
          </section>

          {/* Description of Service */}
          <section>
            <h2 className="text-2xl font-bold text-gray-900 mb-4">2. Description of Service</h2>
            <p className="text-gray-700 leading-relaxed mb-4">
              Christian Platform provides AI-powered tools and resources for Christian education, culture exploration,
              Bible study, theology research, and church administration. Our services include:
            </p>
            <ul className="list-disc list-inside text-gray-700 space-y-2 ml-4">
              <li>Christian Culture Explorer</li>
              <li>Bible Knowledge & Learning</li>
              <li>Christian Theology & Research (coming soon)</li>
              <li>Church Administration & Ministry (coming soon)</li>
            </ul>
          </section>

          {/* User Accounts */}
          <section>
            <h2 className="text-2xl font-bold text-gray-900 mb-4">3. User Accounts</h2>
            <h3 className="text-xl font-semibold text-gray-800 mb-2">3.1 Registration</h3>
            <p className="text-gray-700 leading-relaxed mb-4">
              To access certain features, you must create an account. You agree to:
            </p>
            <ul className="list-disc list-inside text-gray-700 space-y-2 ml-4 mb-4">
              <li>Provide accurate, current, and complete information</li>
              <li>Maintain and update your information to keep it accurate</li>
              <li>Maintain the security of your password</li>
              <li>Accept responsibility for all activities under your account</li>
              <li>Notify us immediately of any unauthorized use</li>
            </ul>
            <h3 className="text-xl font-semibold text-gray-800 mb-2">3.2 Account Termination</h3>
            <p className="text-gray-700 leading-relaxed">
              We reserve the right to suspend or terminate your account if you violate these Terms or engage in
              behavior that we deem harmful to the Platform or other users.
            </p>
          </section>

          {/* User Conduct */}
          <section>
            <h2 className="text-2xl font-bold text-gray-900 mb-4">4. User Conduct</h2>
            <p className="text-gray-700 leading-relaxed mb-4">You agree NOT to:</p>
            <ul className="list-disc list-inside text-gray-700 space-y-2 ml-4">
              <li>Use the Platform for any unlawful purpose</li>
              <li>Post false, inaccurate, misleading, or defamatory content</li>
              <li>Harass, abuse, or harm other users</li>
              <li>Impersonate any person or entity</li>
              <li>Violate any intellectual property rights</li>
              <li>Transmit viruses, malware, or harmful code</li>
              <li>Attempt to gain unauthorized access to our systems</li>
              <li>Use automated systems (bots) without permission</li>
              <li>Post content that contradicts core Christian doctrine without appropriate context</li>
            </ul>
          </section>

          {/* Content and Intellectual Property */}
          <section>
            <h2 className="text-2xl font-bold text-gray-900 mb-4">5. Content and Intellectual Property</h2>
            <h3 className="text-xl font-semibold text-gray-800 mb-2">5.1 Our Content</h3>
            <p className="text-gray-700 leading-relaxed mb-4">
              All content on the Platform, including text, graphics, logos, images, software, and AI-generated content,
              is owned by Christian Platform or its licensors and protected by copyright and intellectual property laws.
            </p>
            <h3 className="text-xl font-semibold text-gray-800 mb-2">5.2 User Content</h3>
            <p className="text-gray-700 leading-relaxed mb-4">
              You retain ownership of content you submit. By submitting content, you grant us a worldwide,
              non-exclusive, royalty-free license to use, reproduce, modify, and distribute your content in
              connection with operating the Platform.
            </p>
            <h3 className="text-xl font-semibold text-gray-800 mb-2">5.3 AI-Generated Content</h3>
            <p className="text-gray-700 leading-relaxed">
              Content generated by our AI tools is provided for educational and reference purposes.
              All theological and doctrinal content should be verified by qualified church leaders and pastors
              before being used in official church teaching or ministry contexts.
            </p>
          </section>

          {/* Church Authority */}
          <section>
            <h2 className="text-2xl font-bold text-gray-900 mb-4">6. Church Authority and Pastoral Oversight</h2>
            <p className="text-gray-700 leading-relaxed mb-4">
              We recognize the authority of the local church and pastoral leadership in matters of faith and doctrine.
              Our Platform is designed to supplement, not replace, the teaching ministry of the church.
            </p>
            <p className="text-gray-700 leading-relaxed">
              Users are encouraged to submit AI-generated theological content to their church leaders for review
              before using it in teaching or ministry contexts.
            </p>
          </section>

          {/* Subscriptions and Payment */}
          <section>
            <h2 className="text-2xl font-bold text-gray-900 mb-4">7. Subscriptions and Payment</h2>
            <h3 className="text-xl font-semibold text-gray-800 mb-2">7.1 Free Tier</h3>
            <p className="text-gray-700 leading-relaxed mb-4">
              We offer a free tier with limited access to our services. Free accounts may have usage limitations.
            </p>
            <h3 className="text-xl font-semibold text-gray-800 mb-2">7.2 Paid Subscriptions</h3>
            <p className="text-gray-700 leading-relaxed mb-4">
              Premium features may require a paid subscription. Subscription fees are billed in advance and
              are non-refundable except as required by law.
            </p>
            <h3 className="text-xl font-semibold text-gray-800 mb-2">7.3 Donations</h3>
            <p className="text-gray-700 leading-relaxed">
              Donations are voluntary and support the operation of the Platform. Donations are non-refundable.
            </p>
          </section>

          {/* Disclaimer of Warranties */}
          <section>
            <h2 className="text-2xl font-bold text-gray-900 mb-4">8. Disclaimer of Warranties</h2>
            <p className="text-gray-700 leading-relaxed mb-4">
              THE PLATFORM IS PROVIDED "AS IS" AND "AS AVAILABLE" WITHOUT WARRANTIES OF ANY KIND,
              EITHER EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO WARRANTIES OF MERCHANTABILITY,
              FITNESS FOR A PARTICULAR PURPOSE, OR NON-INFRINGEMENT.
            </p>
            <p className="text-gray-700 leading-relaxed">
              We do not warrant that the Platform will be uninterrupted, error-free, or free of viruses or
              other harmful components. We do not guarantee the accuracy, completeness, or usefulness of any
              AI-generated content.
            </p>
          </section>

          {/* Limitation of Liability */}
          <section>
            <h2 className="text-2xl font-bold text-gray-900 mb-4">9. Limitation of Liability</h2>
            <p className="text-gray-700 leading-relaxed">
              TO THE MAXIMUM EXTENT PERMITTED BY LAW, CHRISTIAN PLATFORM SHALL NOT BE LIABLE FOR ANY
              INDIRECT, INCIDENTAL, SPECIAL, CONSEQUENTIAL, OR PUNITIVE DAMAGES, OR ANY LOSS OF PROFITS OR
              REVENUES, WHETHER INCURRED DIRECTLY OR INDIRECTLY, OR ANY LOSS OF DATA, USE, GOODWILL, OR
              OTHER INTANGIBLE LOSSES RESULTING FROM YOUR USE OF THE PLATFORM.
            </p>
          </section>

          {/* Indemnification */}
          <section>
            <h2 className="text-2xl font-bold text-gray-900 mb-4">10. Indemnification</h2>
            <p className="text-gray-700 leading-relaxed">
              You agree to indemnify and hold harmless Christian Platform and its officers, directors, employees,
              and agents from any claims, damages, losses, liabilities, and expenses (including legal fees)
              arising from your use of the Platform or violation of these Terms.
            </p>
          </section>

          {/* Changes to Terms */}
          <section>
            <h2 className="text-2xl font-bold text-gray-900 mb-4">11. Changes to Terms</h2>
            <p className="text-gray-700 leading-relaxed">
              We reserve the right to modify these Terms at any time. We will notify users of significant changes
              by email or through the Platform. Continued use of the Platform after changes constitutes acceptance
              of the modified Terms.
            </p>
          </section>

          {/* Governing Law */}
          <section>
            <h2 className="text-2xl font-bold text-gray-900 mb-4">12. Governing Law</h2>
            <p className="text-gray-700 leading-relaxed">
              These Terms shall be governed by and construed in accordance with the laws of the jurisdiction
              in which Christian Platform operates, without regard to its conflict of law provisions.
            </p>
          </section>

          {/* Contact */}
          <section>
            <h2 className="text-2xl font-bold text-gray-900 mb-4">13. Contact Information</h2>
            <p className="text-gray-700 leading-relaxed mb-4">
              If you have questions about these Terms, please contact us at:
            </p>
            <div className="bg-gray-50 p-4 rounded-lg">
              <p className="text-gray-700">Email: legal@christianplatform.com</p>
              <p className="text-gray-700">Website: https://christianityplatform.vercel.app</p>
            </div>
          </section>

          {/* Biblical Foundation */}
          <section className="bg-indigo-50 p-6 rounded-lg">
            <h2 className="text-2xl font-bold text-indigo-900 mb-4">Our Commitment</h2>
            <p className="text-indigo-800 leading-relaxed mb-4">
              "Whatever you do, work heartily, as for the Lord and not for men." - Colossians 3:23
            </p>
            <p className="text-indigo-800 leading-relaxed">
              Our Platform is dedicated to serving God's kingdom and building up the body of Christ.
              We are committed to operating with integrity, transparency, and in submission to biblical principles.
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
