import React from 'react';
import { Instagram, MessageSquare, Phone, MapPin, ArrowUp, Flame } from 'lucide-react';
import { Logo } from './Logo';
import { RESTAURANT_INFO } from '../data/restaurantData';

interface FooterProps {
  onOpenOrder: () => void;
}

export const Footer: React.FC<FooterProps> = ({ onOpenOrder }) => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-[#070709] text-[#F3F1EC] border-t border-[#F59E0B]/20 pt-16 pb-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Top Tier: Logo, Description & Links */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 pb-12 border-b border-white/5">
          
          {/* Brand Info (5 cols) */}
          <div className="lg:col-span-5 space-y-4">
            <Logo size="lg" />

            <p className="text-xs text-[#A3A3B2] leading-relaxed max-w-sm font-light">
              Sukkur's premier destination for smoking charcoal BBQ sizzlers, authentic Shinwari Chicken & Mutton Karahi, slow-simmered handis, Chinese specials, and craft mocktails on Military Road.
            </p>

            <div className="flex items-center gap-3 pt-2">
              <a
                href={RESTAURANT_INFO.instagramUrl}
                target="_blank"
                rel="noreferrer"
                aria-label="Instagram"
                className="w-9 h-9 rounded-lg bg-[#14151B] border border-[#F59E0B]/30 flex items-center justify-center text-[#F59E0B] hover:bg-[#F59E0B] hover:text-[#0A0A0C] transition-colors"
              >
                <Instagram className="w-4 h-4" />
              </a>

              <a
                href={RESTAURANT_INFO.whatsappUrl}
                target="_blank"
                rel="noreferrer"
                aria-label="WhatsApp"
                className="w-9 h-9 rounded-lg bg-[#14151B] border border-[#22C55E]/40 flex items-center justify-center text-[#22C55E] hover:bg-[#22C55E] hover:text-white transition-colors"
              >
                <MessageSquare className="w-4 h-4" />
              </a>
            </div>
          </div>

          {/* Quick Navigation (3 cols) */}
          <div className="lg:col-span-3 space-y-3">
            <h4 className="text-xs uppercase tracking-widest text-[#F59E0B] font-bold mb-3">
              Explore Sizzling Grill
            </h4>
            <ul className="space-y-2 text-xs text-[#A3A3B2]">
              <li><a href="#home" className="hover:text-white transition-colors">Home Page</a></li>
              <li><a href="#about" className="hover:text-white transition-colors">About Sizzling Grill</a></li>
              <li><a href="#specials" className="hover:text-white transition-colors">Signature BBQ & Karahi</a></li>
              <li><a href="#menu" className="hover:text-white transition-colors">Full 31-Category Menu</a></li>
              <li><a href="#gallery" className="hover:text-white transition-colors">Food & Ambiance Gallery</a></li>
              <li><a href="#reservations" className="hover:text-white transition-colors">Table Reservation</a></li>
              <li><a href="#contact" className="hover:text-white transition-colors">Location & Directions</a></li>
            </ul>
          </div>

          {/* Contact & Hours (4 cols) */}
          <div className="lg:col-span-4 space-y-3">
            <h4 className="text-xs uppercase tracking-widest text-[#F59E0B] font-bold mb-3">
              Helpline & Hours
            </h4>

            <div className="space-y-2 text-xs text-[#A3A3B2]">
              <div className="flex items-start gap-2">
                <MapPin className="w-4 h-4 text-[#F59E0B] shrink-0 mt-0.5" />
                <span>Military Road, Basheerabad, Sukkur, Sindh, Pakistan</span>
              </div>

              <div className="flex items-center gap-2 font-mono">
                <Phone className="w-4 h-4 text-[#22C55E] shrink-0" />
                <span className="text-white font-bold">{RESTAURANT_INFO.phone}</span>
              </div>

              <div className="text-[11px] pt-1 text-[#D4D2CD]">
                <strong className="text-white">Opening Hours:</strong> 12:00 PM – 02:00 AM (Open Daily)
              </div>
            </div>

            <div className="pt-2">
              <button
                onClick={onOpenOrder}
                className="w-full py-2.5 bg-[#F59E0B] hover:bg-[#FBBF24] text-[#0A0A0C] font-bold text-xs uppercase tracking-wider rounded-lg transition-colors flex items-center justify-center gap-1.5 shadow-lg"
              >
                <span>Order Online Now (WhatsApp)</span>
              </button>
            </div>
          </div>

        </div>

        {/* Bottom Tier: Copyright & Back to Top */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between text-xs text-[#686875] gap-4">
          <div>
            © {new Date().getFullYear()} Sizzling Grill Sukkur. All rights reserved. 100% Halal Verified.
          </div>

          <div className="flex items-center gap-5">
            <a
              href={RESTAURANT_INFO.instagramUrl}
              target="_blank"
              rel="noreferrer"
              className="text-[#F59E0B] hover:underline"
            >
              @sizzlinggrill.sukkur
            </a>
            <button
              onClick={scrollToTop}
              className="flex items-center gap-1 text-[#F59E0B] hover:text-white transition-colors"
            >
              <span>Back to Top</span>
              <ArrowUp className="w-3.5 h-3.5" />
            </button>
          </div>
        </div>

      </div>
    </footer>
  );
};
