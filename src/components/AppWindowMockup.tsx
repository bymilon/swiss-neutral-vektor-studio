import React, { useState } from 'react';
import { Play, Pause, RotateCcw, ZoomIn, ZoomOut, Check, ArrowUpRight } from 'lucide-react';

export const AppWindowMockup: React.FC = () => {
  const [isSweepPlaying, setIsSweepPlaying] = useState<boolean>(true);
  const [zoomLevel, setZoomLevel] = useState<number>(100);
  const [activeTab, setActiveTab] = useState<'terminal' | 'invariants'>('terminal');
  const [deploySuccess, setDeploySuccess] = useState<boolean>(false);

  const handleDeploy = () => {
    setDeploySuccess(true);
    setTimeout(() => setDeploySuccess(false), 2400);
  };

  const cycleZoom = () => {
    if (zoomLevel === 100) setZoomLevel(105);
    else if (zoomLevel === 105) setZoomLevel(95);
    else setZoomLevel(100);
  };

  return (
    <div className="relative w-full rounded-[12px] border border-[#e3e3df] bg-white whisper-shadow overflow-hidden select-none">
      {/* 1. Title bar: 34px, three 8px pastel dots, no URL pill */}
      <div className="h-[34px] px-4 flex items-center justify-between border-b border-[#f0f0ec] bg-white">
        <div className="flex items-center gap-1.5">
          <span className="w-2 h-2 rounded-full bg-[#fca5a5]" />
          <span className="w-2 h-2 rounded-full bg-[#fcd34d]" />
          <span className="w-2 h-2 rounded-full bg-[#86efac]" />
        </div>
        <div className="text-[11px] font-medium text-[#8a8a84] tracking-tight">
          vektor / runtime-agent-cluster
        </div>
        {/* Subtle interactive playback indicator */}
        <div className="flex items-center gap-2">
          <button
            onClick={() => setIsSweepPlaying(!isSweepPlaying)}
            title={isSweepPlaying ? 'Pause Reveal Sweep' : 'Resume Reveal Sweep'}
            className="text-[10.5px] font-medium text-[#71716b] hover:text-[#161614] flex items-center gap-1 transition-colors px-1.5 py-0.5 rounded hover:bg-[#f6f6f3]"
          >
            {isSweepPlaying ? (
              <>
                <Pause className="w-2.5 h-2.5 text-[#8b5cf6]" />
                <span className="hidden sm:inline">Sweep Active</span>
              </>
            ) : (
              <>
                <Play className="w-2.5 h-2.5 text-[#d97757]" />
                <span className="hidden sm:inline">Sweep Paused</span>
              </>
            )}
          </button>
        </div>
      </div>

      {/* 2. App toolbar: 44px, white, hairline bottom */}
      <div className="h-[44px] px-4 flex items-center justify-between border-b border-[#f0f0ec] bg-white">
        <div className="flex items-center gap-3">
          <div className="flex items-center gap-2">
            <span className="w-3.5 h-3.5 rounded-full brand-gradient-bg shrink-0" />
            <span className="text-[12px] font-semibold text-[#161614] tracking-tight">
              cluster-edge-01
            </span>
          </div>
          <div className="h-3 w-px bg-[#f0f0ec]" />
          {/* Plain green live dot with subtle pulse */}
          <div className="flex items-center gap-1.5 text-[11px] font-medium text-[#16a34a]">
            <span className="relative flex h-2 w-2">
              <span className="animate-presence-pulse absolute inline-flex h-full w-full rounded-full bg-[#16a34a]" />
              <span className="relative inline-flex rounded-full h-2 w-2 bg-[#16a34a]" />
            </span>
            <span>Live</span>
          </div>
        </div>

        {/* Right side toolbar */}
        <div className="flex items-center gap-3">
          {/* Overlapping avatars: real agent marks + initials */}
          <div className="flex items-center -space-x-1.5 overflow-hidden">
            <div 
              title="Codex Autonomous Agent" 
              className="w-5 h-5 rounded-full bg-[#d97757] text-white flex items-center justify-center text-[9px] font-semibold ring-2 ring-white"
            >
              Cx
            </div>
            <div 
              title="Claude Invariant Verifier" 
              className="w-5 h-5 rounded-full bg-[#8b5cf6] text-white flex items-center justify-center text-[9px] font-semibold ring-2 ring-white"
            >
              Cl
            </div>
            <div 
              title="Alex (Lead Engineer)" 
              className="w-5 h-5 rounded-full bg-[#161614] text-white flex items-center justify-center text-[9px] font-semibold ring-2 ring-white"
            >
              AL
            </div>
          </div>

          {/* Ghost Share pill */}
          <button 
            onClick={() => navigator.clipboard?.writeText(window.location.href)}
            className="text-[11.5px] font-medium text-[#161614] border border-[#dcdcd7] bg-white hover:bg-[#f6f6f3] px-2.5 py-1 rounded-full transition-colors"
          >
            Share
          </button>

          {/* Ink CTA pill */}
          <button
            onClick={handleDeploy}
            className="text-[11.5px] font-medium text-white bg-[#161614] hover:bg-neutral-800 px-3 py-1 rounded-full transition-colors flex items-center gap-1 cursor-pointer"
          >
            {deploySuccess ? (
              <>
                <Check className="w-3 h-3 text-[#22c55e]" />
                <span>Deployed</span>
              </>
            ) : (
              <>
                <span>Deploy</span>
                <ArrowUpRight className="w-3 h-3" />
              </>
            )}
          </button>
        </div>
      </div>

      {/* 3. Main Workspace: Canvas Area + 220px Docked Side Panel */}
      <div className="flex flex-col lg:flex-row min-h-[520px] bg-[#fcfcfb]">
        {/* Canvas Area: dot grid radial-gradient 22px 22px */}
        <div 
          className="relative flex-1 canvas-dot-grid p-4 sm:p-6 overflow-hidden min-h-[460px] lg:min-h-[520px]"
          style={{
            transform: `scale(${zoomLevel / 100})`,
            transformOrigin: 'top left',
            transition: 'transform 240ms cubic-bezier(0.16, 1, 0.3, 1)',
          }}
        >
          {/* Artboards Grid Layout */}
          <div className="grid grid-cols-1 md:grid-cols-12 gap-5 max-w-[960px]">
            {/* Artboard 1: Runtime Terminal & Prober Output (md:col-span-4) */}
            <div className="md:col-span-4 flex flex-col">
              <div className="text-[10.5px] font-medium text-[#a3a39c] mb-1.5 pl-0.5 flex items-center justify-between">
                <span>runtime/prober.ts</span>
                <span className="text-[#16a34a] font-normal">● 14/14 suites</span>
              </div>
              <div className="rounded-[8px] border border-[#e6e6e2] bg-white p-3.5 tight-shadow flex-1 text-[11px] leading-[1.6] text-[#71716b]">
                <div className="flex items-center gap-2 pb-2 mb-2 border-b border-[#f0f0ec] text-[#161614] font-semibold text-[11.5px]">
                  <span>AST Verifier</span>
                  <span className="text-[10px] font-normal text-[#8a8a84]">· 118ms</span>
                </div>
                <div className="space-y-1.5">
                  <div className="flex items-center gap-1.5 text-[#161614]">
                    <span className="text-[#16a34a] font-bold">✓</span>
                    <span>Type graph valid (4,812 nodes)</span>
                  </div>
                  <div className="flex items-center gap-1.5 text-[#161614]">
                    <span className="text-[#16a34a] font-bold">✓</span>
                    <span>Zero circular dependencies</span>
                  </div>
                  <div className="flex items-center gap-1.5 text-[#161614]">
                    <span className="text-[#16a34a] font-bold">✓</span>
                    <span>Schema invariant lock verified</span>
                  </div>
                  <div className="mt-3 pt-2 border-t border-[#f0f0ec] text-[10px] text-[#8a8a84]">
                    MicroVM sandbox: <span className="text-[#161614] font-medium">isolated</span> (mem 42MB)
                  </div>
                </div>
              </div>
            </div>

            {/* Artboard 2: THE "BEING DESIGNED" / GENERATED FRAME (md:col-span-5) */}
            <div className="md:col-span-5 flex flex-col relative">
              {/* Header row ~4px above frame: frame name + accent pill */}
              <div className="flex items-center justify-between mb-1.5 px-0.5">
                <span className="text-[10.5px] font-medium text-[#a3a39c]">
                  cluster/schema.ts
                </span>
                {/* Accent pill: background:#d97757, white agent icon, white "Codex is designing…" 10px/600 */}
                <div className="inline-flex items-center gap-1 bg-[#d97757] text-white rounded-full px-2 py-0.5 text-[10px] font-semibold shadow-xs">
                  <span className="w-1.5 h-1.5 rounded-full bg-white shrink-0 animate-pulse" />
                  <span>Codex is generating…</span>
                </div>
              </div>

              {/* Frame with soft accent border (1px solid #a78bfa) */}
              <div className="relative rounded-[8px] border border-[#a78bfa] bg-white p-4 tight-shadow min-h-[260px] overflow-hidden">
                {/* Content inside being designed frame */}
                <div className="space-y-2.5">
                  <div className="text-[11px] font-semibold text-[#161614] flex items-center justify-between">
                    <span>Generated Invariants</span>
                    <span className="text-[10px] font-medium text-[#8b5cf6]">v2.4 sync</span>
                  </div>

                  {/* Real schema snippet */}
                  <div className="p-2.5 rounded-[6px] bg-[#fafaf8] border border-[#f0f0ec] text-[11px] font-mono text-[#161614] leading-[1.6]">
                    <div className="text-[#8b5cf6]">export interface ClusterConfig &#123;</div>
                    <div className="pl-3 text-[#71716b]">id: UUID;</div>
                    <div className="pl-3 text-[#71716b]">nodes: NodeArray&lt;Worker&gt;;</div>
                    <div className="pl-3 text-[#161614]">
                      invariant: InvariantRule;
                    </div>
                    <div className="pl-3 text-[#d97757]">
                      throughput: <span className="font-semibold">4,820 req/s</span>
                      <span className="inline-block w-1.5 h-3 ml-0.5 bg-[#d97757] align-middle animate-caret-blink" />
                    </div>
                    <div className="text-[#8b5cf6]">&#125;</div>
                  </div>

                  {/* Sequential line builds */}
                  <div className="space-y-2 pt-1">
                    <div className="h-1.5 bg-[#f0f0ec] rounded-full overflow-hidden">
                      <div className="h-full bg-[#161614] rounded-full animate-line-build-1" />
                    </div>
                    <div className="h-1.5 bg-[#f0f0ec] rounded-full overflow-hidden">
                      <div className="h-full bg-[#8b5cf6] rounded-full animate-line-build-2" />
                    </div>
                    <div className="h-1.5 bg-[#f0f0ec] rounded-full overflow-hidden">
                      <div className="h-full bg-[#38bdf8] rounded-full animate-line-build-3" />
                    </div>
                  </div>
                </div>

                {/* THE SIGNATURE REVEAL SWEEP COVER:
                    White cover over streaming frame that animates top: 57% -> 101% over 7s
                    with 2px gradient line (#ff5bd6 -> #8b5cf6 -> #38bdf8) and soft glow.
                    Content above line is revealed; blank below.
                */}
                <div 
                  className={`absolute inset-x-0 bottom-0 bg-white border-t-2 border-transparent transition-opacity duration-300 ${
                    isSweepPlaying ? 'animate-reveal-sweep' : ''
                  }`}
                  style={{
                    top: isSweepPlaying ? undefined : '78%',
                    borderImage: 'linear-gradient(90deg, #ff5bd6 0%, #8b5cf6 50%, #38bdf8 100%) 1',
                    boxShadow: '0 -2px 10px rgba(139, 92, 246, 0.28)',
                  }}
                >
                  {/* Subtle placeholder tone under the sweeping veil */}
                  <div className="p-3 text-[10px] text-[#a3a39c] italic">
                    Synthesizing AST nodes...
                  </div>
                </div>
              </div>
            </div>

            {/* Artboard 3: Real Cluster UI Preview (md:col-span-3) */}
            <div className="md:col-span-3 flex flex-col">
              <div className="text-[10.5px] font-medium text-[#a3a39c] mb-1.5 pl-0.5">
                preview/cluster-metrics
              </div>
              <div className="rounded-[8px] border border-[#e6e6e2] bg-white p-3.5 tight-shadow flex-1 flex flex-col justify-between">
                <div>
                  <div className="text-[11px] font-semibold text-[#161614] mb-2">
                    Cluster Throughput
                  </div>
                  <div className="text-[20px] font-bold text-[#161614] tracking-tight">
                    99.98%
                  </div>
                  <div className="text-[10.5px] text-[#16a34a] font-medium mt-0.5">
                    +0.04% vs baseline
                  </div>
                </div>

                <div className="mt-3 pt-3 border-t border-[#f0f0ec] space-y-1.5 text-[10.5px]">
                  <div className="flex justify-between text-[#71716b]">
                    <span>p99 Latency</span>
                    <span className="font-semibold text-[#161614]">1.2ms</span>
                  </div>
                  <div className="flex justify-between text-[#71716b]">
                    <span>Memory heap</span>
                    <span className="font-semibold text-[#161614]">34.2 MB</span>
                  </div>
                  <div className="flex justify-between text-[#71716b]">
                    <span>Fault tolerance</span>
                    <span className="font-semibold text-[#16a34a]">Triple pass</span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Drifting Cursors with 13px SVG arrow (M4 2l16 8-7 2-3 7z) + name pill */}
          {/* Cursor 1: Codex (accent-warm: #d97757) */}
          <div 
            className="absolute top-[48%] left-[42%] pointer-events-none z-20 animate-cursor-drift-a"
          >
            <div className="relative">
              <svg 
                className="w-[13px] h-[13px] drop-shadow-xs" 
                viewBox="0 0 24 24" 
                fill="#d97757"
              >
                <path d="M4 2l16 8-7 2-3 7z" />
              </svg>
              <div className="absolute left-3.5 top-2.5 bg-[#d97757] text-white text-[10px] font-semibold px-2 py-0.5 rounded-full shadow-xs whitespace-nowrap">
                Codex
              </div>
            </div>
          </div>

          {/* Cursor 2: Alex / Tech Lead (accent-state: #8b5cf6) */}
          <div 
            className="absolute top-[32%] left-[18%] pointer-events-none z-20 animate-cursor-drift-b"
          >
            <div className="relative">
              <svg 
                className="w-[13px] h-[13px] drop-shadow-xs" 
                viewBox="0 0 24 24" 
                fill="#8b5cf6"
              >
                <path d="M4 2l16 8-7 2-3 7z" />
              </svg>
              <div className="absolute left-3.5 top-2.5 bg-[#8b5cf6] text-white text-[10px] font-semibold px-2 py-0.5 rounded-full shadow-xs whitespace-nowrap">
                Alex (Tech Lead)
              </div>
            </div>
          </div>
        </div>

        {/* 4. Docked 220px Tasks / Activity Side Panel */}
        <div className="w-full lg:w-[220px] bg-white border-t lg:border-t-0 lg:border-l border-[#f0f0ec] p-4 flex flex-col justify-between shrink-0">
          <div>
            <div className="text-[11px] font-semibold text-[#161614] mb-3 flex items-center justify-between">
              <span>Task Pipeline</span>
              <span className="text-[10px] text-[#8a8a84] font-normal">3 active</span>
            </div>

            {/* Agent Rows with real verified marks */}
            <div className="space-y-3">
              <div className="space-y-1">
                <div className="flex items-center gap-1.5">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#d97757]" />
                  <span className="text-[11px] font-semibold text-[#161614]">Codex</span>
                </div>
                <div className="text-[10.5px] text-[#71716b] pl-3">
                  Streaming AST schema invariants
                </div>
              </div>

              <div className="space-y-1">
                <div className="flex items-center gap-1.5">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#8b5cf6]" />
                  <span className="text-[11px] font-semibold text-[#161614]">Claude</span>
                </div>
                <div className="text-[10.5px] text-[#71716b] pl-3">
                  Verifying test suites & prober
                </div>
              </div>

              <div className="space-y-1">
                <div className="flex items-center gap-1.5">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#16a34a]" />
                  <span className="text-[11px] font-semibold text-[#161614]">Vektor Core</span>
                </div>
                <div className="text-[10.5px] text-[#71716b] pl-3">
                  Compiling isolated microVM bundle
                </div>
              </div>
            </div>

            {/* Human feedback card: inset #fafaf8 card */}
            <div className="mt-5 p-2.5 rounded-[6px] bg-[#fafaf8] border border-[#f0f0ec] text-[10.5px]">
              <div className="font-semibold text-[#161614] mb-1 flex items-center gap-1">
                <span className="w-1.5 h-1.5 rounded-full bg-[#161614]" />
                <span>Human Review</span>
              </div>
              <p className="text-[#71716b] leading-tight">
                Pull request verified and signed by Alex (commit #419b).
              </p>
            </div>
          </div>

          {/* Interactive Inspector Mode Switcher */}
          <div className="mt-4 pt-3 border-t border-[#f0f0ec]">
            <div className="text-[10px] text-[#8a8a84] font-medium mb-1.5">
              INSPECTOR VIEW
            </div>
            <div className="grid grid-cols-2 gap-1 bg-[#f6f6f3] p-0.5 rounded-[6px]">
              <button
                onClick={() => setActiveTab('terminal')}
                className={`py-1 text-[10px] font-medium rounded-[4px] transition-colors cursor-pointer ${
                  activeTab === 'terminal'
                    ? 'bg-white text-[#161614] shadow-xs'
                    : 'text-[#71716b] hover:text-[#161614]'
                }`}
              >
                Terminal
              </button>
              <button
                onClick={() => setActiveTab('invariants')}
                className={`py-1 text-[10px] font-medium rounded-[4px] transition-colors cursor-pointer ${
                  activeTab === 'invariants'
                    ? 'bg-white text-[#161614] shadow-xs'
                    : 'text-[#71716b] hover:text-[#161614]'
                }`}
              >
                Invariants
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* 5. Window Bottom Status Bar with Corner Chips & Zoom Control */}
      <div className="h-[36px] px-4 flex items-center justify-between border-t border-[#f0f0ec] bg-white text-[11px] text-[#71716b]">
        {/* Corner chip bottom-left: presence */}
        <div className="flex items-center gap-2">
          <span className="w-1.5 h-1.5 rounded-full bg-[#16a34a]" />
          <span>3 agents online · MicroVM isolated</span>
        </div>

        {/* Corner chip bottom-right: Zoom toggle */}
        <div className="flex items-center gap-1">
          <button
            onClick={() => setZoomLevel(Math.max(85, zoomLevel - 5))}
            className="w-5 h-5 flex items-center justify-center rounded hover:bg-[#f6f6f3] text-[#71716b] hover:text-[#161614] transition-colors cursor-pointer"
            title="Zoom out"
          >
            -
          </button>
          <button
            onClick={cycleZoom}
            className="px-2 py-0.5 rounded hover:bg-[#f6f6f3] text-[11px] font-medium text-[#161614] transition-colors cursor-pointer"
          >
            {zoomLevel}% · Fit
          </button>
          <button
            onClick={() => setZoomLevel(Math.min(115, zoomLevel + 5))}
            className="w-5 h-5 flex items-center justify-center rounded hover:bg-[#f6f6f3] text-[#71716b] hover:text-[#161614] transition-colors cursor-pointer"
            title="Zoom in"
          >
            +
          </button>
        </div>
      </div>
    </div>
  );
};
