import { Section } from './Section';
import { siteContent } from '../content/siteContent';
import { useState } from 'react';

export const Release = () => {
  const [showTracklist, setShowTracklist] = useState(false);

  return (
    <Section id="release" className="bg-panel">
      <div className="grid md:grid-cols-2 gap-8 md:gap-12 items-center">
        <div className="order-2 md:order-1">
          <img
            src={`${import.meta.env.BASE_URL}${siteContent.release.coverUrl.startsWith('/') ? siteContent.release.coverUrl.slice(1) : siteContent.release.coverUrl}`}
            alt={siteContent.release.title}
            className="w-full aspect-square object-cover"
            loading="lazy"
          />
        </div>
        
        <div className="order-1 md:order-2">
          <h2 className="text-3xl md:text-4xl font-display font-bold mb-4 tracking-wider text-text">
            {siteContent.release.title}
          </h2>
          <p className="text-muted mb-6 leading-relaxed">
            {siteContent.release.description}
          </p>
          
          <div className="flex flex-wrap gap-3 mb-6">
            {siteContent.release.links.map((link) => (
              <a
                key={link.platform}
                href={link.url}
                target="_blank"
                rel="noopener noreferrer"
                className="px-4 py-2 border border-text/30 text-text text-sm uppercase tracking-wider hover:border-sepia hover:text-sepia transition-colors"
              >
                {link.platform}
              </a>
            ))}
          </div>

          {siteContent.release.tracklist && (
            <div>
              <button
                onClick={() => setShowTracklist(!showTracklist)}
                className="text-sm uppercase tracking-wider text-muted hover:text-sepia transition-colors mb-2"
              >
                {showTracklist ? 'Hide' : 'Show'} Tracklist
              </button>
              {showTracklist && (
                <ul className="space-y-2 text-muted">
                  {siteContent.release.tracklist.map((track, index) => (
                    <li key={index} className="text-sm">{track}</li>
                  ))}
                </ul>
              )}
            </div>
          )}
        </div>
      </div>
    </Section>
  );
};
