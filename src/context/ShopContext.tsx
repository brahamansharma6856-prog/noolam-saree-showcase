'use client';

import React, { createContext, useContext, useState, useEffect } from 'react';
import { SareeItem, ReelItem, MoodItem } from '@/data/sarees';

export interface CartItem {
  id: string;
  name: string;
  subtitle: string;
  price: number;
  originalPrice?: number;
  image: string;
  size?: string;
  quantity: number;
}

interface ToastMessage {
  id: string;
  message: string;
  type: 'cart' | 'wishlist' | 'info';
}

interface ShopContextType {
  cart: CartItem[];
  wishlist: string[];
  addToCart: (item: {
    id: string;
    name: string;
    subtitle?: string;
    price: number;
    originalPrice?: number;
    image: string;
    size?: string;
  }) => void;
  removeFromCart: (id: string, size?: string) => void;
  updateQuantity: (id: string, delta: number, size?: string) => void;
  clearCart: () => void;
  toggleWishlist: (id: string, name?: string) => void;
  isInWishlist: (id: string) => boolean;
  
  // Modals & Drawers
  isCartOpen: boolean;
  setIsCartOpen: (open: boolean) => void;
  isWishlistOpen: boolean;
  setIsWishlistOpen: (open: boolean) => void;
  isStoreModalOpen: boolean;
  setIsStoreModalOpen: (open: boolean) => void;
  
  // Rack detail modal
  activeRackItem: SareeItem | null;
  setActiveRackItem: (item: SareeItem | null) => void;
  
  // Reel detail modal
  activeReel: ReelItem | null;
  setActiveReel: (reel: ReelItem | null) => void;

  // Mood detail modal
  activeMood: MoodItem | null;
  setActiveMood: (mood: MoodItem | null) => void;

  toasts: ToastMessage[];
  dismissToast: (id: string) => void;
  cartTotal: number;
  cartCount: number;
}

const ShopContext = createContext<ShopContextType | undefined>(undefined);

export function ShopProvider({ children }: { children: React.ReactNode }) {
  const [cart, setCart] = useState<CartItem[]>([]);
  const [wishlist, setWishlist] = useState<string[]>([]);
  const [isCartOpen, setIsCartOpen] = useState(false);
  const [isWishlistOpen, setIsWishlistOpen] = useState(false);
  const [isStoreModalOpen, setIsStoreModalOpen] = useState(false);
  const [activeRackItem, setActiveRackItem] = useState<SareeItem | null>(null);
  const [activeReel, setActiveReel] = useState<ReelItem | null>(null);
  const [activeMood, setActiveMood] = useState<MoodItem | null>(null);
  const [toasts, setToasts] = useState<ToastMessage[]>([]);

  // Load from localStorage if available
  useEffect(() => {
    try {
      const savedCart = localStorage.getItem('noolam_cart');
      if (savedCart) setCart(JSON.parse(savedCart));
      const savedWish = localStorage.getItem('noolam_wishlist');
      if (savedWish) setWishlist(JSON.parse(savedWish));
    } catch {
      // ignore
    }
  }, []);

  // Save changes
  useEffect(() => {
    try {
      localStorage.setItem('noolam_cart', JSON.stringify(cart));
    } catch {
      // ignore
    }
  }, [cart]);

  useEffect(() => {
    try {
      localStorage.setItem('noolam_wishlist', JSON.stringify(wishlist));
    } catch {
      // ignore
    }
  }, [wishlist]);

  const showToast = (message: string, type: 'cart' | 'wishlist' | 'info') => {
    const id = Date.now().toString();
    setToasts((prev) => [...prev, { id, message, type }]);
    setTimeout(() => {
      setToasts((prev) => prev.filter((t) => t.id !== id));
    }, 3500);
  };

  const dismissToast = (id: string) => {
    setToasts((prev) => prev.filter((t) => t.id !== id));
  };

  const addToCart = (item: {
    id: string;
    name: string;
    subtitle?: string;
    price: number;
    originalPrice?: number;
    image: string;
    size?: string;
  }) => {
    const sizeKey = item.size || 'Free Size';
    setCart((prev) => {
      const existing = prev.find((i) => i.id === item.id && (i.size || 'Free Size') === sizeKey);
      if (existing) {
        return prev.map((i) =>
          i.id === item.id && (i.size || 'Free Size') === sizeKey
            ? { ...i, quantity: i.quantity + 1 }
            : i
        );
      }
      return [
        ...prev,
        {
          id: item.id,
          name: item.name,
          subtitle: item.subtitle || 'NOOLAM Pure Silk',
          price: item.price,
          originalPrice: item.originalPrice,
          image: item.image,
          size: sizeKey,
          quantity: 1,
        },
      ];
    });
    showToast(`Added "${item.name}" to your shopping bag`, 'cart');
  };

  const removeFromCart = (id: string, size?: string) => {
    const sizeKey = size || 'Free Size';
    setCart((prev) => prev.filter((i) => !(i.id === id && (i.size || 'Free Size') === sizeKey)));
  };

  const updateQuantity = (id: string, delta: number, size?: string) => {
    const sizeKey = size || 'Free Size';
    setCart((prev) =>
      prev
        .map((i) => {
          if (i.id === id && (i.size || 'Free Size') === sizeKey) {
            const nextQty = i.quantity + delta;
            return nextQty > 0 ? { ...i, quantity: nextQty } : null;
          }
          return i;
        })
        .filter(Boolean) as CartItem[]
    );
  };

  const clearCart = () => setCart([]);

  const toggleWishlist = (id: string, name?: string) => {
    setWishlist((prev) => {
      const exists = prev.includes(id);
      if (exists) {
        showToast(`Removed from your wishlist`, 'wishlist');
        return prev.filter((itemId) => itemId !== id);
      } else {
        showToast(`Added ${name ? `"${name}"` : 'item'} to your wishlist`, 'wishlist');
        return [...prev, id];
      }
    });
  };

  const isInWishlist = (id: string) => wishlist.includes(id);

  const cartTotal = cart.reduce((acc, item) => acc + item.price * item.quantity, 0);
  const cartCount = cart.reduce((acc, item) => acc + item.quantity, 0);

  return (
    <ShopContext.Provider
      value={{
        cart,
        wishlist,
        addToCart,
        removeFromCart,
        updateQuantity,
        clearCart,
        toggleWishlist,
        isInWishlist,
        isCartOpen,
        setIsCartOpen,
        isWishlistOpen,
        setIsWishlistOpen,
        isStoreModalOpen,
        setIsStoreModalOpen,
        activeRackItem,
        setActiveRackItem,
        activeReel,
        setActiveReel,
        activeMood,
        setActiveMood,
        toasts,
        dismissToast,
        cartTotal,
        cartCount,
      }}
    >
      {children}
    </ShopContext.Provider>
  );
}

export function useShop() {
  const context = useContext(ShopContext);
  if (!context) {
    throw new Error('useShop must be used within a ShopProvider');
  }
  return context;
}

