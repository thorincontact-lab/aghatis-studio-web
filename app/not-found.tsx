import React from "react";
import Link from "next/link";

export default function NotFound() {
  return (
    <div className="min-h-[80vh] flex flex-col justify-center items-center px-6 text-center">
      <div className="space-y-6 max-w-lg">
        <span className="text-xs font-mono text-[#92928D] uppercase tracking-[0.25em] block">
          Error 404 — Coordinate Void
        </span>
        <h1 className="text-4xl sm:text-6xl font-light text-[#F0F0EC] tracking-tight uppercase">
          You are off <br />
          <span className="font-serif italic font-normal text-[#92928D]">the map.</span>
        </h1>
        <p className="text-sm sm:text-base text-[#92928D] font-light leading-relaxed">
          The coordinate you requested does not correspond to any known world, journal dispatch, or studio transmission.
        </p>
        <div className="pt-4">
          <Link
            href="/"
            className="inline-flex items-center space-x-2 px-6 py-3 bg-[#F0F0EC] text-[#0C0C0C] text-xs font-mono uppercase tracking-widest font-medium hover:bg-white transition-colors"
          >
            <span>Return to Studio Surface</span>
            <span>→</span>
          </Link>
        </div>
      </div>
    </div>
  );
}
