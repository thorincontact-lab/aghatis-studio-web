import React from "react";
import Link from "next/link";
import Image from "next/image";
import type { Metadata } from "next";
import { GAMES } from "@/lib/data";

export const metadata: Metadata = {
  title: "Games & Prototypes — Aghatis Studio",
  description:
    "Explore active pre-production projects, prototypes, and concept worlds by Aghatis Studio.",
};

export default function GamesIndexPage() {
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
            <span className="text-[#F0F0EC] uppercase">Selected Work</span>
          </div>
          <div className="text-[#92928D]">
            03 TITLES IN ACTIVE PRE-PRODUCTION & PROTOTYPING
          </div>
        </div>
      </div>

      {/* Main Headline */}
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 py-16 md:py-24">
        <span className="text-xs font-mono text-[#92928D] uppercase tracking-[0.2em] block mb-4">
          Interactive Worlds
        </span>
        <h1 className="text-4xl sm:text-6xl lg:text-7xl font-light tracking-tight text-[#F0F0EC] uppercase max-w-4xl leading-[1.02]">
          Selected work & <br />
          <span className="font-serif italic font-normal text-[#92928D]">prototypes.</span>
        </h1>
        <p className="mt-8 text-base sm:text-lg text-[#92928D] font-light leading-relaxed max-w-2xl">
          An ongoing survey of our active developments. Each project represents an exploration of a distinct mechanical hypothesis and atmospheric silhouette.
        </p>
      </div>

      {/* Projects List */}
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 space-y-24 md:space-y-36 border-t border-[#1F1F1F] pt-16">
        {GAMES.map((game, idx) => (
          <article key={game.slug} className="group">
            <Link href={`/games/${game.slug}`} className="block">
              <div className="relative aspect-[16/9] md:aspect-[21/9] min-h-[300px] sm:min-h-[440px] md:min-h-[540px] w-full overflow-hidden bg-[#141414] border border-[#292929]">
                <Image
                  src={game.image}
                  alt={game.title}
                  fill
                  sizes="(max-width: 1280px) 100vw, 1280px"
                  className="object-cover group-hover:scale-[1.015] transition-transform duration-700 ease-out"
                />
                <div className="absolute top-4 left-4 sm:top-6 sm:left-6 px-3 py-1.5 bg-[#0C0C0C]/85 backdrop-blur-sm border border-[#292929] text-[11px] font-mono text-[#F0F0EC]">
                  {game.status}
                </div>
              </div>

              <div className="pt-8 grid grid-cols-1 md:grid-cols-12 gap-6 items-baseline">
                <div className="md:col-span-5">
                  <div className="text-xs font-mono text-[#92928D] tracking-wider uppercase mb-1">
                    0{idx + 1} / {game.genre} // {game.platforms}
                  </div>
                  <h2 className="text-3xl sm:text-4xl font-normal tracking-tight text-[#F0F0EC] group-hover:text-white transition-colors">
                    {game.title}
                  </h2>
                </div>

                <div className="md:col-span-5">
                  <p className="text-sm sm:text-base text-[#92928D] font-light leading-relaxed">
                    {game.overview}
                  </p>
                </div>

                <div className="md:col-span-2 flex justify-start md:justify-end">
                  <span className="inline-flex items-center space-x-1 text-xs font-mono tracking-widest uppercase text-[#F0F0EC] border-b border-[#F0F0EC] pb-1 group-hover:translate-x-1 transition-transform">
                    <span>Inspect Case</span>
                    <span>↗</span>
                  </span>
                </div>
              </div>
            </Link>
          </article>
        ))}
      </div>
    </article>
  );
}
