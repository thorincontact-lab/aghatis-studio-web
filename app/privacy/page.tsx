import React from "react";
import Link from "next/link";
import type { Metadata } from "next";
import { STUDIO_METADATA } from "@/lib/data";

export const metadata: Metadata = {
  title: "Privacy Notice — Aghatis Studio",
  description: "Privacy policy and transparent data practices for Aghatis Studio.",
};

export default function PrivacyPage() {
  return (
    <article className="min-h-screen pt-28 md:pt-36 pb-32">
      <div className="max-w-4xl mx-auto px-6 sm:px-8 pb-8 border-b border-[#1F1F1F]">
        <div className="flex items-center space-x-2 text-xs font-mono text-[#92928D]">
          <Link href="/" className="hover:text-[#F0F0EC] transition-colors">
            Aghatis
          </Link>
          <span>/</span>
          <span className="text-[#F0F0EC] uppercase">Legal & Privacy</span>
        </div>
      </div>

      <header className="max-w-4xl mx-auto px-6 sm:px-8 py-16">
        <span className="text-xs font-mono text-[#92928D] uppercase tracking-[0.2em] block mb-3">
          Transparency Statement
        </span>
        <h1 className="text-3xl sm:text-5xl font-light text-[#F0F0EC] tracking-tight uppercase">
          Privacy Notice
        </h1>
        <p className="mt-4 text-xs font-mono text-[#666]">
          LAST UPDATED: OCTOBER 2026
        </p>
      </header>

      <div className="max-w-3xl mx-auto px-6 sm:px-8 border-t border-[#1F1F1F] pt-12 space-y-10 text-sm sm:text-base text-[#92928D] font-light leading-relaxed">
        <section className="space-y-3">
          <h2 className="text-lg font-normal text-[#F0F0EC] uppercase tracking-wide font-mono">
            01. Core Stance on Surveillance
          </h2>
          <p>
            Aghatis Studio does not track you across the internet. We do not use third-party behavioral advertising pixels, invasive fingerprinting scripts, or data brokering mechanisms. This website exists solely to present our creative work and facilitate direct human correspondence.
          </p>
        </section>

        <section className="space-y-3">
          <h2 className="text-lg font-normal text-[#F0F0EC] uppercase tracking-wide font-mono">
            02. Server Telemetry & Logs
          </h2>
          <p>
            When you visit this website, standard technical request headers (such as IP address, user-agent, and requested file path) may be temporarily processed by our hosting infrastructure solely to ensure delivery of web assets, mitigate malicious automated attacks, and maintain uptime. These logs are purged on a rolling basis.
          </p>
        </section>

        <section className="space-y-3">
          <h2 className="text-lg font-normal text-[#F0F0EC] uppercase tracking-wide font-mono">
            03. Direct Correspondence
          </h2>
          <p>
            If you choose to transmit an email to{" "}
            <a
              href={`mailto:${STUDIO_METADATA.email}`}
              className="text-[#F0F0EC] underline decoration-[#333] hover:decoration-[#F0F0EC] transition-colors"
            >
              {STUDIO_METADATA.email}
            </a>
            , your message, email address, and name will be retained only as necessary to engage in conversation or evaluate professional collaboration. We never sell or share contact details with advertisers.
          </p>
        </section>

        <section className="space-y-3">
          <h2 className="text-lg font-normal text-[#F0F0EC] uppercase tracking-wide font-mono">
            04. Inquiries
          </h2>
          <p>
            For any questions regarding our data practices or to request deletion of past email correspondence, please contact{" "}
            <a
              href={`mailto:${STUDIO_METADATA.email}?subject=Privacy%20Inquiry`}
              className="text-[#F0F0EC] underline decoration-[#333] hover:decoration-[#F0F0EC] transition-colors"
            >
              {STUDIO_METADATA.email}
            </a>{" "}
            with the subject line &ldquo;Privacy Inquiry.&rdquo;
          </p>
        </section>
      </div>
    </article>
  );
}
