"use client";

import React, { useState } from "react";
import { STUDIO_METADATA } from "@/lib/data";

export function ContactSection() {
  const [copied, setCopied] = useState(false);

  const copyEmail = () => {
    navigator.clipboard.writeText(STUDIO_METADATA.email);
    setCopied(true);
    setTimeout(() => setCopied(false), 2500);
  };

  return (
    <section id="contact" className="py-24 md:py-36 px-6 sm:px-8 lg:px-12 bg-[#0C0C0C]">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
          {/* Left Column: Memorable Headline & Description */}
          <div className="lg:col-span-7 space-y-6">
            <span className="font-mono text-xs uppercase tracking-[0.2em] text-[#92928D] block">
              Inquiries & Communication
            </span>
            <h2 className="text-4xl sm:text-6xl lg:text-7xl font-light tracking-tight text-[#F0F0EC] uppercase leading-[0.98]">
              Good things start with <br />
              <span className="font-serif italic font-normal text-[#92928D]">an idea.</span>
            </h2>
            <p className="text-base sm:text-lg text-[#92928D] font-light leading-relaxed max-w-xl">
              For collaborations, publishing inquiries, investment discussions, or simply to say hello. We read every transmission carefully.
            </p>
          </div>

          {/* Right Column: Understated Interactive Email & Channels */}
          <div className="lg:col-span-5 flex flex-col space-y-10 pt-4 lg:pt-8">
            {/* Direct Email Action Box */}
            <div className="p-6 sm:p-8 bg-[#141414] border border-[#292929] space-y-4">
              <span className="text-[11px] font-mono uppercase tracking-[0.2em] text-[#92928D] block">
                Direct Dispatch
              </span>
              <div className="text-lg sm:text-xl font-mono text-[#F0F0EC] break-all select-all">
                {STUDIO_METADATA.email}
              </div>
              <div className="pt-2 flex flex-wrap gap-4">
                <a
                  href={`mailto:${STUDIO_METADATA.email}`}
                  className="px-4 py-2 bg-[#F0F0EC] text-[#0C0C0C] text-xs font-mono uppercase tracking-wider font-medium hover:bg-white transition-colors inline-flex items-center space-x-1"
                >
                  <span>Compose Mail</span>
                  <span>↗</span>
                </a>
                <button
                  type="button"
                  onClick={copyEmail}
                  className="px-4 py-2 border border-[#292929] text-xs font-mono uppercase tracking-wider text-[#92928D] hover:text-[#F0F0EC] hover:border-[#444] transition-colors"
                >
                  {copied ? "Copied to Clipboard" : "Copy Address"}
                </button>
              </div>
            </div>

            {/* Studio Coordinates & Channels */}
            <div className="space-y-4 text-xs font-mono text-[#92928D]">
              <div className="flex justify-between border-b border-[#1B1B1B] pb-2">
                <span>PRIMARY STUDIO BASE</span>
                <span className="text-[#F0F0EC]">JAKARTA / REMOTE WORLDWIDE</span>
              </div>
              <div className="flex justify-between border-b border-[#1B1B1B] pb-2">
                <span>PRESS KIT & ASSETS</span>
                <a
                  href={`mailto:${STUDIO_METADATA.email}?subject=Press%20Kit%20Request`}
                  className="text-[#F0F0EC] hover:underline underline-offset-4"
                >
                  Request Press Access ↗
                </a>
              </div>
              <div className="flex justify-between border-b border-[#1B1B1B] pb-2">
                <span>SECURITY & ENCRYPTION</span>
                <span className="text-[#F0F0EC]">PGP KEY AVAILABLE UPON REQUEST</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
