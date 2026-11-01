import React from 'react';
import { ChefHat, Flame, Leaf, Compass } from 'lucide-react';

export const OurStory: React.FC = () => {
  return (
    <section id="story" className="py-24 sm:py-32 bg-[#0B121D] relative overflow-hidden border-t border-[#C5A880]/15">
      {/* Subtle background ambient glow */}
      <div className="absolute top-1/4 -left-48 w-96 h-96 bg-[#C5A880]/5 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-10 -right-48 w-96 h-96 bg-[#17253B]/30 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          
          {/* Left Column: Rich Restaurant Imagery & Plating Showcase */}
          <div className="lg:col-span-6 relative">
            <div className="relative mx-auto max-w-lg lg:max-w-none">
              {/* Primary Image: Butter chicken in handi */}
              <div className="relative rounded overflow-hidden shadow-2xl border border-[#C5A880]/25">
                <img
                  src="/src/assets/images/dish_butter_chicken_1793572444147.jpg"
                  alt="Traditional copper handi butter chicken prepared in authentic tandoor"
                  referrerPolicy="no-referrer"
                  className="w-full h-[400px] sm:h-[480px] object-cover hover:scale-105 transition-transform duration-700 ease-out"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#080D14]/80 via-transparent to-transparent" />
                <div className="absolute bottom-6 left-6 right-6">
                  <div className="text-xs uppercase tracking-widest text-[#C5A880] font-sans">
                    Crafted with Archival Spices
                  </div>
                  <div className="font-serif-luxury text-xl text-[#FBF9F5] mt-1">
                    Purani Dilli Butter Chicken in Hand-Beaten Copper
                  </div>
                </div>
              </div>

              {/* Offset Secondary Card: Spices & Heritage */}
              <div className="hidden sm:block absolute -bottom-8 -right-8 w-60 bg-[#080D14]/95 p-5 rounded border border-[#C5A880]/30 shadow-2xl backdrop-blur-md">
                <div className="flex items-center gap-2 mb-2 text-[#C5A880]">
                  <Flame className="w-4 h-4" />
                  <span className="text-xs uppercase tracking-wider font-semibold">Slow Dum Alchemy</span>
                </div>
                <p className="text-xs text-[#C2BBB0] leading-relaxed">
                  Clay handis sealed with wheat dough, trapping elusive volatile saffron oils for up to 6 hours over acacia coals.
                </p>
              </div>
            </div>
          </div>

          {/* Right Column: Narrative Prose & Culinary Heritage */}
          <div className="lg:col-span-6 flex flex-col justify-center">
            {/* Section Tag */}
            <div className="flex items-center gap-3 text-xs uppercase tracking-[0.2em] text-[#C5A880] font-medium mb-3">
              <span className="w-8 h-px bg-[#C5A880]" />
              <span>Culinary Heritage</span>
            </div>

            {/* Main Heading */}
            <h2 className="font-serif-luxury text-3xl sm:text-4xl lg:text-5xl text-[#FBF9F5] font-normal leading-tight mb-6">
              Every Dish Has a Story.
            </h2>

            {/* Narrative Body */}
            <div className="space-y-4 text-sm sm:text-base text-[#D0C9BD] font-light leading-relaxed mb-8">
              <p>
                In Indian culinary philosophy, <span className="text-[#FBF9F5] font-normal">"RAAS"</span> denotes the essence of flavour, emotion, and aesthetic delight. It is the intangible moment when spice, smoke, and texture harmonize into an unforgettable memory.
              </p>
              <p>
                Founded on the royal culinary traditions of Awadh, the royal courts of Lucknow, and the ancient spiced trails of Kashmir, RAAS was created to transport Mayfair diners into a world where recipes were treated as state secrets guarded by royal Bawarchis.
              </p>
              <p>
                We do not cut corners. Our whole black urad dal simmers continuously for twenty-four hours over quiet embers. Our saffron is sourced directly from single-origin cooperatives in Pampore, Kashmir. And our charcoal tandoor ovens run on seasoned fruitwoods to impart an ethereal whisper of woodsmoke.
              </p>
            </div>

            {/* Four Heritage Pillars */}
            <div className="grid grid-cols-2 gap-5 py-6 border-t border-[#C5A880]/20">
              <div className="flex items-start gap-3">
                <div className="p-2 rounded bg-[#C5A880]/10 text-[#C5A880] shrink-0 mt-0.5">
                  <ChefHat className="w-4 h-4" />
                </div>
                <div>
                  <h4 className="text-xs font-semibold text-[#FBF9F5] uppercase tracking-wide">Royal Lineage</h4>
                  <p className="text-[12px] text-[#A69F94] mt-0.5">Direct recipes from Lucknow court master chefs.</p>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <div className="p-2 rounded bg-[#C5A880]/10 text-[#C5A880] shrink-0 mt-0.5">
                  <Leaf className="w-4 h-4" />
                </div>
                <div>
                  <h4 className="text-xs font-semibold text-[#FBF9F5] uppercase tracking-wide">Single-Origin</h4>
                  <p className="text-[12px] text-[#A69F94] mt-0.5">Direct-trade spices from Malabar to Kashmir.</p>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <div className="p-2 rounded bg-[#C5A880]/10 text-[#C5A880] shrink-0 mt-0.5">
                  <Flame className="w-4 h-4" />
                </div>
                <div>
                  <h4 className="text-xs font-semibold text-[#FBF9F5] uppercase tracking-wide">Acacia Charcoal</h4>
                  <p className="text-[12px] text-[#A69F94] mt-0.5">Authentic clay tandoor cooking with fruitwoods.</p>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <div className="p-2 rounded bg-[#C5A880]/10 text-[#C5A880] shrink-0 mt-0.5">
                  <Compass className="w-4 h-4" />
                </div>
                <div>
                  <h4 className="text-xs font-semibold text-[#FBF9F5] uppercase tracking-wide">Bespoke Cellar</h4>
                  <p className="text-[12px] text-[#A69F94] mt-0.5">Sommelier wine pairing curated for spice profiles.</p>
                </div>
              </div>
            </div>

            {/* Chef Signature Note */}
            <div className="mt-4 flex items-center gap-4 pt-4 border-t border-white/5">
              <div className="w-10 h-10 rounded-full border border-[#C5A880]/40 flex items-center justify-center bg-[#C5A880]/10 font-serif-luxury text-sm text-[#D8B780]">
                VK
              </div>
              <div>
                <div className="font-serif-luxury text-base text-[#FBF9F5]">Chef Vikramaditya Singh</div>
                <div className="text-xs text-[#A69F94]">Executive Chef & Culinary Director</div>
              </div>
            </div>

          </div>

        </div>
      </div>
    </section>
  );
};
