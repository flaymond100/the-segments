import { siteContent } from '../content/siteContent';
import { FaSpotify, FaBandcamp, FaApple, FaYoutube } from 'react-icons/fa';

const platformIcons: Record<string, React.ElementType> = {
  Spotify: FaSpotify,
  Bandcamp: FaBandcamp,
  'Apple Music': FaApple,
  'YouTube Music': FaYoutube,
};

export const Hero = () => {
  const handleScroll = (href: string) => {
    const element = document.querySelector(href);
    if (element) {
      const headerOffset = 80;
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - headerOffset;
      
      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth',
      });
    }
  };

  return (
    <section
      id="top"
      className="relative min-h-screen md:h-screen flex items-center justify-center overflow-hidden grain-overlay"
    >
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: `url(${import.meta.env.BASE_URL}${siteContent.heroImageUrl.startsWith('/') ? siteContent.heroImageUrl.slice(1) : siteContent.heroImageUrl})` }}
      >
        <div className="absolute inset-0 bg-bg/75 sepia-overlay" />
      </div>

      <div className="relative z-10 max-w-6xl mx-auto px-5 text-center">
        <h1 className="text-5xl md:text-7xl lg:text-8xl font-display font-bold tracking-wider mb-4 text-text">
          {siteContent.bandName}
        </h1>
        <p className="text-lg md:text-xl text-text/90 mb-8 tracking-wide">
          {siteContent.tagline}
        </p>

        <div className="flex flex-wrap justify-center gap-4 mb-12">
          <button
            onClick={() => handleScroll('#listen')}
            className="px-6 py-3 bg-sepia text-bg font-semibold uppercase tracking-wider hover:bg-sepia-hover transition-colors"
          >
            Listen
          </button>
          <button
            onClick={() => handleScroll('#video')}
            className="px-6 py-3 border-2 border-text/50 bg-panel/40 backdrop-blur-sm text-text font-semibold uppercase tracking-wider hover:border-sepia hover:text-sepia hover:bg-panel/60 transition-colors"
          >
            Watch
          </button>
          <button
            onClick={() => handleScroll('#tour')}
            className="px-6 py-3 border-2 border-text/50 bg-panel/40 backdrop-blur-sm text-text font-semibold uppercase tracking-wider hover:border-sepia hover:text-sepia hover:bg-panel/60 transition-colors"
          >
            Tour
          </button>
        </div>
      </div>

      <div className="absolute bottom-8 left-0 right-0 z-10 flex justify-center items-center gap-8">
        {siteContent.release.links.slice(0, 4).map((link) => {
          const Icon = platformIcons[link.platform];
          return (
            <a
              key={link.platform}
              href={link.url}
              target="_blank"
              rel="noopener noreferrer"
              className="text-text hover:text-sepia transition-colors"
              aria-label={link.platform}
            >
              {Icon && <Icon className="w-14 h-14 md:w-16 md:h-16" />}
            </a>
          );
        })}
      </div>
    </section>
  );
};
