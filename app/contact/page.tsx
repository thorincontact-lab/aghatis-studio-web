"use client";

import React, { useState } from "react";
import Link from "next/link";
import { STUDIO_METADATA } from "@/lib/data";

export default function ContactPage() {
  const [copied, setCopied] = useState(false);

  const copyEmail = () => {
    navigator.clipboard.writeText(STUDIO_METADATA.email);
    setCopied(true);
    setTimeout(() => setCopied(false), 2500);
  };

  const contactCategories = [
    {
      label: "Publishing & Distribution",
      desc: "For platform partners, indie publishers, and physical edition distributors.",
      email: STUDIO_METADATA.email,
    },
    {
      label: "Press & Media Access",
      desc: "For preview builds, high-resolution key art kits, and developer interviews.",
      email: STUDIO_METADATA.email,
    },
    {
      label: "Creative Collaboration",
      desc: "For technical sound designers, environmental artists, and systems engineers.",
      email: STUDIO_METADATA.email,
    },
  ];

  return (
    <article className="min-h-screen pt-28 md:pt-36 pb-32">
      {/* Top Header */}
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 pb-8 border-b border-[#1F1F1F]">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 text-xs font-mono text-[#92928D]">
          <div className="flex items-center space-x-2">
            <Link href="/" className="hover:text-[#F0F0EC] transition-colors">
              Aghatis
            </Link>
            <span>/</span>
            <span className="text-[#F0F0EC] uppercase">Contact & Transmission</span>
          </div>
          <div className="text-[#92928D]">
            RESPONSE TIME: TYPICALLY 2–3 BUSINESS DAYS
          </div>
        </div>
      </div>

      {/* Main Headline */}
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 py-16 md:py-24">
        <span className="text-xs font-mono text-[#92928D] uppercase tracking-[0.2em] block mb-4">
          Open Lines
        </span>
        <h1 className="text-4xl sm:text-6xl lg:text-7xl font-light tracking-tight text-[#F0F0EC] uppercase max-w-4xl leading-[1.02]">
          Good things start with <br />
          <span className="font-serif italic font-normal text-[#92928D]">an idea.</span>
        </h1>
        <p className="mt-8 text-base sm:text-lg text-[#92928D] font-light leading-relaxed max-w-2xl">
          For collaborations, publishing inquiries, investment discussions, or simply to say hello. We prefer thoughtful emails over automated contact forms.
        </p>
      </div>

      {/* Primary Dispatch Center */}
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 border-t border-[#1F1F1F] pt-16">
          {/* Main Direct Email Block */}
          <div className="lg:col-span-5 space-y-8">
            <div className="p-8 bg-[#141414] border border-[#292929] space-y-6">
              <span className="text-xs font-mono uppercase tracking-[0.2em] text-[#92928D] block">
                Primary Studio Address
              </span>
              <div className="text-xl sm:text-2xl font-mono text-[#F0F0EC] select-all break-all">
                {STUDIO_METADATA.email}
              </div>
              <div className="flex flex-wrap gap-4 pt-2">
                <a
                  href={`mailto:${STUDIO_METADATA.email}`}
                  className="px-5 py-2.5 bg-[#F0F0EC] text-[#0C0C0C] text-xs font-mono uppercase tracking-widest font-medium hover:bg-white transition-colors inline-flex items-center space-x-1"
                >
                  <span>Compose Email</span>
                  <span>↗</span>
                </a>
                <button
                  type="button"
                  onClick={copyEmail}
                  className="px-5 py-2.5 border border-[#292929] text-xs font-mono uppercase tracking-widest text-[#92928D] hover:text-[#F0F0EC] hover:border-[#444] transition-colors"
                >
                  {copied ? "Copied to Clipboard" : "Copy Address"}
                </button>
              </div>
            </div>

            {/* Social Channels List */}
            <div className="border border-[#292929] divide-y divide-[#1F1F1F] font-mono text-xs">
              {STUDIO_METADATA.socials.map((social) => (
                <a
                  key={social.name}
                  href={social.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-4 flex items-center justify-between text-[#92928D] hover:text-[#F0F0EC] hover:bg-[#141414] transition-colors"
                >
                  <span className="uppercase tracking-wider">{social.name}</span>
                  <span className="text-[#666]">{social.label} ↗</span>
                </a>
              ))}
            </div>
          </div>

          {/* Categorized Inquiries */}
          <div className="lg:col-span-7 space-y-8">
            <h2 className="text-2xl font-light text-[#F0F0EC] uppercase tracking-tight">
              Inquiry Channels
            </h2>

            <div className="space-y-6">
              {contactCategories.map((cat, idx) => (
                <div
                  key={idx}
                  className="p-6 bg-[#141414] border border-[#292929] space-y-3"
                >
                  <div className="flex justify-between items-baseline">
                    <h3 className="text-lg font-normal text-[#F0F0EC]">
                      {cat.label}
                    </h3>
                    <span className="text-xs font-mono text-[#666]">0{idx + 1}</span>
                  </div>
                  <p className="text-sm text-[#92928D] font-light leading-relaxed">
                    {cat.desc}
                  </p>
                  <div className="pt-2">
                    <a
                      href={`mailto:${cat.email}?subject=${encodeURIComponent(cat.label)}`}
                      className="text-xs font-mono text-[#F0F0EC] underline underline-offset-4 decoration-[#292929] hover:decoration-[#F0F0EC] transition-colors inline-flex items-center space-x-1"
                    >
                      <span>Direct Dispatch: {cat.email}</span>
                      <span>↗</span>
                    </a>
                  </div>
                </div>
              ))}
            </div>

            {/* Pitch Policy Note */}
            <div className="p-6 bg-[#0E0E0E] border-l-2 border-[#92928D] text-xs font-mono text-[#888] space-y-2">
              <div className="text-[#F0F0EC] uppercase tracking-wider font-medium">
                Unsolicited Game Pitches Policy
              </div>
              <p className="leading-relaxed">
                Due to legal and intellectual property constraints, Aghatis Studio cannot accept or review unsolicited game design documents or script ideas. Please keep initial communications focused on studio partnerships and technical collaboration.
              </p>
            </div>
          </div>
        </div>
      </div>
    </article>
  );
}
