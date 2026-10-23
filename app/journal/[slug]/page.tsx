import React from "react";
import Link from "next/link";
import { notFound } from "next/navigation";
import type { Metadata } from "next";
import { JOURNAL_POSTS } from "@/lib/data";

interface JournalArticleProps {
  params: Promise<{
    slug: string;
  }>;
}

export async function generateStaticParams() {
  return JOURNAL_POSTS.map((post) => ({
    slug: post.slug,
  }));
}

export async function generateMetadata({ params }: JournalArticleProps): Promise<Metadata> {
  const { slug } = await params;
  const post = JOURNAL_POSTS.find((p) => p.slug === slug);
  if (!post) return { title: "Article Not Found" };

  return {
    title: `${post.title} — Journal`,
    description: post.excerpt,
    openGraph: {
      title: `${post.title} | Aghatis Studio Journal`,
      description: post.excerpt,
      type: "article",
    },
  };
}

export default async function JournalArticlePage({ params }: JournalArticleProps) {
  const { slug } = await params;
  const post = JOURNAL_POSTS.find((p) => p.slug === slug);

  if (!post) {
    notFound();
  }

  const otherPosts = JOURNAL_POSTS.filter((p) => p.slug !== slug);

  return (
    <article className="min-h-screen pt-28 md:pt-36 pb-32">
      {/* Top Breadcrumb */}
      <div className="max-w-4xl mx-auto px-6 sm:px-8 pb-8 border-b border-[#1F1F1F]">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 text-xs font-mono text-[#92928D]">
          <div className="flex items-center space-x-2">
            <Link href="/" className="hover:text-[#F0F0EC] transition-colors">
              Aghatis
            </Link>
            <span>/</span>
            <Link href="/journal" className="hover:text-[#F0F0EC] transition-colors">
              Journal
            </Link>
            <span>/</span>
            <span className="text-[#F0F0EC] uppercase">{post.category}</span>
          </div>
          <div>{post.readTime}</div>
        </div>
      </div>

      {/* Article Header */}
      <header className="max-w-4xl mx-auto px-6 sm:px-8 pt-16 md:pt-24 pb-16">
        <div className="space-y-4">
          <div className="flex items-center space-x-3 text-xs font-mono text-[#92928D]">
            <span>{post.date}</span>
            <span>•</span>
            <span className="text-[#F0F0EC] uppercase tracking-wider">{post.category}</span>
          </div>

          <h1 className="text-3xl sm:text-5xl lg:text-6xl font-light text-[#F0F0EC] tracking-tight leading-[1.05]">
            {post.title}
          </h1>

          <p className="pt-4 text-lg sm:text-xl text-[#92928D] font-light leading-relaxed">
            {post.excerpt}
          </p>
        </div>
      </header>

      {/* Article Body Content */}
      <div className="max-w-3xl mx-auto px-6 sm:px-8 border-t border-[#1F1F1F] pt-12 md:pt-16">
        {/* Lead Paragraph */}
        <p className="text-xl sm:text-2xl text-[#F0F0EC] font-light leading-relaxed mb-8">
          {post.content.lead}
        </p>

        {/* Main Paragraphs */}
        <div className="space-y-6 text-[#92928D] text-base sm:text-lg font-light leading-relaxed">
          {post.content.paragraphs.map((p, idx) => (
            <p key={idx}>{p}</p>
          ))}
        </div>

        {/* Pull Quote */}
        {post.content.pullQuote && (
          <div className="my-16 py-8 border-y border-[#292929] px-4 sm:px-8 bg-[#141414]/50">
            <blockquote className="text-xl sm:text-2xl font-serif italic text-[#F0F0EC] leading-relaxed">
              &ldquo;{post.content.pullQuote}&rdquo;
            </blockquote>
            <span className="block mt-4 text-xs font-mono uppercase tracking-widest text-[#777]">
              — Aghatis Studio Design Note
            </span>
          </div>
        )}

        {/* Conclusion */}
        <div className="mt-8 text-base sm:text-lg text-[#F0F0EC] font-light leading-relaxed border-l-2 border-[#92928D] pl-6">
          {post.content.conclusion}
        </div>

        {/* Author / Studio Colophon */}
        <div className="mt-20 pt-8 border-t border-[#1F1F1F] flex flex-col sm:flex-row justify-between items-start sm:items-center text-xs font-mono text-[#777] gap-4">
          <div>WRITTEN BY AGHATIS STUDIO CORE TEAM</div>
          <div>DISPATCHED FROM JAKARTA / REMOTE</div>
        </div>
      </div>

      {/* Subsequent Articles Navigation */}
      <div className="max-w-4xl mx-auto px-6 sm:px-8 pt-24 mt-20 border-t border-[#1F1F1F]">
        <div className="flex justify-between items-baseline mb-8">
          <span className="text-xs font-mono uppercase tracking-[0.2em] text-[#92928D]">
            Other Journal Dispatches
          </span>
          <Link
            href="/journal"
            className="text-xs font-mono uppercase tracking-widest text-[#F0F0EC] hover:underline underline-offset-4"
          >
            ← All Entries
          </Link>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {otherPosts.map((other) => (
            <Link
              key={other.slug}
              href={`/journal/${other.slug}`}
              className="p-6 bg-[#141414] border border-[#292929] hover:border-[#F0F0EC] transition-colors group block space-y-3"
            >
              <div className="flex justify-between text-xs font-mono text-[#777]">
                <span>{other.category}</span>
                <span>{other.readTime}</span>
              </div>
              <h3 className="text-lg font-normal text-[#F0F0EC] group-hover:text-white transition-colors">
                {other.title} →
              </h3>
            </Link>
          ))}
        </div>
      </div>
    </article>
  );
}
