import { Section } from './Section';
import { siteContent } from '../content/siteContent';
import { FaInstagram, FaTiktok, FaYoutube, FaBandcamp, FaSpotify } from 'react-icons/fa';

const iconMap: Record<string, any> = {
  instagram: FaInstagram,
  tiktok: FaTiktok,
  youtube: FaYoutube,
  bandcamp: FaBandcamp,
  spotify: FaSpotify,
};

export const Contact = () => {
  return (
    <Section id="contact" className="bg-panel">
      <h2 className="text-3xl md:text-4xl font-display font-bold mb-8 tracking-wider text-center text-text">
        Contact
      </h2>

      <div className="max-w-2xl mx-auto">
        <div className="text-center mb-8">
          {siteContent.contact.emails.map((email) => (
            <div key={email.type} className="mb-2">
              <span className="text-muted text-sm uppercase tracking-wider">{email.type}: </span>
              <a
                href={`mailto:${email.address}`}
                className="text-text hover:text-sepia transition-colors"
              >
                {email.address}
              </a>
            </div>
          ))}
        </div>

        <div className="flex justify-center items-center gap-6 flex-wrap">
          {siteContent.contact.socials.map((social) => {
            const Icon = iconMap[social.icon.toLowerCase()];
            return (
              <a
                key={social.platform}
                href={social.url}
                target="_blank"
                rel="noopener noreferrer"
                className="text-muted hover:text-sepia transition-colors"
                aria-label={social.platform}
              >
                {Icon && <Icon className="w-6 h-6" />}
              </a>
            );
          })}
        </div>
      </div>
    </Section>
  );
};
