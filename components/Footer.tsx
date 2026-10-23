import React from "react";
import Link from "next/link";
import { STUDIO_METADATA } from "@/lib/data";

export function Footer() {
  const currentYear = 2026;

  return (
    <footer className="mt-auto border-t border-[#292929] bg-[#0C0C0C] text-[#92928D] py-16 px-6 sm:px-8 lg:px-12">
      <div className="max-w-7xl mx-auto">
        {/* Main Footer Row */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-12 pb-12 border-b border-[#1B1B1B]">
          {/* Col 1: Wordmark & Studio Declaration */}
          <div className="md:col-span-8 space-y-4">
            <div className="flex items-baseline space-x-2">
              <span className="font-mono text-sm tracking-[0.22em] text-[#F0F0EC] font-medium uppercase">
                AGHATIS STUDIO
              </span>
              <span className="text-xs text-[#92928D]">®</span>
            </div>
            <p className="text-sm text-[#92928D] font-sans max-w-md leading-relaxed">
              An independent game development studio exploring new ideas, strange places, and meaningful play.
            </p>
            <div className="text-xs font-mono text-[#92928D] pt-2 space-y-1">
              <div className="text-[#F0F0EC] tracking-wider uppercase font-medium">
                PT Aghatis Karya Indonesia
              </div>
              <div>JAKARTA & REMOTE — INDEPENDENT PRACTICE</div>
              <div className="pt-2">
                <a
                  href={`mailto:${STUDIO_METADATA.email}`}
                  className="text-xs font-mono text-[#F0F0EC] underline underline-offset-4 decoration-[#292929] hover:decoration-[#F0F0EC] transition-colors"
                >
                  {STUDIO_METADATA.email}
                </a>
              </div>
            </div>
          </div>

          {/* Col 2: Navigation Links */}
          <div className="md:col-span-4 space-y-3">
            <span className="text-[11px] font-mono uppercase tracking-[0.18em] text-[#F0F0EC]">
              Index
            </span>
            <ul className="space-y-2 text-xs font-mono">
              <li>
                <Link href="/#games" className="text-[#92928D] hover:text-[#F0F0EC] transition-colors">
                  Selected Work
                </Link>
              </li>
              <li>
                <Link href="/studio" className="text-[#92928D] hover:text-[#F0F0EC] transition-colors">
                  The Studio & Manifesto
                </Link>
              </li>
              <li>
                <Link href="/journal" className="text-[#92928D] hover:text-[#F0F0EC] transition-colors">
                  Journal / Field Notes
                </Link>
              </li>
              <li>
                <Link href="/contact" className="text-[#92928D] hover:text-[#F0F0EC] transition-colors">
                  Inquiries & Transmission
                </Link>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Colophon Row */}
        <div className="pt-8 flex flex-col sm:flex-row items-start sm:items-center justify-between text-[11px] font-mono text-[#666] gap-4">
          <div>
            © {currentYear} Aghatis Studio (PT Aghatis Karya Indonesia). All rights reserved.
          </div>
          <div className="flex items-center space-x-6">
            <Link href="/privacy" className="hover:text-[#92928D] transition-colors">
              Privacy Notice
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
