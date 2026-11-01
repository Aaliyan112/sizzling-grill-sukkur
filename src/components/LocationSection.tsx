import React, { useState } from 'react';
import { MapPin, Phone, Clock, MessageSquare, Instagram, Navigation, ExternalLink, Send, CheckCircle2 } from 'lucide-react';
import { RESTAURANT_INFO } from '../data/restaurantData';

export const LocationSection: React.FC = () => {
  const [contactForm, setContactForm] = useState({
    name: '',
    phone: '',
    message: '',
  });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!contactForm.name || !contactForm.phone) return;
    setSubmitted(true);
  };

  return (
    <section id="contact" className="py-24 sm:py-32 bg-[#0C0D11] border-t border-[#F59E0B]/20 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="text-xs uppercase tracking-[0.25em] text-[#F59E0B] font-bold mb-2">
            Visit & Connect
          </div>

          <h2 className="font-heading text-3xl sm:text-5xl text-white font-bold uppercase tracking-wide mb-3">
            Find Sizzling Grill
          </h2>

          <p className="text-xs sm:text-sm text-[#A3A3B2] font-light leading-relaxed">
            Conveniently situated on Military Road, Basheerabad, Sukkur. Dine-in, Takeaway, and Speedy Home Delivery.
          </p>
        </div>

        {/* 3-Column Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* Column 1: Details & Hours (4 cols) */}
          <div className="lg:col-span-4 space-y-4">
            
            <div className="bg-[#14151B] rounded-2xl p-6 border border-[#F59E0B]/20 space-y-4">
              
              <div className="flex items-start gap-3">
                <div className="p-2.5 rounded-lg bg-[#F59E0B]/10 text-[#F59E0B] shrink-0 mt-0.5">
                  <MapPin className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="text-xs uppercase tracking-wider text-white font-bold mb-0.5">
                    Restaurant Address
                  </h4>
                  <p className="text-xs text-[#D4D2CD] leading-relaxed">
                    {RESTAURANT_INFO.address}
                  </p>
                  <span className="text-[11px] text-[#A3A3B2] mt-1 block">
                    Near Dolphin Bakers, Basheerabad
                  </span>
                </div>
              </div>

              <div className="flex items-start gap-3 pt-3 border-t border-white/5">
                <div className="p-2.5 rounded-lg bg-[#22C55E]/10 text-[#22C55E] shrink-0 mt-0.5">
                  <MessageSquare className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="text-xs uppercase tracking-wider text-white font-bold mb-0.5">
                    Phone & WhatsApp
                  </h4>
                  <p className="font-mono text-sm text-[#22C55E] font-bold">
                    {RESTAURANT_INFO.phone}
                  </p>
                  <span className="text-[11px] text-[#A3A3B2] block mt-0.5">
                    Helpline for orders and table queries
                  </span>
                </div>
              </div>

              <div className="flex items-start gap-3 pt-3 border-t border-white/5">
                <div className="p-2.5 rounded-lg bg-[#F59E0B]/10 text-[#F59E0B] shrink-0 mt-0.5">
                  <Clock className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="text-xs uppercase tracking-wider text-white font-bold mb-0.5">
                    Service Hours
                  </h4>
                  <p className="text-xs text-[#D4D2CD] font-mono">
                    12:00 PM – 02:00 AM
                  </p>
                  <span className="text-[11px] text-[#A3A3B2] block mt-0.5">
                    Open every day, Monday through Sunday
                  </span>
                </div>
              </div>

              <div className="flex items-start gap-3 pt-3 border-t border-white/5">
                <div className="p-2.5 rounded-lg bg-[#E1306C]/10 text-[#E1306C] shrink-0 mt-0.5">
                  <Instagram className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="text-xs uppercase tracking-wider text-white font-bold mb-0.5">
                    Official Instagram
                  </h4>
                  <a
                    href={RESTAURANT_INFO.instagramUrl}
                    target="_blank"
                    rel="noreferrer"
                    className="text-xs text-[#F59E0B] hover:underline"
                  >
                    {RESTAURANT_INFO.instagramHandle}
                  </a>
                </div>
              </div>

            </div>

          </div>

          {/* Column 2: Stylized Dark Map Preview (4 cols) */}
          <div className="lg:col-span-4 bg-[#14151B] rounded-2xl p-6 border border-[#F59E0B]/20 flex flex-col justify-between h-full">
            <div>
              <div className="flex items-center justify-between mb-3">
                <h4 className="text-xs uppercase tracking-wider text-white font-bold">
                  Location on Military Road
                </h4>
                <span className="text-[11px] text-[#F59E0B] font-mono">Sukkur, Sindh</span>
              </div>

              {/* Stylized cartographic simulation */}
              <div className="relative rounded-xl overflow-hidden h-64 bg-[#0A0A0C] border border-white/10 flex items-center justify-center p-4">
                <div
                  className="absolute inset-0 opacity-20"
                  style={{
                    backgroundImage:
                      'radial-gradient(circle, #F59E0B 1px, transparent 1px), linear-gradient(to right, #24252E 1px, transparent 1px), linear-gradient(to bottom, #24252E 1px, transparent 1px)',
                    backgroundSize: '24px 24px, 48px 48px, 48px 48px',
                  }}
                />

                <svg className="absolute inset-0 w-full h-full opacity-35" viewBox="0 0 300 200">
                  <path d="M 0 110 L 300 90" stroke="#F59E0B" strokeWidth="4" fill="none" />
                  <path d="M 150 0 L 150 200" stroke="#686875" strokeWidth="2.5" fill="none" />
                  <circle cx="150" cy="100" r="18" fill="#F59E0B" fillOpacity="0.25" />
                </svg>

                <div className="relative z-10 flex flex-col items-center">
                  <div className="w-10 h-10 rounded-full bg-[#F59E0B] text-[#0A0A0C] flex items-center justify-center shadow-2xl animate-pulse">
                    <MapPin className="w-5 h-5 fill-current" />
                  </div>
                  <div className="mt-2 bg-[#0A0A0C] px-3 py-1 rounded-md border border-[#F59E0B] text-xs font-bold text-white shadow-xl whitespace-nowrap">
                    Sizzling Grill Sukkur
                  </div>
                </div>

                <div className="absolute bottom-2 left-3 text-[10px] text-[#A3A3B2] font-mono">
                  Military Road · Basheerabad
                </div>
              </div>
            </div>

            {/* Directions link */}
            <div className="pt-4 mt-4 border-t border-white/5">
              <a
                href="https://maps.google.com/?q=Sizzling+Grill+Military+Road+Sukkur"
                target="_blank"
                rel="noreferrer"
                className="w-full py-2.5 px-4 rounded-xl border border-[#F59E0B]/40 hover:bg-[#F59E0B]/10 text-xs text-[#F59E0B] flex items-center justify-center gap-2 transition-colors uppercase tracking-wider font-bold"
              >
                <Navigation className="w-4 h-4" />
                <span>Open in Google Maps / Directions</span>
                <ExternalLink className="w-3.5 h-3.5 opacity-70" />
              </a>
            </div>
          </div>

          {/* Column 3: Quick Enquiry Message (4 cols) */}
          <div className="lg:col-span-4 bg-[#14151B] rounded-2xl p-6 border border-[#F59E0B]/20">
            <h4 className="text-xs uppercase tracking-wider text-white font-bold mb-1">
              Quick Customer Note
            </h4>
            <p className="text-xs text-[#A3A3B2] mb-4">
              Have a question about large catering or party orders? Drop us a quick note.
            </p>

            {submitted ? (
              <div className="py-8 text-center">
                <CheckCircle2 className="w-10 h-10 text-[#22C55E] mx-auto mb-2" />
                <h5 className="font-heading text-lg text-white uppercase mb-1">
                  Thank You!
                </h5>
                <p className="text-xs text-[#A3A3B2] mb-4">
                  We have received your message. You can also chat directly with us on WhatsApp.
                </p>
                <button
                  onClick={() => setSubmitted(false)}
                  className="text-xs text-[#F59E0B] underline"
                >
                  Send another message
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-3 text-xs">
                <div>
                  <label className="block text-[#A3A3B2] uppercase text-[10px] mb-1 font-semibold">
                    Name *
                  </label>
                  <input
                    type="text"
                    required
                    value={contactForm.name}
                    onChange={(e) => setContactForm({ ...contactForm, name: e.target.value })}
                    placeholder="Your Name"
                    className="w-full bg-[#0A0A0C] border border-[#F59E0B]/30 rounded-lg px-3 py-2 text-white focus:outline-none focus:border-[#F59E0B]"
                  />
                </div>

                <div>
                  <label className="block text-[#A3A3B2] uppercase text-[10px] mb-1 font-semibold">
                    Mobile / WhatsApp *
                  </label>
                  <input
                    type="tel"
                    required
                    value={contactForm.phone}
                    onChange={(e) => setContactForm({ ...contactForm, phone: e.target.value })}
                    placeholder="0300..."
                    className="w-full bg-[#0A0A0C] border border-[#F59E0B]/30 rounded-lg px-3 py-2 text-white focus:outline-none focus:border-[#F59E0B]"
                  />
                </div>

                <div>
                  <label className="block text-[#A3A3B2] uppercase text-[10px] mb-1 font-semibold">
                    Message
                  </label>
                  <textarea
                    rows={3}
                    value={contactForm.message}
                    onChange={(e) => setContactForm({ ...contactForm, message: e.target.value })}
                    placeholder="Ask about party packages, bulk orders..."
                    className="w-full bg-[#0A0A0C] border border-[#F59E0B]/30 rounded-lg px-3 py-2 text-white focus:outline-none focus:border-[#F59E0B]"
                  />
                </div>

                <button
                  type="submit"
                  className="w-full py-2.5 bg-[#F59E0B] text-[#0A0A0C] font-bold uppercase tracking-wider rounded-lg hover:bg-[#FBBF24] transition-colors flex items-center justify-center gap-1.5"
                >
                  <Send className="w-3.5 h-3.5" />
                  <span>Send Inquiry</span>
                </button>
              </form>
            )}
          </div>

        </div>

      </div>
    </section>
  );
};
