'use client';

import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { ArrowUpRight, Mail, Send, CheckCircle2, AlertCircle, MessageCircle } from 'lucide-react';
import confetti from 'canvas-confetti';
import { InstagramIcon, WhatsAppIcon } from '@/components/SocialIcons';
import { CREATOR_PROFILE } from '@/data/portfolio';

const COLLAB_TYPES = [
  'UGC Product Videos',
  'Product Reviews',
  'AI & Technology Content',
  'Social Media Content',
  'Brand Campaign / Ad Creative',
  'Other / Custom Project',
];

export const Contact: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    brand: '',
    email: '',
    collabType: COLLAB_TYPES[0],
    details: '',
  });

  const [errors, setErrors] = useState<Record<string, string>>({});
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  const validate = () => {
    const errs: Record<string, string> = {};
    if (!formData.name.trim()) errs.name = 'Please provide your name.';
    if (!formData.brand.trim()) errs.brand = 'Please enter your brand or company.';
    if (!formData.email.trim()) {
      errs.email = 'Please provide an email.';
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      errs.email = 'Please provide a valid email address.';
    }
    if (!formData.details.trim()) errs.details = 'Please briefly describe your campaign or goal.';
    return errs;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const errs = validate();
    if (Object.keys(errs).length > 0) {
      setErrors(errs);
      return;
    }

    setErrors({});
    setLoading(true);

    setTimeout(() => {
      setLoading(false);
      setSubmitted(true);
      confetti({
        particleCount: 80,
        spread: 60,
        origin: { y: 0.6 },
      });
    }, 800);
  };

  return (
    <section id="contact" className="py-24 sm:py-32 bg-[#111111] text-[#F5F1EA] relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Editorial Heading & Description */}
        <div className="max-w-3xl mb-16 pb-8 border-b border-white/10">
          <span className="text-[10px] tracking-[0.3em] uppercase font-semibold text-[#D7C8B7] block mb-3">
            START A COLLABORATION
          </span>
          <h2 className="font-serif text-4xl sm:text-6xl lg:text-7xl font-normal text-[#F5F1EA] tracking-tight leading-[1.05] mb-6">
            Let&apos;s Create Something Together.
          </h2>
          <p className="text-sm sm:text-base text-[#EDE6DC]/70 font-light max-w-xl leading-relaxed">
            Have a brand, product, or creative idea? Let&apos;s bring it to life through authentic content that drives meaningful audience impact.
          </p>

          {/* Quick Contact Links */}
          <div className="mt-8 flex flex-wrap items-center gap-4">
            <a
              href={CREATOR_PROFILE.whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-5 py-3 rounded-full border border-white/15 bg-white/5 hover:bg-white/10 text-xs tracking-[0.18em] uppercase font-semibold transition-colors"
            >
              <WhatsAppIcon className="w-4 h-4 text-[#D7C8B7]" />
              <span>WhatsApp {CREATOR_PROFILE.whatsapp}</span>
              <ArrowUpRight className="w-3.5 h-3.5" />
            </a>

            <a
              href={`mailto:${CREATOR_PROFILE.email}`}
              className="inline-flex items-center gap-2 px-5 py-3 rounded-full border border-white/15 bg-white/5 hover:bg-white/10 text-xs tracking-[0.18em] uppercase font-semibold transition-colors"
            >
              <Mail className="w-4 h-4 text-[#D7C8B7]" />
              <span>{CREATOR_PROFILE.email}</span>
              <ArrowUpRight className="w-3.5 h-3.5" />
            </a>

            <a
              href={CREATOR_PROFILE.instagram}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-5 py-3 rounded-full border border-white/15 bg-white/5 hover:bg-white/10 text-xs tracking-[0.18em] uppercase font-semibold transition-colors"
            >
              <InstagramIcon className="w-4 h-4 text-[#D7C8B7]" />
              <span>@julianmodebelajar</span>
              <ArrowUpRight className="w-3.5 h-3.5" />
            </a>
          </div>
        </div>

        {/* Contact Form & Collaboration Details */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          
          {/* Form */}
          <div className="lg:col-span-8 p-8 sm:p-12 bg-[#181818] border border-white/10">
            {submitted ? (
              <motion.div
                initial={{ opacity: 0, scale: 0.96 }}
                animate={{ opacity: 1, scale: 1 }}
                className="text-center py-12 flex flex-col items-center"
              >
                <div className="w-16 h-16 rounded-full border border-[#D7C8B7] flex items-center justify-center text-[#D7C8B7] mb-4">
                  <CheckCircle2 className="w-8 h-8" />
                </div>
                <h3 className="font-serif text-3xl font-normal text-[#F5F1EA] mb-2">
                  Thank You, {formData.name}
                </h3>
                <p className="text-xs sm:text-sm text-[#EDE6DC]/70 max-w-md mb-8 leading-relaxed font-light">
                  Your inquiry regarding <strong className="text-white">{formData.brand}</strong> has been received. Julian will review your brief and reply within 24 hours.
                </p>
                <button
                  onClick={() => {
                    setSubmitted(false);
                    setFormData({
                      name: '',
                      brand: '',
                      email: '',
                      collabType: COLLAB_TYPES[0],
                      details: '',
                    });
                  }}
                  className="px-6 py-3 rounded-full border border-white/30 text-xs tracking-[0.2em] uppercase font-semibold hover:bg-white hover:text-black transition-colors"
                >
                  Send Another Inquiry
                </button>
              </motion.div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  {/* Name */}
                  <div>
                    <label className="block text-[10px] tracking-[0.2em] uppercase font-semibold text-[#EDE6DC] mb-2">
                      Your Name *
                    </label>
                    <input
                      type="text"
                      placeholder="e.g. Sarah Jenkins"
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      className={`w-full px-4 py-3 bg-[#111111] border ${
                        errors.name ? 'border-red-400' : 'border-white/15 focus:border-[#D7C8B7]'
                      } text-white placeholder-white/30 text-xs sm:text-sm focus:outline-none transition-colors`}
                    />
                    {errors.name && (
                      <p className="mt-1 text-[11px] text-red-400 flex items-center gap-1">
                        <AlertCircle className="w-3 h-3" />
                        <span>{errors.name}</span>
                      </p>
                    )}
                  </div>

                  {/* Brand */}
                  <div>
                    <label className="block text-[10px] tracking-[0.2em] uppercase font-semibold text-[#EDE6DC] mb-2">
                      Brand / Company *
                    </label>
                    <input
                      type="text"
                      placeholder="e.g. Acme Tech"
                      value={formData.brand}
                      onChange={(e) => setFormData({ ...formData, brand: e.target.value })}
                      className={`w-full px-4 py-3 bg-[#111111] border ${
                        errors.brand ? 'border-red-400' : 'border-white/15 focus:border-[#D7C8B7]'
                      } text-white placeholder-white/30 text-xs sm:text-sm focus:outline-none transition-colors`}
                    />
                    {errors.brand && (
                      <p className="mt-1 text-[11px] text-red-400 flex items-center gap-1">
                        <AlertCircle className="w-3 h-3" />
                        <span>{errors.brand}</span>
                      </p>
                    )}
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  {/* Email */}
                  <div>
                    <label className="block text-[10px] tracking-[0.2em] uppercase font-semibold text-[#EDE6DC] mb-2">
                      Email Address *
                    </label>
                    <input
                      type="email"
                      placeholder="you@company.com"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      className={`w-full px-4 py-3 bg-[#111111] border ${
                        errors.email ? 'border-red-400' : 'border-white/15 focus:border-[#D7C8B7]'
                      } text-white placeholder-white/30 text-xs sm:text-sm focus:outline-none transition-colors`}
                    />
                    {errors.email && (
                      <p className="mt-1 text-[11px] text-red-400 flex items-center gap-1">
                        <AlertCircle className="w-3 h-3" />
                        <span>{errors.email}</span>
                      </p>
                    )}
                  </div>

                  {/* Collab Type */}
                  <div>
                    <label className="block text-[10px] tracking-[0.2em] uppercase font-semibold text-[#EDE6DC] mb-2">
                      Collaboration Type
                    </label>
                    <select
                      value={formData.collabType}
                      onChange={(e) => setFormData({ ...formData, collabType: e.target.value })}
                      className="w-full px-4 py-3 bg-[#111111] border border-white/15 focus:border-[#D7C8B7] text-white text-xs sm:text-sm focus:outline-none transition-colors"
                    >
                      {COLLAB_TYPES.map((type) => (
                        <option key={type} value={type} className="bg-[#111111] text-white">
                          {type}
                        </option>
                      ))}
                    </select>
                  </div>
                </div>

                {/* Details */}
                <div>
                  <label className="block text-[10px] tracking-[0.2em] uppercase font-semibold text-[#EDE6DC] mb-2">
                    Project Details &amp; Timeline *
                  </label>
                  <textarea
                    rows={4}
                    placeholder="Tell me about your product, campaign goals, target audience, deliverables needed, or any specific deadline..."
                    value={formData.details}
                    onChange={(e) => setFormData({ ...formData, details: e.target.value })}
                    className={`w-full px-4 py-3 bg-[#111111] border ${
                      errors.details ? 'border-red-400' : 'border-white/15 focus:border-[#D7C8B7]'
                    } text-white placeholder-white/30 text-xs sm:text-sm focus:outline-none transition-colors`}
                  />
                  {errors.details && (
                    <p className="mt-1 text-[11px] text-red-400 flex items-center gap-1">
                      <AlertCircle className="w-3 h-3" />
                      <span>{errors.details}</span>
                    </p>
                  )}
                </div>

                {/* Submit button */}
                <button
                  type="submit"
                  disabled={loading}
                  className="w-full flex items-center justify-center gap-2 py-4 px-8 bg-[#F5F1EA] text-[#111111] text-xs tracking-[0.25em] uppercase font-bold hover:bg-white transition-all duration-300 disabled:opacity-50"
                >
                  {loading ? (
                    <span>TRANSMITTING INQUIRY...</span>
                  ) : (
                    <>
                      <span>LET&apos;S WORK TOGETHER</span>
                      <Send className="w-4 h-4 ml-1" />
                    </>
                  )}
                </button>
              </form>
            )}
          </div>

          {/* Editorial Notes */}
          <div className="lg:col-span-4 space-y-6">
            <div className="p-8 bg-[#181818] border border-white/10">
              <span className="text-[9px] tracking-[0.25em] uppercase text-[#D7C8B7] font-semibold block mb-2">
                DELIVERY COMMITMENT
              </span>
              <h4 className="font-serif text-xl font-normal text-[#F5F1EA] mb-2">
                Rapid Turnaround
              </h4>
              <p className="text-xs text-[#EDE6DC]/70 leading-relaxed font-light">
                First concept scripts within 48 hours of product reception. Fast-track edits available for time-sensitive marketing campaigns.
              </p>
            </div>

            <div className="p-8 bg-[#181818] border border-white/10">
              <span className="text-[9px] tracking-[0.25em] uppercase text-[#D7C8B7] font-semibold block mb-2">
                COMMERCIAL USAGE
              </span>
              <h4 className="font-serif text-xl font-normal text-[#F5F1EA] mb-2">
                Paid Ads &amp; Spark Whitelist
              </h4>
              <p className="text-xs text-[#EDE6DC]/70 leading-relaxed font-light">
                Flexible commercial licensing for Meta Ads, TikTok Spark Ads, and website video embeds.
              </p>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
};
