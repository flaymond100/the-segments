import { Section } from './Section';
import { siteContent } from '../content/siteContent';

export const Listen = () => {
  return (
    <Section id="listen">
      <h2 className="text-3xl md:text-4xl font-display font-bold mb-8 tracking-wider text-center text-text">
        Listen
      </h2>

      {siteContent.embeds.spotifyEmbedUrl && (
        <div className="mb-12">
          <iframe
            src={siteContent.embeds.spotifyEmbedUrl}
            width="100%"
            height="352"
            frameBorder="0"
            allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
            loading="lazy"
            className="rounded"
          />
        </div>
      )}

      {siteContent.featuredTracks.length > 0 && (
        <div>
          <h3 className="text-xl font-display font-semibold mb-6 tracking-wide text-text uppercase">
            Featured Tracks
          </h3>
          <div className="grid md:grid-cols-3 gap-4">
            {siteContent.featuredTracks.map((track, index) => (
              <a
                key={index}
                href={track.url}
                target="_blank"
                rel="noopener noreferrer"
                className="bg-panel p-4 border border-text/12 hover:border-sepia transition-colors group"
              >
                <div className="flex justify-between items-start mb-2">
                  <h4 className="text-text font-semibold group-hover:text-sepia transition-colors">
                    {track.title}
                  </h4>
                  <span className="text-muted text-sm">{track.duration}</span>
                </div>
              </a>
            ))}
          </div>
        </div>
      )}
    </Section>
  );
};
