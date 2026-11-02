'use client';

import React from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { CREATOR_PROFILE } from '@/data/portfolio';

export const About: React.FC = () => {
  return (
    <section id="about" className="py-24 sm:py-32 bg-[#EDE6DC] border-t border-[#252321]/8 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Magazine Editorial Split Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 pb-6 border-b border-[#252321]/15 gap-4">
          <div>
            <span className="text-[10px] tracking-[0.3em] uppercase font-semibold text-[#A99582] block mb-2">
              BIOGRAPHY &amp; VISION
            </span>
            <h2 className="font-serif text-4xl sm:text-6xl text-[#111111] font-normal tracking-tight">
              Behind The Content.
            </h2>
          </div>
          <div className="text-xs sm:text-sm text-[#77716B] font-mono tracking-widest uppercase">
            JULIAN SUMALI / PORTFOLIO
          </div>
        </div>

        {/* Editorial Magazine Spread: Image Collage + Storytelling */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-14 items-center">
          
          {/* Left Column: Asymmetric Double Frame (Header 2 image + Lifestyle) */}
          <div className="lg:col-span-6 flex justify-center">
            <motion.div
              initial={{ opacity: 0, y: 25 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7 }}
              className="relative w-full max-w-[460px]"
            >
              {/* Primary Large Editorial Portrait (julian2.png) */}
              <div className="p-3 bg-white border border-[#D7C8B7] shadow-xl relative z-10">
                <div className="relative aspect-[4/5] overflow-hidden bg-[#D7C8B7]/30">
                  <Image
                    src="/assets/profile/julian2.png"
                    alt="Julian Sumali — Editorial Profile"
                    fill
                    className="object-cover object-center grayscale-[10%] hover:grayscale-0 transition-all duration-700"
                    sizes="(max-width: 768px) 100vw, 460px"
                  />
                </div>
                <div className="pt-3 flex items-center justify-between text-[9px] tracking-[0.2em] uppercase text-[#77716B]">
                  <span>PORTRAIT STUDY</span>
                  <span>SERIES 2026</span>
                </div>
              </div>

              {/* Overlapping Small Proof / Metric Cutout (result1.png) */}
              <motion.div
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.7, delay: 0.2 }}
                className="absolute -bottom-8 -right-4 sm:-right-8 w-40 sm:w-48 p-2.5 bg-[#F5F1EA] border border-[#252321]/20 shadow-2xl z-20"
              >
                <div className="relative aspect-[3/4] overflow-hidden bg-black/5">
                  <Image
                    src="/img/screenshot/result1.png"
                    alt="Julian Sumali Performance & Results"
                    fill
                    unoptimized
                    className="object-cover object-top"
                    sizes="200px"
                  />
                </div>
                <div className="mt-1.5 text-center text-[8px] tracking-[0.2em] uppercase font-semibold text-[#77716B]">
                  VERIFIED RESULTS
                </div>
              </motion.div>

              {/* Offset Accent Outline Box */}
              <div className="absolute -top-4 -left-4 w-full h-full border border-[#252321]/15 -z-0" />
            </motion.div>
          </div>

          {/* Right Column: Editorial Body & Philosophy */}
          <div className="lg:col-span-6 flex flex-col justify-center">
            
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="space-y-6 text-[#252321]"
            >
              <h3 className="font-serif text-2xl sm:text-3xl text-[#111111] font-normal leading-snug">
                Hi, I&apos;m Julian Sumali.
              </h3>

              <p className="text-sm sm:text-base text-[#252321]/80 leading-relaxed font-normal">
                I&apos;m a content creator passionate about creating authentic and engaging digital content.
              </p>

              <p className="text-sm sm:text-base text-[#77716B] leading-relaxed font-normal">
                With over a year of content creation experience and more than 20 million views generated, I focus on turning ideas, products, and stories into content that captures attention and connects with audiences.
              </p>

              {/* Pull Quote */}
              <div className="py-6 my-6 border-y border-[#252321]/15">
                <blockquote className="font-serif italic text-xl sm:text-2xl text-[#111111] leading-relaxed">
                  &ldquo;Audiences don&apos;t connect with ads; they connect with real people sharing genuine experiences.&rdquo;
                </blockquote>
              </div>

              {/* Creative Approach Pillars */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 pt-2">
                <div className="border-l border-[#252321]/20 pl-4">
                  <span className="font-serif text-lg font-medium text-[#111111] block">
                    Authentic Tone
                  </span>
                  <p className="text-xs text-[#77716B] mt-1 leading-relaxed">
                    Natural presentation that eliminates sales resistance and builds instant viewer rapport.
                  </p>
                </div>

                <div className="border-l border-[#252321]/20 pl-4">
                  <span className="font-serif text-lg font-medium text-[#111111] block">
                    Strategic Retention
                  </span>
                  <p className="text-xs text-[#77716B] mt-1 leading-relaxed">
                    Meticulously structured hooks, pacing, and visual storytelling tailored to platform algorithms.
                  </p>
                </div>
              </div>

            </motion.div>

          </div>

        </div>

      </div>
    </section>
  );
};
