'use client';

import React, { useState, useRef, useCallback } from 'react';
import Image from 'next/image';
import { STYLED_LOOKS, StyledLook } from '@/data/sarees';
import { useShop } from '@/context/ShopContext';
import { ChevronLeft, ChevronRight, Heart, Plus, ShoppingBag } from 'lucide-react';

export default function TryTheLook() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const { addToCart, toggleWishlist, isInWishlist } = useShop();

  // Pointer Drag state
  const dragStartX = useRef<number | null>(null);
  const isDragging = useRef(false);
  const stageRef = useRef<HTMLDivElement>(null);

  const currentLook: StyledLook = STYLED_LOOKS[currentIndex];
  const prevLook = STYLED_LOOKS[(currentIndex - 1 + STYLED_LOOKS.length) % STYLED_LOOKS.length];
  const nextLook = STYLED_LOOKS[(currentIndex + 1) % STYLED_LOOKS.length];

  const goTo = useCallback((idx: number) => {
    setCurrentIndex(((idx % STYLED_LOOKS.length) + STYLED_LOOKS.length) % STYLED_LOOKS.length);
  }, []);

  const handlePrev = () => goTo(currentIndex - 1);
  const handleNext = () => goTo(currentIndex + 1);

  // Pointer drag handlers
  const onPointerDown = (e: React.PointerEvent) => {
    dragStartX.current = e.clientX;
    isDragging.current = false;
    stageRef.current?.setPointerCapture(e.pointerId);
  };

  const onPointerMove = (e: React.PointerEvent) => {
    if (dragStartX.current === null) return;
    if (Math.abs(e.clientX - dragStartX.current) > 8) isDragging.current = true;
  };

  const onPointerUp = (e: React.PointerEvent) => {
    if (dragStartX.current === null) return;
    const delta = e.clientX - dragStartX.current;
    if (isDragging.current && Math.abs(delta) > 35) {
      if (delta < 0) {
        handleNext();
      } else {
        handlePrev();
      }
    }
    dragStartX.current = null;
    isDragging.current = false;
  };

  const itemsList = [
    { key: 'saree',     brand: currentLook.saree.brand,     name: currentLook.saree.name,     price: currentLook.saree.price,     image: currentLook.saree.image },
    { key: 'blouse',    brand: currentLook.blouse.brand,    name: currentLook.blouse.name,    price: currentLook.blouse.price,    image: currentLook.blouse.image },
    { key: 'choker',    brand: currentLook.choker.brand,    name: currentLook.choker.name,    price: currentLook.choker.price,    image: currentLook.choker.image },
    { key: 'jhumkas',   brand: currentLook.jhumkas.brand,   name: currentLook.jhumkas.name,   price: currentLook.jhumkas.price,   image: currentLook.jhumkas.image },
    { key: 'ottiyanam', brand: currentLook.ottiyanam.brand, name: currentLook.ottiyanam.name, price: currentLook.ottiyanam.price, image: currentLook.ottiyanam.image },
    { key: 'bangles',   brand: currentLook.bangles.brand,   name: currentLook.bangles.name,   price: currentLook.bangles.price,   image: currentLook.bangles.image },
  ];

  const rawTotal = itemsList.reduce((s, i) => s + i.price, 0);
  const bundlePrice = Math.round(rawTotal * 0.9);

  const handleAddFullLook = () => {
    itemsList.forEach((item) => {
      addToCart({
        id: `${currentLook.id}-${item.key}`,
        name: item.name,
        subtitle: `${item.brand} · ${currentLook.title}`,
        price: Math.round(item.price * 0.9),
        originalPrice: item.price,
        image: item.image,
      });
    });
  };

  return (
    <section id="try-look" className="py-24 px-4 sm:px-6 lg:px-8 bg-white text-stone-900 border-t border-stone-200">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <span className="text-[11px] font-bold tracking-[0.25em] uppercase text-[#6e1327] block mb-2">
            STYLED HEAD TO TOE
          </span>
          <h2 className="text-4xl sm:text-6xl font-serif font-bold text-stone-900 tracking-tight">
            Try the Look.
          </h2>
          <p className="mt-2 text-stone-500 text-xs sm:text-sm font-light">
            Eight looks, styled head to toe. Drag or tap arrows to browse.
          </p>
        </div>

        {/* Carousel Stage & Panel Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10 items-stretch">

          {/* Left: Stage Carousel (7 Columns) */}
          <div className="lg:col-span-7 flex flex-col">
            {/* White Stage Container with Drag Physics */}
            <div
              ref={stageRef}
              className="relative flex-1 rounded-3xl overflow-hidden bg-[#FAF8F5] border border-stone-200 shadow-xl flex items-center justify-center cursor-grab active:cursor-grabbing select-none"
              style={{ minHeight: '540px' }}
              onPointerDown={onPointerDown}
              onPointerMove={onPointerMove}
              onPointerUp={onPointerUp}
            >
              {/* Previous Model — blurred & faded on left */}
              <div
                onClick={handlePrev}
                className="absolute left-2 sm:left-4 top-1/2 -translate-y-1/2 w-[28%] h-[82%] cursor-pointer overflow-hidden z-0 transition-all duration-500 hover:opacity-50"
                style={{
                  filter: 'blur(3px)',
                  opacity: 0.32,
                  transform: 'translateY(-50%) scale(0.88)',
                }}
              >
                <div className="relative w-full h-full">
                  <Image
                    src={prevLook.modelImage}
                    alt={prevLook.title}
                    fill
                    sizes="(max-width: 768px) 30vw, 20vw"
                    className="object-contain object-center"
                  />
                </div>
              </div>

              {/* Centre Model — Sharp, Dominant on Stage */}
              <div
                key={currentLook.id}
                className="relative h-[92%] w-[58%] sm:w-[52%] overflow-hidden rounded-2xl z-10 transition-all duration-500 ease-out flex items-center justify-center"
                style={{
                  filter: 'drop-shadow(0 20px 30px rgba(0,0,0,0.18))',
                }}
              >
                <div className="relative w-full h-full">
                  <Image
                    src={currentLook.modelImage}
                    alt={currentLook.title}
                    fill
                    sizes="(max-width: 1024px) 70vw, 40vw"
                    className="object-contain object-center"
                    priority
                  />

                  {/* Gradient bottom bar for title */}
                  <div className="absolute inset-x-0 bottom-0 pt-16 pb-4 px-4 bg-gradient-to-t from-black/75 via-black/25 to-transparent rounded-b-2xl pointer-events-none text-center">
                    <span className="text-[10px] uppercase tracking-widest text-amber-300 font-semibold block drop-shadow-sm">
                      {currentLook.colorTheme}
                    </span>
                    <h3 className="font-serif text-xl sm:text-2xl font-bold tracking-wide text-white drop-shadow-sm">
                      {currentLook.title}
                    </h3>
                  </div>
                </div>
              </div>

              {/* Next Model — blurred & faded on right */}
              <div
                onClick={handleNext}
                className="absolute right-2 sm:right-4 top-1/2 -translate-y-1/2 w-[28%] h-[82%] cursor-pointer overflow-hidden z-0 transition-all duration-500 hover:opacity-50"
                style={{
                  filter: 'blur(3px)',
                  opacity: 0.32,
                  transform: 'translateY(-50%) scale(0.88)',
                }}
              >
                <div className="relative w-full h-full">
                  <Image
                    src={nextLook.modelImage}
                    alt={nextLook.title}
                    fill
                    sizes="(max-width: 768px) 30vw, 20vw"
                    className="object-contain object-center"
                  />
                </div>
              </div>
            </div>

            {/* Counter & Navigation Controls */}
            <div className="mt-5 flex items-center justify-between px-1">
              <span className="text-xs font-semibold tracking-widest uppercase text-stone-500">
                {currentLook.number} · <strong className="text-stone-900">{currentLook.title}</strong>
              </span>
              <div className="flex items-center gap-3">
                <span className="hidden sm:inline text-[11px] tracking-wider uppercase text-stone-400 italic">
                  Scroll or drag
                </span>
                <button
                  onClick={handlePrev}
                  className="p-2.5 rounded-full border border-stone-300 hover:border-stone-900 hover:bg-stone-900 hover:text-white transition-all active:scale-95 shadow-sm"
                  aria-label="Previous look"
                >
                  <ChevronLeft className="w-4 h-4" />
                </button>
                <button
                  onClick={handleNext}
                  className="p-2.5 rounded-full border border-stone-300 hover:border-stone-900 hover:bg-stone-900 hover:text-white transition-all active:scale-95 shadow-sm"
                  aria-label="Next look"
                >
                  <ChevronRight className="w-4 h-4" />
                </button>
              </div>
            </div>
          </div>

          {/* Right: "In this look" Panel (5 Columns) */}
          <div className="lg:col-span-5 bg-[#FAF8F5] rounded-3xl p-6 sm:p-8 border border-stone-200 shadow-xl flex flex-col justify-between">
            <div>
              <div className="pb-4 border-b border-stone-200">
                <h3 className="font-serif text-2xl font-bold text-stone-900">In this look</h3>
              </div>

              {/* 6 Trousseau Items */}
              <div className="mt-3 divide-y divide-stone-200/80">
                {itemsList.map((item) => {
                  const itemId = `${currentLook.id}-${item.key}`;
                  const fav = isInWishlist(itemId);

                  return (
                    <div key={item.key} className="py-3 flex items-center justify-between gap-3">
                      <div className="flex items-center gap-3 min-w-0">
                        {/* Thumbnail — Clean isolated product swatch */}
                        <div className="relative w-12 h-12 rounded-xl overflow-hidden bg-white flex-shrink-0 border border-stone-300 shadow-sm p-0.5">
                          <Image src={item.image} alt={item.name} fill className="object-cover rounded-lg" />
                        </div>
                        <div className="min-w-0">
                          <span className="text-[9px] font-bold tracking-wider uppercase text-stone-500 block truncate">
                            {item.brand}
                          </span>
                          <h4 className="text-xs font-semibold text-stone-900 truncate">
                            {item.name}
                          </h4>
                          <span className="text-xs font-bold text-stone-800">
                            ₹{item.price.toLocaleString('en-IN')}
                          </span>
                        </div>
                      </div>

                      {/* Heart Wishlist & Plus Add-to-bag */}
                      <div className="flex items-center gap-1.5 flex-shrink-0">
                        <button
                          onClick={() => toggleWishlist(itemId, item.name)}
                          className={`p-2 rounded-full transition-colors ${
                            fav ? 'text-red-600 bg-red-50' : 'text-stone-400 hover:text-red-500 hover:bg-stone-100'
                          }`}
                          title="Wishlist"
                        >
                          <Heart className={`w-4 h-4 ${fav ? 'fill-current' : ''}`} />
                        </button>
                        <button
                          onClick={() => addToCart({ id: itemId, name: item.name, subtitle: item.brand, price: item.price, image: item.image })}
                          className="p-2 rounded-full bg-stone-900 text-white hover:bg-[#6e1327] active:scale-95 transition-all shadow-sm"
                          title="Add to bag"
                        >
                          <Plus className="w-4 h-4" />
                        </button>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>

            {/* Complete the look Bundle Box */}
            <div className="mt-6 pt-5 border-t border-stone-200">
              <div className="flex items-center justify-between mb-2">
                <div>
                  <h4 className="font-serif text-base font-bold text-stone-900">Complete the look</h4>
                  <span className="text-xs text-[#6e1327] font-semibold">Bundle all 6 pieces · save 10%</span>
                </div>
                <div className="text-right">
                  <del className="text-xs text-stone-400 block">₹{rawTotal.toLocaleString('en-IN')}</del>
                  <span className="font-serif text-xl font-bold text-stone-900">₹{bundlePrice.toLocaleString('en-IN')}</span>
                </div>
              </div>
              <button
                onClick={handleAddFullLook}
                className="w-full mt-3 py-3.5 px-6 rounded-full text-xs sm:text-sm font-semibold tracking-wider uppercase bg-[#6e1327] hover:bg-[#85162f] text-white active:scale-95 transition-all shadow-lg flex items-center justify-center gap-2"
              >
                <ShoppingBag className="w-4 h-4 text-amber-300" />
                <span>Add full look to bag</span>
              </button>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
