'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import { motion, AnimatePresence } from 'framer-motion';
import { Play, X, ArrowUpRight } from 'lucide-react';
import { PROJECTS_DATA } from '@/data/portfolio';
import { ProjectVideo } from '@/types/portfolio';

const CATEGORIES = [
  'All',
] as const;

export const FeaturedWork: React.FC = () => {
  const [activeCategory, setActiveCategory] = useState<string>('All');
  const [selectedModalProject, setSelectedModalProject] = useState<ProjectVideo | null>(null);

  const filteredProjects = PROJECTS_DATA;

  return (
    <section id="work" className="py-24 sm:py-32 bg-[#F5F1EA] border-b border-[#252321]/8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Editorial Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-14 pb-6 border-b border-[#252321]/15 gap-6">
          <div>
            <span className="text-[10px] tracking-[0.3em] uppercase font-semibold text-[#A99582] block mb-2">
              CURATED ARCHIVE
            </span>
            <h2 className="font-serif text-4xl sm:text-6xl text-[#111111] font-normal tracking-tight">
              A Selection of My Work.
            </h2>
            <p className="mt-3 text-xs sm:text-sm text-[#77716B] max-w-xl font-normal leading-relaxed">
              Explore a collection of content, product showcases, creative storytelling, and brand collaborations.
            </p>
          </div>

          <div className="text-[10px] tracking-[0.25em] uppercase font-mono text-[#77716B]">
            {filteredProjects.length} SELECTED WORKS
          </div>
        </div>

        {/* Minimal Editorial Category Filter Bar */}
        <div className="flex items-center gap-2 sm:gap-4 overflow-x-auto pb-6 mb-12 no-scrollbar">
          {CATEGORIES.map((category) => {
            const isActive = activeCategory === category;
            return (
              <button
                key={category}
                onClick={() => setActiveCategory(category)}
                className={`whitespace-nowrap px-4 py-2 text-xs tracking-[0.18em] uppercase transition-all duration-300 border ${
                  isActive
                    ? 'border-[#111111] bg-[#111111] text-[#F5F1EA] font-semibold'
                    : 'border-[#252321]/15 bg-transparent text-[#77716B] hover:text-[#111111] hover:border-[#111111]/40'
                }`}
              >
                {category}
              </button>
            );
          })}
        </div>

        {/* 9:16 Portrait Editorial Video Grid */}
        <motion.div 
          layout
          className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5 sm:gap-6"
        >
          <AnimatePresence>
            {filteredProjects.map((project, idx) => (
              <motion.div
                key={project.id}
                layout
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.96 }}
                transition={{ duration: 0.4, delay: idx * 0.05 }}
                onClick={() => setSelectedModalProject(project)}
                className="group cursor-pointer flex flex-col bg-white border border-[#D7C8B7]/60 p-2 sm:p-2.5 shadow-sm hover:shadow-xl transition-all duration-500"
              >
                {/* 9:16 Portrait Aspect Frame */}
                <div className="relative aspect-[9/16] w-full overflow-hidden bg-[#EDE6DC]">
                  <Image
                    src={project.thumbnail}
                    alt={project.title}
                    fill
                    className="object-cover group-hover:scale-106 transition-transform duration-700"
                    sizes="(max-width: 640px) 50vw, (max-width: 1024px) 33vw, 220px"
                  />

                  {/* Editorial Mask overlay */}
                  <div className="absolute inset-0 bg-black/15 group-hover:bg-black/35 transition-colors duration-300" />

                  {/* Top Minimal Plate */}
                  <div className="absolute top-2 left-2 right-2 flex items-center justify-between">
                    <span className="px-2 py-0.5 bg-[#111111]/80 backdrop-blur-sm text-[#F5F1EA] text-[8px] tracking-[0.2em] uppercase font-mono">
                      {project.platform}
                    </span>
                  </div>

                  {/* Play Button Icon */}
                  <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <div className="w-10 h-10 rounded-full bg-white text-[#111111] flex items-center justify-center shadow-lg">
                      <Play className="w-4 h-4 fill-current ml-0.5" />
                    </div>
                  </div>

                  {/* View count bottom tag */}
                  <div className="absolute bottom-2 left-2 px-2 py-0.5 bg-white/90 backdrop-blur-sm text-[#111111] text-[9px] font-mono font-bold tracking-tight">
                    {project.views}
                  </div>
                </div>

                {/* Minimal Caption */}
                <div className="pt-3 pb-1 flex flex-col gap-1">
                  <div className="text-[9px] tracking-[0.18em] uppercase text-[#A99582] font-semibold truncate">
                    {project.brand}
                  </div>
                  <h3 className="font-serif text-sm font-normal text-[#111111] line-clamp-2 leading-tight group-hover:text-[#A99582] transition-colors">
                    {project.title}
                  </h3>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>

      </div>

      {/* Editorial Video Modal */}
      <AnimatePresence>
        {selectedModalProject && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 md:p-10">
            {/* Backdrop */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setSelectedModalProject(null)}
              className="absolute inset-0 bg-[#111111]/85 backdrop-blur-md"
            />

            {/* Modal Dialog */}
            <motion.div
              initial={{ opacity: 0, scale: 0.96, y: 15 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.96, y: 15 }}
              className="relative w-full max-w-4xl bg-[#F5F1EA] border border-[#252321]/20 shadow-2xl overflow-hidden z-10 flex flex-col max-h-[90vh]"
            >
              {/* Modal Bar */}
              <div className="px-6 py-4 bg-[#EDE6DC] border-b border-[#252321]/15 flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <span className="text-[10px] tracking-[0.2em] uppercase font-bold text-[#111111]">
                    {selectedModalProject.category}
                  </span>
                  <span className="text-xs text-[#77716B]">/</span>
                  <span className="text-xs text-[#252321]">
                    Client: <strong className="text-[#111111]">{selectedModalProject.brand}</strong>
                  </span>
                </div>

                <button
                  onClick={() => setSelectedModalProject(null)}
                  className="p-1.5 text-[#252321] hover:text-[#111111] hover:bg-black/5 transition-colors"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>

              {/* Modal Body */}
              <div className="p-6 sm:p-8 overflow-y-auto grid grid-cols-1 md:grid-cols-12 gap-8 items-center">
                
                {/* Video Player */}
                <div className="md:col-span-5 flex justify-center">
                  <div className="relative aspect-[9/16] w-full max-w-[280px] overflow-hidden bg-black border border-[#252321]/30 shadow-lg">
                    {selectedModalProject.videoUrl ? (
                      <video
                        src={selectedModalProject.videoUrl}
                        poster={selectedModalProject.thumbnail}
                        controls
                        autoPlay
                        loop
                        playsInline
                        className="w-full h-full object-cover"
                      />
                    ) : (
                      <Image
                        src={selectedModalProject.thumbnail}
                        alt={selectedModalProject.title}
                        fill
                        className="object-cover"
                      />
                    )}
                  </div>
                </div>

                {/* Case Study Details - Metrics Only */}
                <div className="md:col-span-7 flex flex-col justify-center gap-6">
                  {/* Performance Plate */}
                  <div>
                    <div className="text-[10px] tracking-[0.25em] uppercase font-bold text-[#A99582] mb-3">
                      CAMPAIGN METRICS
                    </div>
                    {selectedModalProject.metrics ? (
                      <div className="grid grid-cols-2 sm:grid-cols-3 gap-3 text-center">
                        {selectedModalProject.metrics.views && (
                          <div className="p-4 bg-white border border-[#D7C8B7]/60">
                            <span className="font-serif text-xl sm:text-2xl font-normal text-[#111111] block">
                              {selectedModalProject.metrics.views}
                            </span>
                            <span className="text-[9px] tracking-[0.18em] uppercase text-[#77716B]">
                              VIEWS
                            </span>
                          </div>
                        )}
                        {selectedModalProject.metrics.likes && (
                          <div className="p-4 bg-white border border-[#D7C8B7]/60">
                            <span className="font-serif text-xl sm:text-2xl font-normal text-[#111111] block">
                              {selectedModalProject.metrics.likes}
                            </span>
                            <span className="text-[9px] tracking-[0.18em] uppercase text-[#77716B]">
                              LIKES
                            </span>
                          </div>
                        )}
                        {selectedModalProject.metrics.comments && (
                          <div className="p-4 bg-white border border-[#D7C8B7]/60">
                            <span className="font-serif text-xl sm:text-2xl font-normal text-[#111111] block">
                              {selectedModalProject.metrics.comments}
                            </span>
                            <span className="text-[9px] tracking-[0.18em] uppercase text-[#77716B]">
                              COMMENTS
                            </span>
                          </div>
                        )}
                        {selectedModalProject.metrics.saves && (
                          <div className="p-4 bg-white border border-[#D7C8B7]/60">
                            <span className="font-serif text-xl sm:text-2xl font-normal text-[#111111] block">
                              {selectedModalProject.metrics.saves}
                            </span>
                            <span className="text-[9px] tracking-[0.18em] uppercase text-[#77716B]">
                              SAVES
                            </span>
                          </div>
                        )}
                        {selectedModalProject.metrics.reposts && (
                          <div className="p-4 bg-white border border-[#D7C8B7]/60">
                            <span className="font-serif text-xl sm:text-2xl font-normal text-[#111111] block">
                              {selectedModalProject.metrics.reposts}
                            </span>
                            <span className="text-[9px] tracking-[0.18em] uppercase text-[#77716B]">
                              REPOSTS
                            </span>
                          </div>
                        )}
                        {selectedModalProject.metrics.shares && (
                          <div className="p-4 bg-white border border-[#D7C8B7]/60">
                            <span className="font-serif text-xl sm:text-2xl font-normal text-[#111111] block">
                              {selectedModalProject.metrics.shares}
                            </span>
                            <span className="text-[9px] tracking-[0.18em] uppercase text-[#77716B]">
                              SHARES
                            </span>
                          </div>
                        )}
                      </div>
                    ) : null}
                  </div>

                  {/* CTA */}
                  <div className="pt-2">
                    <a
                      href="#contact"
                      onClick={() => setSelectedModalProject(null)}
                      className="inline-flex items-center gap-2 px-6 py-3.5 bg-[#111111] text-[#F5F1EA] text-xs tracking-[0.2em] uppercase font-semibold hover:bg-[#252321] transition-colors"
                    >
                      <span>INQUIRE SIMILAR PRODUCTION</span>
                      <ArrowUpRight className="w-3.5 h-3.5" />
                    </a>
                  </div>

                </div>

              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>

    </section>
  );
};
