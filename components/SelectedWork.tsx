"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import { GAMES } from "@/lib/data";

export function SelectedWork() {
  const [project1, project2] = GAMES;

  return (
    <section id="games" className="py-24 md:py-36 px-6 sm:px-8 lg:px-12 border-b border-[#292929]">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="flex flex-col sm:flex-row sm:items-baseline justify-between pb-12 md:pb-20 border-b border-[#1B1B1B] gap-4">
          <div>
            <span className="font-mono text-xs uppercase tracking-[0.2em] text-[#92928D] block mb-2">
              Portfolio & Prototypes
            </span>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-light tracking-tight text-[#F0F0EC] uppercase">
              Selected Work
            </h2>
          </div>
          <div className="text-xs font-mono text-[#777] max-w-xs text-left sm:text-right">
            <span>[ 02 ACTIVE TITLES IN PRODUCTION & PROTOTYPING ]</span>
          </div>
        </div>

        {/* Editorial Project Sequence */}
        <div className="pt-16 md:pt-24 space-y-32 md:space-y-44">
          {/* Project 1: Dominant Full-Width Architectural Showcase */}
          <article className="group">
            <Link href={`/games/${project1.slug}`} className="block">
              <div className="relative aspect-[16/9] min-h-[300px] sm:min-h-[440px] md:min-h-[540px] w-full overflow-hidden bg-[#141414] border border-[#292929]">
                <Image
                  src={project1.image}
                  alt={project1.title}
                  fill
                  sizes="(max-width: 1280px) 100vw, 1280px"
                  className="object-cover transition-transform duration-700 ease-out group-hover:scale-[1.015]"
                />
                <div className="absolute top-4 left-4 sm:top-6 sm:left-6 px-3 py-1.5 bg-[#0C0C0C]/85 backdrop-blur-sm border border-[#292929] text-[11px] font-mono text-[#F0F0EC]">
                  {project1.status}
                </div>
              </div>

              {/* Editorial Metadata Block */}
              <div className="pt-8 grid grid-cols-1 md:grid-cols-12 gap-6 items-baseline">
                <div className="md:col-span-5">
                  <div className="text-xs font-mono text-[#92928D] tracking-wider uppercase mb-1">
                    01 / {project1.genre} // {project1.platforms}
                  </div>
                  <h3 className="text-3xl sm:text-4xl font-normal tracking-tight text-[#F0F0EC] group-hover:text-white transition-colors">
                    {project1.title}
                  </h3>
                </div>

                <div className="md:col-span-5">
                  <p className="text-sm sm:text-base text-[#92928D] font-light leading-relaxed">
                    {project1.overview}
                  </p>
                </div>

                <div className="md:col-span-2 flex justify-start md:justify-end">
                  <span className="inline-flex items-center space-x-1 text-xs font-mono tracking-widest uppercase text-[#F0F0EC] border-b border-[#F0F0EC] pb-1 group-hover:translate-x-1 transition-transform">
                    <span>Project File</span>
                    <span>↗</span>
                  </span>
                </div>
              </div>
            </Link>
          </article>

          {/* Project 2: Asymmetric Offset Layout (Brutalist Observatory) */}
          <article className="group">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center">
              {/* Asymmetric Image Col */}
              <div className="lg:col-span-7">
                <Link href={`/games/${project2.slug}`} className="block">
                  <div className="relative aspect-[16/10] min-h-[260px] sm:min-h-[360px] w-full overflow-hidden bg-[#141414] border border-[#292929]">
                    <Image
                      src={project2.image}
                      alt={project2.title}
                      fill
                      sizes="(max-width: 1024px) 100vw, 700px"
                      className="object-cover transition-transform duration-700 ease-out group-hover:scale-[1.02]"
                    />
                    <div className="absolute top-4 left-4 sm:top-6 sm:left-6 px-3 py-1.5 bg-[#0C0C0C]/85 backdrop-blur-sm border border-[#292929] text-[11px] font-mono text-[#F0F0EC]">
                      {project2.status}
                    </div>
                  </div>
                </Link>
              </div>

              {/* Offset Info Col */}
              <div className="lg:col-span-5 space-y-6">
                <div>
                  <span className="text-xs font-mono text-[#92928D] tracking-wider uppercase block mb-1">
                    02 / {project2.genre}
                  </span>
                  <h3 className="text-3xl sm:text-4xl font-normal tracking-tight text-[#F0F0EC]">
                    <Link
                      href={`/games/${project2.slug}`}
                      className="hover:text-white transition-colors"
                    >
                      {project2.title}
                    </Link>
                  </h3>
                </div>

                <p className="text-sm sm:text-base text-[#92928D] font-light leading-relaxed">
                  {project2.overview}
                </p>

                <div className="pt-2 border-t border-[#1B1B1B] space-y-2 text-xs font-mono text-[#777]">
                  <div className="flex justify-between">
                    <span>PLATFORMS</span>
                    <span className="text-[#92928D]">{project2.platforms}</span>
                  </div>
                  <div className="flex justify-between">
                    <span>ENGINE MIDDLEWARE</span>
                    <span className="text-[#92928D]">{project2.engine}</span>
                  </div>
                </div>

                <div>
                  <Link
                    href={`/games/${project2.slug}`}
                    className="inline-flex items-center space-x-2 text-xs font-mono tracking-widest uppercase text-[#F0F0EC] border-b border-[#F0F0EC] pb-1 hover:translate-x-1 transition-transform"
                  >
                    <span>Read Architectural Log</span>
                    <span>↗</span>
                  </Link>
                </div>
              </div>
            </div>
          </article>
        </div>
      </div>
    </section>
  );
}
