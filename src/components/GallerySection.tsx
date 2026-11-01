import React, { useState, useEffect } from 'react';
import { Maximize2, X, ChevronLeft, ChevronRight, Flame } from 'lucide-react';
import { GALLERY_ITEMS } from '../data/restaurantData';
import { GalleryItem } from '../types';

export const GallerySection: React.FC = () => {
  const [selectedFilter, setSelectedFilter] = useState<string>('All');
  const [lightboxIndex, setLightboxIndex] = useState<number | null>(null);

  const categories = [
    'All',
    'BBQ & Sizzlers',
    'Karahi & Handi',
    'Interior & Dining',
    'Beverages & Desserts',
  ];

  const filteredItems = GALLERY_ITEMS.filter((item) => {
    if (selectedFilter === 'All') return true;
    return item.category === selectedFilter;
  });

  const activeItem: GalleryItem | null =
    lightboxIndex !== null ? filteredItems[lightboxIndex] : null;

  const showNext = () => {
    if (lightboxIndex !== null) {
      setLightboxIndex((lightboxIndex + 1) % filteredItems.length);
    }
  };

  const showPrev = () => {
    if (lightboxIndex !== null) {
      setLightboxIndex((lightboxIndex - 1 + filteredItems.length) % filteredItems.length);
    }
  };

  // Keyboard navigation
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (lightboxIndex === null) return;
      if (e.key === 'Escape') setLightboxIndex(null);
      if (e.key === 'ArrowRight') showNext();
      if (e.key === 'ArrowLeft') showPrev();
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [lightboxIndex, filteredItems.length]);

  return (
    <section id="gallery" className="py-24 sm:py-32 bg-[#0A0A0C] border-t border-[#F59E0B]/20 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
          <div>
            <div className="flex items-center gap-2 text-xs uppercase tracking-[0.25em] text-[#F59E0B] font-bold mb-2">
              <Flame className="w-4 h-4 fill-current text-[#F59E0B]" />
              <span>Sizzling Moments</span>
            </div>
            
            <h2 className="font-heading text-3xl sm:text-4xl lg:text-5xl text-white font-bold uppercase tracking-wide">
              Restaurant Gallery
            </h2>
          </div>

          {/* Category Tabs */}
          <div className="flex items-center gap-1.5 flex-wrap p-1 bg-[#14151B] rounded-lg border border-white/10">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setSelectedFilter(cat)}
                className={`px-3 py-1.5 text-xs font-bold uppercase tracking-wider rounded-md transition-colors whitespace-nowrap ${
                  selectedFilter === cat
                    ? 'bg-[#F59E0B] text-[#0A0A0C]'
                    : 'text-[#A3A3B2] hover:text-white'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>

        {/* Gallery Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredItems.map((item, idx) => (
            <div
              key={item.id}
              onClick={() => setLightboxIndex(idx)}
              className="group relative h-80 rounded-xl overflow-hidden cursor-pointer border border-[#F59E0B]/20 hover:border-[#F59E0B]/60 transition-all duration-300 bg-[#14151B]"
            >
              <img
                src={item.image}
                alt={item.title}
                referrerPolicy="no-referrer"
                className="w-full h-full object-cover group-hover:scale-108 transition-transform duration-700 ease-out"
              />

              {/* Hover Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-[#0A0A0C]/95 via-[#0A0A0C]/40 to-transparent opacity-80 group-hover:opacity-95 transition-opacity duration-300 flex flex-col justify-end p-5">
                <div className="flex items-center justify-between">
                  <div>
                    <span className="text-[10px] uppercase tracking-wider text-[#F59E0B] font-bold block mb-1">
                      {item.category}
                    </span>
                    <h3 className="font-heading text-xl text-white uppercase tracking-wide">
                      {item.title}
                    </h3>
                  </div>
                  <div className="w-8 h-8 rounded-full bg-[#F59E0B]/20 text-[#F59E0B] flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
                    <Maximize2 className="w-4 h-4" />
                  </div>
                </div>

                <p className="text-xs text-[#A3A3B2] font-light mt-1.5 line-clamp-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  {item.caption}
                </p>
              </div>
            </div>
          ))}
        </div>

      </div>

      {/* Lightbox Modal */}
      {activeItem && (
        <div
          role="dialog"
          aria-modal="true"
          className="fixed inset-0 z-50 bg-[#0A0A0C]/95 backdrop-blur-xl flex flex-col justify-between p-4 sm:p-6"
        >
          {/* Top Bar */}
          <div className="flex items-center justify-between text-white max-w-5xl mx-auto w-full">
            <div>
              <span className="text-xs uppercase tracking-widest text-[#F59E0B] font-bold">
                {activeItem.category}
              </span>
              <h3 className="font-heading text-2xl text-white uppercase tracking-wide">
                {activeItem.title}
              </h3>
            </div>
            <button
              onClick={() => setLightboxIndex(null)}
              aria-label="Close image viewer"
              className="p-2 text-[#A3A3B2] hover:text-white rounded-full hover:bg-white/10 transition-colors"
            >
              <X className="w-6 h-6" />
            </button>
          </div>

          {/* Central Image Viewport */}
          <div className="relative flex-1 flex items-center justify-center my-4 max-w-5xl mx-auto w-full max-h-[75vh]">
            <img
              src={activeItem.image}
              alt={activeItem.title}
              referrerPolicy="no-referrer"
              className="max-h-full max-w-full object-contain rounded-xl shadow-2xl border border-white/10"
            />

            <button
              onClick={(e) => {
                e.stopPropagation();
                showPrev();
              }}
              aria-label="Previous image"
              className="absolute left-2 sm:-left-12 top-1/2 -translate-y-1/2 p-2.5 rounded-full bg-[#14151B] text-white border border-[#F59E0B]/40 hover:bg-[#F59E0B] hover:text-[#0A0A0C] transition-all"
            >
              <ChevronLeft className="w-5 h-5" />
            </button>

            <button
              onClick={(e) => {
                e.stopPropagation();
                showNext();
              }}
              aria-label="Next image"
              className="absolute right-2 sm:-right-12 top-1/2 -translate-y-1/2 p-2.5 rounded-full bg-[#14151B] text-white border border-[#F59E0B]/40 hover:bg-[#F59E0B] hover:text-[#0A0A0C] transition-all"
            >
              <ChevronRight className="w-5 h-5" />
            </button>
          </div>

          {/* Bottom Caption */}
          <div className="max-w-3xl mx-auto text-center">
            <p className="text-xs sm:text-sm text-[#D4D2CD] font-light mb-1">
              {activeItem.caption}
            </p>
            <div className="text-[11px] text-[#A3A3B2] font-mono">
              {(lightboxIndex ?? 0) + 1} of {filteredItems.length}
            </div>
          </div>
        </div>
      )}
    </section>
  );
};
