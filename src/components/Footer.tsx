'use client';

import React from 'react';
import Link from 'next/link';
import { Mail, ArrowUpRight } from 'lucide-react';
import { InstagramIcon, TikTokIcon, WhatsAppIcon } from '@/components/SocialIcons';
import { CREATOR_PROFILE } from '@/data/portfolio';

const FOOTER_LINKS = [
  { name: 'Home', href: '#home' },
  { name: 'About', href: '#about' },
  { name: 'My Work', href: '#work' },
  { name: 'Brands', href: '#brands' },
  { name: 'Services', href: '#services' },
  { name: 'Contact', href: '#contact' },
];

export const Footer: React.FC = () => {
  return (
    <footer className="bg-[#111111] text-[#EDE6DC] border-t border-white/10 pt-16 pb-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="grid grid-cols-1 md:grid-cols-12 gap-12 pb-14 border-b border-white/10 items-start">
          
          {/* Brand Info */}
          <div className="md:col-span-5 flex flex-col gap-4">
            <Link href="#home" className="flex items-center gap-3">
              <div className="w-8 h-8 rounded-full border border-white/30 flex items-center justify-center font-serif text-sm text-white">
                JS
              </div>
              <span className="font-serif text-xl tracking-[0.18em] font-medium text-white uppercase">
                Julian Sumali
              </span>
            </Link>

            <p className="font-serif italic text-base text-[#EDE6DC]/80 max-w-sm">
              &ldquo;{CREATOR_PROFILE.tagline}&rdquo;
            </p>

            <p className="text-xs text-[#EDE6DC]/50 font-light max-w-sm leading-relaxed">
              Editorial Portfolio of Julian Sumali. UGC Creator &amp; Content Creator with 1+ year of experience producing high-retention short-form digital media.
            </p>
          </div>

          {/* Nav */}
          <div className="md:col-span-4 flex flex-col gap-3">
            <span className="text-[10px] tracking-[0.25em] uppercase font-bold text-[#D7C8B7]">
              NAVIGATION
            </span>
            <div className="flex flex-wrap gap-x-6 gap-y-2 text-xs">
              {FOOTER_LINKS.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  className="hover:text-white transition-colors py-1 tracking-wider uppercase text-[11px]"
                >
                  {link.name}
                </a>
              ))}
            </div>
          </div>

          {/* Connect */}
          <div className="md:col-span-3 flex flex-col gap-3">
            <span className="text-[10px] tracking-[0.25em] uppercase font-bold text-[#D7C8B7]">
              CONNECT
            </span>
            <div className="flex flex-col gap-2.5 text-xs font-light">
              <a
                href={CREATOR_PROFILE.whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 hover:text-white transition-colors text-[#EDE6DC]/80 group"
              >
                <WhatsAppIcon className="w-3.5 h-3.5 text-[#D7C8B7]" />
                <span className="font-mono text-xs">{CREATOR_PROFILE.whatsapp}</span>
                <ArrowUpRight className="w-3 h-3 opacity-0 group-hover:opacity-100 transition-opacity" />
              </a>

              <a
                href={`mailto:${CREATOR_PROFILE.email}`}
                className="inline-flex items-center gap-2 hover:text-white transition-colors text-[#EDE6DC]/80 group"
              >
                <Mail className="w-3.5 h-3.5 text-[#D7C8B7]" />
                <span className="font-mono text-xs">{CREATOR_PROFILE.email}</span>
                <ArrowUpRight className="w-3 h-3 opacity-0 group-hover:opacity-100 transition-opacity" />
              </a>

              <a
                href={CREATOR_PROFILE.instagram}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 hover:text-white transition-colors text-[#EDE6DC]/80 group"
              >
                <InstagramIcon className="w-3.5 h-3.5 text-[#D7C8B7]" />
                <span className="font-mono text-xs">@julianmodebelajar</span>
                <ArrowUpRight className="w-3 h-3 opacity-0 group-hover:opacity-100 transition-opacity" />
              </a>

              <a
                href={CREATOR_PROFILE.tiktok}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 hover:text-white transition-colors text-[#EDE6DC]/80 group"
              >
                <TikTokIcon className="w-3.5 h-3.5 text-[#D7C8B7]" />
                <span className="font-mono text-xs">@juliansumali</span>
                <ArrowUpRight className="w-3 h-3 opacity-0 group-hover:opacity-100 transition-opacity" />
              </a>
            </div>
          </div>

        </div>

        {/* Bottom */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between text-[11px] text-[#EDE6DC]/40 gap-4 tracking-wider uppercase">
          <div>
            © 2026 JULIAN SUMALI. ALL RIGHTS RESERVED.
          </div>
          <div>
            UGC CREATOR &amp; CONTENT STRATEGIST • PORTFOLIO
          </div>
        </div>

      </div>
    </footer>
  );
};
