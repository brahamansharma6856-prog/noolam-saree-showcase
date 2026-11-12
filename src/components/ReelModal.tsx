'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import { useShop } from '@/context/ShopContext';
import { X, Volume2, VolumeX, Play, Pause, ShoppingBag, MapPin, Sparkles } from 'lucide-react';

export default function ReelModal() {
  const { activeReel, setActiveReel, addToCart } = useShop();
  const [isPlaying, setIsPlaying] = useState(true);
  const [isMuted, setIsMuted] = useState(false);

  if (!activeReel) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/90 backdrop-blur-2xl animate-fade-in">
      {/* Click outside to close */}
      <div className="fixed inset-0" onClick={() => setActiveReel(null)} />

      {/* Reel Phone Container */}
      <div className="relative z-10 w-full max-w-sm aspect-[9/16] rounded-3xl overflow-hidden bg-stone-900 border border-amber-500/40 shadow-2xl flex flex-col justify-between">
        <Image
          src={activeReel.thumbnail}
          alt={activeReel.title}
          fill
          priority
          className="object-cover object-center"
        />

        {/* Dark Vignette */}
        <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-black/60 pointer-events-none" />

        {/* Top Bar */}
        <div className="relative z-10 p-4 flex items-center justify-between text-white">
          <div className="flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-amber-400 animate-pulse" />
            <span className="text-[10px] font-bold tracking-widest uppercase text-amber-200">
              {activeReel.number} · {activeReel.duration}
            </span>
          </div>

          <div className="flex items-center gap-2">
            <button
              onClick={() => setIsMuted(!isMuted)}
              className="p-2 rounded-full bg-black/50 text-white hover:bg-black/80 backdrop-blur-md"
              aria-label="Toggle mute"
            >
              {isMuted ? <VolumeX className="w-4 h-4 text-stone-300" /> : <Volume2 className="w-4 h-4 text-amber-300 animate-pulse" />}
            </button>

            <button
              onClick={() => setActiveReel(null)}
              className="p-2 rounded-full bg-black/50 text-white hover:bg-black/80 backdrop-blur-md"
              aria-label="Close"
            >
              <X className="w-4 h-4" />
            </button>
          </div>
        </div>

        {/* Center Play/Pause button */}
        <div className="relative z-10 flex-1 flex items-center justify-center">
          <button
            onClick={() => setIsPlaying(!isPlaying)}
            className="w-14 h-14 rounded-full bg-[#6e1327]/80 text-amber-300 border border-amber-400/50 backdrop-blur-md flex items-center justify-center hover:scale-110 active:scale-95 transition-all shadow-xl"
            aria-label={isPlaying ? 'Pause' : 'Play'}
          >
            {isPlaying ? <Pause className="w-5 h-5" /> : <Play className="w-5 h-5 fill-current ml-0.5" />}
          </button>
        </div>

        {/* Bottom Details & Quick Buy */}
        <div className="relative z-10 p-5 space-y-3">
          <div>
            <span className="text-[9px] font-bold tracking-wider uppercase text-amber-300 block mb-1">
              {activeReel.fabricType}
            </span>
            <h3 className="font-serif text-xl font-bold text-white leading-tight">
              {activeReel.title}
            </h3>
            <p className="text-[11px] text-stone-300 flex items-center gap-1 mt-0.5">
              <MapPin className="w-3.5 h-3.5 text-amber-400 flex-shrink-0" />
              <span>{activeReel.location}</span>
            </p>
          </div>

          <p className="text-[11px] text-stone-300 font-light leading-relaxed">
            {activeReel.description}
          </p>

          <button
            onClick={() => {
              addToCart({
                id: activeReel.id,
                name: `${activeReel.title} Silk Saree`,
                subtitle: `${activeReel.fabricType} (${activeReel.location})`,
                price: 52000,
                image: activeReel.thumbnail,
              });
              setActiveReel(null);
            }}
            className="w-full py-3 rounded-full text-xs font-semibold tracking-widest uppercase bg-gradient-to-r from-amber-400 to-amber-500 text-stone-950 hover:brightness-110 active:scale-95 transition-all shadow-lg flex items-center justify-center gap-2"
          >
            <ShoppingBag className="w-4 h-4" />
            <span>Shop This Featured Saree · ₹52,000</span>
          </button>
        </div>

      </div>
    </div>
  );
}

