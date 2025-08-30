import React from 'react';
import Header from './components/Header';
import MusicSection from './components/MusicSection';
import TruthSection from './components/TruthSection';
import Footer from './components/Footer';
import PhotoGallery from './components/PhotoGallery';
import BackgroundMusicSymbols from './components/BackgroundMusicSymbols';
import BackgroundMusicPlayer from './components/BackgroundMusicPlayer';

const galleryImages = [
  'https://cdn.jsdelivr.net/gh/lyricalrichie-hash/richietherhymer.github.io@6f4e300e7483ecfd64cd5d5cce408bf8115afa2d/471754117_514145391634786_2534333333897377382_n.jpg',
  'https://cdn.jsdelivr.net/gh/lyricalrichie-hash/richietherhymer.github.io@6f4e300e7483ecfd64cd5d5cce408bf8115afa2d/472081794_514145294968129_7184101899847611698_n.jpg',
  'https://cdn.jsdelivr.net/gh/lyricalrichie-hash/richietherhymer.github.io@6f4e300e7483ecfd64cd5d5cce408bf8115afa2d/475966825_540785785637413_1564445116957942040_n.jpg',
  'https://cdn.jsdelivr.net/gh/lyricalrichie-hash/richietherhymer.github.io@6f4e300e7483ecfd64cd5d5cce408bf8115afa2d/475980229_540785668970758_1572912409937263482_n.jpg',
];

const App: React.FC = () => {
  return (
    <div className="min-h-screen bg-gray-900 text-gray-200 font-sans antialiased">
      <BackgroundMusicSymbols />
      
      <div 
        className="absolute top-0 left-0 w-full h-full bg-cover bg-center bg-no-repeat opacity-10 z-0" 
        style={{backgroundImage: "url('https://picsum.photos/1920/1080?grayscale&blur=2')"}}
      >
        {/* The user can replace the picsum URL with their own background image. */}
      </div>
      
      <div className="relative z-10 container mx-auto px-4 sm:px-6 lg:px-8">
        <Header />
        
        <main className="py-12">
          {/* Hero Section */}
          <section className="text-center my-16">
            <div className="w-32 h-32 md:w-48 md:h-48 mx-auto mb-6 rounded-full bg-gray-700 overflow-hidden border-4 border-gray-600 shadow-lg">
              <img src="https://cdn.jsdelivr.net/gh/lyricalrichie-hash/richietherhymer.github.io@6f4e300e7483ecfd64cd5d5cce408bf8115afa2d/454502349_415618588154134_5433016565124676238_n.jpg" alt="Richie The Rhymer" className="w-full h-full object-cover" />
            </div>
            <h1 className="text-4xl md:text-6xl font-bold tracking-tight text-white uppercase">
              Richie The Rhymer
            </h1>
            <p className="mt-4 max-w-2xl mx-auto text-lg md:text-xl text-gray-400">
              Houston, TX | Producer, Lyricist, Visionary
            </p>
          </section>

          {/* About Section */}
          <section className="my-24 max-w-3xl mx-auto bg-gray-800 bg-opacity-50 backdrop-blur-sm p-8 rounded-lg shadow-2xl border border-gray-700">
            <h2 className="text-3xl font-bold text-center mb-6 text-white">About Me</h2>
            <p className="text-gray-300 leading-relaxed text-center">
              Richie The Rhymer is a hip hop/rap artist from Houston, TX. He makes his own beats, writes his own lyrics, and records, mixes and releases every project by himself without assistance from producers or other artists, because he wears many hats when needed. This is a journey of authenticity, truth, and raw musical expression.
            </p>
          </section>

          <PhotoGallery images={galleryImages} />
          
          <MusicSection />
          
          {/* Featured Video Section */}
          <section className="my-24">
            <h2 className="text-3xl font-bold text-center mb-8 text-white uppercase tracking-wider">Featured Video</h2>
            <div className="aspect-w-16 aspect-h-9 max-w-4xl mx-auto bg-gray-800 rounded-lg overflow-hidden shadow-2xl border border-gray-700">
              <iframe 
                className="w-full h-full"
                src="https://www.youtube.com/embed/O8yJb5zLFj0" 
                title="Richie The Rhymer - Exemplifying Advanced Lyricism & Delivery" 
                frameBorder="0" 
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
                allowFullScreen>
              </iframe>
            </div>
          </section>

          <TruthSection />
        </main>
        
        <Footer />
      </div>

      <BackgroundMusicPlayer />
    </div>
  );
};

export default App;

