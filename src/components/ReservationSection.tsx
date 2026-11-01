import React, { useState } from 'react';
import { Calendar as CalendarIcon, Clock, Users, MessageSquare, CheckCircle, Shield, Sparkles } from 'lucide-react';
import { ReservationData } from '../types';
import { RESTAURANT_INFO } from '../data/restaurantData';

export const ReservationSection: React.FC = () => {
  const [formData, setFormData] = useState<ReservationData>({
    fullName: '',
    phone: '',
    date: new Date(Date.now() + 86400000).toISOString().split('T')[0],
    time: '20:00',
    guests: 4,
    seatingPreference: 'Air-Conditioned Family Section',
    specialRequests: '',
  });

  const [errors, setErrors] = useState<Partial<Record<keyof ReservationData, string>>>({});
  const [confirmed, setConfirmed] = useState(false);
  const [bookingRef, setBookingRef] = useState('');

  const seatingOptions = [
    'Air-Conditioned Family Section',
    'Executive Sofa Booth',
    'Main Dining Hall',
    'Outdoor Evening Veranda',
  ];

  const validate = () => {
    const errs: Partial<Record<keyof ReservationData, string>> = {};
    if (!formData.fullName.trim()) errs.fullName = 'Please enter your name';
    if (!formData.phone.trim()) errs.phone = 'Please provide your mobile number';
    if (!formData.date) errs.date = 'Please choose a date';
    if (!formData.time) errs.time = 'Please select a dining time';

    setErrors(errs);
    return Object.keys(errs).length === 0;
  };

  const handleBookingSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!validate()) return;

    const ref = 'SG-' + Math.floor(1000 + Math.random() * 9000);
    setBookingRef(ref);
    setConfirmed(true);
  };

  const handleWhatsAppBooking = () => {
    if (!validate()) return;

    const msg =
`*TABLE RESERVATION ENQUIRY - SIZZLING GRILL SUKKUR*
---------------------------------------
*Guest Name:* ${formData.fullName}
*Phone:* ${formData.phone}
*Date:* ${formData.date}
*Time:* ${formData.time}
*Guests:* ${formData.guests} Persons
*Seating:* ${formData.seatingPreference}
${formData.specialRequests ? `*Special Requests:* ${formData.specialRequests}\n` : ''}---------------------------------------
_Please confirm table availability for our party._`;

    const encoded = encodeURIComponent(msg);
    window.open(`https://wa.me/923097807000?text=${encoded}`, '_blank');
  };

  return (
    <section id="reservations" className="py-24 sm:py-32 bg-[#0E0F13] border-t border-[#F59E0B]/20 relative">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-12">
          <div className="text-xs uppercase tracking-[0.25em] text-[#F59E0B] font-bold mb-2">
            Family Dining & Celebrations
          </div>
          
          <h2 className="font-heading text-3xl sm:text-5xl text-white font-bold uppercase tracking-wide mb-3">
            Reserve a Table
          </h2>

          <p className="text-xs sm:text-sm text-[#A3A3B2] font-light leading-relaxed">
            Planning a family dinner, birthday party, or reunion in Sukkur? Book your table in advance for comfortable, priority seating.
          </p>
        </div>

        {/* Card Container */}
        <div className="bg-[#14151B] rounded-2xl p-6 sm:p-10 border border-[#F59E0B]/30 shadow-2xl relative">
          
          {confirmed ? (
            <div className="text-center py-6 flex flex-col items-center">
              <div className="w-14 h-14 rounded-full bg-[#22C55E]/20 text-[#22C55E] flex items-center justify-center mb-4">
                <CheckCircle className="w-8 h-8" />
              </div>

              <span className="text-xs uppercase tracking-widest text-[#F59E0B] font-bold">
                Reservation Request Logged
              </span>

              <h3 className="font-heading text-2xl sm:text-3xl text-white uppercase mt-1 mb-2">
                Booking Reference: {bookingRef}
              </h3>

              <div className="max-w-md bg-[#0A0A0C] p-4 rounded-xl border border-white/5 text-xs text-left space-y-2 mb-6 w-full">
                <div className="flex justify-between py-1 border-b border-white/5">
                  <span className="text-[#A3A3B2]">Guest:</span>
                  <span className="text-white font-semibold">{formData.fullName}</span>
                </div>
                <div className="flex justify-between py-1 border-b border-white/5">
                  <span className="text-[#A3A3B2]">Party:</span>
                  <span className="text-white font-semibold">{formData.guests} Guests</span>
                </div>
                <div className="flex justify-between py-1 border-b border-white/5">
                  <span className="text-[#A3A3B2]">Date & Time:</span>
                  <span className="text-[#F59E0B] font-mono font-bold">
                    {formData.date} at {formData.time}
                  </span>
                </div>
                <div className="flex justify-between py-1">
                  <span className="text-[#A3A3B2]">Section:</span>
                  <span className="text-white">{formData.seatingPreference}</span>
                </div>
              </div>

              <div className="flex flex-col sm:flex-row gap-3">
                <button
                  onClick={handleWhatsAppBooking}
                  className="px-5 py-2.5 bg-[#22C55E] text-white hover:bg-[#16A34A] rounded-lg text-xs font-bold uppercase tracking-wider flex items-center justify-center gap-2"
                >
                  <MessageSquare className="w-4 h-4 fill-current" />
                  <span>Confirm Instantly via WhatsApp</span>
                </button>

                <button
                  onClick={() => setConfirmed(false)}
                  className="px-5 py-2.5 bg-[#1C1D24] text-white hover:bg-[#272832] rounded-lg text-xs font-bold uppercase tracking-wider"
                >
                  Make Another Booking
                </button>
              </div>
            </div>
          ) : (
            <form onSubmit={handleBookingSubmit} noValidate className="space-y-6">
              
              {/* Step 1: Party Size & Date */}
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 text-xs">
                <div>
                  <label className="block uppercase tracking-wider text-[#A3A3B2] mb-1.5 font-semibold text-[10px]">
                    Number of Guests *
                  </label>
                  <select
                    value={formData.guests}
                    onChange={(e) => setFormData({ ...formData, guests: Number(e.target.value) })}
                    className="w-full bg-[#0A0A0C] border border-[#F59E0B]/30 rounded-lg px-3 py-2.5 text-white font-bold focus:outline-none focus:border-[#F59E0B]"
                  >
                    {[1, 2, 3, 4, 5, 6, 7, 8, 10, 12, 15, 20, 30].map((n) => (
                      <option key={n} value={n}>
                        {n} {n === 1 ? 'Person' : 'Persons'}
                      </option>
                    ))}
                  </select>
                </div>

                <div>
                  <label className="block uppercase tracking-wider text-[#A3A3B2] mb-1.5 font-semibold text-[10px]">
                    Date *
                  </label>
                  <input
                    type="date"
                    min={new Date().toISOString().split('T')[0]}
                    value={formData.date}
                    onChange={(e) => setFormData({ ...formData, date: e.target.value })}
                    className={`w-full bg-[#0A0A0C] border ${
                      errors.date ? 'border-red-400' : 'border-[#F59E0B]/30'
                    } rounded-lg px-3 py-2.5 text-white focus:outline-none focus:border-[#F59E0B]`}
                  />
                  {errors.date && <span className="text-red-400 text-[10px] block mt-0.5">{errors.date}</span>}
                </div>

                <div>
                  <label className="block uppercase tracking-wider text-[#A3A3B2] mb-1.5 font-semibold text-[10px]">
                    Preferred Time *
                  </label>
                  <select
                    value={formData.time}
                    onChange={(e) => setFormData({ ...formData, time: e.target.value })}
                    className="w-full bg-[#0A0A0C] border border-[#F59E0B]/30 rounded-lg px-3 py-2.5 text-white font-mono focus:outline-none focus:border-[#F59E0B]"
                  >
                    <optgroup label="Lunch">
                      <option value="12:30">12:30 PM</option>
                      <option value="13:30">01:30 PM</option>
                      <option value="14:30">02:30 PM</option>
                      <option value="15:30">03:30 PM</option>
                    </optgroup>
                    <optgroup label="Evening & Dinner">
                      <option value="19:00">07:00 PM</option>
                      <option value="20:00">08:00 PM</option>
                      <option value="21:00">09:00 PM</option>
                      <option value="22:00">10:00 PM</option>
                      <option value="23:00">11:00 PM</option>
                      <option value="00:00">12:00 Midnight</option>
                    </optgroup>
                  </select>
                </div>
              </div>

              {/* Step 2: Seating Area */}
              <div>
                <label className="block uppercase tracking-wider text-[#A3A3B2] mb-2 font-semibold text-[10px]">
                  Preferred Seating Section
                </label>
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-2.5">
                  {seatingOptions.map((opt) => (
                    <button
                      key={opt}
                      type="button"
                      onClick={() => setFormData({ ...formData, seatingPreference: opt })}
                      className={`p-3 rounded-lg border text-xs text-left transition-all ${
                        formData.seatingPreference === opt
                          ? 'bg-[#F59E0B] text-[#0A0A0C] border-[#F59E0B] font-bold'
                          : 'bg-[#0A0A0C] text-[#D4D2CD] border-white/10 hover:border-white/30'
                      }`}
                    >
                      {opt}
                    </button>
                  ))}
                </div>
              </div>

              {/* Step 3: Contact Info */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-xs">
                <div>
                  <label className="block uppercase tracking-wider text-[#A3A3B2] mb-1 font-semibold text-[10px]">
                    Guest Name *
                  </label>
                  <input
                    type="text"
                    value={formData.fullName}
                    onChange={(e) => setFormData({ ...formData, fullName: e.target.value })}
                    placeholder="e.g. Asif Ali"
                    className={`w-full bg-[#0A0A0C] border ${
                      errors.fullName ? 'border-red-400' : 'border-[#F59E0B]/30'
                    } rounded-lg px-3 py-2 text-white focus:outline-none focus:border-[#F59E0B]`}
                  />
                  {errors.fullName && <span className="text-red-400 text-[10px] block mt-0.5">{errors.fullName}</span>}
                </div>

                <div>
                  <label className="block uppercase tracking-wider text-[#A3A3B2] mb-1 font-semibold text-[10px]">
                    Phone Number (WhatsApp) *
                  </label>
                  <input
                    type="tel"
                    value={formData.phone}
                    onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                    placeholder="e.g. 0300 7800000"
                    className={`w-full bg-[#0A0A0C] border ${
                      errors.phone ? 'border-red-400' : 'border-[#F59E0B]/30'
                    } rounded-lg px-3 py-2 text-white focus:outline-none focus:border-[#F59E0B]`}
                  />
                  {errors.phone && <span className="text-red-400 text-[10px] block mt-0.5">{errors.phone}</span>}
                </div>
              </div>

              {/* Special Requests */}
              <div className="text-xs">
                <label className="block uppercase tracking-wider text-[#A3A3B2] mb-1 font-semibold text-[10px]">
                  Special Occasion / Decoration (Optional)
                </label>
                <input
                  type="text"
                  value={formData.specialRequests}
                  onChange={(e) => setFormData({ ...formData, specialRequests: e.target.value })}
                  placeholder="e.g. Birthday cake arrangement, anniversary setup, quiet corner..."
                  className="w-full bg-[#0A0A0C] border border-[#F59E0B]/30 rounded-lg px-3 py-2 text-white focus:outline-none focus:border-[#F59E0B]"
                />
              </div>

              {/* Action Buttons: Web Submit & WhatsApp Direct */}
              <div className="flex flex-col sm:flex-row gap-3 pt-2">
                <button
                  type="submit"
                  className="flex-1 py-3 bg-[#F59E0B] hover:bg-[#FBBF24] text-[#0A0A0C] font-bold text-xs uppercase tracking-widest rounded-xl transition-all shadow-lg"
                >
                  Submit Table Reservation
                </button>

                <button
                  type="button"
                  onClick={handleWhatsAppBooking}
                  className="flex-1 py-3 bg-[#22C55E] hover:bg-[#16A34A] text-white font-bold text-xs uppercase tracking-widest rounded-xl transition-all shadow-lg flex items-center justify-center gap-2"
                >
                  <MessageSquare className="w-4 h-4 fill-current" />
                  <span>Book Directly on WhatsApp</span>
                </button>
              </div>

            </form>
          )}

        </div>

      </div>
    </section>
  );
};
