/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from 'react';
import { Navigation } from './components/Navigation';
import { Hero } from './components/Hero';
import { WorkflowSection } from './components/WorkflowSection';
import { CommandSection } from './components/CommandSection';
import { TestimonialSection } from './components/TestimonialSection';
import { CapabilitiesGrid } from './components/CapabilitiesGrid';
import { FaqSection } from './components/FaqSection';
import { ClosingCta } from './components/ClosingCta';
import { Footer } from './components/Footer';
import { SandboxModal } from './components/SandboxModal';

export default function App() {
  const [isSandboxModalOpen, setIsSandboxModalOpen] = useState(false);

  const handleStartSandbox = () => {
    setIsSandboxModalOpen(true);
  };

  const handleScrollToDocs = () => {
    const el = document.getElementById('capabilities');
    el?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    // Page Background: #e9e9e6
    <div className="min-h-screen bg-[#e9e9e6] py-3 sm:py-5 px-2 sm:px-5 font-sans antialiased text-[#161614] selection:bg-[#ddd6fe] selection:text-[#161614]">
      {/* 
        Single White Shell:
        margin: 20px, border: 1px solid #e3e3df, border-radius: 18px
      */}
      <div className="relative mx-auto max-w-[1480px] bg-white rounded-[18px] border border-[#e3e3df] shadow-xs overflow-hidden">
        
        {/* 
          Inner "Rails":
          Faint vertical hairlines 1px solid #f0f0ec inset 44px from shell edges,
          running the full page height.
        */}
        <div 
          aria-hidden="true" 
          className="pointer-events-none absolute top-0 bottom-0 left-[44px] w-px bg-[#f0f0ec] z-10 hidden xl:block" 
        />
        <div 
          aria-hidden="true" 
          className="pointer-events-none absolute top-0 bottom-0 right-[44px] w-px bg-[#f0f0ec] z-10 hidden xl:block" 
        />

        {/* 1. Navigation (Top Bar Contract: wordmark, links, primary CTA) */}
        <Navigation onStartSandbox={handleStartSandbox} />

        {/* 2. Hero Section (Headline, copy, CTAs, living app-window mockup, logo bar) */}
        <Hero 
          onStartSandbox={handleStartSandbox} 
          onViewDocs={handleScrollToDocs} 
        />

        {/* 3. Workflow Steps (01-03 Editorial steps with AST analysis & prober) */}
        <WorkflowSection />

        {/* 4. Centered "One Command / One Action" Moment */}
        <CommandSection />

        {/* 5. Attributable Testimonial Quote with Gradient Highlight */}
        <TestimonialSection />

        {/* 6. Capabilities Bento Grid */}
        <CapabilitiesGrid />

        {/* 7. Interactive Accordion FAQ */}
        <FaqSection />

        {/* 8. Closing CTA with subtle blurred brand gradient glow */}
        <ClosingCta 
          onStartSandbox={handleStartSandbox} 
          onContactSales={handleStartSandbox} 
        />

        {/* 9. Engineered Footer with IBM Plex Mono microlabels */}
        <Footer />
      </div>

      {/* Interactive Sandbox Launcher Modal */}
      <SandboxModal 
        isOpen={isSandboxModalOpen} 
        onClose={() => setIsSandboxModalOpen(false)} 
      />
    </div>
  );
}
