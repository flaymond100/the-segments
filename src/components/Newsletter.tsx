import { Section } from './Section';
import { siteContent } from '../content/siteContent';
import { useState } from 'react';

export const Newsletter = () => {
  const [email, setEmail] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // In a real implementation, this would submit to the newsletter provider
    // For now, we'll use a mailto link or the form action URL
    if (siteContent.newsletter.formActionUrl) {
      const form = e.target as HTMLFormElement;
      form.action = siteContent.newsletter.formActionUrl;
      form.method = 'post';
      form.submit();
    }
  };

  return (
    <Section id="newsletter">
      <h2 className="text-3xl md:text-4xl font-display font-bold mb-4 tracking-wider text-center text-text">
        Mailing List
      </h2>
      <p className="text-muted text-center mb-8 text-sm">
        Stay updated with new releases, tour dates, and exclusive content.
      </p>

      <div className="max-w-md mx-auto">
        <form
          onSubmit={handleSubmit}
          action={siteContent.newsletter.formActionUrl}
          method="post"
          target="_blank"
          className="flex flex-col sm:flex-row gap-3"
        >
          <input
            type="email"
            name="EMAIL"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="your@email.com"
            required
            className="flex-1 px-4 py-3 bg-panel border border-text/30 text-text placeholder-muted focus:outline-none focus:border-sepia transition-colors"
          />
          <button
            type="submit"
            className="px-6 py-3 bg-sepia text-bg font-semibold uppercase tracking-wider hover:bg-sepia-hover transition-colors"
          >
            Subscribe
          </button>
        </form>
        <p className="text-xs text-muted text-center mt-3">
          By subscribing, you agree to receive updates from {siteContent.bandName}. Unsubscribe at any time.
        </p>
      </div>
    </Section>
  );
};
