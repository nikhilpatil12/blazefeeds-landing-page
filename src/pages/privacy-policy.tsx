import Head from 'next/head';
import Link from 'next/link';
import '../app/globals.css';

export default function PrivacyPolicy() {
  return (
    <>
      <Head>
        <title>Privacy Policy | Blaze Feeds</title>
        <meta name="description" content="Privacy Policy of Blaze Feeds" />
        <link
          rel="stylesheet"
          href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&display=swap"
        />
      </Head>
      <main className="max-w-3xl mx-auto px-6 py-12 text-white-500 font-inter">
        <h1 className="text-4xl font-bold mb-6 text-white-600 leading-tight">Privacy Policy</h1>
        <p className="text-white-400 text-lg mb-6">
          <strong>Effective Date:</strong> April 4, 2025
        </p>

        <section className="space-y-8">
          <div>
            <h2 className="text-2xl font-semibold text-white-400 leading-snug">1. Information We Collect</h2>
            <p className="mt-2 text-lg">We collect the following types of data:</p>
            <ul className="list-disc list-inside mt-2 space-y-3 text-lg text-white-100">
              <li><strong>Crash Logs:</strong> If enabled, we collect logs to improve app stability. These logs may include device model, OS version, and app status. Users can opt out anytime.</li>
              <li><strong>FreshRSS Login:</strong> The app provides an embedded web browser for login. We <b>do not store</b> or access your credentials. See <Link href="https://freshrss.org/legal.html" className="text-blue-600 underline">FreshRSS’s Privacy Policy</Link>.</li>
              <li><strong>OpenAI & Gemini API Keys:</strong> Users can enter API keys to enable AI features. These keys are <b>stored locally</b> and <b>never sent to our servers</b>.</li>
            </ul>
          </div>

          <div>
            <h2 className="text-2xl font-semibold text-white-400 leading-snug">2. How We Use Information</h2>
            <p className="mt-2 text-lg">Collected data is used only for:</p>
            <ul className="list-disc list-inside mt-2 space-y-3 text-lg text-white-100">
              <li>Crash logs help us fix bugs and improve performance.</li>
              <li>The embedded browser is only for authentication; we do not track login details.</li>
              <li>API keys are <b>only used locally</b> and never stored on our servers.</li>
            </ul>
          </div>

          <div>
            <h2 className="text-2xl font-semibold text-white-400 leading-snug">3. User Control & Opt-Out</h2>
            <p className="mt-2 text-lg">Users have full control over data collection:</p>
            <ul className="list-disc list-inside mt-2 space-y-3 text-lg text-white-100">
              <li>Crash logs can be disabled in the app settings.</li>
              <li>FreshRSS login is optional and handled entirely through the embedded browser.</li>
              <li>Users can delete or modify their API keys anytime.</li>
            </ul>
          </div>

          <div>
            <h2 className="text-2xl font-semibold text-white-400 leading-snug">4. Third-Party Services</h2>
            <p className="mt-2 text-lg">We do not share data, but some features rely on external services:</p>
            <ul className="list-disc list-inside mt-2 space-y-3 text-lg text-white-100">
              <li>FreshRSS login follows <Link href="https://freshrss.org/privacy-policy" className="text-blue-600 underline">FreshRSS’s Privacy Policy</Link>.</li>
              <li>API requests using OpenAI & Gemini keys are subject to <Link href="https://openai.com/privacy/" className="text-blue-600 underline">OpenAI’s Privacy Policy</Link> and <Link href="https://policies.google.com/privacy" className="text-blue-600 underline">Google Gemini’s Privacy Policy</Link>.</li>
            </ul>
          </div>

          <div>
            <h2 className="text-2xl font-semibold text-white-400 leading-snug">5. Data Security</h2>
            <p className="mt-2 text-lg">
              We implement security measures to protect user data. However, we <b>do not store API keys</b>, and all AI requests are handled <b>directly from the user&rsquo;s device</b>.
            </p>
          </div>

          <div>
            <h2 className="text-2xl font-semibold text-white-400 leading-snug">6. Children&rsquo;s Privacy</h2>
            <p className="mt-2 text-lg">Our app is <b>not intended for children under 13</b>, and we do not knowingly collect data from minors.</p>
          </div>

          <div>
            <h2 className="text-2xl font-semibold text-white-400 leading-snug">7. Changes to This Policy</h2>
            <p className="mt-2 text-lg">We may update this Privacy Policy. Any changes will be posted on this page.</p>
          </div>

          <div>
            <h2 className="text-2xl font-semibold text-white-400 leading-snug">8. Contact Us</h2>
            <p className="mt-2 text-lg">For any questions, contact us:</p>
            <ul className="mt-2 space-y-2 text-lg text-white-100">
              <li>📧 Email: <Link href="mailto:info@nikpatil.com" className="text-blue-600 underline">info@nikpatil.com</Link></li>
              <li>🌍 Website: <Link href="https://nikpatil.com" className="text-blue-600 underline">https://nikpatil.com</Link></li>
            </ul>
          </div>
        </section>

        <div className="mt-10">
          <Link href="/" className="px-6 py-3 bg-gray-900 text-white rounded-lg text-lg hover:bg-gray-700 transition">
            Back to Home
          </Link>
        </div>
      </main>
    </>
  );
}
