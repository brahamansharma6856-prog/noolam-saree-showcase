import type { Metadata } from 'next';
import { Cinzel, Plus_Jakarta_Sans } from 'next/font/google';
import './globals.css';
import { ShopProvider } from '@/context/ShopContext';
import CartDrawer from '@/components/CartDrawer';
import WishlistDrawer from '@/components/WishlistDrawer';
import StoreModal from '@/components/StoreModal';
import RackDetailModal from '@/components/RackDetailModal';
import ReelModal from '@/components/ReelModal';
import MoodModal from '@/components/MoodModal';
import ToastContainer from '@/components/ToastContainer';

const cinzel = Cinzel({
  variable: '--font-cinzel',
  subsets: ['latin'],
  weight: ['400', '600', '700', '800', '900'],
});

const jakarta = Plus_Jakarta_Sans({
  variable: '--font-jakarta',
  subsets: ['latin'],
  weight: ['300', '400', '500', '600', '700', '800'],
});

export const metadata: Metadata = {
  title: 'NOOLAM — Kanchipuram Silk Saree Website | Sacred Temple Handlooms',
  description:
    'Experience NOOLAM: Sacred Kanchipuram silk sarees woven for the divine with pure gold zari and generational temple loom craftsmanship.',
  icons: {
    icon: '/favicon.ico',
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${cinzel.variable} ${jakarta.variable} scroll-smooth`}>
      <body className="min-h-screen bg-[#FDFBF7] text-stone-900 font-sans selection:bg-[#6e1327] selection:text-white antialiased">
        <ShopProvider>
          {children}

          {/* Interactive Global Drawers & Modals */}
          <CartDrawer />
          <WishlistDrawer />
          <StoreModal />
          <RackDetailModal />
          <ReelModal />
          <MoodModal />
          <ToastContainer />
        </ShopProvider>
      </body>
    </html>
  );
}
