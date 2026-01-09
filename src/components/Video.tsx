import { Section } from './Section';
import { siteContent } from '../content/siteContent';

export const Video = () => {
  return (
    <Section id="video" className="bg-panel">
      <h2 className="text-3xl md:text-4xl font-display font-bold mb-8 tracking-wider text-center text-text">
        Video
      </h2>
      
      <div className="max-w-4xl mx-auto">
        <div className="aspect-video mb-4">
          <iframe
            src={`https://www.youtube.com/embed/${siteContent.video.youtubeId}`}
            title={siteContent.video.title}
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
            className="w-full h-full"
          />
        </div>
        <p className="text-muted text-center text-sm uppercase tracking-wide">
          {siteContent.video.title}
        </p>
      </div>
    </Section>
  );
};
