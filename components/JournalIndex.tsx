import React from "react";
import Link from "next/link";
import { JOURNAL_POSTS } from "@/lib/data";

interface JournalIndexProps {
  limit?: number;
  showAllLink?: boolean;
}

export function JournalIndex({ limit, showAllLink = true }: JournalIndexProps) {
  const posts = limit ? JOURNAL_POSTS.slice(0, limit) : JOURNAL_POSTS;

  return (
    <section className="py-24 md:py-36 px-6 sm:px-8 lg:px-12 border-b border-[#292929] bg-[#0C0C0C]">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="flex flex-col sm:flex-row sm:items-baseline justify-between pb-12 md:pb-16 border-b border-[#1B1B1B] gap-4">
          <div>
            <span className="font-mono text-xs uppercase tracking-[0.2em] text-[#92928D] block mb-2">
              Dispatches & Technical Logs
            </span>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-light tracking-tight text-[#F0F0EC] uppercase">
              Journal
            </h2>
          </div>
          {showAllLink && (
            <div>
              <Link
                href="/journal"
                className="text-xs font-mono tracking-widest uppercase text-[#92928D] hover:text-[#F0F0EC] transition-colors inline-flex items-center space-x-1"
              >
                <span>View All Notes</span>
                <span>↗</span>
              </Link>
            </div>
          )}
        </div>

        {/* Clean List-Based Layout with Thin Horizontal Separators */}
        <div className="divide-y divide-[#1F1F1F]">
          {posts.map((post) => (
            <article
              key={post.slug}
              className="py-10 md:py-12 group hover:bg-[#121212]/40 transition-colors px-2 sm:px-4"
            >
              <Link href={`/journal/${post.slug}`} className="block">
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-baseline">
                  {/* Date & Category */}
                  <div className="lg:col-span-3 flex flex-col space-y-1 text-xs font-mono text-[#92928D]">
                    <span className="text-[#F0F0EC]">{post.date}</span>
                    <span className="text-[#666] uppercase tracking-wider">
                      {post.category}
                    </span>
                  </div>

                  {/* Title & Excerpt */}
                  <div className="lg:col-span-7 space-y-3">
                    <h3 className="text-xl sm:text-2xl font-normal text-[#F0F0EC] tracking-tight group-hover:text-white transition-colors">
                      {post.title}
                    </h3>
                    <p className="text-sm text-[#92928D] font-light leading-relaxed max-w-2xl">
                      {post.excerpt}
                    </p>
                  </div>

                  {/* Reading Time & Subtle Arrow */}
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
    </section>
  );
}
