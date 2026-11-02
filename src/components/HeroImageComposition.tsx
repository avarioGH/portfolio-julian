'use client';

import React from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';

export const HeroImageComposition: React.FC = () => {
  return (
    <div className="relative w-full max-w-[420px] sm:max-w-[500px] md:max-w-[560px] lg:max-w-[620px] xl:max-w-[680px] mx-auto flex items-center justify-center select-none">
      
      {/* Subtle Atmospheric Photographic Backing Glow behind the composition */}
      <div 
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[85%] h-[85%] rounded-full bg-[#D7C8B7]/30 blur-[90px] pointer-events-none -z-10"
        aria-hidden="true"
      />

      {/* Composition Container with 3 Layers: Height adjusted for full natural overlap */}
      <div className="relative w-full aspect-[1/1] sm:aspect-[4/3.8] md:aspect-[4/3.8] flex items-center justify-center">

        {/* =========================================================================
            LAYER 1 — LEFT FLOATING IMAGE (/img/pic1.png)
            - Upper left position
            - Rotation: -8 degrees
            - Rounded smartphone-style frame with subtle shadow
            - Behind center portrait (z-10)
            - Independent smooth floating loop
            ========================================================================= */}
        <motion.div
          initial={{ opacity: 0, x: -50, rotate: -8 }}
          animate={{ opacity: 1, x: 0, rotate: -8 }}
          transition={{ duration: 0.8, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
          className="absolute left-[2%] sm:left-[4%] md:left-[5%] top-[10%] sm:top-[8%] md:top-[6%] w-[38%] sm:w-[36%] md:w-[35%] z-10"
        >
          <motion.div
            animate={{
              y: [-8, 6, -8],
            }}
            transition={{
              duration: 5.8,
              repeat: Infinity,
              ease: 'easeInOut',
            }}
            className="relative w-full aspect-[9/13] rounded-2xl sm:rounded-3xl overflow-hidden shadow-2xl shadow-black/35 border border-[#252321]/20 bg-[#161514]"
          >
            <Image
              src="/img/pic1.png?v=3"
              alt="Julian Sumali Content Preview Left"
              fill
              unoptimized
              className="object-cover"
              sizes="(max-width: 640px) 150px, (max-width: 1024px) 200px, 250px"
            />
            {/* Dark gradient mask */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent pointer-events-none" />
          </motion.div>
        </motion.div>

        {/* =========================================================================
            LAYER 2 — RIGHT FLOATING IMAGE (/img/pic2.png)
            - Upper right position
            - Rotation: 8 degrees
            - Rounded smartphone-style frame with subtle shadow
            - Behind center portrait (z-10)
            - Independent smooth floating loop in opposite timing
            ========================================================================= */}
        <motion.div
          initial={{ opacity: 0, x: 50, rotate: 8 }}
          animate={{ opacity: 1, x: 0, rotate: 8 }}
          transition={{ duration: 0.8, delay: 0.3, ease: [0.16, 1, 0.3, 1] }}
          className="absolute right-[2%] sm:right-[4%] md:right-[5%] top-[6%] sm:top-[4%] md:top-[2%] w-[38%] sm:w-[36%] md:w-[35%] z-10"
        >
          <motion.div
            animate={{
              y: [6, -8, 6],
            }}
            transition={{
              duration: 6.4,
              repeat: Infinity,
              ease: 'easeInOut',
            }}
            className="relative w-full aspect-[9/13] rounded-2xl sm:rounded-3xl overflow-hidden shadow-2xl shadow-black/35 border border-[#252321]/20 bg-[#161514]"
          >
            <Image
              src="/img/pic2.png?v=3"
              alt="Julian Sumali Content Preview Right"
              fill
              unoptimized
              className="object-cover"
              sizes="(max-width: 640px) 150px, (max-width: 1024px) 200px, 250px"
            />
            {/* Dark gradient mask */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent pointer-events-none" />
          </motion.div>
        </motion.div>

        {/* =========================================================================
            LAYER 3 — MAIN PORTRAIT CUTOUT (/img/header.png)
            - Center foreground (z-20, highest z-index)
            - 100% TRANSPARENT background (zero white rectangle or container)
            - Julian is large, dominant, standing in front
            - Overlaps the bottom-middle area of both side preview cards exactly like the reference
            - Subtle vertical floating animation
            ========================================================================= */}
        <motion.div
          initial={{ opacity: 0, y: 35 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
          className="relative w-[60%] sm:w-[58%] md:w-[56%] h-[92%] z-20 flex items-center justify-center pointer-events-none"
        >
          <motion.div
            animate={{
              y: [-5, 5, -5],
            }}
            transition={{
              duration: 6.6,
              repeat: Infinity,
              ease: 'easeInOut',
            }}
            className="relative w-full h-full flex items-center justify-center filter drop-shadow-[0_15px_30px_rgba(37,35,33,0.20)]"
          >
            <Image
              src="/img/header.png?v=2"
              alt="Julian Sumali — UGC Creator & Content Creator"
              fill
              priority
              unoptimized
              className="object-contain object-center pointer-events-auto"
              sizes="(max-width: 640px) 280px, (max-width: 1024px) 380px, 460px"
            />
          </motion.div>
        </motion.div>

      </div>

    </div>
  );
};
