import React from 'react';
import { Flame, Users, HeartHandshake, UtensilsCrossed } from 'lucide-react';

export const AboutUs: React.FC = () => {
  return (
    <section id="about" className="py-24 sm:py-32 bg-[#0E0F13] border-t border-[#F59E0B]/15 relative overflow-hidden">
      
      {/* Ambient background glow */}
      <div className="absolute top-1/3 -left-36 w-80 h-80 bg-[#F59E0B]/5 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          
          {/* Left Column: Visual Showcase */}
          <div className="lg:col-span-6 relative">
            <div className="relative mx-auto max-w-lg lg:max-w-none">
              
              {/* Primary Image: Family dining ambience */}
              <div className="relative rounded-xl overflow-hidden shadow-2xl border border-[#F59E0B]/30 bg-[#14151B]">
                <img
                  src="/src/assets/images/sizzling_dining_ambience_1793573399565.jpg"
                  alt="Sizzling Grill family dining hall on Military Road Sukkur"
                  referrerPolicy="no-referrer"
                  className="w-full h-[380px] sm:h-[450px] object-cover hover:scale-105 transition-transform duration-700 ease-out"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#0A0A0C]/90 via-transparent to-transparent" />
                
                <div className="absolute bottom-5 left-5 right-5">
                  <div className="text-[11px] uppercase tracking-wider text-[#F59E0B] font-bold">
                    Military Road · Sukkur
                  </div>
                  <div className="font-heading text-xl sm:text-2xl text-white mt-0.5 uppercase tracking-wide">
                    Air-Conditioned Family Dining Hall
                  </div>
                </div>
              </div>

              {/* Offset Secondary Badge */}
              <div className="hidden sm:block absolute -bottom-6 -right-6 w-56 bg-[#181920]/95 p-4 rounded-lg border border-[#F59E0B]/40 shadow-2xl backdrop-blur-md">
                <div className="flex items-center gap-2 mb-1.5 text-[#F59E0B]">
                  <Flame className="w-4 h-4 fill-current" />
                  <span className="text-xs uppercase tracking-wider font-bold">Live Charcoal BBQ</span>
                </div>
                <p className="text-[11px] text-[#A3A3B2] leading-relaxed">
                  Cooked fresh over red-hot coals. From sizzling seekh kebabs to Peshawari karahi.
                </p>
              </div>

            </div>
          </div>

          {/* Right Column: Narrative */}
          <div className="lg:col-span-6 flex flex-col justify-center">
            
            <div className="flex items-center gap-2.5 text-xs uppercase tracking-[0.2em] text-[#F59E0B] font-bold mb-3">
              <span className="w-7 h-0.5 bg-[#F59E0B]" />
              <span>About Sizzling Grill</span>
            </div>

            <h2 className="font-heading text-3xl sm:text-4xl lg:text-5xl text-white font-bold uppercase tracking-wide mb-6">
              A Passion for Great Food.
            </h2>

            <div className="space-y-4 text-sm sm:text-base text-[#D4D2CD] font-light leading-relaxed mb-8">
              <p>
                Located along the bustling <strong className="text-white font-semibold">Military Road in Sukkur</strong>, <strong className="text-white font-semibold">Sizzling Grill</strong> is where the true heart of barbecue, sizzling platters, and authentic Pakistani cuisine comes alive.
              </p>
              <p>
                From our signature <strong className="text-white font-semibold">Sizzling BBQ Platters</strong> and <strong className="text-white font-semibold">Chicken & Mutton Karahis</strong> cooked over live flames to our rich, creamy handis, Chinese specials, and chilled mocktails, every dish is prepared with fresh local meats, pure spices, and uncompromising quality.
              </p>
              <p>
                Whether you are joining us with your family in our comfortable, air-conditioned dining hall, celebrating a milestone, or ordering for late-night home delivery, our hospitable team ensures that <strong className="text-[#F59E0B] font-medium">every bite brings the heat and satisfaction you deserve.</strong>
              </p>
            </div>

            {/* 4 Brand Pillars */}
            <div className="grid grid-cols-2 gap-4 py-5 border-t border-[#F59E0B]/20">
              
              <div className="flex items-start gap-3">
                <div className="p-2 rounded bg-[#F59E0B]/10 text-[#F59E0B] shrink-0 mt-0.5">
                  <Flame className="w-4 h-4" />
                </div>
                <div>
                  <h4 className="text-xs font-bold text-white uppercase tracking-wider">Live Sizzlers</h4>
                  <p className="text-[11px] text-[#A3A3B2] mt-0.5">Smoking hot cast-iron platters with bold aromas.</p>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <div className="p-2 rounded bg-[#F59E0B]/10 text-[#F59E0B] shrink-0 mt-0.5">
                  <UtensilsCrossed className="w-4 h-4" />
                </div>
                <div>
                  <h4 className="text-xs font-bold text-white uppercase tracking-wider">Desi & Chinese</h4>
                  <p className="text-[11px] text-[#A3A3B2] mt-0.5">Karahi, handi, chowmein, steaks, and mocktails.</p>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <div className="p-2 rounded bg-[#F59E0B]/10 text-[#F59E0B] shrink-0 mt-0.5">
                  <Users className="w-4 h-4" />
                </div>
                <div>
                  <h4 className="text-xs font-bold text-white uppercase tracking-wider">Family Friendly</h4>
                  <p className="text-[11px] text-[#A3A3B2] mt-0.5">Welcoming environment for families and gatherings.</p>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <div className="p-2 rounded bg-[#F59E0B]/10 text-[#F59E0B] shrink-0 mt-0.5">
                  <HeartHandshake className="w-4 h-4" />
                </div>
                <div>
                  <h4 className="text-xs font-bold text-white uppercase tracking-wider">Sukkur Hospitality</h4>
                  <p className="text-[11px] text-[#A3A3B2] mt-0.5">Fast, attentive service and prompt delivery.</p>
                </div>
              </div>

            </div>

          </div>

        </div>
      </div>
    </section>
  );
};
