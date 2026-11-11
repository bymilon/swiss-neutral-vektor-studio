import React, { useState } from 'react';
import { Check, Terminal, Cpu, GitCommit } from 'lucide-react';

export const WorkflowSection: React.FC = () => {
  const [activeStep, setActiveStep] = useState<number>(1);

  const steps = [
    {
      id: 1,
      number: '01',
      title: 'Repository Ingest & AST Analysis',
      subtitle: 'Dependency topological sorting in memory',
      icon: Terminal,
      description:
        'Vektor builds an in-memory graph of all export symbols, module interfaces, and cross-package dependencies in under 120ms. No full build required.',
      details: [
        'Deterministic AST symbol extraction',
        'Zero-cache dependency topology sort',
        'Strict schema drift boundary detection',
      ],
      codeSnippet: `// AST Invariant Inspector
const graph = await engine.parseRepository({
  strictInvariants: true,
  maxModuleDepth: 64,
  targetTypes: ["PostgresSchema", "TrpcRouter"]
});
// Discovered 4,812 nodes in 118ms`,
    },
    {
      id: 2,
      number: '02',
      title: 'Headless Prober & Invariant Loop',
      subtitle: 'Isolated microVM execution before commit',
      icon: Cpu,
      description:
        'Autonomous agents run proposed changes through headless compilers and probers in isolated microVMs. If a test fails, the agent self-heals before human review.',
      details: [
        'Sandboxed Firecracker microVM spin-up (34ms)',
        'Iterative self-repair on type mismatches',
        'Guaranteed zero circular import cycles',
      ],
      codeSnippet: `// Prober Verification Loop
const prober = await sandbox.spawnWorker({
  vCpu: 2,
  memoryMb: 512,
  autoHealIterations: 3
});
await prober.verifyInvariants();
// Result: 14/14 suites passing, 0 regressions`,
    },
    {
      id: 3,
      number: '03',
      title: 'Atomic Git Commit & Rollout',
      subtitle: 'Cryptographically signed pull requests',
      icon: GitCommit,
      description:
        'Once every invariant is mathematically satisfied, Vektor signs the Git commit, generates human-readable changelog diffs, and opens an auditable PR.',
      details: [
        'GPG-signed verifiable commits',
        'Full AST diff generation with schema impact report',
        'Instant preview environment URL generation',
      ],
      codeSnippet: `// Cryptographic Commit Signature
await repo.commitSigned({
  branch: "vektor/runtime-sync-v1.4",
  message: "chore(schema): align cluster invariant constraints",
  artifacts: ["preview-url", "ast-proof.json"]
});
// Pull Request #419 opened with verified passing checks`,
    },
  ];

  return (
    <section id="workflow" className="relative border-t border-[#f0f0ec] px-6 md:px-16 py-20 md:py-24">
      <div className="max-w-[1240px] mx-auto">
        {/* Section Eyebrow: IBM Plex Mono 10px uppercase letter-spacing:.16em */}
        <div className="font-mono text-[10px] uppercase tracking-[0.16em] text-[#8f8f88] mb-4">
          01 // EXECUTION WORKFLOW
        </div>

        {/* Section Headline: Two-tone Inter Tight */}
        <div className="max-w-3xl mb-14">
          <h2 className="text-[32px] sm:text-[40px] md:text-[44px] font-semibold tracking-[-0.045em] text-[#161614] leading-[1.12] text-balance">
            Engineered autonomy. <br />
            <span className="text-[#b9b9b2]">From AST scan to verified production commit.</span>
          </h2>
          <p className="mt-4 text-[13.5px] leading-[1.65] text-[#71716b] text-balance">
            Instead of prompting generic LLMs that guess syntax, Vektor runs a rigorous state machine where every generated line must compile and pass headless integration checks before entering your codebase.
          </p>
        </div>

        {/* 3-Step Interactive Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {steps.map((step) => {
            const Icon = step.icon;
            const isSelected = activeStep === step.id;

            return (
              <div
                key={step.id}
                onClick={() => setActiveStep(step.id)}
                className={`rounded-[12px] border bg-white p-6 card-shadow transition-all duration-200 cursor-pointer flex flex-col justify-between ${
                  isSelected
                    ? 'border-[#161614] ring-1 ring-[#161614]/5'
                    : 'border-[#e6e6e2] hover:border-[#b9b9b2]'
                }`}
              >
                <div>
                  {/* Step Header: Clean human editorial number (no //) */}
                  <div className="flex items-center justify-between pb-4 mb-4 border-b border-[#f0f0ec]">
                    <span className="font-mono text-[12px] font-medium text-[#8f8f88]">
                      {step.number}
                    </span>
                    <span className="w-7 h-7 rounded-full bg-[#f6f6f3] flex items-center justify-center text-[#161614]">
                      <Icon className="w-3.5 h-3.5" />
                    </span>
                  </div>

                  <h3 className="text-[17px] font-semibold tracking-[-0.025em] text-[#161614] mb-1">
                    {step.title}
                  </h3>
                  <div className="text-[11.5px] font-medium text-[#8a8a84] mb-3">
                    {step.subtitle}
                  </div>

                  <p className="text-[13px] leading-[1.6] text-[#71716b] mb-4">
                    {step.description}
                  </p>

                  <div className="space-y-2 mb-5">
                    {step.details.map((detail, idx) => (
                      <div key={idx} className="flex items-start gap-2 text-[12px] text-[#161614]">
                        <Check className="w-3.5 h-3.5 text-[#16a34a] shrink-0 mt-0.5" />
                        <span>{detail}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Micro Code Snippet */}
                <div className="rounded-[6px] bg-[#fafaf8] border border-[#f0f0ec] p-3 font-mono text-[10.5px] leading-[1.5] text-[#161614] overflow-x-auto">
                  <pre className="text-[#71716b]">{step.codeSnippet}</pre>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
