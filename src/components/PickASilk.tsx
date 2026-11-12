'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import { PICK_SILK_CARDS, PickSilkCard } from '@/data/sarees';
import { useShop } from '@/context/ShopContext';
import { Heart, Plus } from 'lucide-react';

interface TiltState {
  rotateX: number;
  rotateY: number;
  isHovered: boolean;
  isPressed: boolean;
}

export default function PickASilk() {
  const { addToCart, toggleWishlist, isInWishlist } = useShop();
  const [tiltMap, setTiltMap] = useState<Record<string, TiltState>>({});

  // Fanned Arc: 5 cards arranged on a gentle curve with base rotations and offsets
  const arcConfig = [
    { baseRot: -10, baseY: 32, baseX: -380, zIndex: 1 },
    { baseRot: -5,  baseY: 10, baseX: -190, zIndex: 2 },
    { baseRot: 0,   baseY: 0,  baseX: 0,    zIndex: 5 },
    { baseRot: 5,   baseY: 10, baseX: 190,  zIndex: 2 },
    { baseRot: 10,  baseY: 32, baseX: 380,  zIndex: 1 },
  ];

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>, cardId: string) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    const cx = rect.width / 2;
    const cy = rect.height / 2;
    const rX = ((y - cy) / cy) * -12;
    const rY = ((x - cx) / cx) * 12;
    setTiltMap((prev) => ({
      ...prev,
      [cardId]: { rotateX: rX, rotateY: rY, isHovered: true, isPressed: prev[cardId]?.isPressed ?? false },
    }));
  };

  const handleMouseEnter = (cardId: string) => {
    setTiltMap((prev) => ({
      ...prev,
      [cardId]: { ...(prev[cardId] ?? { rotateX: 0, rotateY: 0, isPressed: false }), isHovered: true },
    }));
  };

  const handleMouseLeave = (cardId: string) => {
    setTiltMap((prev) => ({
      ...prev,
      [cardId]: { rotateX: 0, rotateY: 0, isHovered: false, isPressed: false },
    }));
  };

  const handleMouseDown = (cardId: string) => {
    setTiltMap((prev) => ({
      ...prev,
      [cardId]: { ...(prev[cardId] ?? { rotateX: 0, rotateY: 0, isHovered: true }), isPressed: true },
    }));
  };

  const handleMouseUp = (cardId: string) => {
    setTiltMap((prev) => ({
      ...prev,
      [cardId]: { ...(prev[cardId] ?? { rotateX: 0, rotateY: 0, isHovered: true }), isPressed: false },
    }));
  };

  return (
    <section id="pick-silk" className="py-24 px-4 sm:px-6 bg-[#FAF7F2] text-stone-900 overflow-hidden relative border-t border-stone-200">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <h2 className="text-4xl sm:text-6xl font-serif font-bold text-stone-900 tracking-tight">
            Pick a Silk
          </h2>
          <p className="mt-3 text-xs sm:text-sm text-stone-600 font-light tracking-wider">
            Tilt a card, press it, poke the silk. Hit + to drop a saree into your bag.
          </p>
        </div>

        {/* Fanned Arc Container */}
        <div className="w-full overflow-x-auto pb-10 scrollbar-none flex justify-start lg:justify-center">
          <div
            className="relative flex justify-center items-end flex-shrink-0 mx-auto select-none"
            style={{ width: '1060px', height: '520px', perspective: '1200px' }}
          >
            {PICK_SILK_CARDS.map((card: PickSilkCard, index: number) => {
              const cfg = arcConfig[index] ?? { baseRot: 0, baseY: 0, baseX: 0, zIndex: 1 };
              const tilt = tiltMap[card.id] ?? { rotateX: 0, rotateY: 0, isHovered: false, isPressed: false };
              const isFavorited = isInWishlist(card.id);

              const hoverLift = tilt.isHovered ? -28 : 0;
              const pressScale = tilt.isPressed ? 0.95 : tilt.isHovered ? 1.05 : 1;
              const hoverRot = tilt.isHovered ? 0 : cfg.baseRot;
              const cleanCardImg = `/assets/clean_silk_${index + 1}.png`;

              return (
                <div
                  key={card.id}
                  className="absolute cursor-pointer"
                  style={{
                    width: '210px',
                    height: '420px',
                    zIndex: tilt.isHovered ? 50 : cfg.zIndex,
                    left: '50%',
                    transform: `translateX(calc(-50% + ${cfg.baseX}px)) translateY(${cfg.baseY + hoverLift}px)`,
                    transition: 'z-index 0s, transform 0.4s cubic-bezier(0.34, 1.56, 0.64, 1)',
                  }}
                  onMouseMove={(e) => handleMouseMove(e, card.id)}
                  onMouseEnter={() => handleMouseEnter(card.id)}
                  onMouseLeave={() => handleMouseLeave(card.id)}
                  onMouseDown={() => handleMouseDown(card.id)}
                  onMouseUp={() => handleMouseUp(card.id)}
                >
                  <div
                    className="relative w-full h-full rounded-3xl overflow-hidden shadow-2xl"
                    style={{
                      transform: `rotate(${hoverRot}deg) scale(${pressScale}) rotateX(${tilt.rotateX}deg) rotateY(${tilt.rotateY}deg)`,
                      transition: tilt.isHovered
                        ? 'transform 0.08s ease-out'
                        : 'transform 0.5s cubic-bezier(0.34, 1.56, 0.64, 1)',
                      transformStyle: 'preserve-3d',
                      boxShadow: tilt.isHovered
                        ? '0 30px 60px -10px rgba(0,0,0,0.5), 0 0 0 1px rgba(212,175,55,0.4)'
                        : '0 12px 28px -6px rgba(0,0,0,0.3)',
                    }}
                  >
                    {/* The Full Rich Card Image */}
                    <Image
                      src={cleanCardImg}
                      alt={card.title}
                      fill
                      sizes="210px"
                      className="object-cover object-center"
                      priority
                    />

                    {/* Top Heart Wishlist Button */}
                    <div className="absolute top-3.5 right-3.5 z-20">
                      <button
                        onClick={(e) => {
                          e.stopPropagation();
                          toggleWishlist(card.id, card.title);
                        }}
                        className={`p-1.5 rounded-full backdrop-blur-md transition-all shadow-md ${
                          isFavorited ? 'bg-red-600 text-white' : 'bg-black/40 text-stone-300 hover:text-white'
                        }`}
                        aria-label="Wishlist"
                      >
                        <Heart className={`w-3.5 h-3.5 ${isFavorited ? 'fill-current' : ''}`} />
                      </button>
                    </div>

                    {/* Round Black Plus Button at Bottom Right */}
                    <div className="absolute bottom-3.5 right-3.5 z-20">
                      <button
                        onClick={(e) => {
                          e.stopPropagation();
                          addToCart({
                            id: card.id,
                            name: `${card.title} Silk Saree`,
                            subtitle: card.tagline,
                            price: card.price,
                            image: cleanCardImg,
                          });
                        }}
                        className="w-9 h-9 rounded-full bg-stone-950 text-white border border-amber-400/40 hover:bg-[#6e1327] active:scale-90 transition-all shadow-xl flex items-center justify-center group/btn"
                        title="Add to bag"
                        aria-label="Add to bag"
                      >
                        <Plus className="w-4 h-4 text-amber-300 group-hover/btn:rotate-90 transition-transform" />
                      </button>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
