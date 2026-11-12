'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import { RACK_PIECES, SareeItem } from '@/data/sarees';
import { useShop } from '@/context/ShopContext';

export default function TheRack() {
  const [activeFilter, setActiveFilter] = useState<string>('all');
  const [hoveredId, setHoveredId] = useState<string | null>(null);
  const { setActiveRackItem } = useShop();

  // Exact filter chips from screenshot 05
  const filterChips = [
    { id: 'all',         label: 'All pieces',          count: 25 },
    { id: 'silk',        label: 'Silk Sarees',         count: 9  },
    { id: 'half',        label: 'Half Sarees',         count: 4  },
    { id: 'blouse-full', label: 'Full-Sleeve Blouses', count: 4  },
    { id: 'blouse-half', label: 'Half-Sleeve Blouses', count: 8  },
    { id: 'checked',     label: 'Checked Sarees',      count: 5  },
    { id: 'zari',        label: 'Zari & Brocade',      count: 4  },
  ];

  const filteredPieces =
    activeFilter === 'all'
      ? RACK_PIECES
      : RACK_PIECES.filter((p) => p.category === activeFilter);

  const hoveredPiece = hoveredId ? RACK_PIECES.find((p) => p.id === hoveredId) ?? null : null;

  return (
    <section id="the-rack" className="py-24 px-4 sm:px-6 lg:px-8 bg-white text-stone-900 overflow-hidden relative border-t border-stone-200">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-8 pb-4">
          <div>
            <span className="text-[11px] font-bold tracking-[0.25em] uppercase text-[#6e1327] block mb-1">
              THE COLLECTION
            </span>
            <h2 className="text-4xl sm:text-6xl font-serif font-bold text-stone-900 tracking-tight">
              Every silk, on the rail.
            </h2>
          </div>
          <div className="mt-4 md:mt-0 text-left md:text-right">
            <span className="text-[11px] font-bold tracking-widest uppercase text-stone-800 block">
              Explore the collection · 9 pieces
            </span>
            <span className="text-[10px] text-stone-400 block tracking-wider uppercase">
              AI-generated studio imagery · Demo collection
            </span>
          </div>
        </div>

        {/* Filter Chips */}
        <div className="flex items-center gap-2 overflow-x-auto pb-3 mb-12 scrollbar-none">
          {filterChips.map((chip) => (
            <button
              key={chip.id}
              onClick={() => setActiveFilter(chip.id)}
              className={`px-4 py-2 rounded-full text-xs font-semibold tracking-wider whitespace-nowrap transition-all duration-200 ${
                activeFilter === chip.id
                  ? 'bg-stone-900 text-white shadow-md scale-105'
                  : 'bg-stone-100 text-stone-600 hover:bg-stone-200 hover:text-stone-900'
              }`}
            >
              {chip.label} {chip.count}
            </button>
          ))}
        </div>

        {/* The Rail Container */}
        <div className="relative pt-6 pb-16">
          {/* Chrome Clothes Rail (Single continuous rod across full container) */}
          <div className="relative w-full max-w-6xl mx-auto">
            {/* Chrome rod itself */}
            <div className="relative w-full h-[6px] bg-gradient-to-r from-stone-400 via-stone-200 to-stone-400 rounded-full shadow-[inset_0_1px_2px_rgba(0,0,0,0.4)] z-20">
              <div className="absolute -left-3 -top-2.5 w-4 h-6 bg-gradient-to-b from-stone-500 to-stone-700 rounded-sm shadow-md" />
              <div className="absolute -right-3 -top-2.5 w-4 h-6 bg-gradient-to-b from-stone-500 to-stone-700 rounded-sm shadow-md" />
            </div>

            {/* Hangers Hanging on the Single Rail (Horizontal Scroll, Never Wraps) */}
            <div className="overflow-x-auto scrollbar-none pb-6 pt-0 mt-[-10px]">
              <div className="flex items-start justify-start lg:justify-center gap-4 sm:gap-6 px-4 min-w-max">
                {filteredPieces.map((piece: SareeItem) => {
                  const isHovered = hoveredId === piece.id;

                  return (
                    <div
                      key={piece.id}
                      onClick={() => setActiveRackItem(piece)}
                      onMouseEnter={() => setHoveredId(piece.id)}
                      onMouseLeave={() => setHoveredId(null)}
                      className="group relative cursor-pointer flex flex-col items-center w-32 sm:w-36 flex-shrink-0 select-none transition-all duration-300"
                    >
                      {/* Wooden Hanger Hook Looping Over the Rod */}
                      <div
                        className="relative z-30 flex flex-col items-center transition-transform duration-300"
                        style={{ transform: isHovered ? 'translateY(-12px)' : 'translateY(0)' }}
                      >
                        {/* Metallic Hook */}
                        <div
                          style={{
                            width: '14px',
                            height: '18px',
                            border: '2.5px solid #525252',
                            borderBottom: 'none',
                            borderRadius: '8px 8px 0 0',
                            marginBottom: '-1px',
                          }}
                        />
                        {/* Wooden Shoulder Bar */}
                        <div
                          style={{
                            width: '96px',
                            height: '7px',
                            background: 'linear-gradient(to right, #78350f, #b45309, #78350f)',
                            borderRadius: '4px',
                            boxShadow: '0 2px 4px rgba(0,0,0,0.3)',
                            borderTop: '1px solid #d97706',
                          }}
                        />
                      </div>

                      {/* Garment Draped on Hanger */}
                      <div
                        className="relative w-full overflow-hidden rounded-b-xl bg-stone-50 border border-stone-200 transition-all duration-300 -mt-0.5"
                        style={{
                          aspectRatio: '3/4.6',
                          transform: isHovered ? 'translateY(-12px) scale(1.05)' : 'translateY(0) scale(1)',
                          boxShadow: isHovered
                            ? '0 20px 35px -8px rgba(0,0,0,0.35)'
                            : '0 4px 10px -2px rgba(0,0,0,0.1)',
                        }}
                      >
                        <Image
                          src={piece.frontImage}
                          alt={piece.name}
                          fill
                          sizes="(max-width: 768px) 33vw, 15vw"
                          className="object-cover object-top transition-transform duration-500"
                          style={{ transform: isHovered ? 'scale(1.05)' : 'scale(1)' }}
                        />

                        {/* Quick inspect badge on hover */}
                        {isHovered && (
                          <div className="absolute inset-0 flex items-end justify-center pb-3 bg-gradient-to-t from-black/50 via-transparent to-transparent">
                            <span className="px-3 py-1 rounded-full text-[9px] font-bold tracking-wider uppercase bg-white text-stone-900 shadow">
                              Click to inspect
                            </span>
                          </div>
                        )}
                      </div>

                      {/* Label below Hanger */}
                      <div
                        className="mt-3 text-center w-full px-1 transition-all duration-300"
                        style={{ transform: isHovered ? 'translateY(-8px)' : 'translateY(0)' }}
                      >
                        <h4
                          className="text-[11px] font-bold uppercase truncate transition-colors"
                          style={{ color: isHovered ? '#6e1327' : '#1c1917', fontFamily: 'serif' }}
                        >
                          {piece.name}
                        </h4>
                        <span className="text-[11px] font-bold text-stone-700 block mt-0.5">
                          ₹{piece.price.toLocaleString('en-IN')}
                        </span>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>

          {/* Hover Strip */}
          <div
            style={{
              maxWidth: '500px',
              margin: '16px auto 0',
              opacity: hoveredPiece ? 1 : 0,
              transform: hoveredPiece ? 'translateY(0)' : 'translateY(8px)',
              transition: 'opacity 0.2s ease, transform 0.2s ease',
              pointerEvents: 'none',
            }}
            className="bg-stone-950 text-white rounded-2xl px-6 py-3.5 border border-amber-500/30 shadow-2xl flex items-center justify-between gap-4"
          >
            <div>
              <span className="text-[9px] tracking-widest uppercase text-amber-400 font-semibold block">
                Click to lift off the rail
              </span>
              <h4 className="font-serif text-sm font-bold text-white">
                {hoveredPiece?.name ?? ''}
              </h4>
            </div>
            <span className="text-base font-bold text-amber-300 flex-shrink-0">
              ₹{hoveredPiece ? hoveredPiece.price.toLocaleString('en-IN') : ''}
            </span>
          </div>
        </div>
      </div>
    </section>
  );
}
