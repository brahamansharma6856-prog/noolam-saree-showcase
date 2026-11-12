'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import { useShop } from '@/context/ShopContext';
import { RACK_PIECES, SareeItem } from '@/data/sarees';
import { X, ChevronLeft, ChevronRight, Heart, ShoppingBag, MapPin } from 'lucide-react';

export default function RackDetailModal() {
  const { activeRackItem, setActiveRackItem, addToCart, toggleWishlist, isInWishlist, setIsStoreModalOpen } = useShop();
  const [viewMode, setViewMode] = useState<'front' | 'back'>('front');
  const [selectedSize, setSelectedSize] = useState<string>('38');

  if (!activeRackItem) return null;

  const currentIndex = RACK_PIECES.findIndex((p) => p.id === activeRackItem.id);
  const isFavorited = isInWishlist(activeRackItem.id);

  const handlePrev = (e: React.MouseEvent) => {
    e.stopPropagation();
    const prevIdx = (currentIndex - 1 + RACK_PIECES.length) % RACK_PIECES.length;
    setActiveRackItem(RACK_PIECES[prevIdx]);
    setViewMode('front');
  };

  const handleNext = (e: React.MouseEvent) => {
    e.stopPropagation();
    const nextIdx = (currentIndex + 1) % RACK_PIECES.length;
    setActiveRackItem(RACK_PIECES[nextIdx]);
    setViewMode('front');
  };

  const sizes = ['34', '36', '38', '40', '42'];
  const currentDisplayImage = viewMode === 'front' ? activeRackItem.frontImage : activeRackItem.backImage;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-stone-950/85 backdrop-blur-2xl animate-fade-in overflow-y-auto">
      {/* Click outside to close */}
      <div className="fixed inset-0" onClick={() => setActiveRackItem(null)} />

      {/* Modal Dialog */}
      <div className="relative z-10 bg-[#FAF8F5] rounded-3xl max-w-4xl w-full shadow-2xl border border-stone-300 overflow-hidden my-auto">
        
        {/* Top Header: Navigation & CLOSE X */}
        <div className="flex items-center justify-between px-6 py-4 border-b border-stone-200 bg-white">
          <div className="flex items-center gap-3">
            <button
              onClick={handlePrev}
              className="p-2 rounded-full hover:bg-stone-100 text-stone-700 transition-colors"
              title="Previous garment"
              aria-label="Previous"
            >
              <ChevronLeft className="w-5 h-5" />
            </button>
            <span className="text-xs font-bold tracking-widest uppercase text-stone-500">
              {currentIndex + 1} of {RACK_PIECES.length}
            </span>
            <button
              onClick={handleNext}
              className="p-2 rounded-full hover:bg-stone-100 text-stone-700 transition-colors"
              title="Next garment"
              aria-label="Next"
            >
              <ChevronRight className="w-5 h-5" />
            </button>
          </div>

          {/* Exact CLOSE X matching screenshot */}
          <button
            onClick={() => setActiveRackItem(null)}
            className="text-xs font-bold tracking-widest uppercase text-stone-700 hover:text-stone-950 flex items-center gap-1.5 py-1 px-3 rounded-full hover:bg-stone-100 transition-colors"
            aria-label="Close"
          >
            <span>CLOSE</span>
            <X className="w-4 h-4" />
          </button>
        </div>

        {/* Modal Body */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 p-6 sm:p-10">
          
          {/* Left: Garment Lifted off Rail to Center Stage */}
          <div className="md:col-span-6 flex flex-col items-center">
            {/* Wooden Hanger */}
            <div className="flex flex-col items-center -mb-2 z-10">
              <div className="w-5 h-6 border-t-2 border-l-2 border-stone-600 rounded-t-full rotate-45 transform origin-bottom" />
              <div className="w-32 h-3 bg-gradient-to-r from-amber-800 via-amber-700 to-amber-900 rounded-full shadow border-t border-amber-600" />
            </div>

            {/* Frame */}
            <div className="relative w-full aspect-[3/4.4] rounded-2xl overflow-hidden bg-stone-100 border border-stone-200 shadow-2xl">
              <Image
                src={currentDisplayImage}
                alt={activeRackItem.name}
                fill
                priority
                className="object-cover object-top transition-transform duration-500"
              />
            </div>

            {/* FRONT / BACK Toggle from 06-rack-saree-detail.png */}
            <div className="mt-4 flex items-center p-1 bg-stone-200 rounded-full border border-stone-300">
              <button
                onClick={() => setViewMode('front')}
                className={`px-5 py-1.5 rounded-full text-xs font-bold tracking-wider uppercase transition-all ${
                  viewMode === 'front'
                    ? 'bg-stone-900 text-white shadow'
                    : 'text-stone-600 hover:text-stone-900'
                }`}
              >
                FRONT
              </button>
              <button
                onClick={() => setViewMode('back')}
                className={`px-5 py-1.5 rounded-full text-xs font-bold tracking-wider uppercase transition-all ${
                  viewMode === 'back'
                    ? 'bg-stone-900 text-white shadow'
                    : 'text-stone-600 hover:text-stone-900'
                }`}
              >
                BACK
              </button>
            </div>
          </div>

          {/* Right: Product Details & Controls */}
          <div className="md:col-span-6 flex flex-col justify-between">
            <div>
              <span className="text-[10px] font-bold tracking-[0.25em] uppercase text-[#6e1327] block mb-1">
                NOOLAM HERITAGE
              </span>

              {/* Product Name in Spaced Capitals */}
              <h3 className="font-serif text-2xl sm:text-3xl font-bold tracking-[0.14em] text-stone-900 uppercase leading-snug">
                {activeRackItem.name}
              </h3>

              {/* Price from screenshot (e.g. ₹13,600.00) */}
              <div className="mt-3">
                <span className="font-serif text-3xl font-bold text-stone-900">
                  ₹{activeRackItem.price.toLocaleString('en-IN')}.00
                </span>
              </div>

              {/* Description */}
              <p className="mt-4 text-xs sm:text-sm text-stone-600 leading-relaxed font-light">
                {activeRackItem.description}
              </p>

              {/* Size Chips 34–42 */}
              <div className="mt-6">
                <span className="text-xs font-bold uppercase tracking-wider text-stone-800 block mb-2">
                  Select Size:
                </span>
                <div className="flex items-center gap-2">
                  {sizes.map((size) => (
                    <button
                      key={size}
                      onClick={() => setSelectedSize(size)}
                      className={`w-11 h-11 rounded-xl text-xs font-bold transition-all uppercase flex items-center justify-center ${
                        selectedSize === size
                          ? 'bg-stone-900 text-white shadow-md scale-105'
                          : 'bg-white border border-stone-300 text-stone-700 hover:border-stone-900'
                      }`}
                    >
                      {size}
                    </button>
                  ))}
                </div>
              </div>

              {/* SELECT A SIZE Button */}
              <div className="mt-6">
                <button
                  onClick={() => {
                    addToCart({
                      id: activeRackItem.id,
                      name: activeRackItem.name,
                      subtitle: `Size ${selectedSize}`,
                      price: activeRackItem.price,
                      image: activeRackItem.frontImage,
                      size: selectedSize,
                    });
                  }}
                  className="w-full py-4 rounded-full text-xs font-bold tracking-widest uppercase bg-[#6e1327] hover:bg-[#85162f] text-white active:scale-95 transition-all shadow-lg flex items-center justify-center gap-2"
                >
                  <ShoppingBag className="w-4 h-4 text-amber-300" />
                  <span>SELECT A SIZE · ADD TO BAG</span>
                </button>
              </div>

              {/* SEE AVAILABILITY Link */}
              <div className="mt-4 flex items-center justify-between">
                <button
                  onClick={() => setIsStoreModalOpen(true)}
                  className="text-xs font-bold text-stone-700 hover:text-stone-950 tracking-wider uppercase underline underline-offset-4 flex items-center gap-1.5"
                >
                  <MapPin className="w-3.5 h-3.5 text-[#6e1327]" />
                  <span>SEE AVAILABILITY IN STORE</span>
                </button>

                <button
                  onClick={() => toggleWishlist(activeRackItem.id, activeRackItem.name)}
                  className={`p-2.5 rounded-full border transition-all ${
                    isFavorited ? 'bg-red-50 border-red-300 text-red-600' : 'bg-white border-stone-300 text-stone-600'
                  }`}
                  aria-label="Wishlist"
                >
                  <Heart className={`w-4 h-4 ${isFavorited ? 'fill-current' : ''}`} />
                </button>
              </div>
            </div>

          </div>

        </div>
      </div>
    </div>
  );
}
