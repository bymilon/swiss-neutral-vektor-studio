import React from 'react';

interface NavigationProps {
  onStartSandbox?: () => void;
}

export const Navigation: React.FC<NavigationProps> = ({ onStartSandbox }) => {
  return (
    <header className="relative w-full border-b border-[#f0f0ec] px-6 md:px-11 py-4.5 bg-white select-none">
      <div className="flex items-center justify-between gap-8 max-w-[1320px] mx-auto">
        {/* Zone 1: Single text element wordmark with tiny brand gradient mark */}
        <a 
          href="/" 
          className="flex items-center gap-2.5 text-[17px] font-semibold tracking-[-0.035em] text-[#161614] whitespace-nowrap shrink-0 group"
        >
          <span className="w-2.5 h-2.5 rounded-full brand-gradient-bg shrink-0 transition-transform group-hover:scale-110" />
          <span>Vektor</span>
        </a>

        {/* Zone 2: 4-5 concise single-line text links */}
        <nav className="hidden md:flex items-center gap-8 text-[13px] font-medium text-[#71716b]">
          <a href="#demo" className="hover:text-[#161614] transition-colors whitespace-nowrap shrink-0">
            Runtime Demo
          </a>
          <a href="#workflow" className="hover:text-[#161614] transition-colors whitespace-nowrap shrink-0">
            Workflow
          </a>
          <a href="#capabilities" className="hover:text-[#161614] transition-colors whitespace-nowrap shrink-0">
            Capabilities
          </a>
          <a href="#benchmarks" className="hover:text-[#161614] transition-colors whitespace-nowrap shrink-0">
            Benchmarks
          </a>
          <a href="#faq" className="hover:text-[#161614] transition-colors whitespace-nowrap shrink-0">
            FAQ
          </a>
        </nav>

        {/* Zone 3: Actions */}
        <div className="flex items-center gap-2.5 shrink-0">
          <a
            href="https://github.com/bymilon/swiss-neutral-vektor-studio"
            target="_blank"
            rel="noreferrer"
            className="hidden sm:inline-flex items-center gap-1.5 text-[12.5px] font-medium text-[#161614] border border-[#dcdcd7] bg-white hover:bg-[#f6f6f3] px-3.5 py-1.5 rounded-full transition-colors whitespace-nowrap"
            title="View on GitHub"
          >
            <svg className="w-3.5 h-3.5 fill-current" viewBox="0 0 24 24">
              <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0024 12c0-6.63-5.37-12-12-12z" />
            </svg>
            <span>GitHub</span>
          </a>

          <button
            onClick={onStartSandbox}
            className="inline-flex items-center gap-1.5 bg-[#161614] text-white rounded-full px-5 py-2 text-[13px] font-medium hover:bg-neutral-800 transition-colors cursor-pointer whitespace-nowrap shrink-0"
          >
            <span>Start Sandbox</span>
            <svg className="w-3.5 h-3.5" viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M5 11L11 5M11 5H6M11 5V10" />
            </svg>
          </button>
        </div>
      </div>
    </header>
  );
};
