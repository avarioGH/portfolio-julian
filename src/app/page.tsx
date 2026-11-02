'use client';

import React from 'react';
import { Navbar } from '@/components/Navbar';
import { Hero } from '@/components/Hero';
import { About } from '@/components/About';
import { ContentPerformance } from '@/components/ContentPerformance';
import { FeaturedWork } from '@/components/FeaturedWork';
import { BrandCollaborations } from '@/components/BrandCollaborations';
import { Services } from '@/components/Services';
import { CreativeProcess } from '@/components/CreativeProcess';
import { Contact } from '@/components/Contact';
import { Footer } from '@/components/Footer';

export default function Home() {
  return (
    <div className="relative min-h-screen bg-[#F5F1EA] text-[#252321] selection:bg-[#111111] selection:text-[#F5F1EA]">
      {/* Editorial Minimal Navigation */}
      <Navbar />

      {/* Main Magazine Layout */}
      <main className="flex flex-col">
        {/* Section 1: Hero Magazine Cover */}
        <Hero />

        {/* Section 2: About Me (Behind The Content) */}
        <About />

        {/* Section 3: Content Performance (20M+ Views & 1+ Year Experience) */}
        <ContentPerformance />

        {/* Section 4: My Work (Editorial UGC Video Gallery & Modal) */}
        <FeaturedWork />

        {/* Section 5: Selected Brand Collaborations */}
        <BrandCollaborations />

        {/* Section 6: Services (Editorial Numbered Layout) */}
        <Services />

        {/* Section 7: Creative Process (From Concept to Creation) */}
        <CreativeProcess />

        {/* Section 8: Contact (Let's Create Something Together) */}
        <Contact />
      </main>

      {/* Minimal Editorial Footer */}
      <Footer />
    </div>
  );
}
