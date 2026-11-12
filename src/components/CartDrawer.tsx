'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import { useShop } from '@/context/ShopContext';
import { X, Plus, Minus, Trash2, ShoppingBag, ShieldCheck, ArrowRight, CheckCircle2 } from 'lucide-react';

export default function CartDrawer() {
  const { cart, removeFromCart, updateQuantity, clearCart, isCartOpen, setIsCartOpen, cartTotal } = useShop();
  const [isCheckingOut, setIsCheckingOut] = useState(false);
  const [orderComplete, setOrderComplete] = useState(false);

  if (!isCartOpen) return null;

  const handleCheckout = () => {
    setIsCheckingOut(true);
    setTimeout(() => {
      setIsCheckingOut(false);
      setOrderComplete(true);
      clearCart();
    }, 1500);
  };

  const handleClose = () => {
    setIsCartOpen(false);
    setOrderComplete(false);
  };

  return (
    <div className="fixed inset-0 z-50 overflow-hidden bg-black/60 backdrop-blur-sm animate-fade-in">
      <div className="absolute inset-0" onClick={handleClose} />

      <div className="absolute inset-y-0 right-0 max-w-full flex pl-10">
        <div className="w-screen max-w-md bg-[#FAF8F5] shadow-2xl flex flex-col justify-between border-l border-amber-500/30">
          
          {/* Header */}
          <div className="px-6 py-5 bg-white border-b border-stone-200 flex items-center justify-between">
            <div className="flex items-center gap-2">
              <ShoppingBag className="w-5 h-5 text-[#6e1327]" />
              <h2 className="font-serif text-lg font-bold text-stone-900 tracking-wide">
                Your Shopping Bag ({cart.length})
              </h2>
            </div>
            <button
              onClick={handleClose}
              className="p-2 rounded-full hover:bg-stone-100 text-stone-600 transition-colors"
              aria-label="Close cart"
            >
              <X className="w-5 h-5" />
            </button>
          </div>

          {/* Cart Content */}
          <div className="flex-1 overflow-y-auto p-6 divide-y divide-stone-200">
            {orderComplete ? (
              <div className="text-center py-16 space-y-4">
                <div className="w-16 h-16 rounded-full bg-emerald-100 text-emerald-700 mx-auto flex items-center justify-center">
                  <CheckCircle2 className="w-10 h-10" />
                </div>
                <h3 className="font-serif text-2xl font-bold text-stone-900">
                  Sacred Order Reserved!
                </h3>
                <p className="text-xs text-stone-600 leading-relaxed max-w-xs mx-auto">
                  Your handloom weaves have been reserved in our Kanchipuram vault. A master stylist will reach out within 2 hours to confirm delivery and customized blouse stitching measurements.
                </p>
                <div className="pt-4">
                  <button
                    onClick={handleClose}
                    className="px-6 py-2.5 rounded-full text-xs font-semibold tracking-wider uppercase bg-[#6e1327] text-white"
                  >
                    Continue Browsing
                  </button>
                </div>
              </div>
            ) : cart.length === 0 ? (
              <div className="text-center py-16 space-y-3">
                <div className="w-16 h-16 rounded-full bg-stone-100 text-stone-400 mx-auto flex items-center justify-center">
                  <ShoppingBag className="w-8 h-8" />
                </div>
                <h3 className="font-serif text-xl font-bold text-stone-800">
                  Your bag is empty
                </h3>
                <p className="text-xs text-stone-500">
                  Explore our sacred silks on the rail or style a full bridal look.
                </p>
              </div>
            ) : (
              cart.map((item) => (
                <div key={`${item.id}-${item.size}`} className="py-4 flex gap-4 items-start">
                  <div className="relative w-16 h-20 rounded-xl overflow-hidden bg-stone-200 flex-shrink-0 border border-stone-300">
                    <Image src={item.image} alt={item.name} fill className="object-cover" />
                  </div>

                  <div className="flex-1 min-w-0">
                    <h4 className="text-xs font-bold text-stone-900 leading-snug">
                      {item.name}
                    </h4>
                    <span className="text-[10px] text-stone-500 uppercase tracking-wider block mt-0.5">
                      {item.subtitle} · Size: {item.size || 'Free Size'}
                    </span>
                    <span className="text-xs font-bold text-[#6e1327] block mt-1">
                      ₹{item.price.toLocaleString('en-IN')}
                    </span>

                    {/* Quantity Selector */}
                    <div className="flex items-center gap-2 mt-2">
                      <div className="flex items-center border border-stone-300 rounded-lg bg-white overflow-hidden">
                        <button
                          onClick={() => updateQuantity(item.id, -1, item.size)}
                          className="px-2 py-1 text-stone-600 hover:bg-stone-100"
                          aria-label="Decrease quantity"
                        >
                          <Minus className="w-3 h-3" />
                        </button>
                        <span className="px-2.5 text-xs font-bold text-stone-900">
                          {item.quantity}
                        </span>
                        <button
                          onClick={() => updateQuantity(item.id, 1, item.size)}
                          className="px-2 py-1 text-stone-600 hover:bg-stone-100"
                          aria-label="Increase quantity"
                        >
                          <Plus className="w-3 h-3" />
                        </button>
                      </div>

                      <button
                        onClick={() => removeFromCart(item.id, item.size)}
                        className="p-1 text-stone-400 hover:text-red-600 transition-colors"
                        title="Remove"
                      >
                        <Trash2 className="w-3.5 h-3.5" />
                      </button>
                    </div>
                  </div>
                </div>
              ))
            )}
          </div>

          {/* Footer with Calculations and Checkout */}
          {!orderComplete && cart.length > 0 && (
            <div className="p-6 bg-white border-t border-stone-200 space-y-4">
              <div className="space-y-1.5 text-xs text-stone-600">
                <div className="flex justify-between">
                  <span>Subtotal</span>
                  <span className="font-semibold text-stone-900">
                    ₹{cartTotal.toLocaleString('en-IN')}
                  </span>
                </div>
                <div className="flex justify-between">
                  <span>Insured Express Shipping</span>
                  <span className="text-emerald-700 font-semibold uppercase">Complimentary</span>
                </div>
                <div className="flex justify-between">
                  <span>Silk Mark India Authentication</span>
                  <span className="text-emerald-700 font-semibold uppercase">Included</span>
                </div>
                <div className="flex justify-between pt-2 border-t border-stone-200 text-sm font-bold text-stone-900">
                  <span>Grand Total</span>
                  <span className="font-serif text-lg text-[#6e1327]">
                    ₹{cartTotal.toLocaleString('en-IN')}
                  </span>
                </div>
              </div>

              {/* Checkout Button */}
              <button
                onClick={handleCheckout}
                disabled={isCheckingOut}
                className="w-full py-4 rounded-full text-xs font-semibold tracking-widest uppercase bg-gradient-to-r from-[#6e1327] via-[#85162f] to-[#540d1c] text-white hover:brightness-110 active:scale-95 transition-all shadow-xl flex items-center justify-center gap-2 disabled:opacity-50"
              >
                {isCheckingOut ? (
                  <span>Reserving with Weavers...</span>
                ) : (
                  <>
                    <span>Proceed to Sacred Checkout</span>
                    <ArrowRight className="w-4 h-4 text-amber-300" />
                  </>
                )}
              </button>

              <div className="flex items-center justify-center gap-1.5 text-[10px] text-stone-500 uppercase tracking-wider">
                <ShieldCheck className="w-3.5 h-3.5 text-emerald-600" />
                <span>100% Genuine Certified Silk & Pure Zari</span>
              </div>
            </div>
          )}

        </div>
      </div>
    </div>
  );
}

