import React from "react";
import Image from "next/image";
import Link from "next/link";
import { STUDIO_PRINCIPLES } from "@/lib/data";

export function StudioPillars() {
  return (
    <section className="py-24 md:py-36 px-6 sm:px-8 lg:px-12 border-b border-[#292929] bg-[#0C0C0C]">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="pb-12 md:pb-16 border-b border-[#1B1B1B]">
          <span className="font-mono text-xs uppercase tracking-[0.2em] text-[#92928D] block mb-3">
            Ethos & Methodology
          </span>
          <h2 className="text-3xl sm:text-5xl lg:text-6xl font-light tracking-tight text-[#F0F0EC] uppercase max-w-4xl leading-[1.05]">
            An independent <br />
            <span className="font-serif italic font-normal text-[#92928D]">creative practice.</span>
          </h2>
        </div>

        {/* Narrative Introduction & Studio Photo Grid */}
        <div className="pt-12 md:pt-16 pb-16 md:pb-24 grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          <div className="lg:col-span-5 space-y-6">
            <p className="text-base sm:text-lg text-[#F0F0EC] font-light leading-relaxed">
              Aghatis Studio is an emerging independent team exploring interactive entertainment through thoughtful design, rigorous experimentation, and patient craft.
            </p>
            <p className="text-sm sm:text-base text-[#92928D] font-light leading-relaxed">
              We do not build games to chase algorithms or satisfy engagement metrics. We treat video games as a serious expressive discipline capable of delivering distinct moods, solitary wonder, and lasting resonance.
            </p>
            <div className="pt-2">
              <Link
                href="/studio"
                className="inline-flex items-center space-x-2 text-xs font-mono tracking-widest uppercase text-[#F0F0EC] border-b border-[#F0F0EC] pb-1 hover:translate-x-1 transition-transform"
              >
                <span>Read Full Studio Manifesto</span>
                <span>↗</span>
              </Link>
            </div>
          </div>

          <div className="lg:col-span-7">
            <div className="relative aspect-[16/10] w-full overflow-hidden bg-[#141414] border border-[#292929]">
              <Image
                src="/images/studio-craft.jpg"
                alt="Aghatis Studio Atelier — Sound design equipment, architectural drafting, and game systems research"
                fill
                sizes="(max-width: 1024px) 100vw, 700px"
                className="object-cover"
              />
              <div className="absolute bottom-0 inset-x-0 p-3 sm:p-4 bg-[#0C0C0C]/80 backdrop-blur-sm border-t border-[#292929]/50 text-[11px] font-mono text-[#92928D] flex justify-between">
                <span>ATELIER DESK: ACOUSTIC OSCILLATION & TOPOGRAPHY SKETCHES</span>
                <span className="hidden sm:inline">OCT 2026</span>
              </div>
            </div>
          </div>
        </div>

        {/* Studio Principles Presented as Typography */}
        <div className="pt-12 border-t border-[#1B1B1B]">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 lg:gap-8">
            {STUDIO_PRINCIPLES.map((principle) => (
              <div
                key={principle.num}
                className="space-y-4 pt-4 border-t border-[#292929] group hover:border-[#F0F0EC] transition-colors"
              >
                <div className="flex items-baseline justify-between">
                  <span className="font-mono text-xs text-[#92928D] tracking-widest">
                    {principle.num}
                  </span>
                  <span className="text-[10px] font-mono text-[#666] uppercase">
                    Principle
                  </span>
                </div>

                <h3 className="text-xl font-normal text-[#F0F0EC] tracking-tight group-hover:text-white transition-colors">
                  {principle.name}
                </h3>

                <p className="text-xs text-[#777] font-mono uppercase tracking-wider">
                  {principle.tagline}
                </p>

                <p className="text-xs sm:text-sm text-[#92928D] font-light leading-relaxed">
                  {principle.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
