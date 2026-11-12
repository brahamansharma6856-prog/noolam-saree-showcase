'use client';

import React, { useState } from 'react';
import { Sparkles, ShieldCheck, Heart, MapPin, Send, Check } from 'lucide-react';
import { useShop } from '@/context/ShopContext';

export default function Footer() {
  const [email, setEmail] = useState('');
  const [subscribed, setSubscribed] = useState(false);
  const { setIsStoreModalOpen } = useShop();

  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault();
    if (email) {
      setSubscribed(true);
      setEmail('');
    }
  };

  return (
    <footer className="bg-[#12070a] text-white pt-20 pb-12 border-t border-amber-500/20 relative overflow-hidden">
      {/* Decorative top gold hairline */}
      <div className="absolute top-0 inset-x-0 h-[1.5px] bg-gradient-to-r from-transparent via-amber-400 to-transparent" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Top 3 Pillar Highlights */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 pb-16 border-b border-stone-800 text-center md:text-left">
          <div className="flex flex-col sm:flex-row items-center sm:items-start gap-4">
            <div className="w-12 h-12 rounded-2xl bg-amber-500/10 border border-amber-400/30 flex items-center justify-center text-amber-300 flex-shrink-0">
              <ShieldCheck className="w-6 h-6" />
            </div>
            <div>
              <h4 className="font-serif font-bold text-amber-100 text-base">
                100% Pure Silk Mark Certified
              </h4>
              <p className="text-xs text-stone-400 leading-relaxed mt-1 font-light">
                Every meter woven using certified 4-ply mulberry silk and tested electroplated 24kt gold zari.
              </p>
            </div>
          </div>

          <div className="flex flex-col sm:flex-row items-center sm:items-start gap-4">
            <div className="w-12 h-12 rounded-2xl bg-amber-500/10 border border-amber-400/30 flex items-center justify-center text-amber-300 flex-shrink-0">
              <Sparkles className="w-6 h-6" />
            </div>
            <div>
              <h4 className="font-serif font-bold text-amber-100 text-base">
                Generational Master Guild
              </h4>
              <p className="text-xs text-stone-400 leading-relaxed mt-1 font-light">
                Directly sustaining 42 traditional pit-loom weaver families in Pillaiyarpalayam, Kanchipuram.
              </p>
            </div>
          </div>

          <div className="flex flex-col sm:flex-row items-center sm:items-start gap-4">
            <div className="w-12 h-12 rounded-2xl bg-amber-500/10 border border-amber-400/30 flex items-center justify-center text-amber-300 flex-shrink-0">
              <MapPin className="w-6 h-6" />
            </div>
            <div>
              <h4 className="font-serif font-bold text-amber-100 text-base">
                Private Bridal Suites
              </h4>
              <p className="text-xs text-stone-400 leading-relaxed mt-1 font-light">
                Flagship boutiques in Chennai, Kanchipuram, Bangalore, and Hyderabad for customized drapes.
              </p>
            </div>
          </div>
        </div>

        {/* Main Footer Links & Newsletter */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10 py-16">
          {/* Brand Info (2 cols) */}
          <div className="lg:col-span-2 space-y-4">
            <div className="flex items-center gap-2">
              <div className="w-8 h-8 rounded-full bg-gradient-to-br from-amber-400 to-amber-600 flex items-center justify-center text-[#3d0813] font-serif font-bold text-sm shadow">
                ✦
              </div>
              <span className="font-serif text-2xl font-bold tracking-[0.25em] text-amber-100 uppercase">
                NOOLAM
              </span>
            </div>
            <p className="text-xs text-stone-300 leading-relaxed font-light max-w-sm">
              NOOLAM is a temple heritage silk atelier dedicated to preserving the sacred three-shuttle Korvai weaving art of Kanchipuram, crafting heirlooms for muhurthams and royal celebrations.
            </p>
            <div className="pt-2">
              <button
                onClick={() => setIsStoreModalOpen(true)}
                className="inline-flex items-center gap-2 text-xs font-semibold tracking-wider uppercase text-amber-400 hover:text-amber-300 underline underline-offset-4"
              >
                <span>Book a Flagship Boutique Appointment</span>
                <span className="text-amber-300">→</span>
              </button>
            </div>
          </div>

          {/* Navigation Links */}
          <div className="space-y-3">
            <h5 className="text-[11px] font-bold tracking-[0.2em] uppercase text-amber-300">
              The Collection
            </h5>
            <ul className="space-y-2 text-xs text-stone-400 font-light tracking-wider">
              <li><a href="#hero" className="hover:text-amber-200 transition-colors">The Grand Hero</a></li>
              <li><a href="#six-moods" className="hover:text-amber-200 transition-colors">Six Moods Archive</a></li>
              <li><a href="#try-look" className="hover:text-amber-200 transition-colors">Try the Look</a></li>
              <li><a href="#pick-silk" className="hover:text-amber-200 transition-colors">Pick a Silk</a></li>
              <li><a href="#the-rack" className="hover:text-amber-200 transition-colors">The Clothes Rail</a></li>
              <li><a href="#bridal" className="hover:text-amber-200 transition-colors">The Bridal Edit</a></li>
            </ul>
          </div>

          {/* Heritage & Artisans */}
          <div className="space-y-3">
            <h5 className="text-[11px] font-bold tracking-[0.2em] uppercase text-amber-300">
              Weaver Guild
            </h5>
            <ul className="space-y-2 text-xs text-stone-400 font-light tracking-wider">
              <li><a href="#muse-film" className="hover:text-amber-200 transition-colors">The Muse Film</a></li>
              <li><a href="#muse-reels" className="hover:text-amber-200 transition-colors">Silk in Motion Reels</a></li>
              <li><span className="hover:text-amber-200 cursor-pointer">Pit Loom Geometry</span></li>
              <li><span className="hover:text-amber-200 cursor-pointer">Korvai 3-Shuttle Tradition</span></li>
              <li><span className="hover:text-amber-200 cursor-pointer">Zari Testing Standard</span></li>
              <li><span className="hover:text-amber-200 cursor-pointer">Trousseau Preservation</span></li>
            </ul>
          </div>

          {/* Newsletter Box */}
          <div className="space-y-3">
            <h5 className="text-[11px] font-bold tracking-[0.2em] uppercase text-amber-300">
              Private Previews
            </h5>
            <p className="text-xs text-stone-400 font-light leading-relaxed">
              Receive confidential invites to our limited loom releases and private trousseau viewings.
            </p>
            {subscribed ? (
              <div className="p-3 rounded-xl bg-amber-500/10 border border-amber-400/40 text-amber-200 text-xs flex items-center gap-2">
                <Check className="w-4 h-4 text-emerald-400" />
                <span>You are on the VIP Loom Guest List.</span>
              </div>
            ) : (
              <form onSubmit={handleSubscribe} className="space-y-2">
                <div className="relative">
                  <input
                    type="email"
                    required
                    placeholder="Enter your email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className="w-full px-3.5 py-2.5 rounded-xl bg-black/60 border border-stone-700 text-xs text-white placeholder-stone-500 focus:outline-none focus:border-amber-400"
                  />
                  <button
                    type="submit"
                    className="absolute right-1 top-1 bottom-1 px-3 bg-[#6e1327] text-white rounded-lg hover:bg-[#85162f] transition-all flex items-center justify-center"
                    aria-label="Subscribe"
                  >
                    <Send className="w-3.5 h-3.5 text-amber-300" />
                  </button>
                </div>
              </form>
            )}
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-stone-800 flex flex-col sm:flex-row items-center justify-between text-[11px] text-stone-500 tracking-wider">
          <p>© 2026 NOOLAM · Kanchipuram Silk Saree Showcase. All rights reserved.</p>
          <p className="mt-2 sm:mt-0 flex items-center gap-1">
            <span>Crafted with reverence for</span>
            <span className="text-amber-400">sacred temple handloom traditions</span>
          </p>
        </div>
      </div>
    </footer>
  );
}
