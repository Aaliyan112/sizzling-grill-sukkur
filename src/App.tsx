/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState, useEffect } from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { AboutUs } from './components/AboutUs';
import { SpecialDishes } from './components/SpecialDishes';
import { MenuSection } from './components/MenuSection';
import { GallerySection } from './components/GallerySection';
import { ReservationSection } from './components/ReservationSection';
import { CustomerReviews } from './components/CustomerReviews';
import { LocationSection } from './components/LocationSection';
import { Footer } from './components/Footer';
import { OnlineOrderingModal } from './components/OnlineOrderingModal';
import { CartItem, MenuItem, PortionOption } from './types';
import { MessageSquare, ShoppingBag, Flame } from 'lucide-react';
import { RESTAURANT_INFO } from './data/restaurantData';

export default function App() {
  const [isOrderOpen, setIsOrderOpen] = useState(false);
  const [cart, setCart] = useState<CartItem[]>(() => {
    try {
      const saved = localStorage.getItem('sizzling_grill_cart');
      return saved ? JSON.parse(saved) : [];
    } catch {
      return [];
    }
  });

  // Save cart to local storage
  useEffect(() => {
    try {
      localStorage.setItem('sizzling_grill_cart', JSON.stringify(cart));
    } catch (e) {
      console.error('Failed to save cart to localStorage', e);
    }
  }, [cart]);

  const handleAddToCart = (dish: MenuItem, portion: PortionOption) => {
    setCart((prev) => {
      const existingIndex = prev.findIndex(
        (c) => c.item.id === dish.id && c.selectedPortion.label === portion.label
      );
      if (existingIndex > -1) {
        return prev.map((item, idx) =>
          idx === existingIndex ? { ...item, quantity: item.quantity + 1 } : item
        );
      }
      return [...prev, { item: dish, selectedPortion: portion, quantity: 1 }];
    });
  };

  const handleUpdateQuantity = (id: string, portionLabel: string, delta: number) => {
    setCart((prev) =>
      prev
        .map((item) => {
          if (item.item.id === id && item.selectedPortion.label === portionLabel) {
            const nextQty = item.quantity + delta;
            return nextQty > 0 ? { ...item, quantity: nextQty } : null;
          }
          return item;
        })
        .filter(Boolean) as CartItem[]
    );
  };

  const handleRemoveItem = (id: string, portionLabel: string) => {
    setCart((prev) =>
      prev.filter(
        (item) => !(item.item.id === id && item.selectedPortion.label === portionLabel)
      )
    );
  };

  const handleClearCart = () => {
    setCart([]);
  };

  const totalCartCount = cart.reduce((acc, curr) => acc + curr.quantity, 0);

  const scrollToSection = (id: string) => {
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="min-h-screen bg-[#0A0A0C] text-[#F3F1EC] font-sans selection:bg-[#F59E0B]/30 selection:text-white relative">
      
      {/* 1. Header Navigation */}
      <Navbar
        onOpenOrder={() => setIsOrderOpen(true)}
        onOpenReservation={() => scrollToSection('reservations')}
        cartCount={totalCartCount}
      />

      {/* 2. Hero Section */}
      <Hero onOpenOrder={() => setIsOrderOpen(true)} />

      {/* 3. About Us */}
      <AboutUs />

      {/* 4. Signature Food Section */}
      <SpecialDishes
        onAddToCart={handleAddToCart}
        onViewMenu={() => scrollToSection('menu')}
      />

      {/* 5. Complete 31-Category Menu */}
      <MenuSection
        onAddToCart={handleAddToCart}
        cartItemIds={cart.map((c) => c.item.id)}
      />

      {/* 6. Food & Dining Gallery */}
      <GallerySection />

      {/* 7. Table Reservation Form */}
      <ReservationSection />

      {/* 8. Customer Reviews */}
      <CustomerReviews />

      {/* 9. Location & Google Maps */}
      <LocationSection />

      {/* 10. Footer */}
      <Footer onOpenOrder={() => setIsOrderOpen(true)} />

      {/* Online Ordering / WhatsApp Cart Drawer */}
      <OnlineOrderingModal
        isOpen={isOrderOpen}
        onClose={() => setIsOrderOpen(false)}
        cart={cart}
        onUpdateQuantity={handleUpdateQuantity}
        onRemoveItem={handleRemoveItem}
        onClearCart={handleClearCart}
      />

      {/* Floating Bottom Action Buttons (Cart + WhatsApp Hotline) */}
      <div className="fixed bottom-5 right-5 z-30 flex items-center gap-2">
        {/* Cart Quick Button */}
        {totalCartCount > 0 && (
          <button
            onClick={() => setIsOrderOpen(true)}
            aria-label="View food cart"
            className="flex items-center gap-2 px-4 py-2.5 bg-[#F59E0B] text-[#0A0A0C] font-extrabold rounded-full shadow-2xl hover:bg-[#FBBF24] hover:scale-105 transition-all text-xs uppercase tracking-wider"
          >
            <ShoppingBag className="w-4 h-4" />
            <span>Order ({totalCartCount})</span>
          </button>
        )}

        {/* Floating WhatsApp Help Button */}
        <a
          href={RESTAURANT_INFO.whatsappUrl}
          target="_blank"
          rel="noreferrer"
          aria-label="Chat on WhatsApp"
          className="w-11 h-11 bg-[#22C55E] hover:bg-[#16A34A] text-white rounded-full shadow-2xl flex items-center justify-center hover:scale-110 transition-transform"
          title="WhatsApp Sizzling Grill (+92 309 7807000)"
        >
          <MessageSquare className="w-5 h-5 fill-current" />
        </a>
      </div>

    </div>
  );
}
