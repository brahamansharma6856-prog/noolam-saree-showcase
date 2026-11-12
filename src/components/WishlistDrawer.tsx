'use client';

import React from 'react';
import Image from 'next/image';
import { useShop } from '@/context/ShopContext';
import { RACK_PIECES, PICK_SILK_CARDS, BRIDAL_COLLECTION } from '@/data/sarees';
import { X, Heart, ShoppingBag, Trash2 } from 'lucide-react';

export default function WishlistDrawer() {
  const { wishlist, toggleWishlist, addToCart, isWishlistOpen, setIsWishlistOpen } = useShop();

  if (!isWishlistOpen) return null;

  // Aggregate all items
  const allItems = [
    ...RACK_PIECES.map((p) => ({ id: p.id, name: p.name, subtitle: p.subtitle, price: p.price, image: p.frontImage })),
    ...PICK_SILK_CARDS.map((p) => ({ id: p.id, name: p.title, subtitle: p.tagline, price: p.price, image: p.image })),
    ...BRIDAL_COLLECTION.map((p) => ({ id: p.id, name: p.title, subtitle: p.subtitle, price: p.price, image: p.image })),
  ];

  const wishedItems = allItems.filter((item) => wishlist.includes(item.id));

  return (
    <div className="fixed inset-0 z-50 overflow-hidden bg-black/60 backdrop-blur-sm animate-fade-in">
      <div className="absolute inset-0" onClick={() => setIsWishlistOpen(false)} />

      <div className="absolute inset-y-0 right-0 max-w-full flex pl-10">
        <div className="w-screen max-w-md bg-[#FAF8F5] shadow-2xl flex flex-col justify-between border-l border-amber-500/30">
          
          {/* Header */}
          <div className="px-6 py-5 bg-white border-b border-stone-200 flex items-center justify-between">
            <div className="flex items-center gap-2">
              <Heart className="w-5 h-5 text-red-600 fill-red-600" />
              <h2 className="font-serif text-lg font-bold text-stone-900 tracking-wide">
                Saved Heirlooms ({wishlist.length})
              </h2>
            </div>
            <button
              onClick={() => setIsWishlistOpen(false)}
              className="p-2 rounded-full hover:bg-stone-100 text-stone-600 transition-colors"
              aria-label="Close wishlist"
            >
              <X className="w-5 h-5" />
            </button>
          </div>

          {/* List */}
          <div className="flex-1 overflow-y-auto p-6 divide-y divide-stone-200">
            {wishedItems.length === 0 ? (
              <div className="text-center py-16 space-y-3">
                <div className="w-16 h-16 rounded-full bg-stone-100 text-stone-400 mx-auto flex items-center justify-center">
                  <Heart className="w-8 h-8" />
                </div>
                <h3 className="font-serif text-xl font-bold text-stone-800">
                  Your wishlist is empty
                </h3>
                <p className="text-xs text-stone-500">
                  Tap the heart icon on any saree to save it for your trousseau.
                </p>
              </div>
            ) : (
              wishedItems.map((item) => (
                <div key={item.id} className="py-4 flex gap-4 items-center justify-between">
                  <div className="flex items-center gap-3 min-w-0">
                    <div className="relative w-14 h-16 rounded-xl overflow-hidden bg-stone-200 flex-shrink-0 border border-stone-300">
                      <Image src={item.image} alt={item.name} fill className="object-cover" />
                    </div>
                    <div className="min-w-0">
                      <h4 className="text-xs font-bold text-stone-900 truncate">
                        {item.name}
                      </h4>
                      <span className="text-[10px] text-stone-500 block truncate">
                        {item.subtitle}
                      </span>
                      <span className="text-xs font-bold text-[#6e1327] block mt-0.5">
                        ₹{item.price.toLocaleString('en-IN')}
                      </span>
                    </div>
                  </div>

                  <div className="flex items-center gap-2 flex-shrink-0">
                    <button
                      onClick={() => {
                        addToCart({
                          id: item.id,
                          name: item.name,
                          subtitle: item.subtitle,
                          price: item.price,
                          image: item.image,
                        });
                        toggleWishlist(item.id);
                      }}
                      className="p-2 rounded-full bg-[#6e1327] text-white hover:bg-[#85162f] transition-all shadow-sm"
                      title="Move to bag"
                    >
                      <ShoppingBag className="w-4 h-4 text-amber-300" />
                    </button>

                    <button
                      onClick={() => toggleWishlist(item.id)}
                      className="p-2 text-stone-400 hover:text-red-600 transition-colors"
                      title="Remove from wishlist"
                    >
                      <Trash2 className="w-4 h-4" />
                    </button>
                  </div>
                </div>
              ))
            )}
          </div>

          <div className="p-6 bg-white border-t border-stone-200">
            <button
              onClick={() => setIsWishlistOpen(false)}
              className="w-full py-3 rounded-full text-xs font-semibold tracking-wider uppercase bg-stone-900 text-white hover:bg-stone-800 transition-colors"
            >
              Back to Collection
            </button>
          </div>

        </div>
      </div>
    </div>
  );
}

