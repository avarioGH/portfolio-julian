'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { ArrowUpRight, ArrowDown } from 'lucide-react';
import { CREATOR_PROFILE } from '@/data/portfolio';
import { HeroImageComposition } from '@/components/HeroImageComposition';

export const Hero: React.FC = () => {
  return (
    <section id="home" className="relative min-h-[92vh] flex items-center pt-28 pb-16 md:pt-36 md:pb-24 overflow-hidden bg-[#F5F1EA]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        
        {/* Editorial Two-Column Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          
          {/* Left Column: Magazine Typography & Editorial Positioning */}
          <div className="lg:col-span-6 flex flex-col justify-center order-2 lg:order-1 text-left">
            
            {/* Editorial Category Label & Rule */}
            <motion.div
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="flex items-center gap-3 mb-6"
            >
              <span className="text-[10px] sm:text-xs tracking-[0.3em] uppercase font-semibold text-[#77716B]">
                ISSUE NO. 01 — CREATOR PORTFOLIO
              </span>
              <div className="h-[1px] w-12 bg-[#252321]/20" />
            </motion.div>

            {/* Oversized Serif Headline */}
            <motion.h1
              initial={{ opacity: 0, y: 25 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.1 }}
              className="font-serif text-5xl sm:text-7xl xl:text-8xl font-normal tracking-[-0.02em] text-[#111111] leading-[0.95] mb-4 uppercase"
            >
              Julian <br />
              <span className="italic font-light text-[#252321]">Sumali</span>
            </motion.h1>

            {/* Subtitle */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="text-xs sm:text-sm tracking-[0.25em] uppercase font-semibold text-[#A99582] mb-6"
            >
              UGC CREATOR &amp; CONTENT CREATOR
            </motion.div>

            {/* Supporting Statement */}
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="font-serif italic text-lg sm:text-xl text-[#252321]/80 max-w-lg leading-relaxed mb-6 border-l-2 border-[#D7C8B7] pl-4"
            >
              &ldquo;{CREATOR_PROFILE.tagline}&rdquo;
            </motion.p>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.35 }}
              className="text-xs sm:text-sm text-[#77716B] max-w-md leading-relaxed mb-8 font-normal"
            >
              Creating authentic digital experiences through storytelling, creativity, and content that connects brands with audiences.
            </motion.p>

            {/* Editorial Highlight Stats */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="grid grid-cols-2 gap-8 pt-6 border-t border-[#252321]/15 mb-10 max-w-md"
            >
              <div>
                <span className="font-serif text-3xl sm:text-4xl font-normal text-[#111111] block">
                  1+ YEAR
                </span>
                <span className="text-[10px] tracking-[0.2em] uppercase font-medium text-[#77716B] block mt-1">
                  CONTENT CREATION
                </span>
              </div>

              <div>
                <span className="font-serif text-3xl sm:text-4xl font-normal text-[#111111] block">
                  20M+
                </span>
                <span className="text-[10px] tracking-[0.2em] uppercase font-medium text-[#77716B] block mt-1">
                  VIEWS GENERATED
                </span>
              </div>
            </motion.div>

            {/* CTAs */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.5 }}
              className="flex items-center gap-4 flex-wrap"
            >
              <a
                href="#contact"
                className="inline-flex items-center gap-2 px-7 py-3.5 rounded-full bg-[#111111] text-[#F5F1EA] text-xs tracking-[0.2em] uppercase font-semibold hover:bg-[#252321] transition-all duration-300 shadow-md active:scale-95"
              >
                <span>LET&apos;S WORK TOGETHER</span>
                <ArrowUpRight className="w-3.5 h-3.5" />
              </a>

              <a
                href="#work"
                className="inline-flex items-center gap-2 px-6 py-3.5 rounded-full border border-[#252321]/30 text-[#252321] text-xs tracking-[0.2em] uppercase font-medium hover:border-[#252321] hover:bg-[#252321]/5 transition-all duration-300"
              >
                <span>EXPLORE WORK</span>
                <ArrowDown className="w-3.5 h-3.5" />
              </a>
            </motion.div>

          </div>

          {/* Right Column: Three-Image Layered Composition matching Reference */}
          <div className="lg:col-span-6 flex justify-center order-1 lg:order-2 w-full">
            <HeroImageComposition />
          </div>

        </div>

      </div>
    </section>
  );
};
