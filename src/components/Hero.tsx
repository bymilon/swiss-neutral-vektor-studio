import React from 'react';
import { AppWindowMockup } from './AppWindowMockup';

interface HeroProps {
  onStartSandbox?: () => void;
  onViewDocs?: () => void;
}

export const Hero: React.FC<HeroProps> = ({ onStartSandbox, onViewDocs }) => {
  return (
    <section id="demo" className="relative px-6 md:px-16 pt-14 pb-20 md:pt-20 md:pb-24">
      <div className="max-w-[1240px] mx-auto">
        {/* Page-level IBM Plex Mono microlabel */}
        <div className="font-mono text-[10px] uppercase tracking-[0.16em] text-[#8f8f88] mb-5 select-none">
          AUTONOMOUS ENGINEERING RUNTIME · SWISS PRECISION
        </div>

        {/* Two-tone Headline: first line ink, second line/trailing phrase in #b9b9b2 */}
        <div className="max-w-4xl">
          <h1 className="text-[38px] sm:text-[48px] md:text-[62px] font-semibold leading-[1.08] tracking-[-0.045em] text-[#161614] text-balance">
            Autonomous engineering. <br className="hidden sm:inline" />
            <span className="text-[#b9b9b2]">Verified at the compiler level.</span>
          </h1>

          {/* Body Copy: 13-14px, line-height 1.65, color #71716b */}
          <p className="mt-5 text-[14px] leading-[1.65] text-[#71716b] max-w-2xl text-balance">
            Vektor orchestrates autonomous coding agents with deterministic invariant checks.
            Agents write schema, run headless test suites in isolated microVMs, and verify AST integrity before proposing a single pull request.
          </p>

          {/* Action Pills */}
          <div className="mt-8 flex flex-wrap items-center gap-3">
            {/* Primary pill: ink bg, white text, radius 999px, padding 10px 20px, 13px/500 */}
            <button
              onClick={onStartSandbox}
              className="bg-[#161614] text-white rounded-full px-5 py-2.5 text-[13px] font-medium hover:bg-neutral-800 transition-colors cursor-pointer flex items-center gap-2 whitespace-nowrap shadow-xs"
            >
              <span>Deploy your first cluster</span>
              <svg className="w-3.5 h-3.5" viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M5 11L11 5M11 5H6M11 5V10" />
              </svg>
            </button>

            {/* Ghost pill: white bg, 1px solid #dcdcd7, same metrics */}
            <button
              onClick={onViewDocs}
              className="bg-white text-[#161614] border border-[#dcdcd7] rounded-full px-5 py-2.5 text-[13px] font-medium hover:bg-[#f6f6f3] transition-colors cursor-pointer whitespace-nowrap"
            >
              Read invariant spec
            </button>

            <span className="hidden sm:inline-block text-[12px] text-[#8a8a84] pl-2 font-mono">
              v1.4.2 · zero-telemetry
            </span>
          </div>
        </div>

        {/* Product Demo App-Window Mockup */}
        <div className="mt-14 md:mt-16">
          <AppWindowMockup />
        </div>

        {/* Logo Bar: Equal hairline cells in one bordered row, radius 4; featured cell gets bg #f6f6f3 and tiny inline-SVG ↗ */}
        <div className="mt-14">
          <div className="font-mono text-[9.5px] uppercase tracking-[0.16em] text-[#8f8f88] mb-3 text-center sm:text-left">
            TRUSTED BY PLATFORM & INFRASTRUCTURE TEAMS
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 rounded-[4px] border border-[#e6e6e2] overflow-hidden bg-white">
            {/* Cell 1: Vercel */}
            <div className="h-12 border-b sm:border-b-0 sm:border-r border-[#e6e6e2] flex items-center justify-center gap-2 px-4 hover:bg-[#fcfcfb] transition-colors">
              <svg className="w-4 h-4 fill-current text-[#161614]" viewBox="0 0 24 24">
                <path d="M24 22.525H0l12-21.05 12 21.05z" />
              </svg>
              <span className="text-[12.5px] font-medium text-[#161614] tracking-tight">Vercel</span>
            </div>

            {/* Cell 2: Linear */}
            <div className="h-12 border-b sm:border-b-0 sm:border-r border-[#e6e6e2] flex items-center justify-center gap-2 px-4 hover:bg-[#fcfcfb] transition-colors">
              <svg className="w-4 h-4 fill-current text-[#161614]" viewBox="0 0 24 24">
                <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-1 14.5v-9l6 4.5-6 4.5z" />
              </svg>
              <span className="text-[12.5px] font-medium text-[#161614] tracking-tight">Linear</span>
            </div>

            {/* Cell 3: Supabase (Featured Cell gets bg #f6f6f3 and tiny inline-SVG ↗) */}
            <div className="h-12 border-b lg:border-b-0 sm:border-r border-[#e6e6e2] bg-[#f6f6f3] flex items-center justify-center gap-2 px-4 group cursor-pointer">
              <svg className="w-4 h-4 fill-[#161614]" viewBox="0 0 24 24">
                <path d="M21.362 9.354H12V.396a.396.396 0 0 0-.716-.233L.198 13.914a.396.396 0 0 0 .313.633H12v8.958a.396.396 0 0 0 .716.233l11.086-13.75a.396.396 0 0 0-.44-.634z" />
              </svg>
              <span className="text-[12.5px] font-semibold text-[#161614] tracking-tight">Supabase</span>
              <svg className="w-3 h-3 text-[#71716b] group-hover:text-[#161614] group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M5 11L11 5M11 5H6M11 5V10" />
              </svg>
            </div>

            {/* Cell 4: Cloudflare */}
            <div className="h-12 border-b sm:border-b-0 sm:border-r border-[#e6e6e2] flex items-center justify-center gap-2 px-4 hover:bg-[#fcfcfb] transition-colors">
              <svg className="w-4 h-4 fill-current text-[#161614]" viewBox="0 0 24 24">
                <path d="M16.5088 16.8447c.1475-.5068.0908-.9707-.1553-1.3154-.2246-.3164-.6045-.499-1.0615-.5205l-8.6592-.1123a.1559.1559 0 0 1-.1333-.0713c-.0283-.042-.0351-.0986-.021-.1553.0278-.084.1123-.1484.2036-.1562l8.7359-.1123c1.0351-.0489 2.1601-.8868 2.5537-1.9136l.499-1.3013c.0215-.0561.0293-.1128.0147-.168-.5625-2.5463-2.835-4.4453-5.5499-4.4453-2.5039 0-4.6284 1.6177-5.3876 3.8614-.4927-.3658-1.1187-.5625-1.794-.499-1.2026.119-2.1665 1.083-2.2861 2.2856-.0283.31-.0069.6128.0635.894C1.5683 13.171 0 14.7754 0 16.752c0 .1748.0142.3515.0352.5273.0141.083.0844.1475.1689.1475h15.9814c.0909 0 .1758-.0645.2032-.1553l.12-.4268zm2.7568-5.5634c-.0771 0-.1611 0-.2383.0112-.0566 0-.1054.0415-.127.0976l-.3378 1.1744c-.1475.5068-.0918.9707.1543 1.3164.2256.3164.6055.498 1.0625.5195l1.8437.1133c.0557 0 .1055.0263.1329.0703.0283.043.0351.1074.0214.1562-.0283.084-.1132.1485-.204.1553l-1.921.1123c-1.041.0488-2.1582.8867-2.5527 1.914l-.1406.3585c-.0283.0713.0215.1416.0986.1416h6.5977c.0771 0 .1474-.0489.169-.126.1122-.4082.1757-.837.1757-1.2803 0-2.6025-2.125-4.727-4.7344-4.727" />
              </svg>
              <span className="text-[12.5px] font-medium text-[#161614] tracking-tight">Cloudflare</span>
            </div>

            {/* Cell 5: GitHub */}
            <div className="h-12 border-b sm:border-b-0 sm:border-r border-[#e6e6e2] flex items-center justify-center gap-2 px-4 hover:bg-[#fcfcfb] transition-colors">
              <svg className="w-4 h-4 fill-current text-[#161614]" viewBox="0 0 24 24">
                <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0024 12c0-6.63-5.37-12-12-12z" />
              </svg>
              <span className="text-[12.5px] font-medium text-[#161614] tracking-tight">GitHub</span>
            </div>

            {/* Cell 6: Stripe */}
            <div className="h-12 flex items-center justify-center gap-2 px-4 hover:bg-[#fcfcfb] transition-colors">
              <svg className="w-4 h-4 fill-current text-[#161614]" viewBox="0 0 24 24">
                <path d="M13.976 9.15c-2.172-.806-3.356-1.426-3.356-2.409 0-.831.683-1.305 1.901-1.305 2.227 0 4.515.858 6.09 1.631l.89-5.494C18.252.977 15.613.4 12.776.4 7.66.4 3.987 3.033 3.987 7.643c0 4.908 4.22 6.55 7.65 7.848 2.234.846 3.084 1.577 3.084 2.535 0 .991-.887 1.52-2.373 1.52-2.602 0-5.56-1.164-7.406-2.174l-.945 5.564c1.982.99 5.004 1.664 8.072 1.664 5.344 0 9.243-2.585 9.243-7.458 0-4.992-3.874-6.626-7.336-7.986z" />
              </svg>
              <span className="text-[12.5px] font-medium text-[#161614] tracking-tight">Stripe</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
