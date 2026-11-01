import React from 'react';
import { Star, Quote, Flame } from 'lucide-react';
import { CUSTOMER_REVIEWS } from '../data/restaurantData';

export const CustomerReviews: React.FC = () => {
  return (
    <section className="py-24 sm:py-32 bg-[#0A0A0C] border-t border-[#F59E0B]/20 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="flex items-center justify-center gap-2 text-xs uppercase tracking-[0.25em] text-[#F59E0B] font-bold mb-2">
            <Flame className="w-4 h-4 fill-current text-[#F59E0B]" />
            <span>Customer Feedback</span>
            <Flame className="w-4 h-4 fill-current text-[#F59E0B]" />
          </div>

          <h2 className="font-heading text-3xl sm:text-5xl text-white font-bold uppercase tracking-wide mb-3">
            What Sukkur Says
          </h2>

          <p className="text-xs sm:text-sm text-[#A3A3B2] font-light leading-relaxed">
            Genuine experiences from our regular diners, families, and delivery customers across Sukkur.
          </p>
        </div>

        {/* 3 Review Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {CUSTOMER_REVIEWS.map((rev) => (
            <div
              key={rev.id}
              className="bg-[#14151B] rounded-2xl p-6 sm:p-8 border border-[#F59E0B]/15 hover:border-[#F59E0B]/50 transition-all flex flex-col justify-between shadow-xl relative"
            >
              <div>
                {/* Quote Icon */}
                <Quote className="w-8 h-8 text-[#F59E0B]/20 mb-4 rotate-180" />

                {/* Stars */}
                <div className="flex items-center gap-1 mb-4 text-[#F59E0B]">
                  {[...Array(rev.rating)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-current text-[#F59E0B]" />
                  ))}
                </div>

                <p className="text-xs sm:text-sm text-[#D4D2CD] font-light leading-relaxed mb-6">
                  "{rev.comment}"
                </p>
              </div>

              {/* Author Footer */}
              <div className="pt-4 border-t border-white/5 flex items-center justify-between">
                <div>
                  <div className="font-heading text-base text-white uppercase font-bold">
                    {rev.author}
                  </div>
                  <div className="text-[10px] text-[#A3A3B2] mt-0.5">
                    Sukkur, Sindh
                  </div>
                </div>

                <span className="text-[10px] uppercase tracking-wider text-[#F59E0B] bg-[#F59E0B]/10 px-2.5 py-1 rounded-full font-semibold border border-[#F59E0B]/20">
                  {rev.date}
                </span>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
