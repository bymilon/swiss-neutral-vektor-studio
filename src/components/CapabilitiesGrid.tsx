import React from 'react';
import { ShieldCheck, Zap, GitBranch, Layers, Lock, Cpu } from 'lucide-react';

export const CapabilitiesGrid: React.FC = () => {
  return (
    <section id="capabilities" className="relative border-t border-[#f0f0ec] px-6 md:px-16 py-20 md:py-24">
      <div className="max-w-[1240px] mx-auto">
        {/* Eyebrow */}
        <div className="font-mono text-[10px] uppercase tracking-[0.16em] text-[#8f8f88] mb-4">
          04 // CAPABILITIES MATRIX
        </div>

        {/* Two-tone headline */}
        <div className="max-w-3xl mb-14">
          <h2 className="text-[32px] sm:text-[40px] md:text-[44px] font-semibold tracking-[-0.045em] text-[#161614] leading-[1.12] text-balance">
            System invariants. <br />
            <span className="text-[#b9b9b2]">Engineered rather than decorated.</span>
          </h2>
          <p className="mt-4 text-[13.5px] leading-[1.65] text-[#71716b] text-balance">
            Every layer of Vektor is built for deterministic reliability. No loose regex replacements, no unchecked runtime hallucinations, and zero blind overwrites.
          </p>
        </div>

        {/* Asymmetric Bento Grid */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-6">
          {/* Bento Card 1: Sub-second AST Invariant Prober (Span 7) */}
          <div className="md:col-span-7 rounded-[12px] border border-[#e6e6e2] bg-white p-7 card-shadow flex flex-col justify-between">
            <div>
              <div className="flex items-center justify-between mb-4">
                <span className="w-8 h-8 rounded-full bg-[#f6f6f3] flex items-center justify-center text-[#161614]">
                  <Zap className="w-4 h-4 text-[#8b5cf6]" />
                </span>
                <span className="font-mono text-[11px] text-[#16a34a] font-semibold tabular-nums">
                  118ms p95 latency
                </span>
              </div>
              <h3 className="text-[20px] font-semibold tracking-[-0.03em] text-[#161614] mb-2">
                Sub-Second AST Invariant Prober
              </h3>
              <p className="text-[13px] leading-[1.65] text-[#71716b] mb-6">
                Direct abstract syntax tree inspection verifies all type relationships, database migrations, and RPC interfaces across microservices before writing a single character to disk.
              </p>
            </div>

            {/* Inset Metric Card */}
            <div className="rounded-[8px] bg-[#fafaf8] border border-[#f0f0ec] p-4">
              <div className="grid grid-cols-3 gap-4 text-left">
                <div>
                  <div className="text-[10.5px] text-[#8a8a84] mb-0.5">AST NODES</div>
                  <div className="text-[18px] font-bold text-[#161614] tabular-nums">4,812</div>
                  <div className="text-[10px] text-[#16a34a]">Fully indexed</div>
                </div>
                <div>
                  <div className="text-[10.5px] text-[#8a8a84] mb-0.5">PARSER SPEED</div>
                  <div className="text-[18px] font-bold text-[#161614] tabular-nums">1.4M lines/s</div>
                  <div className="text-[10px] text-[#71716b]">Zero build overhead</div>
                </div>
                <div>
                  <div className="text-[10.5px] text-[#8a8a84] mb-0.5">REGRESSIONS</div>
                  <div className="text-[18px] font-bold text-[#16a34a] tabular-nums">0.00%</div>
                  <div className="text-[10px] text-[#16a34a]">Mathematically provable</div>
                </div>
              </div>
            </div>
          </div>

          {/* Bento Card 2: Isolated Firecracker MicroVMs (Span 5) */}
          <div className="md:col-span-5 rounded-[12px] border border-[#e6e6e2] bg-white p-7 card-shadow flex flex-col justify-between">
            <div>
              <div className="flex items-center justify-between mb-4">
                <span className="w-8 h-8 rounded-full bg-[#f6f6f3] flex items-center justify-center text-[#161614]">
                  <Lock className="w-4 h-4 text-[#d97757]" />
                </span>
                <span className="font-mono text-[11px] text-[#8a8a84]">
                  ephemeral sandboxes
                </span>
              </div>
              <h3 className="text-[20px] font-semibold tracking-[-0.03em] text-[#161614] mb-2">
                Isolated MicroVM Sandboxes
              </h3>
              <p className="text-[13px] leading-[1.65] text-[#71716b] mb-4">
                Code execution occurs inside ephemeral Firecracker microVMs booted in under 35ms. Agents never access your production credentials or local shell context.
              </p>
            </div>

            <div className="pt-4 border-t border-[#f0f0ec] space-y-2 text-[12px] text-[#161614]">
              <div className="flex items-center justify-between">
                <span>MicroVM cold boot</span>
                <span className="font-mono font-medium tabular-nums">34ms</span>
              </div>
              <div className="flex items-center justify-between">
                <span>Kernel isolation</span>
                <span className="font-mono font-medium text-[#16a34a]">gVisor / KVM</span>
              </div>
              <div className="flex items-center justify-between">
                <span>Network access policy</span>
                <span className="font-mono font-medium">Default zero-trust egress</span>
              </div>
            </div>
          </div>

          {/* Bento Card 3: Cryptographic Git Lineage (Span 5) */}
          <div className="md:col-span-5 rounded-[12px] border border-[#e6e6e2] bg-white p-7 card-shadow flex flex-col justify-between">
            <div>
              <div className="flex items-center justify-between mb-4">
                <span className="w-8 h-8 rounded-full bg-[#f6f6f3] flex items-center justify-center text-[#161614]">
                  <GitBranch className="w-4 h-4 text-[#161614]" />
                </span>
                <span className="font-mono text-[11px] text-[#8a8a84]">
                  auditable lineage
                </span>
              </div>
              <h3 className="text-[20px] font-semibold tracking-[-0.03em] text-[#161614] mb-2">
                Signed Git Checkpoints
              </h3>
              <p className="text-[13px] leading-[1.65] text-[#71716b]">
                Every autonomous refactor creates a cryptographically signed atomic commit with embedded execution hashes. Instantly bisect or revert any automated change.
              </p>
            </div>

            <div className="mt-5 p-3 rounded-[6px] bg-[#fafaf8] border border-[#f0f0ec] font-mono text-[11px] text-[#71716b]">
              <span className="text-[#16a34a]">commit 419b2a7</span> (GPG signed)<br />
              <span className="text-[#8a8a84]">Tree-Hash:</span> c9f81a7d...3e1<br />
              <span className="text-[#161614]">Status: Verified AST Invariants</span>
            </div>
          </div>

          {/* Bento Card 4: Multi-Agent Consensus Architecture (Span 7) */}
          <div className="md:col-span-7 rounded-[12px] border border-[#e6e6e2] bg-white p-7 card-shadow flex flex-col justify-between">
            <div>
              <div className="flex items-center justify-between mb-4">
                <span className="w-8 h-8 rounded-full bg-[#f6f6f3] flex items-center justify-center text-[#161614]">
                  <Cpu className="w-4 h-4 text-[#8b5cf6]" />
                </span>
                <span className="font-mono text-[11px] text-[#8b5cf6] font-semibold">
                  3-agent consensus
                </span>
              </div>
              <h3 className="text-[20px] font-semibold tracking-[-0.03em] text-[#161614] mb-2">
                Tri-Engine Verification Protocol
              </h3>
              <p className="text-[13px] leading-[1.65] text-[#71716b] mb-6">
                Specialized agents work concurrently: Codex generates code implementation, Claude proves formal type invariants, and Vektor Core compiles the test artifact. Changes require uncompromised consensus.
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
              <div className="p-3 rounded-[6px] border border-[#f0f0ec] bg-[#fcfcfb]">
                <div className="text-[11px] font-semibold text-[#d97757] mb-1">Codex Agent</div>
                <div className="text-[11px] text-[#71716b]">AST Synthesis & Schema Migration</div>
              </div>
              <div className="p-3 rounded-[6px] border border-[#f0f0ec] bg-[#fcfcfb]">
                <div className="text-[11px] font-semibold text-[#8b5cf6] mb-1">Claude Agent</div>
                <div className="text-[11px] text-[#71716b]">Formal Invariant & Test Prober</div>
              </div>
              <div className="p-3 rounded-[6px] border border-[#f0f0ec] bg-[#fcfcfb]">
                <div className="text-[11px] font-semibold text-[#161614] mb-1">Vektor Core</div>
                <div className="text-[11px] text-[#71716b]">Sandboxed Firecracker Execution</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
