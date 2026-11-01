import React, { useState, useMemo } from 'react';
import { Search, Flame, Leaf, Check, Plus, AlertCircle, Sparkles } from 'lucide-react';
import { MENU_CATEGORIES, MENU_ITEMS } from '../data/restaurantData';
import { MenuItem, PortionOption, SizzlingCategory } from '../types';

interface MenuSectionProps {
  onAddToCart: (dish: MenuItem, portion: PortionOption) => void;
  cartItemIds?: string[];
}

export const MenuSection: React.FC<MenuSectionProps> = ({
  onAddToCart,
  cartItemIds = [],
}) => {
  const [selectedCategory, setSelectedCategory] = useState<SizzlingCategory | 'All'>('Chicken Karahi');
  const [searchQuery, setSearchQuery] = useState('');
  const [addedItemKey, setAddedItemKey] = useState<string | null>(null);

  // Filter items
  const filteredItems = useMemo(() => {
    return MENU_ITEMS.filter((item) => {
      // Category check
      if (selectedCategory !== 'All' && item.category !== selectedCategory) {
        return false;
      }
      // Search check
      if (searchQuery.trim()) {
        const q = searchQuery.toLowerCase();
        const matchesName = item.name.toLowerCase().includes(q);
        const matchesDesc = item.description?.toLowerCase().includes(q) ?? false;
        const matchesCat = item.category.toLowerCase().includes(q);
        return matchesName || matchesDesc || matchesCat;
      }
      return true;
    });
  }, [selectedCategory, searchQuery]);

  const handleAdd = (dish: MenuItem, portion: PortionOption) => {
    onAddToCart(dish, portion);
    const key = `${dish.id}-${portion.label}`;
    setAddedItemKey(key);
    setTimeout(() => setAddedItemKey(null), 1400);
  };

  return (
    <section id="menu" className="py-24 sm:py-32 bg-[#0C0D11] border-t border-[#F59E0B]/20 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-10">
          <div className="flex items-center justify-center gap-2 text-xs uppercase tracking-[0.25em] text-[#F59E0B] font-bold mb-2">
            <Flame className="w-4 h-4 fill-current text-[#F59E0B]" />
            <span>Complete Restaurant Menu</span>
            <Flame className="w-4 h-4 fill-current text-[#F59E0B]" />
          </div>

          <h2 className="font-heading text-3xl sm:text-5xl text-white font-bold uppercase tracking-wide mb-3">
            Sizzling Grill Menu
          </h2>

          <p className="text-xs sm:text-sm text-[#A3A3B2] font-light leading-relaxed max-w-xl mx-auto">
            From piping hot charcoal BBQ and handi to authentic Chinese, pasta, and chilled summer beverages. All items prepared 100% Halal fresh to order.
          </p>

          {/* Official Verification Notice Badge */}
          <div className="mt-5 inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#1A1B22] border border-[#F59E0B]/30 text-[11px] text-[#D4D2CD]">
            <Check className="w-3.5 h-3.5 text-[#22C55E]" />
            <span>
              <strong className="text-white">Military Road Sukkur Branch:</strong> Authentic item catalog with Half/Full serving prices in PKR (Rs.)
            </span>
          </div>
        </div>

        {/* Search Bar & Quick Stats */}
        <div className="flex flex-col md:flex-row items-center justify-between gap-4 mb-6 pb-4 border-b border-white/10">
          
          {/* Search Box */}
          <div className="relative w-full md:w-80">
            <Search className="w-4 h-4 text-[#A3A3B2] absolute left-3 top-1/2 -translate-y-1/2" />
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Search Karahi, Handi, BBQ, Chowmein..."
              className="w-full bg-[#14151B] border border-[#F59E0B]/30 rounded-lg pl-9 pr-8 py-2.5 text-xs text-white placeholder-[#686875] focus:outline-none focus:border-[#F59E0B]"
            />
            {searchQuery && (
              <button
                onClick={() => setSearchQuery('')}
                className="absolute right-2.5 top-1/2 -translate-y-1/2 text-xs text-[#A3A3B2] hover:text-white"
              >
                Clear
              </button>
            )}
          </div>

          {/* Category Quick Pill */}
          <div className="text-xs text-[#A3A3B2] self-end md:self-auto font-mono">
            Showing <strong className="text-[#F59E0B]">{filteredItems.length}</strong> items in{' '}
            <span className="text-white font-sans">{selectedCategory}</span>
          </div>

        </div>

        {/* 31-Category Tabs Bar (Smooth Horizontal Scroll) */}
        <div className="flex items-center gap-1.5 overflow-x-auto pb-4 mb-10 scrollbar-none no-scrollbar">
          <button
            onClick={() => {
              setSelectedCategory('All');
              setSearchQuery('');
            }}
            className={`px-4 py-2 text-xs uppercase tracking-wider font-bold rounded-lg whitespace-nowrap shrink-0 transition-all border ${
              selectedCategory === 'All'
                ? 'bg-[#F59E0B] text-[#0A0A0C] border-[#F59E0B]'
                : 'bg-[#14151B] text-[#A3A3B2] border-white/5 hover:border-[#F59E0B]/40 hover:text-white'
            }`}
          >
            All Categories
          </button>

          {MENU_CATEGORIES.map((cat) => {
            const isActive = selectedCategory === cat;
            return (
              <button
                key={cat}
                onClick={() => {
                  setSelectedCategory(cat);
                  setSearchQuery('');
                }}
                className={`px-3.5 py-2 text-xs uppercase tracking-wider font-bold rounded-lg whitespace-nowrap shrink-0 transition-all border ${
                  isActive
                    ? 'bg-[#F59E0B] text-[#0A0A0C] border-[#F59E0B]'
                    : 'bg-[#14151B] text-[#A3A3B2] border-white/5 hover:border-[#F59E0B]/40 hover:text-white'
                }`}
              >
                {cat}
              </button>
            );
          })}
        </div>

        {/* Dish Items Grid */}
        {filteredItems.length === 0 ? (
          <div className="text-center py-16 bg-[#14151B] rounded-xl border border-white/5">
            <p className="font-heading text-xl text-white uppercase mb-2">No menu items found</p>
            <p className="text-xs text-[#A3A3B2] mb-4">
              Try adjusting your search query or selecting a different category.
            </p>
            <button
              onClick={() => {
                setSearchQuery('');
                setSelectedCategory('All');
              }}
              className="px-5 py-2 bg-[#F59E0B] text-[#0A0A0C] font-bold rounded text-xs uppercase tracking-wider"
            >
              Reset Filters
            </button>
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredItems.map((dish) => (
              <div
                key={dish.id}
                className="group bg-[#14151B] rounded-xl p-5 border border-[#F59E0B]/15 hover:border-[#F59E0B]/50 transition-all flex flex-col justify-between shadow-lg"
              >
                <div>
                  
                  {/* Top line: Category and Badges */}
                  <div className="flex items-center justify-between gap-2 mb-2 text-[11px]">
                    <span className="uppercase tracking-wider text-[#F59E0B] font-bold">
                      {dish.category}
                    </span>

                    <div className="flex items-center gap-1.5">
                      {dish.isVegetarian && (
                        <span className="text-[#22C55E] flex items-center gap-0.5 text-[10px] font-semibold">
                          <Leaf className="w-3 h-3" /> Veg
                        </span>
                      )}
                      {dish.isSpicy && (
                        <span className="text-[#EF4444] flex items-center gap-0.5 text-[10px] font-semibold">
                          <Flame className="w-3 h-3 fill-current" /> Spicy
                        </span>
                      )}
                      {dish.isSpecialty && (
                        <span className="text-[#FBBF24] flex items-center gap-0.5 text-[10px] font-semibold">
                          <Sparkles className="w-3 h-3" /> Signature
                        </span>
                      )}
                    </div>
                  </div>

                  {/* Dish Name */}
                  <h3 className="font-heading text-xl text-white group-hover:text-[#F59E0B] transition-colors uppercase tracking-wide leading-snug mb-2">
                    {dish.name}
                  </h3>

                  {/* Description */}
                  {dish.description && (
                    <p className="text-xs text-[#A3A3B2] font-light leading-relaxed mb-4 line-clamp-2">
                      {dish.description}
                    </p>
                  )}
                </div>

                {/* Portions & Prices Row */}
                <div className="pt-3 border-t border-white/5 mt-2">
                  <div className="text-[10px] text-[#A3A3B2] uppercase tracking-wider mb-2 font-semibold">
                    Select Portion & Add to Order:
                  </div>

                  <div className="flex flex-wrap gap-2">
                    {dish.portions.map((portion) => {
                      const isAdded = addedItemKey === `${dish.id}-${portion.label}`;
                      return (
                        <button
                          key={portion.label}
                          onClick={() => handleAdd(dish, portion)}
                          className={`flex-1 min-w-[100px] py-2 px-2.5 rounded-lg border text-xs flex items-center justify-between transition-all ${
                            isAdded
                              ? 'bg-[#22C55E] text-[#0A0A0C] border-[#22C55E]'
                              : 'bg-[#1C1D24] hover:bg-[#F59E0B] hover:text-[#0A0A0C] border-white/10 hover:border-[#F59E0B] text-white'
                          }`}
                        >
                          <span className="font-semibold">{portion.label}</span>
                          <span className="font-mono font-bold">
                            Rs. {portion.price.toLocaleString()}
                          </span>
                        </button>
                      );
                    })}
                  </div>

                </div>

              </div>
            ))}
          </div>
        )}

        {/* Verification and Market Disclaimer Footer */}
        <div className="mt-12 p-4 rounded-xl bg-[#14151B] border border-[#F59E0B]/25 flex flex-col sm:flex-row items-center justify-between gap-3 text-xs text-[#A3A3B2]">
          <div className="flex items-center gap-2">
            <AlertCircle className="w-4 h-4 text-[#F59E0B] shrink-0" />
            <span>
              <strong className="text-white">Price Transparency:</strong> Prices are verified against the Military Road Sukkur branch. Fresh meat and seasonal poultry prices are confirmed by the kitchen upon WhatsApp receipt.
            </span>
          </div>
          <span className="text-[#F59E0B] font-mono text-[11px] uppercase tracking-wider whitespace-nowrap">
            100% Fresh Halal Meats
          </span>
        </div>

      </div>
    </section>
  );
};
