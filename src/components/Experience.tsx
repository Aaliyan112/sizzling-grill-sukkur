import React from 'react';
import { Wine, Sparkles, Music, HeartHandshake } from 'lucide-react';

export const Experience: React.FC = () => {
  return (
    <section id="experience" className="relative py-28 sm:py-36 bg-[#080D14] overflow-hidden">
      {/* Background Cinematic Interior Image */}
      <div className="absolute inset-0 z-0">
        <img
          src="/src/assets/images/hero_restaurant_interior_1793572442931.jpg"
          alt="Atmospheric dining room with ambient warm candlelight and chandeliers"
          referrerPolicy="no-referrer"
          className="w-full h-full object-cover object-center"
        />
        <div className="absolute inset-0 bg-[#080D14]/90" />
        <div className="absolute inset-0 bg-gradient-to-r from-[#080D14] via-[#080D14]/85 to-[#080D14]/90" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl">
          <div className="flex items-center gap-3 text-xs uppercase tracking-[0.25em] text-[#C5A880] mb-3">
            <span className="w-8 h-px bg-[#C5A880]" />
            <span>The RAAS Experience</span>
          </div>

          <h2 className="font-serif-luxury text-3xl sm:text-5xl lg:text-6xl text-[#FBF9F5] font-normal leading-tight mb-6">
            More Than Just a Meal.
          </h2>

          <p className="text-sm sm:text-base text-[#D4CDC2] font-light leading-relaxed mb-12 max-w-2xl">
            From the moment the heavy brass oak doors swing open, time slows. Dim amber chandeliers cast soft reflections across bespoke velvet banquettes, while the intoxicating aroma of saffron, cardamom woodsmoke, and simmering reduction sets the stage for an extraordinary evening.
          </p>

          {/* 3 Experience Pillars */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 pt-8 border-t border-[#C5A880]/20">
            <div>
              <div className="w-10 h-10 rounded bg-[#C5A880]/15 flex items-center justify-center text-[#D8B780] mb-4">
                <Sparkles className="w-5 h-5" />
              </div>
              <h3 className="font-serif-luxury text-xl text-[#FBF9F5] mb-2">The Ambience</h3>
              <p className="text-xs text-[#A69F94] leading-relaxed">
                Acoustically softened velvet acoustics, low flame candlelight at every table, and subtle notes of oud and dried rose petals.
              </p>
            </div>

            <div>
              <div className="w-10 h-10 rounded bg-[#C5A880]/15 flex items-center justify-center text-[#D8B780] mb-4">
                <Wine className="w-5 h-5" />
              </div>
              <h3 className="font-serif-luxury text-xl text-[#FBF9F5] mb-2">Curated Cellar</h3>
              <p className="text-xs text-[#A69F94] leading-relaxed">
                Over 350 references from Bordeaux, Burgundy, and biodynamic estates chosen specifically to complement intricate subcontinental spices.
              </p>
            </div>

            <div>
              <div className="w-10 h-10 rounded bg-[#C5A880]/15 flex items-center justify-center text-[#D8B780] mb-4">
                <HeartHandshake className="w-5 h-5" />
              </div>
              <h3 className="font-serif-luxury text-xl text-[#FBF9F5] mb-2">Regal Tehzeeb</h3>
              <p className="text-xs text-[#A69F94] leading-relaxed">
                Hospitality rooted in ancient court etiquette—warm, anticipatory, unobtrusive, and deeply gracious.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
