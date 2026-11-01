import React from 'react';
import { Flame, ArrowRight, Plus, Sparkles } from 'lucide-react';
import { MenuItem, PortionOption } from '../types';

interface SpecialDishesProps {
  onAddToCart: (dish: MenuItem, portion: PortionOption) => void;
  onViewMenu: () => void;
}

export const SpecialDishes: React.FC<SpecialDishesProps> = ({
  onAddToCart,
  onViewMenu,
}) => {
  const specials: {
    id: string;
    name: string;
    categoryTag: string;
    description: string;
    portions: PortionOption[];
    image: string;
    badge?: string;
  }[] = [
    {
      id: 'bbq-1',
      name: 'Sizzling Mixed BBQ Platter',
      categoryTag: 'Charcoal BBQ Sizzler',
      description: 'Charred seekh kebabs, creamy malai boti, spicy chicken tikka, and beef bihari boti served on a smoking hot iron plate with mint raita.',
      portions: [
        { label: 'Half', price: 1750 },
        { label: 'Full', price: 3200 },
      ],
      image: '/src/assets/images/hero_sizzling_bbq_1793573396548.jpg',
      badge: 'Best Seller',
    },
    {
      id: 'ck-1',
      name: 'Chicken Shinwari Karahi',
      categoryTag: 'Traditional Karahi',
      description: 'Cooked fresh in authentic iron woks over high fire with sweet juicy tomatoes, green chillies, ginger batons, and zero artificial coloring.',
      portions: [
        { label: 'Half', price: 950 },
        { label: 'Full', price: 1750 },
      ],
      image: '/src/assets/images/signature_chicken_karahi_1793573397354.jpg',
      badge: 'Chef Specialty',
    },
    {
      id: 'mh-1',
      name: 'Mutton Makhni Handi',
      categoryTag: 'Earthen Handi',
      description: 'Tender boneless mutton simmered in a glazed earthenware pot with fresh cream, slow-churned butter, and fragrant whole spices.',
      portions: [
        { label: 'Half', price: 1750 },
        { label: 'Full', price: 3300 },
      ],
      image: '/src/assets/images/dish_mutton_handi_1793573397509.jpg',
      badge: 'Royal Favorite',
    },
    {
      id: 'zz-1',
      name: 'Zesty Mint Margarita & Mocktails',
      categoryTag: 'Bar & Refreshers',
      description: 'Crisp mountain mint muddled with fresh lemon juice, rock salt, and sparkling ice soda. The ultimate pairing for smoky barbecue.',
      portions: [{ label: 'Standard', price: 260 }],
      image: '/src/assets/images/refreshing_mocktails_1793573399198.jpg',
      badge: 'Summer Chill',
    },
  ];

  return (
    <section id="specials" className="py-24 sm:py-32 bg-[#0A0A0C] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="flex items-center justify-center gap-2 text-xs uppercase tracking-[0.25em] text-[#F59E0B] font-bold mb-2">
            <Flame className="w-4 h-4 fill-current text-[#F59E0B]" />
            <span>Sizzling Specialties</span>
            <Flame className="w-4 h-4 fill-current text-[#F59E0B]" />
          </div>
          
          <h2 className="font-heading text-3xl sm:text-4xl lg:text-5xl text-white font-bold uppercase tracking-wide mb-4">
            Our Signature Dishes
          </h2>

          <p className="text-sm sm:text-base text-[#A3A3B2] font-light leading-relaxed">
            The dishes that made Sizzling Grill Sukkur famous. Cooked with authentic spices, fresh local ingredients, and served with signature sizzling theatre.
          </p>
        </div>

        {/* 4-Card Luxury Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
          {specials.map((dish) => (
            <div
              key={dish.id}
              className="group bg-[#14151B] rounded-xl overflow-hidden border border-[#F59E0B]/20 hover:border-[#F59E0B]/60 transition-all duration-300 flex flex-col justify-between hover:-translate-y-1.5 shadow-xl hover:shadow-2xl hover:shadow-[#000000]"
            >
              <div>
                {/* Image */}
                <div className="relative aspect-[4/3] overflow-hidden bg-[#0A0A0C]">
                  <img
                    src={dish.image}
                    alt={dish.name}
                    referrerPolicy="no-referrer"
                    className="w-full h-full object-cover group-hover:scale-108 transition-transform duration-500 ease-out"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#14151B] via-transparent to-transparent opacity-85" />
                  
                  {dish.badge && (
                    <div className="absolute top-3 left-3 text-[10px] uppercase tracking-wider text-black bg-[#F59E0B] px-2.5 py-0.5 rounded font-extrabold shadow">
                      {dish.badge}
                    </div>
                  )}
                </div>

                {/* Body */}
                <div className="p-5">
                  <div className="text-[11px] uppercase tracking-widest text-[#F59E0B] font-semibold mb-1">
                    {dish.categoryTag}
                  </div>

                  <h3 className="font-heading text-xl text-white group-hover:text-[#F59E0B] transition-colors uppercase tracking-wide mb-2">
                    {dish.name}
                  </h3>

                  <p className="text-xs text-[#A3A3B2] font-light leading-relaxed line-clamp-3">
                    {dish.description}
                  </p>
                </div>
              </div>

              {/* Price & Portions Action Row */}
              <div className="p-5 pt-0 mt-3 border-t border-white/5">
                <div className="flex items-center justify-between gap-2 pt-3">
                  <div>
                    <span className="text-[10px] text-[#A3A3B2] uppercase block">Starting from</span>
                    <span className="font-mono text-base font-bold text-white">
                      Rs. {dish.portions[0].price.toLocaleString()}
                    </span>
                  </div>

                  {/* Add first portion button */}
                  <button
                    onClick={() =>
                      onAddToCart(
                        {
                          id: dish.id,
                          name: dish.name,
                          category: 'BBQ',
                          description: dish.description,
                          portions: dish.portions,
                        },
                        dish.portions[0]
                      )
                    }
                    className="px-3.5 py-1.5 bg-[#F59E0B] text-[#0A0A0C] hover:bg-[#FBBF24] rounded text-xs font-bold uppercase tracking-wider flex items-center gap-1 transition-colors"
                  >
                    <Plus className="w-3.5 h-3.5" />
                    <span>Add {dish.portions.length > 1 ? dish.portions[0].label : ''}</span>
                  </button>
                </div>

                {/* If multiple portions, show small chips */}
                {dish.portions.length > 1 && (
                  <div className="flex items-center gap-1.5 mt-2 text-[10px] text-[#A3A3B2]">
                    <span>Also available in:</span>
                    {dish.portions.slice(1).map((p) => (
                      <button
                        key={p.label}
                        onClick={() =>
                          onAddToCart(
                            {
                              id: dish.id,
                              name: dish.name,
                              category: 'BBQ',
                              description: dish.description,
                              portions: dish.portions,
                            },
                            p
                          )
                        }
                        className="text-[#F59E0B] hover:underline font-mono"
                      >
                        {p.label} (Rs. {p.price.toLocaleString()})
                      </button>
                    ))}
                  </div>
                )}
              </div>

            </div>
          ))}
        </div>

        {/* View Full Menu CTA */}
        <div className="mt-14 text-center">
          <button
            onClick={onViewMenu}
            className="inline-flex items-center gap-3 px-8 py-3.5 text-xs uppercase tracking-widest font-bold text-[#0A0A0C] bg-[#F59E0B] hover:bg-[#FBBF24] transition-all duration-200 rounded shadow-lg hover:shadow-[#F59E0B]/20"
          >
            <span>Explore All 31 Menu Categories</span>
            <ArrowRight className="w-4 h-4" />
          </button>
        </div>

      </div>
    </section>
  );
};
