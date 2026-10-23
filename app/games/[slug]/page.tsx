import React from "react";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import type { Metadata } from "next";
import { GAMES, GameProject } from "@/lib/data";

interface GamePageProps {
  params: Promise<{
    slug: string;
  }>;
}

export async function generateStaticParams() {
  return GAMES.map((game) => ({
    slug: game.slug,
  }));
}

export async function generateMetadata({ params }: GamePageProps): Promise<Metadata> {
  const { slug } = await params;
  const game = GAMES.find((g) => g.slug === slug);
  if (!game) return { title: "Project Not Found" };

  return {
    title: `${game.title} — ${game.genre}`,
    description: game.overview,
    openGraph: {
      title: `${game.title} | Aghatis Studio`,
      description: game.overview,
      images: [{ url: game.image }],
    },
  };
}

export default async function GameDetailPage({ params }: GamePageProps) {
  const { slug } = await params;
  const game = GAMES.find((g) => g.slug === slug);

  if (!game) {
    notFound();
  }

  // Find other projects for subtle navigation at the bottom
  const otherProjects = GAMES.filter((g) => g.slug !== slug);

  return (
    <article className="min-h-screen pt-28 md:pt-36 pb-32">
      {/* Top Breadcrumb & Status Bar */}
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 pb-8 border-b border-[#1F1F1F]">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 text-xs font-mono text-[#92928D]">
          <div className="flex items-center space-x-2">
            <Link href="/" className="hover:text-[#F0F0EC] transition-colors">
              Aghatis
            </Link>
            <span>/</span>
            <Link href="/#games" className="hover:text-[#F0F0EC] transition-colors">
              Selected Work
            </Link>
            <span>/</span>
            <span className="text-[#F0F0EC] uppercase">{game.title}</span>
          </div>
          <div className="flex items-center space-x-3">
            <span className="w-2 h-2 rounded-full bg-emerald-500/80 animate-pulse" />
            <span className="text-[#F0F0EC]">{game.status}</span>
          </div>
        </div>
      </div>

      {/* Case Study Header & Title Composition */}
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 py-12 md:py-20">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-end">
          <div className="lg:col-span-8">
            <span className="text-xs font-mono text-[#92928D] uppercase tracking-[0.2em] block mb-3">
              {game.codename} // {game.genre}
            </span>
            <h1 className="text-4xl sm:text-6xl lg:text-7xl font-light tracking-tight text-[#F0F0EC] uppercase leading-[0.96]">
              {game.title}
            </h1>
          </div>

          <div className="lg:col-span-4 lg:text-right">
            <p className="text-sm font-mono text-[#92928D] uppercase tracking-wider">
              {game.tagline}
            </p>
          </div>
        </div>
      </div>

      {/* Opening Hero Artwork */}
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
        <div className="relative aspect-[16/9] min-h-[320px] sm:min-h-[480px] md:min-h-[600px] w-full overflow-hidden bg-[#141414] border border-[#292929]">
          <Image
            src={game.image}
            alt={game.title}
            fill
            priority
            sizes="(max-width: 1280px) 100vw, 1280px"
            className="object-cover"
          />
          <div className="absolute bottom-0 inset-x-0 p-4 sm:p-6 bg-[#0C0C0C]/85 backdrop-blur-sm border-t border-[#292929]/50 flex flex-col sm:flex-row justify-between text-xs font-mono text-[#92928D] gap-2">
            <div>FIG. 01 — PRIMARY KEY ARTWORK & VISUAL TONE EXPERIMENT</div>
            <div>STATUS: {game.releaseYear}</div>
          </div>
        </div>
      </div>

      {/* Project Overview & Narrative Hook */}
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 pt-20 md:pt-28">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 border-t border-[#1F1F1F] pt-16">
          {/* Left Column: Project Overview */}
          <div className="lg:col-span-4 space-y-4">
            <span className="text-xs font-mono text-[#92928D] uppercase tracking-[0.2em] block">
              Overview & Vision
            </span>
            <h2 className="text-2xl sm:text-3xl font-light text-[#F0F0EC] tracking-tight">
              A study in solitude, landscape, and restraint.
            </h2>
          </div>

          {/* Right Column: Narrative & Synopsis */}
          <div className="lg:col-span-8 space-y-6 text-[#92928D] text-base sm:text-lg font-light leading-relaxed">
            <p className="text-[#F0F0EC] leading-relaxed">
              {game.overview}
            </p>
            <p className="border-l-2 border-[#292929] pl-6 italic text-[#92928D]">
              &ldquo;{game.narrativeHook}&rdquo;
            </p>
          </div>
        </div>
      </div>

      {/* Gameplay & Design Pillars */}
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 pt-24 md:pt-32">
        <div className="border-t border-[#1F1F1F] pt-16">
          <span className="text-xs font-mono text-[#92928D] uppercase tracking-[0.2em] block mb-4">
            Design Philosophy
          </span>
          <h2 className="text-3xl sm:text-4xl font-light text-[#F0F0EC] uppercase tracking-tight mb-12">
            Core Pillars
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {game.designPillars.map((pillar) => (
              <div
                key={pillar.num}
                className="p-8 bg-[#141414] border border-[#292929] space-y-4"
              >
                <div className="flex justify-between items-baseline">
                  <span className="font-mono text-xs text-[#92928D]">
                    {pillar.num}
                  </span>
                  <span className="text-[10px] font-mono text-[#666] uppercase">
                    Pillar
                  </span>
                </div>
                <h3 className="text-xl font-normal text-[#F0F0EC] tracking-tight">
                  {pillar.title}
                </h3>
                <p className="text-sm text-[#92928D] font-light leading-relaxed">
                  {pillar.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Technical Specification Table */}
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 pt-24 md:pt-32">
        <div className="border-t border-[#1F1F1F] pt-16">
          <span className="text-xs font-mono text-[#92928D] uppercase tracking-[0.2em] block mb-4">
            Architecture
          </span>
          <h2 className="text-2xl sm:text-3xl font-light text-[#F0F0EC] uppercase tracking-tight mb-8">
            Technical Specifications
          </h2>

          <div className="border border-[#292929] divide-y divide-[#1F1F1F] font-mono text-xs">
            {game.technicalSpecs.map((spec) => (
              <div
                key={spec.label}
                className="grid grid-cols-1 sm:grid-cols-12 p-4 sm:p-5 hover:bg-[#141414]/50 transition-colors gap-2"
              >
                <div className="sm:col-span-4 text-[#92928D] uppercase tracking-wider">
                  {spec.label}
                </div>
                <div className="sm:col-span-8 text-[#F0F0EC]">
                  {spec.value}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Development Notes / Field Log */}
      {game.developmentNotes && game.developmentNotes.length > 0 && (
        <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 pt-24 md:pt-32">
          <div className="border-t border-[#1F1F1F] pt-16">
            <span className="text-xs font-mono text-[#92928D] uppercase tracking-[0.2em] block mb-4">
              Dispatches From The Field
            </span>
            <h2 className="text-2xl sm:text-3xl font-light text-[#F0F0EC] uppercase tracking-tight mb-8">
              Development Observations
            </h2>

            <div className="space-y-4">
              {game.developmentNotes.map((note, idx) => (
                <div
                  key={idx}
                  className="p-6 bg-[#111] border-l-2 border-[#92928D] flex items-start space-x-4"
                >
                  <span className="font-mono text-xs text-[#666] pt-0.5">
                    0{idx + 1}
                  </span>
                  <p className="text-sm sm:text-base text-[#F0F0EC] font-light leading-relaxed">
                    {note}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      )}

      {/* Next Projects Navigation */}
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 pt-28 md:pt-36 border-t border-[#1F1F1F] mt-28">
        <div className="flex flex-col sm:flex-row justify-between items-start sm:items-baseline mb-8 gap-4">
          <span className="text-xs font-mono text-[#92928D] uppercase tracking-[0.2em]">
            More From Selected Work
          </span>
          <Link
            href="/#games"
            className="text-xs font-mono uppercase tracking-widest text-[#F0F0EC] hover:underline underline-offset-4"
          >
            ← Back to Index
          </Link>
        </div>

        <div className={otherProjects.length === 1 ? "max-w-xl" : "grid grid-cols-1 md:grid-cols-2 gap-8"}>
          {otherProjects.map((other) => (
            <Link
              key={other.slug}
              href={`/games/${other.slug}`}
              className="group block p-6 bg-[#141414] border border-[#292929] hover:border-[#F0F0EC] transition-colors"
            >
              <div className="relative aspect-[16/9] w-full overflow-hidden mb-4 bg-[#0C0C0C]">
                <Image
                  src={other.image}
                  alt={other.title}
                  fill
                  sizes="(max-width: 768px) 100vw, 500px"
                  className="object-cover group-hover:scale-[1.02] transition-transform duration-500"
                />
              </div>
              <div className="text-xs font-mono text-[#92928D] uppercase tracking-wider mb-1">
                {other.genre}
              </div>
              <h3 className="text-xl font-normal text-[#F0F0EC] group-hover:text-white transition-colors">
                {other.title} ↗
              </h3>
            </Link>
          ))}
        </div>
      </div>
    </article>
  );
}
