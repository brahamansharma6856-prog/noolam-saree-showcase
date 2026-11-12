'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import { BRIDAL_COLLECTION, BridalSaree } from '@/data/sarees';
import { useShop } from '@/context/ShopContext';
import { ChevronLeft, ChevronRight, Heart, ShoppingBag } from 'lucide-react';

export default function BridalCollection() {
  const [activeIdx, setActiveIdx] = useState(0);
  const { addToCart, toggleWishlist, isInWishlist } = useShop();

  const n = BRIDAL_COLLECTION.length;
  const prevIdx = (activeIdx - 1 + n) % n;
  const nextIdx = (activeIdx + 1) % n;

  const currentSaree: BridalSaree = BRIDAL_COLLECTION[activeIdx];
  const isFavorited = isInWishlist(currentSaree.id);

  const handlePrev = () => setActiveIdx(prevIdx);
  const handleNext = () => setActiveIdx(nextIdx);

  return (
    <section id="bridal" className="py-24 px-4 sm:px-6 lg:px-8 bg-[#FAF7F2] text-stone-900 overflow-hidden relative border-t border-stone-200">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <p className="text-xs sm:text-sm tracking-[0.2em] uppercase font-medium text-stone-500 italic mb-2">
            For the muhurtham and every vow after
          </p>
          <h2 className="text-4xl sm:text-6xl font-serif font-bold text-stone-900 tracking-tight">
            The Bridal Collection
          </h2>
        </div>

        {/* Arch Carousel */}
        <div className="relative flex flex-col items-center">
          {/* Card stage */}
          <div
            className="relative w-full max-w-4xl mx-auto flex items-center justify-center select-none"
            style={{ height: '490px' }}
          >
            {/* Left Card (Tilted away and faded) */}
            <div
              className="absolute cursor-pointer transition-all duration-500 ease-out"
              style={{
                width: '260px',
                height: '380px',
                left: '50%',
                transform: 'translateX(calc(-50% - 240px)) translateY(20px) rotate(-10deg) scale(0.85)',
                opacity: 0.45,
                zIndex: 5,
                filter: 'blur(1px) drop-shadow(0 8px 16px rgba(0,0,0,0.2))',
              }}
              onClick={handlePrev}
            >
              <div className="relative w-full h-full">
                <Image
                  src={BRIDAL_COLLECTION[prevIdx].image}
                  alt={BRIDAL_COLLECTION[prevIdx].title}
                  fill
                  sizes="260px"
                  className="object-contain"
                />
              </div>
            </div>

            {/* Centre Card (Upright with gold border, vibrant and dominant) */}
            <div
              className="relative cursor-pointer transition-all duration-500 ease-out"
              style={{
                width: '320px',
                height: '460px',
                zIndex: 20,
                transform: 'scale(1.02)',
                filter: 'drop-shadow(0 20px 40px rgba(0,0,0,0.35)) drop-shadow(0 0 25px rgba(212,175,55,0.4))',
              }}
            >
              <div className="relative w-full h-full">
                <Image
                  src={currentSaree.image}
                  alt={currentSaree.title}
                  fill
                  sizes="320px"
                  className="object-contain"
                  priority
                />
              </div>
            </div>

            {/* Right Card (Tilted away and faded) */}
            <div
              className="absolute cursor-pointer transition-all duration-500 ease-out"
              style={{
                width: '260px',
                height: '380px',
                left: '50%',
                transform: 'translateX(calc(-50% + 240px)) translateY(20px) rotate(10deg) scale(0.85)',
                opacity: 0.45,
                zIndex: 5,
                filter: 'blur(1px) drop-shadow(0 8px 16px rgba(0,0,0,0.2))',
              }}
              onClick={handleNext}
            >
              <div className="relative w-full h-full">
                <Image
                  src={BRIDAL_COLLECTION[nextIdx].image}
                  alt={BRIDAL_COLLECTION[nextIdx].title}
                  fill
                  sizes="260px"
                  className="object-contain"
                />
              </div>
            </div>
          </div>

          {/* Details below center card */}
          <div className="mt-6 max-w-md mx-auto text-center px-4">
            <h3 className="font-serif text-2xl sm:text-3xl font-bold text-stone-900 tracking-wide transition-all duration-300">
              {currentSaree.title}
            </h3>
            <p className="text-xs sm:text-sm text-stone-500 font-medium mt-1">
              {currentSaree.zariNote}
            </p>

            {/* Price in gold */}
            <div className="mt-3">
              <span className="font-serif text-3xl font-bold" style={{ color: '#b8860b' }}>
                ₹{currentSaree.price.toLocaleString('en-IN')}
              </span>
            </div>

            {/* Controls: prev, add to cart, heart, next */}
            <div className="mt-6 flex items-center justify-center gap-3">
              <button
                onClick={handlePrev}
                className="p-3 rounded-full border border-stone-300 hover:border-stone-900 hover:bg-stone-900 hover:text-white transition-all active:scale-95 shadow-sm"
                aria-label="Previous bridal saree"
              >
                <ChevronLeft className="w-4 h-4" />
              </button>

              <button
                onClick={() => addToCart({
                  id: currentSaree.id,
                  name: currentSaree.title,
                  subtitle: currentSaree.zariNote,
                  price: currentSaree.price,
                  image: currentSaree.image,
                })}
                className="py-3 px-8 rounded-full text-xs sm:text-sm font-semibold tracking-wider uppercase bg-[#6e1327] hover:bg-[#85162f] text-white active:scale-95 transition-all shadow-md flex items-center gap-2"
              >
                <ShoppingBag className="w-4 h-4 text-amber-300" />
                <span>Add to cart</span>
              </button>

              <button
                onClick={() => toggleWishlist(currentSaree.id, currentSaree.title)}
                className={`p-3 rounded-full border transition-all active:scale-95 ${isFavorited ? 'bg-red-50 border-red-300 text-red-600' : 'bg-white border-stone-300 text-stone-700 hover:text-red-500'}`}
                aria-label="Wishlist"
              >
                <Heart className={`w-4 h-4 ${isFavorited ? 'fill-current' : ''}`} />
              </button>

              <button
                onClick={handleNext}
                className="p-3 rounded-full border border-stone-300 hover:border-stone-900 hover:bg-stone-900 hover:text-white transition-all active:scale-95 shadow-sm"
                aria-label="Next bridal saree"
              >
                <ChevronRight className="w-4 h-4" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
