import React from "react";
import Image from "next/image";
import Link from "next/link";
import type { Metadata } from "next";
import { STUDIO_PRINCIPLES, STUDIO_METADATA } from "@/lib/data";

export const metadata: Metadata = {
  title: "Studio — An Independent Creative Practice",
  description:
    "Aghatis Studio is an emerging independent game development team exploring interactive entertainment through thoughtful design, experimentation, and craft.",
};

export default function StudioPage() {
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
            <span className="text-[#F0F0EC] uppercase">The Studio</span>
          </div>
          <div className="text-[#92928D]">
            ESTABLISHED 2025 — AUTONOMOUS CREATIVE PRACTICE
          </div>
        </div>
      </div>

      {/* Main Studio Headline & Intro */}
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 py-16 md:py-24">
        <span className="text-xs font-mono text-[#92928D] uppercase tracking-[0.2em] block mb-4">
          Manifesto & Practice
        </span>
        <h1 className="text-4xl sm:text-6xl lg:text-7xl font-light tracking-tight text-[#F0F0EC] uppercase max-w-4xl leading-[1.02]">
          An independent <br />
          <span className="font-serif italic font-normal text-[#92928D]">creative practice.</span>
        </h1>

        <div className="pt-12 grid grid-cols-1 lg:grid-cols-12 gap-12 text-[#92928D] text-base sm:text-lg font-light leading-relaxed border-t border-[#1F1F1F] mt-16">
          <div className="lg:col-span-6 space-y-6">
            <p className="text-[#F0F0EC] text-xl font-light leading-relaxed">
              We founded Aghatis Studio out of a conviction that the most memorable interactive experiences are born not from industrial scale, but from distinct creative intention.
            </p>
            <p>
              In an industry increasingly driven by live-service optimization, manufactured dopamine triggers, and algorithmic repetition, we choose the opposite path. We build contained, deliberate worlds where silence carries physical weight, where architecture communicates lore without lengthy exposition, and where the player is treated as an intelligent, observant participant.
            </p>
          </div>

          <div className="lg:col-span-6 space-y-6">
            <p>
              Our team operates as a multidisciplinary atelier. We work at the intersection of game systems engineering, acoustic spatialization, architectural brutalism, and speculative world design.
            </p>
            <p>
              We deliberately keep our core circle small. This restraint allows us to pivot rapidly when an experiment fails, and to protect the singular atmosphere of our projects from corporate dilution.
            </p>
          </div>
        </div>
      </div>

      {/* Studio Atelier Visual */}
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
        <div className="relative aspect-[16/9] w-full overflow-hidden bg-[#141414] border border-[#292929]">
          <Image
            src="/images/studio-craft.jpg"
            alt="Aghatis Studio atelier workspace with acoustic research, oscilloscope, and architectural sketches"
            fill
            sizes="(max-width: 1280px) 100vw, 1280px"
            className="object-cover"
          />
          <div className="absolute bottom-0 inset-x-0 p-4 sm:p-6 bg-[#0C0C0C]/85 backdrop-blur-sm border-t border-[#292929]/50 flex flex-col sm:flex-row justify-between text-xs font-mono text-[#92928D] gap-2">
            <div>STUDIO ATELIER — ARCHITECTURAL ACOUSTICS & SYSTEMS RESEARCH</div>
            <div>AUTONOMOUS & INDEPENDENT</div>
          </div>
        </div>
      </div>

      {/* Core Principles Section */}
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 pt-24 md:pt-36">
        <div className="border-t border-[#1F1F1F] pt-16">
          <span className="text-xs font-mono text-[#92928D] uppercase tracking-[0.2em] block mb-4">
            Foundational Tenets
          </span>
          <h2 className="text-3xl sm:text-4xl font-light text-[#F0F0EC] uppercase tracking-tight mb-16">
            Studio Principles
          </h2>

          <div className="space-y-16 divide-y divide-[#1F1F1F]">
            {STUDIO_PRINCIPLES.map((principle) => (
              <div
                key={principle.num}
                className="pt-12 grid grid-cols-1 lg:grid-cols-12 gap-8 items-start"
              >
                <div className="lg:col-span-3 flex items-baseline space-x-3">
                  <span className="font-mono text-lg text-[#F0F0EC]">
                    {principle.num}
                  </span>
                  <span className="text-xs font-mono text-[#666] uppercase">
                    / 04
                  </span>
                </div>

                <div className="lg:col-span-4">
                  <h3 className="text-2xl sm:text-3xl font-normal text-[#F0F0EC] tracking-tight mb-2">
                    {principle.name}
                  </h3>
                  <p className="text-xs font-mono text-[#92928D] uppercase tracking-wider">
                    {principle.tagline}
                  </p>
                </div>

                <div className="lg:col-span-5">
                  <p className="text-sm sm:text-base text-[#92928D] font-light leading-relaxed">
                    {principle.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Craft, Tooling & Technology */}
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 pt-24 md:pt-36">
        <div className="border-t border-[#1F1F1F] pt-16">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
            <div className="lg:col-span-5 space-y-4">
              <span className="text-xs font-mono text-[#92928D] uppercase tracking-[0.2em] block">
                Technical Rigor
              </span>
              <h2 className="text-2xl sm:text-3xl font-light text-[#F0F0EC] uppercase tracking-tight">
                Our Medium & Tools
              </h2>
              <p className="text-sm sm:text-base text-[#92928D] font-light leading-relaxed">
                Art direction and engineering are not separate departments in our studio; they are simultaneous conversations. We bend technology to serve atmosphere, not the other way around.
              </p>
            </div>

            <div className="lg:col-span-7 border border-[#292929] divide-y divide-[#1F1F1F] font-mono text-xs">
              <div className="p-6 bg-[#141414] space-y-2">
                <div className="text-[#F0F0EC] text-sm uppercase tracking-wider">
                  Unreal Engine 5 & Custom C++ Tooling
                </div>
                <p className="text-[#92928D] leading-relaxed">
                  We leverage Nanite micro-polygon geometry and Lumen dynamic global illumination to create believable natural geologic formations without compromising performance.
                </p>
              </div>

              <div className="p-6 bg-[#141414] space-y-2">
                <div className="text-[#F0F0EC] text-sm uppercase tracking-wider">
                  Convolution Acoustic Occlusion
                </div>
                <p className="text-[#92928D] leading-relaxed">
                  Sound propagation calculated in real time using impulse response convolutions captured in actual granite quarries and damp pine valleys.
                </p>
              </div>

              <div className="p-6 bg-[#141414] space-y-2">
                <div className="text-[#F0F0EC] text-sm uppercase tracking-wider">
                  Diegetic Interface Systems
                </div>
                <p className="text-[#92928D] leading-relaxed">
                  We eliminate conventional abstract floating menus wherever possible in favor of physical, tangible in-world instrumentation.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Collaboration Callout */}
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 pt-24 md:pt-36">
        <div className="p-8 sm:p-12 bg-[#141414] border border-[#292929] flex flex-col md:flex-row justify-between items-start md:items-center gap-8">
          <div className="space-y-2 max-w-xl">
            <h3 className="text-xl sm:text-2xl font-light text-[#F0F0EC] uppercase tracking-tight">
              Looking for collaborators & kindred spirits
            </h3>
            <p className="text-sm text-[#92928D] font-light leading-relaxed">
              We are small by design, but always eager to hear from engineers, technical sound designers, and visual researchers who share our aesthetic values.
            </p>
          </div>
          <Link
            href="/contact"
            className="px-6 py-3 bg-[#F0F0EC] text-[#0C0C0C] font-mono text-xs uppercase tracking-widest font-medium hover:bg-white transition-colors shrink-0"
          >
            Get In Touch ↗
          </Link>
        </div>
      </div>
    </article>
  );
}
