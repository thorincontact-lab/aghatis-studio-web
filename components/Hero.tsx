import React from "react";
import Image from "next/image";
import Link from "next/link";

export function Hero() {
  return (
    <section className="relative pt-28 pb-16 md:pt-36 md:pb-24 px-6 sm:px-8 lg:px-12 border-b border-[#292929] bg-[#0C0C0C]">
      <div className="max-w-7xl mx-auto">
        {/* Top Header Row: Descriptor & System Metadata */}
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 pb-8 md:pb-12 border-b border-[#1B1B1B]">
          <div className="flex items-center space-x-3">
            <span className="w-1.5 h-1.5 bg-[#F0F0EC] inline-block" />
            <span className="font-mono text-[11px] tracking-[0.2em] uppercase text-[#92928D]">
              Independent Game Development
            </span>
          </div>
          <div className="flex items-center space-x-6 text-[11px] font-mono text-[#777]">
            <span>JAKARTA / REMOTE</span>
            <span className="hidden sm:inline">•</span>
            <span>CYCLE 01: PROTOTYPE & PRODUCTION</span>
          </div>
        </div>

        {/* Hero Title & Supporting Statement Grid */}
        <div className="pt-10 md:pt-16 pb-12 md:pb-16 grid grid-cols-1 lg:grid-cols-12 gap-8 items-end">
          {/* Main Left Headline */}
          <div className="lg:col-span-8">
            <h1 className="text-5xl sm:text-7xl lg:text-8xl xl:text-9xl font-light tracking-tight text-[#F0F0EC] uppercase leading-[0.92]">
              We make <br />
              <span className="font-normal italic font-serif">worlds.</span>
            </h1>
          </div>

          {/* Right Supporting Statement & Understated CTA */}
          <div className="lg:col-span-4 flex flex-col justify-end space-y-6 pt-4 lg:pt-0">
            <p className="text-[#92928D] text-base sm:text-lg leading-relaxed font-sans font-light">
              An independent game development studio exploring new ideas, strange places, and meaningful play.
            </p>

            <div className="pt-2 flex items-center space-x-6">
              <Link
                href="/#games"
                className="group inline-flex items-center space-x-2 text-xs font-mono tracking-[0.16em] uppercase text-[#F0F0EC] hover:text-white transition-colors py-2 border-b border-[#F0F0EC] pb-1"
              >
                <span>Explore our work</span>
                <span className="inline-block transition-transform duration-200 group-hover:translate-x-0.5 group-hover:-translate-y-0.5">
                  ↗
                </span>
              </Link>

              <Link
                href="/studio"
                className="text-xs font-mono tracking-[0.16em] uppercase text-[#92928D] hover:text-[#F0F0EC] transition-colors py-2 pb-1"
              >
                Studio Ethos
              </Link>
            </div>
          </div>
        </div>

        {/* Dominant Hero Artwork Container */}
        <div className="relative mt-4 w-full overflow-hidden bg-[#141414] border border-[#292929] group">
          <div className="relative w-full aspect-[16/9] min-h-[320px] sm:min-h-[460px] md:min-h-[580px]">
            <Image
              src="/images/lost-in-space.jpg"
              alt="Lost In Space — Official 2D space shooter key artwork featuring combat spacecraft hulls in asteroid field"
              fill
              priority
              sizes="(max-width: 1280px) 100vw, 1280px"
              className="object-cover transition-transform duration-700 ease-out group-hover:scale-[1.01]"
            />
            {/* Subtle atmospheric vignette overlay */}
            <div className="absolute inset-0 bg-gradient-to-t from-[#0C0C0C]/80 via-transparent to-transparent opacity-80" />
          </div>

          {/* Precision Image Caption / Metadata Bar */}
          <div className="absolute bottom-0 inset-x-0 p-4 sm:p-6 bg-[#0C0C0C]/85 backdrop-blur-sm border-t border-[#292929]/50 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-2 text-xs font-mono text-[#92928D]">
            <div className="flex items-center space-x-3">
              <span className="text-[#F0F0EC] font-medium tracking-wider">FIG. 01 — LOST IN SPACE</span>
              <span>/</span>
              <span className="text-[#92928D]">ACTIVE PRE-PRODUCTION</span>
            </div>
            <div className="flex flex-wrap items-center gap-3 sm:gap-4 text-[11px] text-[#777]">
              <span>2D KINETIC SPACE SHOOTER</span>
              <span>•</span>
              <span className="text-[#F0F0EC]">ANDROID & PC (GOOGLE PLAY GAMES)</span>
              <Link
                href="/games/lost-in-space"
                className="text-[#F0F0EC] hover:underline underline-offset-4 ml-2"
              >
                Inspect Project ↗
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
