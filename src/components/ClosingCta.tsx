import React from 'react';

interface ClosingCtaProps {
  onStartSandbox?: () => void;
  onContactSales?: () => void;
}

export const ClosingCta: React.FC<ClosingCtaProps> = ({ onStartSandbox, onContactSales }) => {
  return (
    <section className="relative border-t border-[#f0f0ec] px-6 md:px-16 py-24 md:py-28 text-center overflow-hidden">
      {/* Blurred brand-gradient glow behind CTA: filter:blur(34px), opacity <= 0.45 */}
      <div 
        aria-hidden="true"
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[340px] h-[160px] brand-gradient-bg rounded-full opacity-35 pointer-events-none"
        style={{ filter: 'blur(34px)' }}
      />

      <div className="relative z-10 max-w-[720px] mx-auto">
        <div className="font-mono text-[10px] uppercase tracking-[0.16em] text-[#8f8f88] mb-4">
          06 // GET STARTED
        </div>

        <h2 className="text-[34px] sm:text-[44px] md:text-[50px] font-semibold tracking-[-0.045em] text-[#161614] leading-[1.08] mb-5 text-balance">
          Engineered for teams that ship. <br />
          <span className="text-[#b9b9b2]">Without the babysitting.</span>
        </h2>

        <p className="text-[14px] leading-[1.65] text-[#71716b] max-w-lg mx-auto mb-8 text-balance">
          Spin up your first isolated agent cluster in under two minutes. Experience autonomous software engineering with mathematical type guarantees.
        </p>

        <div className="flex flex-wrap items-center justify-center gap-3">
          <button
            onClick={onStartSandbox}
            className="bg-[#161614] text-white rounded-full px-6 py-2.5 text-[13px] font-medium hover:bg-neutral-800 transition-colors cursor-pointer flex items-center gap-2 whitespace-nowrap shadow-xs"
          >
            <span>Start sandbox cluster</span>
            <svg className="w-3.5 h-3.5" viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M5 11L11 5M11 5H6M11 5V10" />
            </svg>
          </button>

          <button
            onClick={onContactSales}
            className="bg-white text-[#161614] border border-[#dcdcd7] rounded-full px-5 py-2.5 text-[13px] font-medium hover:bg-[#f6f6f3] transition-colors cursor-pointer whitespace-nowrap"
          >
            Schedule enterprise demo
          </button>
        </div>

        <div className="mt-6 text-[11px] font-mono text-[#8a8a84]">
          Zero telemetry by default · SOC2 Type II Certified · Open source CLI
        </div>
      </div>
    </section>
  );
};
