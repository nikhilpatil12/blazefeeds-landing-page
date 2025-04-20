import React from "react";
import '../app/globals.css';
const faqs = [
  {
    question: "How do I contact support?",
    answer:
      "You can reach out to us via the contact form below or email us at support@nikpatil.com.",
  },
  {
    question: "Is BlazeFeeds free to use?",
    answer:
      "Yes! BlazeFeeds offers a free tier with premium features available for subscribers.",
  },
];

export default function Support() {
  return (
    <div className="min-h-screen bg-black-600 text-white-80 font-sans">
      <header className="bg-gray shadow">
        <div className="max-w-5xl mx-auto px-4 py-6 flex items-center justify-between">
          <h1 className="text-3xl font-extrabold text-indigo-700 tracking-tight">
            BlazeFeeds Support
          </h1>
          <a
            href="/"
            className="text-indigo-600 hover:text-orange-500 font-semibold transition"
          >
            ← Back to Home
          </a>
        </div>
      </header>

      <main className="max-w-3xl mx-auto px-4 py-12">
        <section className="mb-12 text-center">
          <h2 className="text-2xl md:text-3xl font-bold text-white mb-2">
            Need Help?
          </h2>
          <p className="text-gray-60 mb-6">
            We're here to help! Browse our FAQs or contact us directly.
          </p>
        </section>

        <section className="mb-16">
          <h3 className="text-xl font-semibold text-indigo-700 mb-4">
            Frequently Asked Questions
          </h3>
          <div className="space-y-4">
            {faqs.map((faq, idx) => (
              <div
                key={idx}
                className="bg-gray-950 rounded-lg shadow p-5 border-l-4 border-secondary"
              >
                <h4 className="font-bold text-white-800">{faq.question}</h4>
                <p className="text-gray-300 mt-1">{faq.answer}</p>
              </div>
            ))}
          </div>
        </section>

        <section>
          <h3 className="text-xl font-semibold text-indigo-700 mb-4">
            Contact Us
          </h3>
          <form
            className="bg-gray-950 rounded-lg shadow p-8 space-y-6"
            action="https://formspree.io/f/xanowwlq"
            method="POST"
          >
            <div>
              <label className="block text-white font-medium mb-1">
                Name
              </label>
              <input
                type="text"
                name="name"
                required
                className="w-full bg-gray-950 border border-white rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-secondary"
              />
            </div>
            <div>
              <label className="block text-white font-medium mb-1">
                Email
              </label>
              <input
                type="email"
                name="email"
                required
                className="w-full bg-gray-950 border border-white-300 rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-secondary"
              />
            </div>
            <div>
              <label className="block text-white-700 font-medium mb-1">
                Message
              </label>
              <textarea
                name="message"
                rows={4}
                required
                className="w-full bg-gray-950 border border-white-300 rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-secondary"
              />
            </div>
            <button
              type="submit"
              className="w-full bg-secondary hover:bg-orange-600 text-gray-950 font-bold py-2 px-4 rounded transition"
            >
              Send Message
            </button>
          </form>
        </section>
      </main>

      <footer className="text-center py-8 text-gray-400 text-sm">
        &copy; {new Date().getFullYear()} BlazeFeeds. All rights reserved.
      </footer>
    </div>
  );
}