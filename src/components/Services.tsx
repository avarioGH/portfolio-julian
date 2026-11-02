'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { ArrowUpRight } from 'lucide-react';

const SERVICES = [
  {
    number: '01',
    title: 'UGC Product Videos',
    description: 'Authentic and relatable product demonstrations crafted to showcase tactile benefits, real user reactions, and natural integration into daily life.',
    deliverables: ['Unboxing & First Impressions', 'Relatable Everyday Lifestyle Usage', 'Problem & Solution Pacing', 'Vertical 9:16 Format for TikTok & Reels'],
  },
  {
    number: '02',
    title: 'Product Reviews',
    description: 'Honest and engaging product experiences that build deep viewer trust, overcome consumer skepticism, and accelerate purchasing decisions.',
    deliverables: ['Transparent Pros & Cons', 'Detailed Feature Stress-Testing', 'Close-Up Texture & Hardware Examination', 'Candid Direct-to-Camera Tone'],
  },
  {
    number: '03',
    title: 'AI & Technology Content',
    description: 'Educational and promotional content for digital products and AI tools, translating complex software capabilities into clear, viral edutainment.',
    deliverables: ['Interactive Screen-Recording Walkthroughs', 'Before vs. After Workflow Efficiency Demonstrations', 'Student & Professional Use-Cases', 'SaaS Trial & Onboarding Drivers'],
  },
  {
    number: '04',
    title: 'Social Media Content',
    description: 'Short-form content for TikTok, Instagram Reels, and other platforms, engineered with viral hooks to maximize algorithm retention and shares.',
    deliverables: ['Viral Hook Variations (A/B Test Ready)', 'Trending Format & Audio Pairing', 'Paid Ads Licensing (Spark & Meta Whitelisting)', 'Consistent Community Engagement Angles'],
  },
];

export const Services: React.FC = () => {
  return (
    <section id="services" className="py-24 sm:py-32 bg-[#F5F1EA] border-b border-[#252321]/8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Editorial Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 pb-6 border-b border-[#252321]/15 gap-6">
          <div>
            <span className="text-[10px] tracking-[0.3em] uppercase font-semibold text-[#A99582] block mb-2">
              CREATIVE CAPABILITIES
            </span>
            <h2 className="font-serif text-4xl sm:text-6xl text-[#111111] font-normal tracking-tight">
              What I Can Create For Your Brand.
            </h2>
          </div>
          <div className="text-xs tracking-[0.2em] uppercase font-mono text-[#77716B]">
            4 CORE DISCIPLINES
          </div>
        </div>

        {/* Editorial Numbered Minimalist Layout */}
        <div className="divide-y divide-[#252321]/15 border-y border-[#252321]/15">
          {SERVICES.map((service, idx) => (
            <motion.div
              key={service.number}
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.08 }}
              className="py-10 sm:py-14 grid grid-cols-1 lg:grid-cols-12 gap-8 items-start group hover:bg-white/40 transition-colors px-4 sm:px-6"
            >
              {/* Number Column */}
              <div className="lg:col-span-2">
                <span className="font-serif text-4xl sm:text-5xl font-light text-[#A99582] group-hover:text-[#111111] transition-colors">
                  {service.number}.
                </span>
              </div>

              {/* Title & Description */}
              <div className="lg:col-span-5">
                <h3 className="font-serif text-2xl sm:text-3xl text-[#111111] font-normal mb-3">
                  {service.title}
                </h3>
                <p className="text-xs sm:text-sm text-[#77716B] leading-relaxed font-normal">
                  {service.description}
                </p>
              </div>

              {/* Deliverables Checklist */}
              <div className="lg:col-span-4 space-y-2">
                <span className="text-[9px] tracking-[0.2em] uppercase font-bold text-[#A99582] block mb-2">
                  DELIVERABLES:
                </span>
                {service.deliverables.map((item, dIdx) => (
                  <div key={dIdx} className="text-xs text-[#252321]/80 flex items-center gap-2">
                    <span className="w-1 h-1 rounded-full bg-[#A99582]" />
                    <span>{item}</span>
                  </div>
                ))}
              </div>

              {/* Right Arrow Action */}
              <div className="lg:col-span-1 flex lg:justify-end items-center pt-2">
                <a
                  href="#contact"
                  className="w-10 h-10 rounded-full border border-[#252321]/20 flex items-center justify-center text-[#252321] group-hover:bg-[#111111] group-hover:text-[#F5F1EA] group-hover:border-[#111111] transition-all"
                  aria-label={`Inquire about ${service.title}`}
                >
                  <ArrowUpRight className="w-4 h-4" />
                </a>
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
};
