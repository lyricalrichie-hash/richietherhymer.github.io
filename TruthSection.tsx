
import React from 'react';
import LinkCard from './LinkCard';
import type { Link } from '../types';

const DocumentIcon = (props: React.SVGProps<SVGSVGElement>) => (
  <svg {...props} fill="none" viewBox="0 0 24 24" stroke="currentColor">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
  </svg>
);

const VideoIcon = (props: React.SVGProps<SVGSVGElement>) => (
    <svg {...props} fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 10l4.55a1 1 0 01.45 1.732V12a1 1 0 01-1.45.868L15 14M5 8v8a2 2 0 002 2h6a2 2 0 002-2V8a2 2 0 00-2-2H7a2 2 0 00-2 2z" />
    </svg>
);


// User should replace this entire array with their own content.
// The whole block is marked as a placeholder.
const truthLinks: Link[] = [
  {
    title: 'My Recommended Reading',
    url: '#', // Placeholder URL
    description: 'A curated list of articles and books that have shaped my perspective.',
    icon: DocumentIcon,
  },
  {
    title: 'Essential Documentaries',
    url: '#', // Placeholder URL
    description: 'Must-watch films and series that question the official narrative.',
    icon: VideoIcon,
  },
  {
    title: 'The Blog/Forum Link',
    url: '#', // Placeholder URL
    description: 'Join the conversation. Discuss ideas and share information.',
    icon: DocumentIcon,
  },
];

const TruthSection: React.FC = () => {
  return (
    <section className="my-24">
      <h2 className="text-3xl font-bold text-center mb-8 text-white uppercase tracking-wider">Truth & Knowledge</h2>
      <p className="text-center text-gray-400 max-w-2xl mx-auto mb-10">
        Music is a vehicle for truth. Here are some resources for those who seek to look deeper.
      </p>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {truthLinks.map((link, index) => (
          // The `isPlaceholder` prop will color the text red as requested
          <LinkCard key={index} link={link} isPlaceholder={true} />
        ))}
      </div>
       <p className="text-center mt-8 text-red-500 font-semibold">
        (Replace the placeholder content above with your actual links and descriptions)
      </p>
    </section>
  );
};

export default TruthSection;