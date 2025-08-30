
import React from 'react';

interface PhotoGalleryProps {
  images: string[];
}

const PhotoGallery: React.FC<PhotoGalleryProps> = ({ images }) => {
  return (
    <section className="my-24">
      <h2 className="text-3xl font-bold text-center mb-8 text-white uppercase tracking-wider">Photo Gallery</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
        {images.map((src, index) => (
          <div 
            key={index} 
            className="group relative aspect-w-1 aspect-h-1 bg-gray-800 rounded-lg overflow-hidden shadow-lg border border-gray-700 transform transition-transform duration-300 ease-in-out hover:scale-105 hover:shadow-2xl"
          >
            <img 
              src={src} 
              alt={`Gallery image ${index + 1}`} 
              className="w-full h-full object-cover" 
            />
          </div>
        ))}
      </div>
    </section>
  );
};

export default PhotoGallery;