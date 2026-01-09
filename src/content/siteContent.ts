export interface Release {
  title: string;
  coverUrl: string;
  description: string;
  links: {
    platform: string;
    url: string;
  }[];
  tracklist?: string[];
}

export interface FeaturedTrack {
  title: string;
  duration: string;
  url: string;
}

export interface TourDate {
  date: string;
  city: string;
  venue: string;
  ticketUrl?: string;
}

export interface SocialLink {
  platform: string;
  url: string;
  icon: string;
}

export interface SiteContent {
  bandName: string;
  tagline: string;
  heroImageUrl: string;
  release: Release;
  embeds: {
    spotifyEmbedUrl?: string;
    bandcampEmbedHtml?: string;
  };
  featuredTracks: FeaturedTrack[];
  video: {
    youtubeId: string;
    title: string;
  };
  tourDates: TourDate[];
  aboutText: string;
  ffo: string[];
  newsletter: {
    providerName: string;
    formActionUrl: string;
  };
  contact: {
    emails: {
      type: string;
      address: string;
    }[];
    socials: SocialLink[];
  };
}

export const siteContent: SiteContent = {
  bandName: 'THE SEGMENTS',
  tagline: 'Post-punk from Kyiv',
  heroImageUrl: '/src/assets/segments.jpg',
  release: {
    title: 'Above the Noise — OUT IN SUMMER 2026',
    coverUrl: '/src/assets/cover-art.jpg',
    description: 'Our debut album captures the raw energy of post-punk with dark, atmospheric undertones. Recorded in a DIY studio, this collection of songs reflects our journey through the underground music scene.',
    links: [
      { platform: 'Spotify', url: 'https://open.spotify.com/artist/...' },
      { platform: 'Bandcamp', url: 'https://thesegments.bandcamp.com' },
      { platform: 'Apple Music', url: 'https://music.apple.com/...' },
      { platform: 'YouTube Music', url: 'https://music.youtube.com/...' },
    ],
    tracklist: [
      'Track 1: Opening',
      'Track 2: Shadows',
      'Track 3: Echoes',
      'Track 4: Midnight',
      'Track 5: Departure',
    ],
  },
  embeds: {
    spotifyEmbedUrl: 'https://open.spotify.com/embed/album/...',
    bandcampEmbedHtml: '',
  },
  featuredTracks: [
    { title: 'Opening', duration: '3:24', url: 'https://open.spotify.com/track/...' },
    { title: 'Shadows', duration: '4:12', url: 'https://open.spotify.com/track/...' },
    { title: 'Echoes', duration: '3:58', url: 'https://open.spotify.com/track/...' },
  ],
  video: {
    youtubeId: 'dQw4w9WgXcQ',
    title: 'Latest video: Opening (Official Video)',
  },
  tourDates: [
    { date: '2025-02-15', city: 'London', venue: 'The Garage', ticketUrl: 'https://ticketmaster.com/...' },
    { date: '2025-02-22', city: 'Manchester', venue: 'Gorilla', ticketUrl: 'https://ticketmaster.com/...' },
    { date: '2025-03-05', city: 'Birmingham', venue: 'The Castle & Falcon', ticketUrl: 'https://ticketmaster.com/...' },
  ],
  aboutText: 'The Segments emerged from the underground post-punk scene, blending dark atmospherics with raw, DIY energy. Drawing inspiration from the industrial sounds of the 80s and the modern dark indie movement, we create music that is both nostalgic and forward-thinking. Our sound is characterized by driving basslines, reverb-drenched guitars, and introspective lyrics that explore themes of isolation, urban decay, and existential reflection.',
  ffo: ['Interpol', 'The Chameleons', 'The Sound', 'Protomartyr'],
  newsletter: {
    providerName: 'Mailchimp',
    formActionUrl: 'https://yourmailchimpurl.us1.list-manage.com/subscribe/post?u=...',
  },
  contact: {
    emails: [
      { type: 'Booking', address: 'booking@thesegments.com' },
      { type: 'Press', address: 'press@thesegments.com' },
    ],
    socials: [
      { platform: 'Instagram', url: 'https://instagram.com/thesegments', icon: 'instagram' },
      { platform: 'TikTok', url: 'https://tiktok.com/@thesegments', icon: 'tiktok' },
      { platform: 'YouTube', url: 'https://youtube.com/@thesegments', icon: 'youtube' },
      { platform: 'Bandcamp', url: 'https://thesegments.bandcamp.com', icon: 'bandcamp' },
      { platform: 'Spotify', url: 'https://open.spotify.com/artist/...', icon: 'spotify' },
    ],
  },
};
