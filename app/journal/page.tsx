import React from "react";
import Link from "next/link";
import type { Metadata } from "next";
import { JOURNAL_POSTS } from "@/lib/data";

export const metadata: Metadata = {
  title: "Journal — Development Notes & Technical Dispatches",
  description:
    "Reflections on sound design, physics modeling, worldbuilding, and game craft from Aghatis Studio.",
};

export default function JournalPage() {
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
            <span className="text-[#F0F0EC] uppercase">Journal & Field Notes</span>
          </div>
          <div className="text-[#92928D]">
            ARCHIVE OF DEVELOPMENT OBSERVATIONS
          </div>
        </div>
      </div>

      {/* Main Journal Headline */}
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 py-16 md:py-24">
        <span className="text-xs font-mono text-[#92928D] uppercase tracking-[0.2em] block mb-4">
          Field Notes & Methodology
        </span>
        <h1 className="text-4xl sm:text-6xl lg:text-7xl font-light tracking-tight text-[#F0F0EC] uppercase max-w-4xl leading-[1.02]">
          Journal & <br />
          <span className="font-serif italic font-normal text-[#92928D]">technical logs.</span>
        </h1>
        <p className="mt-8 text-base sm:text-lg text-[#92928D] font-light leading-relaxed max-w-2xl">
          A collection of essays, technical post-mortems, and aesthetic reflections written during active production.
        </p>
      </div>

      {/* List-Based Index */}
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
        <div className="border-t border-[#1F1F1F] divide-y divide-[#1F1F1F]">
          {JOURNAL_POSTS.map((post) => (
            <article
              key={post.slug}
              className="py-12 md:py-16 group hover:bg-[#121212]/40 transition-colors px-2 sm:px-4"
            >
              <Link href={`/journal/${post.slug}`} className="block">
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-baseline">
                  {/* Metadata */}
                  <div className="lg:col-span-3 flex flex-col space-y-1 text-xs font-mono text-[#92928D]">
                    <span className="text-[#F0F0EC]">{post.date}</span>
                    <span className="text-[#666] uppercase tracking-wider">
                      {post.category}
                    </span>
                  </div>

                  {/* Headline & Abstract */}
                  <div className="lg:col-span-7 space-y-4">
                    <h2 className="text-2xl sm:text-3xl font-normal text-[#F0F0EC] tracking-tight group-hover:text-white transition-colors">
                      {post.title}
                    </h2>
                    <p className="text-sm sm:text-base text-[#92928D] font-light leading-relaxed max-w-2xl">
                      {post.excerpt}
                    </p>
                  </div>

                  {/* Read Time & Action */}
                  <div className="lg:col-span-2 flex items-baseline justify-between lg:justify-end space-x-4 text-xs font-mono text-[#777]">
                    <span>{post.readTime}</span>
                    <span className="text-[#F0F0EC] transition-transform duration-200 group-hover:translate-x-1">
                      →
                    </span>
                  </div>
                </div>
              </Link>
            </article>
          ))}
        </div>
      </div>
    </article>
  );
}
