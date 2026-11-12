'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import { Volume2, VolumeX, Play, Pause, ArrowRight } from 'lucide-react';

export default function MuseFilm() {
  const [isPlaying, setIsPlaying] = useState(true);
  const [isMuted, setIsMuted] = useState(true);

  const lifestylePhotos = [
    '/assets/clean_mood_1.png',
    '/assets/clean_mood_2.png',
    '/assets/clean_mood_3.png',
    '/assets/clean_mood_4.png',
    '/assets/clean_mood_5.png',
    '/assets/clean_mood_6.png',
    '/assets/clean_silk_1.png',
    '/assets/clean_silk_2.png',
    '/assets/clean_silk_3.png',
    '/assets/clean_silk_4.png',
  ];

  return (
    <section id="muse-film" className="py-24 px-4 sm:px-6 lg:px-8 bg-white text-stone-900 overflow-hidden relative border-t border-stone-200">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-14">
          <span className="text-[11px] font-bold tracking-[0.25em] uppercase text-[#6e1327] block mb-1">
            THE MUSE FILM
          </span>
          <h2 className="text-4xl sm:text-6xl font-serif font-bold text-stone-900 tracking-tight">
            Feel the <span className="maroon-gold-gradient italic font-normal">drape</span>
          </h2>
        </div>

        {/* 3-Column Display */}
        <div className="relative grid grid-cols-1 lg:grid-cols-12 gap-6 items-center max-w-6xl mx-auto">
          
          {/* Left Column Scrolling Upwards */}
          <div className="hidden lg:block lg:col-span-2 relative h-[500px] overflow-hidden rounded-2xl">
            <div className="absolute top-0 inset-x-0 h-24 bg-gradient-to-b from-white to-transparent z-10 pointer-events-none" />
            <div className="absolute bottom-0 inset-x-0 h-24 bg-gradient-to-t from-white to-transparent z-10 pointer-events-none" />

            <div className="animate-scroll-up flex flex-col gap-4">
              {lifestylePhotos.concat(lifestylePhotos).map((img, idx) => (
                <div key={`left-img-${idx}`} className="relative w-full aspect-[3/4] rounded-xl overflow-hidden shadow flex-shrink-0">
                  <Image src={img} alt="Lifestyle Saree" fill sizes="15vw" className="object-cover" />
                </div>
              ))}
            </div>
          </div>

          {/* Center 16:9 Brand Film inside Thin Gold Frame with Corner Brackets */}
          <div className="lg:col-span-8 flex flex-col items-center">
            <div className="relative w-full aspect-[16/9] rounded-2xl p-2 bg-gradient-to-br from-amber-300 via-amber-500 to-amber-700 shadow-2xl">
              
              {/* Traditional Gold Corner Brackets */}
              <div className="absolute -top-1 -left-1 w-5 h-5 border-t-2 border-l-2 border-amber-300 z-20 pointer-events-none" />
              <div className="absolute -top-1 -right-1 w-5 h-5 border-t-2 border-r-2 border-amber-300 z-20 pointer-events-none" />
              <div className="absolute -bottom-1 -left-1 w-5 h-5 border-b-2 border-l-2 border-amber-300 z-20 pointer-events-none" />
              <div className="absolute -bottom-1 -right-1 w-5 h-5 border-b-2 border-r-2 border-amber-300 z-20 pointer-events-none" />

              {/* Video Display Container */}
              <div className="relative w-full h-full rounded-xl overflow-hidden bg-black group">
                <Image
                  src="/assets/clean_muse_film_center.png"
                  alt="NOOLAM Muse Film"
                  fill
                  priority
                  className="object-cover object-center scale-100 filter brightness-95"
                />

                {/* Sound Off Pill on Video */}
                <button
                  onClick={() => setIsMuted(!isMuted)}
                  className="absolute top-4 left-4 z-20 px-3 py-1 rounded-full text-[10px] font-bold tracking-wider uppercase bg-black/60 text-white border border-amber-400/40 backdrop-blur-md flex items-center gap-1.5 hover:bg-black/80 transition-all"
                  aria-label="Toggle Sound"
                >
                  {isMuted ? (
                    <>
                      <VolumeX className="w-3.5 h-3.5 text-stone-300" />
                      <span>Sound off</span>
                    </>
                  ) : (
                    <>
                      <Volume2 className="w-3.5 h-3.5 text-amber-300 animate-pulse" />
                      <span>Sound on</span>
                    </>
                  )}
                </button>

                {/* Play/Pause Button */}
                <div className="absolute inset-0 flex items-center justify-center">
                  <button
                    onClick={() => setIsPlaying(!isPlaying)}
                    className="w-16 h-16 rounded-full bg-[#6e1327]/85 text-amber-200 border border-amber-400/60 backdrop-blur-md flex items-center justify-center hover:scale-110 active:scale-95 transition-all shadow-2xl"
                    aria-label={isPlaying ? 'Pause film' : 'Play film'}
                  >
                    {isPlaying ? (
                      <Pause className="w-6 h-6 text-white" />
                    ) : (
                      <Play className="w-6 h-6 text-white fill-white ml-0.5" />
                    )}
                  </button>
                </div>
              </div>
            </div>

            {/* Below the Film: Purchase the Collection Maroon Button */}
            <div className="mt-8">
              <a
                href="#the-rack"
                className="inline-flex items-center gap-2 px-8 py-3.5 rounded-full text-xs sm:text-sm font-semibold tracking-wider uppercase bg-[#6e1327] hover:bg-[#85162f] text-white active:scale-95 transition-all shadow-lg group"
              >
                <span>Purchase the Collection</span>
                <ArrowRight className="w-4 h-4 text-amber-200 group-hover:translate-x-1 transition-transform" />
              </a>
            </div>
          </div>

          {/* Right Column Scrolling Downwards */}
          <div className="hidden lg:block lg:col-span-2 relative h-[500px] overflow-hidden rounded-2xl">
            <div className="absolute top-0 inset-x-0 h-24 bg-gradient-to-b from-white to-transparent z-10 pointer-events-none" />
            <div className="absolute bottom-0 inset-x-0 h-24 bg-gradient-to-t from-white to-transparent z-10 pointer-events-none" />

            <div className="animate-scroll-down flex flex-col gap-4">
              {lifestylePhotos.slice().reverse().concat(lifestylePhotos).map((img, idx) => (
                <div key={`right-img-${idx}`} className="relative w-full aspect-[3/4] rounded-xl overflow-hidden shadow flex-shrink-0">
                  <Image src={img} alt="Lifestyle Saree" fill sizes="15vw" className="object-cover" />
                </div>
              ))}
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
