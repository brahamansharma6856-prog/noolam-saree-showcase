'use client';

import React, { useState, useEffect, useRef } from 'react';
import Image from 'next/image';
import { MUSE_REELS, ReelItem } from '@/data/sarees';
import { useShop } from '@/context/ShopContext';
import { Play, Pause, ChevronLeft, ChevronRight, MapPin } from 'lucide-react';

export default function MuseReels() {
  const [activeIdx, setActiveIdx] = useState(2);
  const [isPlaying, setIsPlaying] = useState(true);
  const [progress, setProgress] = useState(42);
  const { setActiveReel } = useShop();
  const progressRef = useRef<NodeJS.Timeout | null>(null);

  const reelPhotos = [
    '/assets/clean_mood_1.png',
    '/assets/clean_mood_2.png',
    '/assets/clean_reel_photo_3.png',
    '/assets/clean_mood_4.png',
    '/assets/clean_mood_5.png',
  ];

  useEffect(() => {
    if (progressRef.current) clearInterval(progressRef.current);
    if (!isPlaying) return;
    progressRef.current = setInterval(() => {
      setProgress((p) => (p >= 100 ? 0 : p + 1.2));
    }, 250);
    return () => { if (progressRef.current) clearInterval(progressRef.current); };
  }, [isPlaying, activeIdx]);

  const handlePrev = () => { setActiveIdx((p) => (p === 0 ? MUSE_REELS.length - 1 : p - 1)); setProgress(0); };
  const handleNext = () => { setActiveIdx((p) => (p === MUSE_REELS.length - 1 ? 0 : p + 1)); setProgress(0); };

  // 3D curved arc physics
  const getCardStyle = (idx: number) => {
    const offset = idx - activeIdx;
    const absOffset = Math.abs(offset);

    // 3D rotation around Y axis
    const rotateY = offset * 22;
    // Translate along Z (center card closest)
    const translateZ = absOffset === 0 ? 60 : absOffset === 1 ? -20 : -70;
    // Translate along X
    const translateX = offset * 230;
    // Scale: center is biggest
    const scale = absOffset === 0 ? 1.06 : absOffset === 1 ? 0.86 : 0.72;
    // Opacity: center is brightest
    const opacity = absOffset === 0 ? 1 : absOffset === 1 ? 0.72 : 0.45;
    // zIndex
    const zIndex = 20 - absOffset * 4;

    return { rotateY, translateZ, translateX, scale, opacity, zIndex };
  };

  return (
    <section id="muse-reels" className="py-24 px-4 sm:px-6 lg:px-8 bg-white text-stone-900 overflow-hidden relative border-t border-stone-200">
      <div className="max-w-7xl mx-auto relative z-10">
        {/* Header + Controls */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 pb-6 border-b border-stone-200">
          <div>
            <span className="text-[11px] font-bold tracking-[0.25em] uppercase text-[#6e1327] block mb-1">
              THE MUSE REELS
            </span>
            <h2 className="text-4xl sm:text-6xl font-serif font-bold text-stone-900 tracking-tight">
              Silk, in motion.
            </h2>
            <p className="mt-2 text-stone-500 text-xs sm:text-sm font-light max-w-xl leading-relaxed">
              Five drapes filmed the way they are lived in — lamp rooms, temple lanes, a morning by the sea.
              Tap the centre reel to watch it full screen, with sound.
            </p>
          </div>

          {/* Top-right controls: Prev, Pause/Play, Next */}
          <div className="mt-6 md:mt-0 flex items-center gap-2.5">
            <button
              onClick={handlePrev}
              className="p-3 rounded-full border border-stone-300 hover:border-stone-900 text-stone-700 hover:text-stone-950 transition-all active:scale-95"
              aria-label="Previous reel"
            >
              <ChevronLeft className="w-4 h-4" />
            </button>
            <button
              onClick={() => setIsPlaying((p) => !p)}
              className="p-3 rounded-full border border-stone-300 hover:border-stone-900 text-stone-700 hover:text-stone-950 transition-all active:scale-95"
              aria-label={isPlaying ? 'Pause' : 'Play'}
            >
              {isPlaying ? <Pause className="w-4 h-4" /> : <Play className="w-4 h-4 fill-current ml-0.5" />}
            </button>
            <button
              onClick={handleNext}
              className="p-3 rounded-full border border-stone-300 hover:border-stone-900 text-stone-700 hover:text-stone-950 transition-all active:scale-95"
              aria-label="Next reel"
            >
              <ChevronRight className="w-4 h-4" />
            </button>
          </div>
        </div>

        {/* 3D Curved Arc Container */}
        <div
          className="relative flex justify-center items-center overflow-hidden"
          style={{ height: '560px', perspective: '1200px', perspectiveOrigin: '50% 50%' }}
        >
          {MUSE_REELS.map((reel: ReelItem, idx: number) => {
            const { rotateY, translateZ, translateX, scale, opacity, zIndex } = getCardStyle(idx);
            const isCenter = idx === activeIdx;
            const photo = reelPhotos[idx];

            return (
              <div
                key={reel.id}
                onClick={() => {
                  if (isCenter) setActiveReel(reel);
                  else { setActiveIdx(idx); setProgress(0); }
                }}
                style={{
                  position: 'absolute',
                  width: '210px',
                  zIndex,
                  opacity,
                  transform: `translateX(${translateX}px) translateZ(${translateZ}px) rotateY(${rotateY}deg) scale(${scale})`,
                  transition: 'all 0.55s cubic-bezier(0.4, 0, 0.2, 1)',
                  cursor: 'pointer',
                  transformStyle: 'preserve-3d',
                }}
                className="select-none"
              >
                {/* Reel Card Phone Frame */}
                <div
                  className={`relative rounded-3xl overflow-hidden bg-[#1c1917] text-white ${
                    isCenter
                      ? 'p-[3px] bg-gradient-to-b from-amber-300 via-amber-500 to-amber-700 shadow-[0_25px_50px_rgba(212,175,55,0.35)]'
                      : 'shadow-xl'
                  }`}
                  style={{ aspectRatio: '9/16' }}
                >
                  <div className="relative w-full h-full rounded-[21px] overflow-hidden bg-stone-950">
                    <Image
                      src={photo}
                      alt={reel.title}
                      fill
                      sizes="210px"
                      className="object-cover object-center"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/20 to-black/60 pointer-events-none" />

                    {/* Top: reel number & duration */}
                    <div className="absolute top-3.5 inset-x-3.5 flex items-center justify-between z-10">
                      <span className="px-2.5 py-0.5 rounded-full text-[9px] font-bold tracking-widest uppercase bg-black/60 text-amber-200 border border-white/10 backdrop-blur-md">
                        {reel.number}
                      </span>
                      <span className="text-[9px] font-semibold text-white/90 bg-black/40 px-2 py-0.5 rounded backdrop-blur-sm">
                        {reel.duration}
                      </span>
                    </div>

                    {/* Center play button on active reel */}
                    {isCenter && (
                      <div className="absolute inset-0 flex items-center justify-center z-20">
                        <div className="w-14 h-14 rounded-full bg-[#6e1327]/90 border border-amber-400/60 backdrop-blur-md flex items-center justify-center shadow-2xl hover:scale-110 active:scale-95 transition-transform">
                          <Play className="w-6 h-6 fill-amber-300 text-amber-300 ml-0.5" />
                        </div>
                      </div>
                    )}

                    {/* Bottom info */}
                    <div className="absolute bottom-3.5 inset-x-3.5 z-10">
                      <span className="text-[9px] font-bold tracking-wider uppercase text-amber-300 block mb-0.5">
                        {reel.fabricType}
                      </span>
                      <h4 className="font-serif text-sm font-bold text-white leading-tight mb-0.5">
                        {reel.title}
                      </h4>
                      <p className="text-[9px] text-stone-300 flex items-center gap-1">
                        <MapPin className="w-2.5 h-2.5 text-amber-400 flex-shrink-0" />
                        <span className="truncate">{reel.location}</span>
                      </p>

                      {/* Gold progress bar on active reel */}
                      {isCenter && (
                        <div className="mt-2.5 w-full h-1 bg-stone-800 rounded-full overflow-hidden">
                          <div
                            className="h-full rounded-full transition-all duration-300"
                            style={{
                              width: `${progress}%`,
                              background: 'linear-gradient(to right, #d4af37, #f7e7a9)',
                              boxShadow: '0 0 8px rgba(212,175,55,0.8)',
                            }}
                          />
                        </div>
                      )}
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
