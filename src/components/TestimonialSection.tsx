import React from 'react';

export const TestimonialSection: React.FC = () => {
  return (
    <section className="relative border-t border-[#f0f0ec] px-6 md:px-16 py-20 md:py-24">
      <div className="max-w-[1040px] mx-auto">
        {/* Eyebrow */}
        <div className="font-mono text-[10px] uppercase tracking-[0.16em] text-[#8f8f88] mb-6">
          03 // PLATFORM PROOF
        </div>

        {/* Large Testimonial Statement */}
        <div className="relative">
          <blockquote className="text-[24px] sm:text-[32px] md:text-[38px] font-semibold tracking-[-0.035em] text-[#161614] leading-[1.25] text-balance">
            “Most AI coding tools treat software like autocomplete. Vektor is the first system that actually acts like a principal systems engineer—<span className="text-highlight">guaranteed type invariants before any pull request is opened</span>. We cut migration review cycles from three days to under forty minutes.”
          </blockquote>

          {/* Attribution: full name, role, company */}
          <div className="mt-8 flex items-center gap-4">
            <div className="w-10 h-10 rounded-full bg-[#161614] text-white flex items-center justify-center font-semibold text-[13px] tracking-tight shrink-0">
              MR
            </div>
            <div>
              <div className="text-[14px] font-semibold text-[#161614] tracking-tight">
                Marcus Rivera
              </div>
              <div className="text-[12.5px] text-[#71716b]">
                VP of Core Infrastructure, HyperScale Cloud Systems
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
