'use client';

import React from 'react';
import Image from 'next/image';
import { SIX_MOODS, MoodItem } from '@/data/sarees';
import { useShop } from '@/context/ShopContext';

export default function SixMoods() {
  const { setActiveMood } = useShop();

  return (
    <section id="six-moods" className="py-24 px-4 sm:px-6 lg:px-8 bg-white text-stone-900 overflow-hidden">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 pb-6 border-b border-stone-200">
          <div>
            <span className="text-[11px] font-bold tracking-[0.25em] uppercase text-[#6e1327] block mb-2">
              THE NOOLAM ARCHIVE
            </span>
            <h2 className="text-3xl sm:text-5xl font-serif font-bold text-stone-900 tracking-tight">
              Six Moods.{' '}
              <span className="maroon-gold-gradient italic font-normal">Timeless Drapes</span>
            </h2>
          </div>
          <div className="mt-4 md:mt-0 text-left md:text-right max-w-sm">
            <p className="text-xs sm:text-sm font-semibold tracking-wider text-stone-800 uppercase">
              Woven by hand, worn for a lifetime.
            </p>
            <p className="text-xs text-stone-500 font-light mt-0.5">
              Six silk stories, from quiet mornings to festive evenings.
            </p>
          </div>
        </div>

        {/* Six Temple-Arch Gopuram Windows */}
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-6 sm:gap-8">
          {SIX_MOODS.map((mood: MoodItem, idx: number) => {
            const cleanImage = `/assets/clean_mood_${idx + 1}.png`;

            return (
              <div
                key={mood.id}
                onClick={() => setActiveMood(mood)}
                className="group cursor-pointer flex flex-col items-center select-none"
              >
                {/* Temple-Arch Gopuram Window with Finial on Top */}
                <div
                  className="relative w-full aspect-[202/353] transition-all duration-500 ease-out group-hover:-translate-y-3 group-hover:scale-105"
                  style={{
                    filter: 'drop-shadow(0 4px 10px rgba(0,0,0,0.12))',
                    transitionTimingFunction: 'cubic-bezier(0.34, 1.56, 0.64, 1)',
                  }}
                  onMouseEnter={(e) => {
                    (e.currentTarget as HTMLElement).style.filter =
                      'drop-shadow(0 18px 30px rgba(212,175,55,0.5)) drop-shadow(0 0 15px rgba(212,175,55,0.3))';
                  }}
                  onMouseLeave={(e) => {
                    (e.currentTarget as HTMLElement).style.filter =
                      'drop-shadow(0 4px 10px rgba(0,0,0,0.12))';
                  }}
                >
                  <Image
                    src={cleanImage}
                    alt={mood.title}
                    fill
                    sizes="(max-width: 768px) 50vw, 16vw"
                    className="object-contain"
                    priority={idx < 3}
                  />
                </div>

                {/* Spaced Capital Label Below */}
                <div className="mt-4 text-center">
                  <h3 className="font-serif text-xs sm:text-sm font-bold tracking-[0.2em] text-stone-900 uppercase group-hover:text-[#6e1327] transition-colors duration-300">
                    {mood.title}
                  </h3>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
