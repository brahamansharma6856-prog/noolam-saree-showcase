'use client';

import React, { useState, useEffect } from 'react';
import { useShop } from '@/context/ShopContext';
import { Heart, ShoppingBag, Sparkles, MapPin, Menu, X, ArrowRight } from 'lucide-react';

export default function Navbar() {
  const { cartCount, wishlist, setIsCartOpen, setIsWishlistOpen, setIsStoreModalOpen } = useShop();
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 30);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Home', href: '#hero' },
    { name: 'Try the Look', href: '#try-look' },
    { name: 'Pick a Silk', href: '#pick-silk' },
    { name: 'The Rack', href: '#the-rack' },
    { name: 'The Muse', href: '#muse-film' },
    { name: 'Bridal', href: '#bridal' },
    { name: 'The Weave', href: '#muse-reels' },
  ];

  return (
    <>
      <header
        className={`fixed top-4 inset-x-0 z-50 flex justify-center px-4 transition-all duration-300 ${
          isScrolled ? 'top-3' : 'top-5'
        }`}
      >
        <nav className="glass-pill rounded-full px-5 py-2.5 flex items-center justify-between gap-4 md:gap-8 max-w-6xl w-full border border-amber-400/30 text-white shadow-2xl backdrop-blur-xl bg-[#140b0e]/75">
          {/* Brand Logo */}
          <a href="#hero" className="flex items-center gap-2 group">
            <span className="font-serif tracking-[0.25em] text-lg font-bold text-white group-hover:text-amber-200 transition-colors">
              NOOLAM
            </span>
            <span className="text-amber-400 text-xs">•</span>
            <span className="text-[10px] tracking-[0.25em] text-amber-200/80 uppercase font-medium">
              Kanchipuram
            </span>
          </a>

          {/* Desktop Nav Links */}
          <div className="hidden lg:flex items-center gap-7 text-[12px] font-medium tracking-[0.14em] uppercase text-stone-200">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="hover:text-amber-300 transition-colors relative py-1 hover:after:w-full after:w-0 after:h-[1.5px] after:bg-amber-400 after:absolute after:bottom-0 after:left-0 after:transition-all after:duration-300"
              >
                {link.name}
              </a>
            ))}
          </div>

          {/* Right Actions */}
          <div className="flex items-center gap-3">
            {/* Wishlist */}
            <button
              onClick={() => setIsWishlistOpen(true)}
              className="relative p-2 rounded-full hover:bg-white/10 text-stone-200 hover:text-amber-300 transition-colors"
              title="Wishlist"
              aria-label="Wishlist"
            >
              <Heart className="w-4 h-4" />
              {wishlist.length > 0 && (
                <span className="absolute -top-1 -right-1 bg-red-600 text-white text-[9px] font-bold w-4 h-4 rounded-full flex items-center justify-center border border-black/40">
                  {wishlist.length}
                </span>
              )}
            </button>

            {/* Bag */}
            <button
              onClick={() => setIsCartOpen(true)}
              className="relative p-2 rounded-full hover:bg-white/10 text-stone-200 hover:text-amber-300 transition-colors"
              title="Shopping Bag"
              aria-label="Shopping Bag"
            >
              <ShoppingBag className="w-4 h-4" />
              {cartCount > 0 && (
                <span className="absolute -top-1 -right-1 bg-amber-400 text-stone-950 text-[9px] font-black w-4 h-4 rounded-full flex items-center justify-center border border-stone-900 shadow-sm animate-pulse">
                  {cartCount}
                </span>
              )}
            </button>

            {/* Visit the Store (White Button from Screenshot) */}
            <button
              onClick={() => setIsStoreModalOpen(true)}
              className="hidden sm:inline-flex items-center gap-1.5 px-4 py-1.5 rounded-full text-[11px] font-semibold tracking-wider uppercase bg-white text-stone-950 hover:bg-amber-50 active:scale-95 transition-all shadow-md"
            >
              <span>Visit the Store</span>
            </button>

            {/* Mobile Menu */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="lg:hidden p-2 rounded-full hover:bg-white/10 text-stone-200"
              aria-label="Toggle navigation"
            >
              {mobileMenuOpen ? <X className="w-4 h-4" /> : <Menu className="w-4 h-4" />}
            </button>
          </div>
        </nav>
      </header>

      {/* Mobile Drawer Navigation */}
      {mobileMenuOpen && (
        <div className="fixed inset-0 z-40 bg-stone-950/85 backdrop-blur-md lg:hidden flex flex-col justify-center items-center p-6">
          <div className="bg-[#1a0b10] border border-amber-500/30 rounded-3xl p-6 max-w-xs w-full text-center space-y-4 shadow-2xl">
            <div className="font-serif text-amber-200 text-xl font-bold tracking-widest border-b border-amber-500/20 pb-3">
              NOOLAM ARCHIVE
            </div>
            <div className="flex flex-col space-y-3 text-stone-200 text-sm tracking-widest uppercase">
              {navLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  onClick={() => setMobileMenuOpen(false)}
                  className="py-1 hover:text-amber-400 transition-colors"
                >
                  {link.name}
                </a>
              ))}
            </div>
            <div className="pt-3 border-t border-amber-500/20">
              <button
                onClick={() => {
                  setMobileMenuOpen(false);
                  setIsStoreModalOpen(true);
                }}
                className="w-full py-2.5 rounded-full text-xs font-bold uppercase tracking-wider bg-white text-stone-950 flex items-center justify-center gap-2"
              >
                <span>Visit Showroom</span>
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
