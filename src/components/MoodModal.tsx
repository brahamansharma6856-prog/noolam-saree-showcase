'use client';

import React from 'react';
import Image from 'next/image';
import { useShop } from '@/context/ShopContext';
import { X, ShoppingBag, Sparkles, Check, ArrowRight } from 'lucide-react';

export default function MoodModal() {
  const { activeMood, setActiveMood, addToCart } = useShop();

  if (!activeMood) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-stone-950/80 backdrop-blur-md animate-fade-in overflow-y-auto">
      <div className="fixed inset-0" onClick={() => setActiveMood(null)} />

      <div className="relative z-10 bg-[#FAF8F5] rounded-3xl max-w-2xl w-full shadow-2xl border border-amber-500/30 overflow-hidden my-auto">
        
        {/* Top Header */}
        <div className="flex items-center justify-between px-6 py-4 border-b border-stone-200 bg-white">
          <div className="flex items-center gap-2">
            <Sparkles className="w-4 h-4 text-[#6e1327]" />
            <span className="text-xs font-semibold tracking-widest uppercase text-stone-600">
              NOOLAM Archive Edit
            </span>
          </div>
          <button
            onClick={() => setActiveMood(null)}
            className="p-2 rounded-full hover:bg-stone-100 text-stone-600 transition-colors"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Modal Content */}
        <div className="p-6 sm:p-8 space-y-6">
          <div className="flex flex-col sm:flex-row gap-6 items-center">
            {/* Temple Arch Window */}
            <div className="relative w-44 aspect-[202/353] overflow-hidden drop-shadow-xl flex-shrink-0">
              <Image src={activeMood.image} alt={activeMood.title} fill className="object-contain" priority />
            </div>

            <div className="space-y-3 text-center sm:text-left flex-1">
              <span className="px-3 py-1 rounded-full text-[9px] font-bold tracking-widest uppercase bg-[#6e1327]/10 text-[#6e1327] border border-[#6e1327]/20">
                {activeMood.tag}
              </span>

              <h3 className="font-serif text-2xl sm:text-3xl font-bold text-stone-900 tracking-wide uppercase">
                {activeMood.title}
              </h3>

              <p className="text-xs text-amber-800 font-semibold uppercase tracking-wider">
                {activeMood.subtitle}
              </p>

              <p className="text-xs sm:text-sm text-stone-600 leading-relaxed font-light">
                {activeMood.description}
              </p>

              <div className="pt-2 flex flex-col sm:flex-row gap-3">
                <button
                  onClick={() => {
                    addToCart({
                      id: activeMood.id,
                      name: `${activeMood.title} Silk Saree`,
                      subtitle: `${activeMood.subtitle} · ${activeMood.tag}`,
                      price: 54000,
                      image: activeMood.image,
                    });
                    setActiveMood(null);
                  }}
                  className="px-6 py-3 rounded-full text-xs font-semibold tracking-widest uppercase bg-[#6e1327] text-white hover:bg-[#85162f] transition-all flex items-center justify-center gap-2 shadow-md"
                >
                  <ShoppingBag className="w-4 h-4 text-amber-300" />
                  <span>Reserve Archive Saree · ₹54,000</span>
                </button>
              </div>
            </div>
          </div>
        </div>

      </div>
    </div>
  );
}

