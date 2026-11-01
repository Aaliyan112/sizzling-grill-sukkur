import React from 'react';
import { Flame, ArrowDown, ShoppingBag, Clock, MapPin, Sparkles } from 'lucide-react';
import { Logo } from './Logo';
import { RESTAURANT_INFO } from '../data/restaurantData';

interface HeroProps {
  onOpenOrder: () => void;
}

export const Hero: React.FC<HeroProps> = ({ onOpenOrder }) => {
  const handleScrollTo = (id: string) => {
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section
      id="home"
      className="relative min-h-screen flex flex-col justify-between pt-28 pb-10 bg-[#0A0A0C] overflow-hidden"
    >
      {/* Background Cinematic Food Photography */}
      <div className="absolute inset-0 z-0">
        <img
          src="/src/assets/images/hero_sizzling_bbq_1793573396548.jpg"
          alt="Sizzling Grill smoking BBQ platter with kebabs and chicken tikka"
          referrerPolicy="no-referrer"
          className="w-full h-full object-cover object-center scale-105 transition-transform duration-1000 ease-out"
        />
        {/* Dark Cinematic Overlays to guarantee text legibility */}
        <div className="absolute inset-0 bg-gradient-to-t from-[#0A0A0C] via-[#0A0A0C]/80 to-[#0A0A0C]/85" />
        <div className="absolute inset-0 bg-radial from-transparent via-[#0A0A0C]/50 to-[#0A0A0C]/90" />
      </div>

      {/* Main Hero Content */}
      <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center my-auto flex flex-col items-center">
        
        {/* Brand Emblem Lockup */}
        <div className="mb-4 flex flex-col items-center">
          <Logo size="lg" showSubtitle={false} className="justify-center" />
          <div className="flex items-center gap-2 text-[11px] sm:text-xs tracking-[0.25em] text-[#F59E0B] uppercase font-bold mt-3">
            <Flame className="w-3.5 h-3.5 fill-current text-[#F59E0B]" />
            <span>Military Road · Sukkur · Sindh</span>
            <Flame className="w-3.5 h-3.5 fill-current text-[#F59E0B]" />
          </div>
        </div>

        {/* Headline */}
        <h1 className="font-heading text-4xl sm:text-6xl lg:text-7xl font-extrabold uppercase tracking-wide text-white mb-4 leading-tight">
          Where Every Bite <span className="text-[#F59E0B]">Brings the Heat.</span>
        </h1>

        {/* Subtitle */}
        <p className="font-sans text-base sm:text-lg lg:text-xl text-[#E5E5DC] mb-8 max-w-2xl mx-auto font-light leading-relaxed">
          {RESTAURANT_INFO.subtitle}
        </p>

        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 w-full sm:w-auto">
          <button
            onClick={() => handleScrollTo('menu')}
            className="w-full sm:w-auto px-8 py-3.5 text-xs uppercase tracking-widest font-bold text-white border-2 border-[#F59E0B] hover:bg-[#F59E0B]/20 transition-all duration-300 rounded shadow-md focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#F59E0B]"
          >
            Explore Our Menu
          </button>
          
          <button
            onClick={onOpenOrder}
            className="w-full sm:w-auto px-8 py-3.5 text-xs uppercase tracking-widest font-bold text-[#0A0A0C] bg-[#F59E0B] hover:bg-[#FBBF24] transition-all duration-300 rounded shadow-xl hover:shadow-[#F59E0B]/30 flex items-center justify-center gap-2 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white"
          >
            <ShoppingBag className="w-4 h-4" />
            <span>Order Now</span>
          </button>
        </div>

      </div>

      {/* Trust & Location Strip */}
      <div className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 w-full mt-10">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-3 py-4 border-t border-b border-[#F59E0B]/25 bg-[#121216]/80 backdrop-blur-md rounded-lg">
          
          <div className="flex items-center justify-center gap-2.5 px-3 text-center sm:text-left">
            <Flame className="w-4 h-4 text-[#F59E0B] shrink-0" />
            <div>
              <div className="text-xs font-bold text-white">Live Charcoal BBQ</div>
              <div className="text-[10px] text-[#A3A3B2]">Smoking Hot Sizzlers</div>
            </div>
          </div>

          <div className="flex items-center justify-center gap-2.5 px-3 text-center sm:text-left border-l border-white/5">
            <Sparkles className="w-4 h-4 text-[#F59E0B] shrink-0" />
            <div>
              <div className="text-xs font-bold text-white">Fresh Shinwari & Handi</div>
              <div className="text-[10px] text-[#A3A3B2]">Cooked to Order</div>
            </div>
          </div>

          <div className="flex items-center justify-center gap-2.5 px-3 text-center sm:text-left border-l border-white/5">
            <Clock className="w-4 h-4 text-[#F59E0B] shrink-0" />
            <div>
              <div className="text-xs font-bold text-white">12:00 PM – 02:00 AM</div>
              <div className="text-[10px] text-[#A3A3B2]">Open 7 Days a Week</div>
            </div>
          </div>

          <div className="flex items-center justify-center gap-2.5 px-3 text-center sm:text-left border-l border-white/5">
            <MapPin className="w-4 h-4 text-[#F59E0B] shrink-0" />
            <div>
              <div className="text-xs font-bold text-white">Military Road Sukkur</div>
              <div className="text-[10px] text-[#A3A3B2]">Near Basheerabad</div>
            </div>
          </div>

        </div>

        {/* Scroll Indicator */}
        <div className="flex justify-center mt-4">
          <button
            onClick={() => handleScrollTo('about')}
            aria-label="Scroll to About Us"
            className="text-[#F59E0B]/70 hover:text-[#F59E0B] transition-colors p-1"
          >
            <ArrowDown className="w-4 h-4 animate-bounce" />
          </button>
        </div>
      </div>
    </section>
  );
};
