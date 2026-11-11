import React from 'react';

export const Footer: React.FC = () => {
  return (
    <footer className="relative border-t border-[#f0f0ec] px-6 md:px-16 py-12 md:py-16 bg-white">
      <div className="max-w-[1240px] mx-auto">
        <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-8 pb-10 border-b border-[#f0f0ec]">
          {/* Brand & Wordmark */}
          <div className="space-y-2">
            <div className="flex items-center gap-2">
              <span className="w-2.5 h-2.5 rounded-full brand-gradient-bg shrink-0" />
              <span className="text-[16px] font-semibold tracking-[-0.03em] text-[#161614]">
                Vektor Systems Inc.
              </span>
            </div>
            <p className="text-[12.5px] text-[#71716b] max-w-sm">
              Autonomous software engineering studio with verified AST invariant loops and microVM isolation.
            </p>
          </div>

          {/* Links Grid */}
          <div className="grid grid-cols-2 sm:grid-cols-3 gap-8 text-[12.5px]">
            <div>
              <div className="font-mono text-[10px] uppercase tracking-[0.16em] text-[#8f8f88] mb-3">
                PRODUCT
              </div>
              <ul className="space-y-2 text-[#71716b]">
                <li><a href="#demo" className="hover:text-[#161614] transition-colors">Runtime Demo</a></li>
                <li><a href="#workflow" className="hover:text-[#161614] transition-colors">AST Pipeline</a></li>
                <li><a href="#capabilities" className="hover:text-[#161614] transition-colors">Firecracker Sandboxes</a></li>
                <li><a href="#benchmarks" className="hover:text-[#161614] transition-colors">Compiler Benchmarks</a></li>
              </ul>
            </div>

            <div>
              <div className="font-mono text-[10px] uppercase tracking-[0.16em] text-[#8f8f88] mb-3">
                STANDARDS
              </div>
              <ul className="space-y-2 text-[#71716b]">
                <li><a href="#docs" className="hover:text-[#161614] transition-colors">Invariant Spec v1.4</a></li>
                <li><a href="#security" className="hover:text-[#161614] transition-colors">Security Whitepaper</a></li>
                <li><a href="#reproducibility" className="hover:text-[#161614] transition-colors">Hermetic Builds</a></li>
                <li><a href="#changelog" className="hover:text-[#161614] transition-colors">Engine Changelog</a></li>
              </ul>
            </div>

            <div>
              <div className="font-mono text-[10px] uppercase tracking-[0.16em] text-[#8f8f88] mb-3">
                SYSTEM STATUS
              </div>
              <div className="space-y-2">
                <div className="flex items-center gap-2 text-[12px] text-[#161614]">
                  <span className="w-2 h-2 rounded-full bg-[#16a34a]" />
                  <span>All clusters nominal</span>
                </div>
                <div className="font-mono text-[11px] text-[#8a8a84]">
                  p99 latency: 1.2ms
                </div>
                <div className="font-mono text-[11px] text-[#8a8a84]">
                  AST nodes: 4.8M/day
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom meta row: IBM Plex Mono 10px uppercase letter-spacing:.16em */}
        <div className="mt-8 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 font-mono text-[10px] uppercase tracking-[0.16em] text-[#8f8f88]">
          <div>
            © {new Date().getFullYear()} VEKTOR SYSTEMS · OPEN SOURCE APACHE-2.0 · SWISS NEUTRAL
          </div>
          <div className="flex items-center gap-6">
            <a href="https://github.com/bymilon/swiss-neutral-vektor-studio" target="_blank" rel="noreferrer" className="hover:text-[#161614] transition-colors">GITHUB</a>
            <a href="#workflow" className="hover:text-[#161614] transition-colors">CONTRIBUTING</a>
            <a href="#capabilities" className="hover:text-[#161614] transition-colors">ETHICS & STANDARDS</a>
            <span>INTER TIGHT 600 / -.045EM</span>
          </div>
        </div>
      </div>
    </footer>
  );
};
