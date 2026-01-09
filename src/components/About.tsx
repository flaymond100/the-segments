import { Section } from './Section';
import { siteContent } from '../content/siteContent';

export const About = () => {
  return (
    <Section id="about" className="bg-panel">
      <h2 className="text-3xl md:text-4xl font-display font-bold mb-8 tracking-wider text-center text-text">
        About
      </h2>
      
      <div className="max-w-3xl mx-auto">
        <p className="text-muted leading-relaxed mb-6 text-center">
          {siteContent.aboutText}
        </p>
        
        {siteContent.ffo.length > 0 && (
          <div className="text-center">
            <p className="text-sm uppercase tracking-wider text-muted mb-2">For Fans Of</p>
            <p className="text-text">
              {siteContent.ffo.join(' • ')}
            </p>
          </div>
        )}
      </div>
    </Section>
  );
};
