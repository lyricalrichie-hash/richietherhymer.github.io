import React from 'react';
import LinkCard from './LinkCard';
import type { Link } from '../types';

const SpotifyIcon = (props: React.SVGProps<SVGSVGElement>) => (
  <svg {...props} viewBox="0 0 24 24" fill="currentColor">
    <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm4.19 14.12c-.22.36-.7.46-1.06.24-2.9-1.78-6.52-2.19-10.88-1.22-.42.09-.84-.16-.94-.58-.09-.42.16-.84.58-.94 4.72-1.06 8.72-.6 11.94 1.34.36.22.46.7.24 1.06zm.8-2.58c-.28.44-.88.58-1.32.3-3.23-1.98-8.15-2.58-11.93-1.42-.51.15-.99-.19-1.14-.7-.15-.51.19-.99.7-1.14 4.22-1.26 9.62-.6 13.25 1.62.44.28.58.88.3 1.32zm.1-2.92C18.02 9.3 10.3 8.95 6.01 10.19c-.58.17-1.15-.22-1.32-.79-.17-.58.22-1.15.79-1.32C10.03 6.8 18.53 7.18 22 8.65c.55.23.77.87.54 1.42-.23.55-.87.77-1.42.54z" />
  </svg>
);

const YouTubeIcon = (props: React.SVGProps<SVGSVGElement>) => (
  <svg {...props} viewBox="0 0 24 24" fill="currentColor">
    <path d="M21.58 7.19c-.23-.86-.9-1.52-1.76-1.75C18.26 5 12 5 12 5s-6.26 0-7.82.44c-.86.23-1.52.9-1.76 1.75C2 8.75 2 12 2 12s0 3.25.42 4.81c.23.86.9 1.52 1.76 1.75C5.74 19 12 19 12 19s6.26 0 7.82-.44c.86-.23 1.52-.9 1.76-1.75C22 15.25 22 12 22 12s0-3.25-.42-4.81zM9.5 15.5V8.5l6 3.5-6 3.5z" />
  </svg>
);

const musicLinks: Link[] = [
  {
    title: 'Spotify Profile',
    url: 'https://open.spotify.com/user/31cittznp4kaiqnrg4pgjsazax64?si=b3b80800304e4304',
    description: 'Stream all my latest tracks and albums. Follow for new releases.',
    icon: SpotifyIcon,
  },
  {
    title: 'Album: Peep The Script',
    url: 'https://open.spotify.com/album/3FjqbebHFvj5eb9SKuCqSG?si=AH-rGqNvSZqTtXB0TG_Mhw',
    description: 'Listen to the full album on Spotify.',
    icon: SpotifyIcon,
  },
  {
    title: 'Album: Limitless Sections',
    url: 'https://open.spotify.com/album/3o2zwcvviNIA7sBueEmxx1?si=CsmH_PilQlObILWrpN6dFQ',
    description: 'Listen to the full album on Spotify.',
    icon: SpotifyIcon,
  },
  {
    title: 'Track: Aint Crazy',
    url: 'https://open.spotify.com/track/5aRcUGi9QmjdHeoCowWPrP?si=3af7580e941e46ab',
    description: 'Listen to the single on Spotify.',
    icon: SpotifyIcon,
  },
  {
    title: 'Track: The Project',
    url: 'https://open.spotify.com/track/5G54N25WvSLaOkeRvQAc1Z?si=cfe7b807b6614d91',
    description: 'Listen to the single on Spotify.',
    icon: SpotifyIcon,
  },
  {
    title: "Video: The Devil's Offer",
    url: 'https://youtu.be/T5Xp6s4khMQ?si=MIq-gRmr_AiTpve6',
    description: 'Official music video for the track "The Devil\'s Offer".',
    icon: YouTubeIcon,
  },
  {
    title: 'Video: Limitless Sections',
    url: 'https://youtu.be/m9pHnPCN4Xk?si=578r7zqRiovCIy12',
    description: 'Official music video for the track "Limitless Sections".',
    icon: YouTubeIcon,
  },
   {
    title: 'Video: Bright Lights',
    url: 'https://youtu.be/N269vZ4RG5U?si=tTbI9CNPYbfwF0He',
    description: 'Official music video for the track "Bright Lights".',
    icon: YouTubeIcon,
  },
  {
    title: 'Video: Who am I',
    url: 'https://youtu.be/CeEuzLcHAw4?si=jwkqns3dN1tux4BU',
    description: 'Official music video for the track "Who am I".',
    icon: YouTubeIcon,
  },
   {
    title: 'Short: Close Ya Eyes',
    url: 'https://youtube.com/shorts/cp5aOIJN3tw?si=-kKzmQwCG2LYH3cW',
    description: 'A quick vertical video for "Close Ya Eyes".',
    icon: YouTubeIcon,
  },
  {
    title: "Short: Devil's Offer",
    url: 'https://youtube.com/shorts/RlfXoFSW1EU?si=tV8srBnbeH2NUgwB',
    description: 'A short clip for "Devil\'s Offer".',
    icon: YouTubeIcon,
  },
    {
    title: 'Short: Peep The Script',
    url: 'https://youtube.com/shorts/WbCmPwZ4nnM?si=r0HPsdTukYOKDGGF',
    description: 'A quick look at "Peep The Script".',
    icon: YouTubeIcon,
  },
];

const MusicSection: React.FC = () => {
  return (
    <section className="my-24">
      <h2 className="text-3xl font-bold text-center mb-8 text-white uppercase tracking-wider">My Music</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {musicLinks.map((link, index) => (
          <LinkCard key={index} link={link} />
        ))}
      </div>
    </section>
  );
};

export default MusicSection;