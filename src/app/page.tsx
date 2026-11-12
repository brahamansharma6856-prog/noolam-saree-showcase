'use client';

import React from 'react';
import Navbar from '@/components/Navbar';
import Hero from '@/components/Hero';
import SixMoods from '@/components/SixMoods';
import TryTheLook from '@/components/TryTheLook';
import PickASilk from '@/components/PickASilk';
import TheRack from '@/components/TheRack';
import MuseFilm from '@/components/MuseFilm';
import MuseReels from '@/components/MuseReels';
import BridalCollection from '@/components/BridalCollection';
import Footer from '@/components/Footer';

export default function Home() {
  return (
    <main className="min-h-screen flex flex-col bg-[#FDFBF7]">
      {/* Floating Glass Pill Navigation Bar */}
      <Navbar />

      {/* 1. Hero Section */}
      <Hero />

      {/* 2. Six Moods (The NOOLAM Archive) */}
      <SixMoods />

      {/* 3. Try the Look */}
      <TryTheLook />

      {/* 4. Pick a Silk */}
      <PickASilk />

      {/* 5. The Rack (Clothes Rail with Hangers) */}
      <TheRack />

      {/* 7. The Muse Film */}
      <MuseFilm />

      {/* 8. The Muse Reels (Silk, in Motion) */}
      <MuseReels />

      {/* 9. The Bridal Collection */}
      <BridalCollection />

      {/* Heritage Footer */}
      <Footer />
    </main>
  );
}
