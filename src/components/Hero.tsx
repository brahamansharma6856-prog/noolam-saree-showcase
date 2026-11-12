'use client';

import React from 'react';
import { ArrowRight } from 'lucide-react';
import Image from 'next/image';

const TICKER_SEGMENTS = [
  '• TRY THE LOOK',
  '• PURE ZARI',
  '• BRIDAL',
  '• THE RACK',
  '• KANJIVARAM',
  '• THE WEAVE',
  '• BANARASI',
  '• SILK IN MOTION',
  '• HERITAGE LOOMS',
];

export default function Hero() {
  const tickerText = TICKER_SEGMENTS.join('   ');

  return (
    <section id="hero" className="relative min-h-screen flex flex-col justify-between overflow-hidden bg-stone-950">
      {/* Full-bleed showroom background */}
      <div className="absolute inset-0 z-0">
        <Image
          src="/assets/01-hero.png"
          alt="NOOLAM Grand Kanchipuram Silk Showroom"
          fill
          priority
          className="object-cover object-center"
          style={{ filter: 'brightness(0.78) contrast(1.08)' }}
        />
        {/* Deep gradient overlay — lighter at center for the text, darker at bottom */}
        <div className="absolute inset-0 bg-gradient-to-t from-stone-950/95 via-stone-950/25 to-stone-950/55" />
        {/* Subtle vignette */}
        <div className="absolute inset-0 bg-radial-gradient pointer-events-none"
          style={{ background: 'radial-gradient(ellipse at 50% 40%, transparent 40%, rgba(0,0,0,0.5) 100%)' }} />
      </div>

      {/* Main center content */}
      <div className="relative z-10 flex-1 flex flex-col justify-center items-center text-center px-4 sm:px-6 pt-36 pb-16 max-w-5xl mx-auto">
        {/* Thin gold eyebrow line */}
        <div className="flex items-center gap-3 mb-7">
          <div className="h-px w-10 bg-gradient-to-r from-transparent to-amber-400/70" />
          <span className="text-[10px] font-bold tracking-[0.35em] uppercase text-amber-300/90">
            Kanchipuram Silk · Est. 2003
          </span>
          <div className="h-px w-10 bg-gradient-to-l from-transparent to-amber-400/70" />
        </div>

        {/* Main headline */}
        <h1
          className="text-5xl sm:text-7xl md:text-[88px] font-serif font-bold text-white leading-[1.05] tracking-tight mb-6 drop-shadow-2xl"
          style={{ textShadow: '0 2px 20px rgba(0,0,0,0.6)' }}
        >
          Woven for the Divine.
        </h1>

        {/* Subheadline */}
        <p className="max-w-2xl text-stone-200/90 text-sm sm:text-base md:text-lg font-light leading-relaxed mb-10 tracking-wide">
          NOOLAM brings the temple looms of Kanchipuram home: Kanjivaram silk in heritage colours,
          bordered in real zari and finished by hand.
        </p>

        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row items-center gap-4 w-full sm:w-auto">
          {/* Try the Look — Maroon */}
          <a
            href="#try-look"
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 px-8 py-3.5 rounded-full text-xs sm:text-sm font-semibold tracking-wider uppercase text-white active:scale-95 transition-all group shadow-lg"
            style={{ backgroundColor: '#6e1327', border: '1px solid rgba(212,175,55,0.3)' }}
            onMouseEnter={e => ((e.currentTarget as HTMLElement).style.backgroundColor = '#85162f')}
            onMouseLeave={e => ((e.currentTarget as HTMLElement).style.backgroundColor = '#6e1327')}
          >
            <span>Try the Look</span>
            <ArrowRight className="w-4 h-4 text-amber-200 group-hover:translate-x-1 transition-transform" />
          </a>

          {/* Browse the Rack — White */}
          <a
            href="#the-rack"
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 px-8 py-3.5 rounded-full text-xs sm:text-sm font-semibold tracking-wider uppercase bg-white text-stone-950 hover:bg-stone-100 active:scale-95 transition-all shadow-lg group"
          >
            <span>Browse the Rack</span>
            <ArrowRight className="w-4 h-4 text-stone-700 group-hover:translate-x-1 transition-transform" />
          </a>
        </div>
      </div>

      {/* Maroon ticker strip */}
      <div
        className="relative z-20 overflow-hidden py-3 border-y"
        style={{ backgroundColor: '#540c1c', borderColor: 'rgba(212,175,55,0.25)' }}
      >
        <div className="animate-ticker flex whitespace-nowrap">
          {/* Two copies for seamless loop */}
          {[0, 1].map((n) => (
            <div
              key={n}
              className="flex items-center px-6"
              style={{ gap: '48px' }}
            >
              {TICKER_SEGMENTS.concat(TICKER_SEGMENTS).map((seg, i) => (
                <span
                  key={i}
                  className="text-[12px] sm:text-[13px] font-semibold tracking-[0.22em] uppercase"
                  style={{ color: 'rgba(252,211,77,0.9)', whiteSpace: 'nowrap' }}
                >
                  {seg}
                </span>
              ))}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
