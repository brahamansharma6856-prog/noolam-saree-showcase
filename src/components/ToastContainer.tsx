'use client';

import React from 'react';
import { useShop } from '@/context/ShopContext';
import { Check, X, Heart, ShoppingBag } from 'lucide-react';

export default function ToastContainer() {
  const { toasts, dismissToast } = useShop();

  if (toasts.length === 0) return null;

  return (
    <div className="fixed bottom-6 right-6 z-50 flex flex-col gap-2.5 max-w-sm w-full pointer-events-none">
      {toasts.map((toast) => (
        <div
          key={toast.id}
          className="pointer-events-auto bg-[#1a0c10] text-amber-100 border border-amber-500/40 p-4 rounded-2xl shadow-2xl flex items-center justify-between gap-3 animate-fade-in backdrop-blur-md"
        >
          <div className="flex items-center gap-2.5 min-w-0">
            {toast.type === 'wishlist' ? (
              <Heart className="w-4 h-4 text-red-500 fill-red-500 flex-shrink-0" />
            ) : (
              <ShoppingBag className="w-4 h-4 text-amber-300 flex-shrink-0" />
            )}
            <span className="text-xs font-medium leading-snug truncate">
              {toast.message}
            </span>
          </div>

          <button
            onClick={() => dismissToast(toast.id)}
            className="p-1 text-stone-400 hover:text-white transition-colors"
            aria-label="Dismiss toast"
          >
            <X className="w-3.5 h-3.5" />
          </button>
        </div>
      ))}
    </div>
  );
}

