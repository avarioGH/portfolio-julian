'use client';

import React from 'react';
import { motion } from 'framer-motion';

export const ContentPerformance: React.FC = () => {
  return (
    <section className="py-24 sm:py-32 bg-[#111111] text-[#F5F1EA] relative overflow-hidden border-y border-[#252321]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-20">
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="inline-flex items-center gap-2 mb-4"
          >
            <span className="text-[10px] tracking-[0.3em] uppercase font-semibold text-[#D7C8B7]">
              VERIFIED METRICS
            </span>
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="font-serif text-4xl sm:text-6xl font-normal tracking-tight text-[#F5F1EA]"
          >
            Content That Makes an Impact.
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="mt-4 text-xs sm:text-sm tracking-[0.15em] uppercase text-[#EDE6DC]/60 font-light"
          >
            Organic reach and proven performance across tech, AI, and lifestyle campaigns.
          </motion.p>
        </div>

        {/* High-Contrast Large Serif Numbers Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 lg:gap-20 max-w-4xl mx-auto text-center">
          
          {/* Stat 1: 20M+ Views */}
          <motion.div
            initial={{ opacity: 0, y: 25 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="p-8 sm:p-12 border border-white/10 bg-[#161616] relative group hover:border-[#D7C8B7]/40 transition-colors"
          >
            <span className="font-serif text-6xl sm:text-8xl font-normal text-[#F5F1EA] tracking-tighter block mb-3 group-hover:text-[#D7C8B7] transition-colors">
              20M+
            </span>
            <div className="h-[1px] w-16 bg-[#D7C8B7]/30 mx-auto mb-4" />
            <h3 className="text-xs tracking-[0.25em] uppercase font-bold text-[#F5F1EA] mb-2">
              TOTAL VIEWS GENERATED
            </h3>
            <p className="text-xs text-[#EDE6DC]/60 max-w-xs mx-auto leading-relaxed font-light">
              Cumulative organic viewership across viral TikToks, Instagram Reels, and brand campaigns.
            </p>
          </motion.div>

          {/* Stat 2: 1+ Year Experience */}
          <motion.div
            initial={{ opacity: 0, y: 25 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.15 }}
            className="p-8 sm:p-12 border border-white/10 bg-[#161616] relative group hover:border-[#D7C8B7]/40 transition-colors"
          >
            <span className="font-serif text-6xl sm:text-8xl font-normal text-[#F5F1EA] tracking-tighter block mb-3 group-hover:text-[#D7C8B7] transition-colors">
              1+ YEAR
            </span>
            <div className="h-[1px] w-16 bg-[#D7C8B7]/30 mx-auto mb-4" />
            <h3 className="text-xs tracking-[0.25em] uppercase font-bold text-[#F5F1EA] mb-2">
              CONTENT CREATION EXPERIENCE
            </h3>
            <p className="text-xs text-[#EDE6DC]/60 max-w-xs mx-auto leading-relaxed font-light">
              Continuous production, direct response ad testing, and algorithm optimization.
            </p>
          </motion.div>

        </div>

      </div>
    </section>
  );
};
