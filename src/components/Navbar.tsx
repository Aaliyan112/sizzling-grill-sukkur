import React, { useState, useEffect } from 'react';
import { Menu, X, ShoppingBag, Phone, MessageSquare } from 'lucide-react';
import { Logo } from './Logo';
import { RESTAURANT_INFO } from '../data/restaurantData';

interface NavbarProps {
  onOpenOrder: () => void;
  onOpenReservation: () => void;
  cartCount: number;
}

export const Navbar: React.FC<NavbarProps> = ({
  onOpenOrder,
  onOpenReservation,
  cartCount,
}) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 30);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Home', href: '#home' },
    { name: 'About Us', href: '#about' },
    { name: 'Our Menu', href: '#menu' },
    { name: 'Special Dishes', href: '#specials' },
    { name: 'Gallery', href: '#gallery' },
    { name: 'Reservations', href: '#reservations' },
    { name: 'Contact', href: '#contact' },
  ];

  const handleLinkClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    setMobileMenuOpen(false);
    const target = document.querySelector(href);
    if (target) {
      target.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-40 transition-all duration-300 ${
          isScrolled
            ? 'bg-[#0A0A0C]/95 backdrop-blur-md border-b border-[#F59E0B]/25 py-3 shadow-2xl'
            : 'bg-gradient-to-b from-[#0A0A0C]/90 via-[#0A0A0C]/60 to-transparent py-4'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between gap-6">
            
            {/* Zone 1: Brand Logo */}
            <a
              href="#home"
              onClick={(e) => handleLinkClick(e, '#home')}
              className="shrink-0 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#F59E0B]"
            >
              <Logo size="md" />
            </a>

            {/* Zone 2: Navigation Links */}
            <nav className="hidden lg:flex items-center gap-6 text-xs uppercase tracking-wider font-semibold">
              {navLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  onClick={(e) => handleLinkClick(e, link.href)}
                  className="text-[#D4D2CD] hover:text-[#F59E0B] transition-colors py-1 relative group whitespace-nowrap shrink-0"
                >
                  {link.name}
                  <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-[#F59E0B] transition-all duration-200 group-hover:w-full" />
                </a>
              ))}
            </nav>

            {/* Zone 3: Direct Actions (Order Online & WhatsApp) */}
            <div className="flex items-center gap-2.5 shrink-0">
              {/* WhatsApp Quick Direct Link */}
              <a
                href={RESTAURANT_INFO.whatsappUrl}
                target="_blank"
                rel="noreferrer"
                title="Direct WhatsApp Helpline"
                className="hidden sm:inline-flex items-center gap-1.5 px-3 py-2 text-xs font-semibold rounded bg-[#1C1D24] text-[#22C55E] border border-[#22C55E]/30 hover:border-[#22C55E] transition-colors"
              >
                <MessageSquare className="w-3.5 h-3.5 fill-current" />
                <span className="font-mono">{RESTAURANT_INFO.phoneDisplay}</span>
              </a>

              {/* Order Online Button */}
              <button
                onClick={onOpenOrder}
                className="inline-flex items-center gap-2 px-3.5 sm:px-4 py-2 text-xs uppercase tracking-wider font-bold text-[#0A0A0C] bg-[#F59E0B] hover:bg-[#FBBF24] transition-all duration-200 rounded shadow-md hover:shadow-lg hover:shadow-[#F59E0B]/25 whitespace-nowrap shrink-0"
              >
                <ShoppingBag className="w-3.5 h-3.5" />
                <span>Order Online</span>
                {cartCount > 0 && (
                  <span className="w-4 h-4 bg-[#0A0A0C] text-[#F59E0B] text-[10px] font-extrabold rounded-full flex items-center justify-center">
                    {cartCount}
                  </span>
                )}
              </button>

              {/* Mobile Menu Toggle */}
              <button
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                aria-label="Toggle navigation menu"
                className="lg:hidden p-2 text-[#D4D2CD] hover:text-[#F59E0B] rounded focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-[#F59E0B]"
              >
                {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
              </button>
            </div>

          </div>
        </div>
      </header>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="fixed inset-0 z-30 lg:hidden bg-[#0A0A0C]/98 backdrop-blur-xl flex flex-col pt-24 px-6 pb-8 overflow-y-auto">
          <div className="flex flex-col gap-4 text-center my-auto">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={(e) => handleLinkClick(e, link.href)}
                className="font-heading text-2xl uppercase tracking-wider text-white hover:text-[#F59E0B] transition-colors py-1"
              >
                {link.name}
              </a>
            ))}
          </div>

          <div className="pt-6 border-t border-[#F59E0B]/20 flex flex-col gap-3">
            <button
              onClick={() => {
                setMobileMenuOpen(false);
                onOpenOrder();
              }}
              className="w-full py-3 bg-[#F59E0B] text-[#0A0A0C] font-bold rounded text-xs uppercase tracking-wider flex items-center justify-center gap-2 shadow-lg"
            >
              <ShoppingBag className="w-4 h-4" />
              Order Online / View Cart ({cartCount})
            </button>

            <button
              onClick={() => {
                setMobileMenuOpen(false);
                onOpenReservation();
              }}
              className="w-full py-3 border border-[#F59E0B]/50 text-white rounded text-xs uppercase tracking-wider flex items-center justify-center gap-2"
            >
              Reserve a Family Table
            </button>

            <a
              href={RESTAURANT_INFO.whatsappUrl}
              target="_blank"
              rel="noreferrer"
              className="w-full py-2.5 bg-[#1C1D24] text-[#22C55E] border border-[#22C55E]/40 rounded text-xs font-semibold flex items-center justify-center gap-2"
            >
              <MessageSquare className="w-4 h-4" />
              <span>WhatsApp: {RESTAURANT_INFO.phoneDisplay}</span>
            </a>
          </div>
        </div>
      )}
    </>
  );
};
