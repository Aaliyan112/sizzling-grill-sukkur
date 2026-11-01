import React, { useState } from 'react';
import { X, ShoppingBag, Plus, Minus, Trash2, MessageSquare, MapPin, Clock, AlertCircle, CheckCircle } from 'lucide-react';
import { CartItem } from '../types';
import { RESTAURANT_INFO } from '../data/restaurantData';

interface OnlineOrderingModalProps {
  isOpen: boolean;
  onClose: () => void;
  cart: CartItem[];
  onUpdateQuantity: (id: string, portionLabel: string, delta: number) => void;
  onRemoveItem: (id: string, portionLabel: string) => void;
  onClearCart: () => void;
}

export const OnlineOrderingModal: React.FC<OnlineOrderingModalProps> = ({
  isOpen,
  onClose,
  cart,
  onUpdateQuantity,
  onRemoveItem,
  onClearCart,
}) => {
  const [orderType, setOrderType] = useState<'delivery' | 'takeaway'>('delivery');
  const [customerName, setCustomerName] = useState('');
  const [customerPhone, setCustomerPhone] = useState('');
  const [deliveryAddress, setDeliveryAddress] = useState('');
  const [specialInstructions, setSpecialInstructions] = useState('');
  const [errorMsg, setErrorMsg] = useState('');
  const [orderSent, setOrderSent] = useState(false);

  if (!isOpen) return null;

  const subtotal = cart.reduce(
    (acc, curr) => acc + curr.selectedPortion.price * curr.quantity,
    0
  );
  const deliveryCharges = orderType === 'delivery' && cart.length > 0 ? 150 : 0; // Sukkur local rider
  const totalAmount = subtotal + deliveryCharges;

  const handleSendWhatsAppOrder = (e: React.FormEvent) => {
    e.preventDefault();
    if (cart.length === 0) {
      setErrorMsg('Your order cart is empty. Please add items from the menu.');
      return;
    }
    if (!customerName.trim() || !customerPhone.trim()) {
      setErrorMsg('Please enter your name and contact phone number.');
      return;
    }
    if (orderType === 'delivery' && !deliveryAddress.trim()) {
      setErrorMsg('Please provide your Sukkur delivery address.');
      return;
    }

    setErrorMsg('');

    // Format WhatsApp message
    const itemsList = cart
      .map(
        (c) =>
          `• ${c.quantity}x ${c.item.name} (${c.selectedPortion.label}) - Rs. ${(c.selectedPortion.price * c.quantity).toLocaleString()}`
      )
      .join('\n');

    const message = 
`*NEW ORDER - SIZZLING GRILL SUKKUR*
---------------------------------------
*Order Type:* ${orderType === 'delivery' ? 'Home Delivery' : 'Takeaway / Pickup'}
*Customer Name:* ${customerName.trim()}
*Phone:* ${customerPhone.trim()}
${orderType === 'delivery' ? `*Delivery Address:* ${deliveryAddress.trim()}\n` : ''}${specialInstructions ? `*Special Notes:* ${specialInstructions.trim()}\n` : ''}
*ITEMS ORDERED:*
${itemsList}

---------------------------------------
*Subtotal:* Rs. ${subtotal.toLocaleString()}
${orderType === 'delivery' ? `*Delivery Fee:* Rs. ${deliveryCharges.toLocaleString()}\n` : ''}*TOTAL AMOUNT:* Rs. ${totalAmount.toLocaleString()}
---------------------------------------
_Please confirm order acceptance, total bill, and estimated preparation time._`;

    const encoded = encodeURIComponent(message);
    const waUrl = `https://wa.me/923097807000?text=${encoded}`;

    // Open WhatsApp in new tab
    window.open(waUrl, '_blank');
    setOrderSent(true);
  };

  const handleReset = () => {
    setOrderSent(false);
    onClearCart();
    onClose();
  };

  return (
    <div
      role="dialog"
      aria-modal="true"
      className="fixed inset-0 z-50 bg-[#0A0A0C]/85 backdrop-blur-md flex items-center justify-center p-3 sm:p-5 overflow-y-auto"
    >
      <div className="bg-[#14151B] rounded-2xl border border-[#F59E0B]/30 max-w-2xl w-full max-h-[92vh] flex flex-col overflow-hidden shadow-2xl my-4">
        
        {/* Header */}
        <div className="flex items-center justify-between p-5 border-b border-[#F59E0B]/20 bg-[#0A0A0C]">
          <div className="flex items-center gap-2">
            <ShoppingBag className="w-5 h-5 text-[#F59E0B]" />
            <h3 className="font-heading text-xl text-white uppercase tracking-wider">
              Your Food Order · Sizzling Grill
            </h3>
          </div>
          <button
            onClick={onClose}
            aria-label="Close ordering window"
            className="p-1 rounded text-[#A3A3B2] hover:text-white hover:bg-white/10"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Content */}
        {orderSent ? (
          <div className="p-8 text-center flex flex-col items-center my-auto">
            <div className="w-14 h-14 rounded-full bg-[#22C55E]/20 text-[#22C55E] flex items-center justify-center mb-4">
              <CheckCircle className="w-8 h-8" />
            </div>

            <span className="text-xs uppercase tracking-widest text-[#F59E0B] font-bold">
              WhatsApp Order Dispatched
            </span>

            <h4 className="font-heading text-2xl sm:text-3xl text-white uppercase tracking-wide mt-1 mb-3">
              Message Sent to Sizzling Grill!
            </h4>

            {/* Critical policy enforcement: do not claim confirmed until restaurant confirms */}
            <div className="p-4 rounded-xl bg-[#1A1B22] border border-[#F59E0B]/30 max-w-md text-xs text-[#D4D2CD] leading-relaxed mb-6 text-left space-y-2">
              <div className="flex items-start gap-2">
                <AlertCircle className="w-4 h-4 text-[#F59E0B] shrink-0 mt-0.5" />
                <div>
                  <strong className="text-white block mb-0.5">Order Awaiting Restaurant Acceptance:</strong>
                  Your order has been formatted and sent to Sizzling Grill Sukkur's official WhatsApp hotline (<span className="text-[#22C55E] font-mono font-semibold">+92 309 7807000</span>).
                </div>
              </div>
              <p className="text-[#A3A3B2] text-[11px] pl-6">
                Our kitchen supervisor will reply to your WhatsApp with your order verification and delivery rider details shortly.
              </p>
            </div>

            <button
              onClick={handleReset}
              className="px-6 py-2.5 text-xs uppercase tracking-widest font-bold text-[#0A0A0C] bg-[#F59E0B] hover:bg-[#FBBF24] rounded-lg transition-colors"
            >
              Done & Close Window
            </button>
          </div>
        ) : (
          <div className="flex-1 overflow-y-auto p-5 sm:p-6 space-y-6">
            
            {/* Order Type Toggle: Delivery vs Takeaway */}
            <div className="flex items-center gap-2 p-1 bg-[#0A0A0C] rounded-xl border border-white/10">
              <button
                type="button"
                onClick={() => setOrderType('delivery')}
                className={`flex-1 py-2.5 text-xs font-bold uppercase tracking-wider rounded-lg flex items-center justify-center gap-2 transition-colors ${
                  orderType === 'delivery'
                    ? 'bg-[#F59E0B] text-[#0A0A0C]'
                    : 'text-[#A3A3B2] hover:text-white'
                }`}
              >
                <MapPin className="w-4 h-4" />
                <span>Sukkur Delivery (30–45m)</span>
              </button>

              <button
                type="button"
                onClick={() => setOrderType('takeaway')}
                className={`flex-1 py-2.5 text-xs font-bold uppercase tracking-wider rounded-lg flex items-center justify-center gap-2 transition-colors ${
                  orderType === 'takeaway'
                    ? 'bg-[#F59E0B] text-[#0A0A0C]'
                    : 'text-[#A3A3B2] hover:text-white'
                }`}
              >
                <Clock className="w-4 h-4" />
                <span>Military Road Pickup</span>
              </button>
            </div>

            {/* Cart Items */}
            <div>
              <div className="flex items-center justify-between mb-3">
                <h4 className="text-xs uppercase tracking-wider text-[#A3A3B2] font-bold">
                  Ordered Dishes ({cart.reduce((a, b) => a + b.quantity, 0)})
                </h4>
                {cart.length > 0 && (
                  <button
                    onClick={onClearCart}
                    className="text-[11px] text-red-400 hover:underline"
                  >
                    Clear All
                  </button>
                )}
              </div>

              {cart.length === 0 ? (
                <div className="p-8 text-center bg-[#0A0A0C] rounded-xl border border-white/5">
                  <ShoppingBag className="w-8 h-8 text-[#686875] mx-auto mb-2" />
                  <p className="text-xs text-[#A3A3B2] mb-1">Your food order is empty.</p>
                  <p className="text-[11px] text-[#F59E0B]">
                    Browse our menu and pick any delicious Karahi, Handi, BBQ, or Shake!
                  </p>
                </div>
              ) : (
                <div className="space-y-2.5 max-h-56 overflow-y-auto pr-1">
                  {cart.map((cartItem) => {
                    const lineTotal =
                      cartItem.selectedPortion.price * cartItem.quantity;
                    return (
                      <div
                        key={`${cartItem.item.id}-${cartItem.selectedPortion.label}`}
                        className="p-3 rounded-lg bg-[#0A0A0C] border border-white/5 flex items-center justify-between gap-3"
                      >
                        <div className="flex-1 min-w-0">
                          <div className="text-xs font-bold text-white truncate">
                            {cartItem.item.name}
                          </div>
                          <div className="text-[11px] text-[#F59E0B] font-mono">
                            {cartItem.selectedPortion.label} · Rs.{' '}
                            {cartItem.selectedPortion.price.toLocaleString()}
                          </div>
                        </div>

                        {/* Stepper */}
                        <div className="flex items-center gap-1.5 shrink-0">
                          <button
                            onClick={() =>
                              onUpdateQuantity(
                                cartItem.item.id,
                                cartItem.selectedPortion.label,
                                -1
                              )
                            }
                            className="p-1 rounded bg-[#1C1D24] border border-white/10 hover:border-white text-white"
                          >
                            <Minus className="w-3 h-3" />
                          </button>
                          <span className="font-mono text-xs text-white w-6 text-center">
                            {cartItem.quantity}
                          </span>
                          <button
                            onClick={() =>
                              onUpdateQuantity(
                                cartItem.item.id,
                                cartItem.selectedPortion.label,
                                1
                              )
                            }
                            className="p-1 rounded bg-[#1C1D24] border border-white/10 hover:border-white text-white"
                          >
                            <Plus className="w-3 h-3" />
                          </button>
                          <button
                            onClick={() =>
                              onRemoveItem(
                                cartItem.item.id,
                                cartItem.selectedPortion.label
                              )
                            }
                            className="p-1 text-red-400 hover:text-red-300 ml-1"
                          >
                            <Trash2 className="w-3.5 h-3.5" />
                          </button>
                        </div>

                        <div className="font-mono text-xs font-bold text-white w-20 text-right shrink-0">
                          Rs. {lineTotal.toLocaleString()}
                        </div>
                      </div>
                    );
                  })}
                </div>
              )}
            </div>

            {/* Customer Details Form */}
            {cart.length > 0 && (
              <form onSubmit={handleSendWhatsAppOrder} className="space-y-4 pt-3 border-t border-white/5">
                {errorMsg && (
                  <div className="p-2.5 rounded bg-red-950/50 border border-red-500/50 text-[11px] text-red-300">
                    {errorMsg}
                  </div>
                )}

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs">
                  <div>
                    <label className="block text-[#A3A3B2] uppercase tracking-wider mb-1 text-[10px] font-semibold">
                      Your Name *
                    </label>
                    <input
                      type="text"
                      required
                      value={customerName}
                      onChange={(e) => setCustomerName(e.target.value)}
                      placeholder="e.g. Tariq Ahmed"
                      className="w-full bg-[#0A0A0C] border border-[#F59E0B]/30 rounded-lg px-3 py-2 text-white focus:outline-none focus:border-[#F59E0B]"
                    />
                  </div>

                  <div>
                    <label className="block text-[#A3A3B2] uppercase tracking-wider mb-1 text-[10px] font-semibold">
                      Phone Number (WhatsApp) *
                    </label>
                    <input
                      type="tel"
                      required
                      value={customerPhone}
                      onChange={(e) => setCustomerPhone(e.target.value)}
                      placeholder="e.g. 0300 1234567"
                      className="w-full bg-[#0A0A0C] border border-[#F59E0B]/30 rounded-lg px-3 py-2 text-white focus:outline-none focus:border-[#F59E0B]"
                    />
                  </div>
                </div>

                {orderType === 'delivery' && (
                  <div className="text-xs">
                    <label className="block text-[#A3A3B2] uppercase tracking-wider mb-1 text-[10px] font-semibold">
                      Delivery Address in Sukkur *
                    </label>
                    <input
                      type="text"
                      required
                      value={deliveryAddress}
                      onChange={(e) => setDeliveryAddress(e.target.value)}
                      placeholder="House/Shop no, street, near landmark, Sukkur"
                      className="w-full bg-[#0A0A0C] border border-[#F59E0B]/30 rounded-lg px-3 py-2 text-white focus:outline-none focus:border-[#F59E0B]"
                    />
                  </div>
                )}

                <div className="text-xs">
                  <label className="block text-[#A3A3B2] uppercase tracking-wider mb-1 text-[10px] font-semibold">
                    Special Cooking / Spice Instructions (Optional)
                  </label>
                  <input
                    type="text"
                    value={specialInstructions}
                    onChange={(e) => setSpecialInstructions(e.target.value)}
                    placeholder="e.g. Mild spice for children, extra green raita, crispy naan..."
                    className="w-full bg-[#0A0A0C] border border-[#F59E0B]/30 rounded-lg px-3 py-2 text-white focus:outline-none focus:border-[#F59E0B]"
                  />
                </div>

                {/* Bill Summary */}
                <div className="bg-[#0A0A0C] p-3.5 rounded-xl border border-white/5 space-y-1.5 text-xs">
                  <div className="flex justify-between text-[#A3A3B2]">
                    <span>Items Subtotal</span>
                    <span className="font-mono text-white">Rs. {subtotal.toLocaleString()}</span>
                  </div>
                  {orderType === 'delivery' && (
                    <div className="flex justify-between text-[#A3A3B2]">
                      <span>Estimated Sukkur Rider Fee</span>
                      <span className="font-mono text-white">Rs. {deliveryCharges.toLocaleString()}</span>
                    </div>
                  )}
                  <div className="flex justify-between text-sm font-bold text-white pt-2 border-t border-white/5">
                    <span>Grand Total</span>
                    <span className="font-mono text-[#F59E0B]">
                      Rs. {totalAmount.toLocaleString()}
                    </span>
                  </div>
                </div>

                {/* Primary WhatsApp Submit CTA */}
                <button
                  type="submit"
                  className="w-full py-3.5 bg-[#22C55E] text-white hover:bg-[#16A34A] font-bold text-xs uppercase tracking-widest rounded-xl transition-all shadow-xl flex items-center justify-center gap-2"
                >
                  <MessageSquare className="w-4 h-4 fill-current" />
                  <span>Send Order via WhatsApp (+92 309 7807000)</span>
                </button>

                <p className="text-[10px] text-[#A3A3B2] text-center font-light">
                  Order will be verified directly by Sizzling Grill Sukkur via WhatsApp before preparation begins.
                </p>
              </form>
            )}

          </div>
        )}

      </div>
    </div>
  );
};
