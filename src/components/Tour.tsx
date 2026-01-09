import { Section } from './Section';
import { siteContent } from '../content/siteContent';

export const Tour = () => {
  return (
    <Section id="tour">
      <h2 className="text-3xl md:text-4xl font-display font-bold mb-8 tracking-wider text-center text-text">
        Tour
      </h2>

      {siteContent.tourDates.length > 0 ? (
        <div className="max-w-3xl mx-auto">
          <div className="space-y-4">
            {siteContent.tourDates.map((date, index) => {
              const tourDate = new Date(date.date);
              const formattedDate = tourDate.toLocaleDateString('en-US', {
                month: 'short',
                day: 'numeric',
                year: 'numeric',
              });

              return (
                <div
                  key={index}
                  className="flex flex-col md:flex-row md:items-center md:justify-between gap-4 p-4 border-b border-text/12 hover:bg-panel/50 transition-colors"
                >
                  <div className="flex-1">
                    <div className="text-text font-semibold mb-1">{formattedDate}</div>
                    <div className="text-muted text-sm">{date.venue}, {date.city}</div>
                  </div>
                  {date.ticketUrl ? (
                    <a
                      href={date.ticketUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="px-4 py-2 bg-sepia text-bg font-semibold text-sm uppercase tracking-wider hover:bg-sepia-hover transition-colors inline-block"
                    >
                      Tickets
                    </a>
                  ) : (
                    <span className="text-muted text-sm">TBA</span>
                  )}
                </div>
              );
            })}
          </div>
        </div>
      ) : (
        <div className="text-center text-muted">
          <p className="mb-4">No upcoming shows</p>
          <a
            href={`mailto:${siteContent.contact.emails.find(e => e.type === 'Booking')?.address || 'booking@thesegments.com'}?subject=Show Request`}
            className="text-sepia hover:text-sepia-hover transition-colors underline"
          >
            Request a show
          </a>
        </div>
      )}
    </Section>
  );
};
