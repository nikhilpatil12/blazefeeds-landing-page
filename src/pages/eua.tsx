// pages/eula.tsx
import React from 'react';

const EndUserAgreement = () => {
  return (
    <main style={styles.container}>
      <h1 style={styles.title}>End User Agreement</h1>
      
      <section style={styles.section}>
        <p>
          This End User Agreement ("Agreement") is a legal contract between you ("User") and GemRidge App Studio ("Company"). By using this application ("App"), you agree to be bound by the terms and conditions set forth herein.
        </p>
      </section>
      
      <section style={styles.section}>
        <h2>Subscription Terms</h2>
        <p>The App offers the following pricing options:</p>
        <ul>
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
      
      <section style={styles.section}>
        <h2>License Grant</h2>
        <p>
          Subject to the terms of this Agreement, the Company grants you a non-exclusive, non-transferable, revocable license to use the App.
        </p>
      </section>
      
      <section style={styles.section}>
        <h2>Payment and Refund Policy</h2>
        <p>
          Subscription fees are automatically billed on a recurring basis until canceled. The Lifetime Purchase fee grants you lifetime access with no recurring fees. All fees are non-refundable, except as required by applicable law.
        </p>
      </section>
      
      <section style={styles.section}>
        <h2>Termination</h2>
        <p>
          The Company reserves the right to terminate or suspend your access to the App immediately, without prior notice or liability, for any reason.
        </p>
      </section>
      
      <section style={styles.section}>
        <h2>Modifications to the Agreement</h2>
        <p>
          We may update this Agreement from time to time. Continued use of the App after any modifications constitutes acceptance of the updated terms.
        </p>
      </section>
      
      <section style={styles.section}>
        <h2>Contact Information</h2>
        <p>
          If you have any questions about this Agreement, please contact us at <a href="mailto:support@nikpatil.com">support@nikpatil.com</a>.
        </p>
      </section>
    </main>
  );
};

const styles: { [key: string]: React.CSSProperties } = {
  container: {
    maxWidth: '800px',
    margin: '0 auto',
    padding: '2rem',
    fontFamily: 'Arial, sans-serif',
    lineHeight: '1.6',
  },
  title: {
    textAlign: 'center',
    marginBottom: '1rem',
  },
  section: {
    marginBottom: '1.5rem',
  },
};

export default EndUserAgreement;
