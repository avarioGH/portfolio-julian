'use client';

import React from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { ArrowUpRight } from 'lucide-react';
import { InstagramIcon } from '@/components/SocialIcons';
import { BRAND_COLLABORATIONS } from '@/data/portfolio';

export const BrandCollaborations: React.FC = () => {
  return (
    <section id="brands" className="py-24 sm:py-32 bg-[#EDE6DC] border-b border-[#252321]/8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Editorial Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <motion.span
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="text-[10px] tracking-[0.3em] uppercase font-semibold text-[#A99582] block mb-2"
          >
            OFFICIAL PARTNERSHIPS
          </motion.span>
          <motion.h2
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="font-serif text-4xl sm:text-6xl text-[#111111] font-normal tracking-tight"
          >
            Selected Brand Collaborations.
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="mt-3 text-xs sm:text-sm text-[#77716B] leading-relaxed"
          >
            High-converting organic campaigns and edutainment content for innovative tech platforms.
          </motion.p>
        </div>

        {/* Magazine Style Editorial Brand Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {BRAND_COLLABORATIONS.map((brand, idx) => (
            <motion.div
              key={brand.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
              className="p-8 bg-white border border-[#D7C8B7]/60 shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col justify-between group"
            >
              <div>
                {/* Logo Frame */}
                <div className="flex items-center justify-between mb-8 pb-4 border-b border-[#252321]/10">
                  <div className="relative w-12 h-12 rounded-none p-1 flex items-center justify-center bg-[#F5F1EA]">
                    <Image
                      src={brand.logo}
                      alt={brand.name}
                      width={44}
                      height={44}
                      className="object-contain"
                    />
                  </div>
                  <span className="text-[8px] tracking-[0.2em] uppercase font-semibold text-[#A99582] border border-[#A99582]/40 px-2.5 py-0.5">
                    {brand.category}
                  </span>
                </div>

                {/* Brand Name */}
                <h3 className="font-serif text-2xl font-normal text-[#111111] mb-1 group-hover:text-[#A99582] transition-colors">
                  {brand.name}
                </h3>

                <p className="text-xs text-[#77716B] leading-relaxed mb-6 font-normal">
                  {brand.description}
                </p>
              </div>

              {/* Instagram link */}
              <div className="pt-4 border-t border-[#252321]/10 flex items-center justify-between">
                <a
                  href={brand.instagramUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 text-xs font-semibold text-[#111111] hover:text-[#A99582] transition-colors"
                >
                  <InstagramIcon className="w-3.5 h-3.5" />
                  <span className="font-mono text-[11px]">{brand.instagramHandle}</span>
                  <ArrowUpRight className="w-3 h-3" />
                </a>

                {brand.featuredStat && (
                  <span className="text-[9px] tracking-wider uppercase text-[#A99582] font-semibold">
                    {brand.featuredStat}
                  </span>
                )}
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
};
