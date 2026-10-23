import React from "react";
import { Hero } from "@/components/Hero";
import { SelectedWork } from "@/components/SelectedWork";
import { StudioPillars } from "@/components/StudioPillars";
import { JournalIndex } from "@/components/JournalIndex";
import { ContactSection } from "@/components/ContactSection";

export default function HomePage() {
  return (
    <div className="w-full">
      <Hero />
      <SelectedWork />
      <StudioPillars />
      <JournalIndex limit={3} showAllLink={true} />
      <ContactSection />
    </div>
  );
}
