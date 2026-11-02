'use client';

import React from 'react';
import { motion } from 'framer-motion';

const STEPS = [
  {
    number: '01',
    title: 'DISCOVER',
    description: 'Understand the brand and its audience.',
    detail: 'Deep dive into campaign objectives, product unique selling propositions, and audience psychology.',
  },
  {
    number: '02',
    title: 'CONCEPT',
    description: 'Develop ideas and storytelling angles.',
    detail: 'Scripting scroll-stopping 3-second hooks, relatable narrative pacing, and clear calls-to-action.',
  },
  {
    number: '03',
    title: 'CREATE',
    description: 'Produce engaging content.',
    detail: 'High-definition 4K 60FPS vertical capture with crisp studio audio, natural lighting, and dynamic framing.',
  },
  {
    number: '04',
    title: 'DELIVER',
    description: 'Deliver polished content ready for distribution.',
    detail: 'Kinetic captioning, sound design, hook variations for ad split-testing, and platform-ready 9:16 master exports.',
  },
];

export const CreativeProcess: React.FC = () => {
  return (
    <section id="process" className="py-24 sm:py-32 bg-[#EDE6DC] border-b border-[#252321]/8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Editorial Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-20">
          <motion.span
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="text-[10px] tracking-[0.3em] uppercase font-semibold text-[#A99582] block mb-2"
          >
            WORKFLOW &amp; TIMELINE
          </motion.span>
          <motion.h2
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="font-serif text-4xl sm:text-6xl text-[#111111] font-normal tracking-tight"
          >
            From Concept to Creation.
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="mt-3 text-xs sm:text-sm text-[#77716B] leading-relaxed"
          >
            A frictionless, four-stage production framework engineered for high viewer retention.
          </motion.p>
        </div>

        {/* Minimal Editorial Timeline Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {STEPS.map((step, idx) => (
            <motion.div
              key={step.number}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
              className="p-8 bg-white border border-[#D7C8B7]/60 shadow-sm flex flex-col justify-between group hover:border-[#111111]/40 transition-colors"
            >
              <div>
                <div className="font-serif text-3xl font-light text-[#A99582] mb-6 pb-4 border-b border-[#252321]/10 flex items-center justify-between">
                  <span>{step.number}</span>
                  <span className="text-[9px] tracking-[0.25em] font-sans uppercase font-bold text-[#77716B]">
                    STAGE {step.number}
                  </span>
                </div>

                <h3 className="font-serif text-2xl font-normal text-[#111111] mb-2 tracking-wide">
                  {step.title}
                </h3>

                <p className="text-xs font-semibold text-[#252321] mb-4">
                  {step.description}
                </p>

                <p className="text-xs text-[#77716B] leading-relaxed font-normal">
                  {step.detail}
                </p>
              </div>

              <div className="mt-8 pt-4 border-t border-[#252321]/10 flex items-center gap-1.5 text-[9px] tracking-[0.2em] uppercase font-bold text-[#A99582]">
                <span>FAST 48-72H CADENCE</span>
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
};
