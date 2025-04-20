// pages/eula.tsx

import '../app/globals.css';
const EndUserAgreement = () => {
  return (
    <main className="max-w-3xl mx-auto p-8 font-sans leading-relaxed">
      <h1 className="text-3xl text-center mb-4 font-bold">End User Agreement</h1>
      
      <section className="mb-6">
        <p>
          This End User Agreement (&quot;Agreement&quot;) is a legal contract between you (&quot;User&quot;) and GemRidge App Studio (&quot;Company&quot;). By using this application (&quot;App&quot;), you agree to be bound by the terms and conditions set forth herein.
        </p>
      </section>
      
      <section className="mb-6">
        <h2 className="text-xl font-semibold mb-2">Subscription Terms</h2>
        <p>The App offers the following pricing options:</p>
        <ul className="list-disc list-inside ml-4 mt-2 space-y-1">
          <li>
            <strong>Monthly Subscription:</strong> $1.99 per month.
          </li>
          <li>
            <strong>Annual Subscription:</strong> $19.99 per year.
          </li>
          <li>
            <strong>Lifetime Purchase:</strong> $30 (Introductory Price) for lifetime access.
          </li>
        </ul>
      </section>
      
      <section className="mb-6">
        <h2 className="text-xl font-semibold mb-2">License Grant</h2>
        <p>
          Subject to the terms of this Agreement, the Company grants you a non-exclusive, non-transferable, revocable license to use the App.
        </p>
      </section>
      
      <section className="mb-6">
        <h2 className="text-xl font-semibold mb-2">Payment and Refund Policy</h2>
        <p>
          Subscription fees are automatically billed on a recurring basis until canceled. The Lifetime Purchase fee grants you lifetime access with no recurring fees. All fees are non-refundable, except as required by applicable law.
        </p>
      </section>
      
      <section className="mb-6">
        <h2 className="text-xl font-semibold mb-2">Termination</h2>
        <p>
          The Company reserves the right to terminate or suspend your access to the App immediately, without prior notice or liability, for any reason.
        </p>
      </section>
      
      <section className="mb-6">
        <h2 className="text-xl font-semibold mb-2">Modifications to the Agreement</h2>
        <p>
          We may update this Agreement from time to time. Continued use of the App after any modifications constitutes acceptance of the updated terms.
        </p>
      </section>
      
      <section className="mb-6">
        <h2 className="text-xl font-semibold mb-2">Contact Information</h2>
        <p>
          If you have any questions about this Agreement, please contact us at <a href="mailto:support@nikpatil.com" className="text-blue-600 underline">support@nikpatil.com</a>.
        </p>
      </section>
    </main>
  );
};

export default EndUserAgreement;
