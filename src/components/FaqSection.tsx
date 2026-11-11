import React, { useState } from 'react';
import { Plus, Minus } from 'lucide-react';

export const FaqSection: React.FC = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const faqs = [
    {
      q: 'How does Vektor guarantee zero type regressions?',
      a: 'Vektor runs a deterministic AST invariant checker within an isolated Firecracker microVM before every proposed commit. If a change causes a TypeScript compilation error, broken RPC contract, or failing unit test, the agent iterates in isolation or halts with a precise invariant failure report. It never presents unverified code.',
    },
    {
      q: 'Does Vektor execute arbitrary shell commands on my host machine?',
      a: 'Never. Every execution, test run, and build step happens inside an ephemeral, hardware-virtualized Firecracker microVM with isolated memory, CPU limits, and strict zero-trust egress network policies. Your host filesystem and local credentials remain untouched.',
    },
    {
      q: 'How are multi-agent conflicts resolved?',
      a: 'Vektor employs a tri-agent consensus model. Codex generates the implementation diff, Claude verifies formal type invariance and edge cases, and Vektor Core compiles the test suite in headless mode. All three layers must validate before a Git commit is signed.',
    },
    {
      q: 'Can Vektor integrate with existing GitHub Actions and GitLab CI pipelines?',
      a: 'Yes. Vektor runs either as a local terminal CLI (`npx vektor run`) or as a native GitHub Action step. It can generate preview deployment URLs, publish AST diff summaries directly to PR comments, and enforce CI invariant gates.',
    },
    {
      q: 'Is self-hosting supported for air-gapped enterprise environments?',
      a: 'Yes. Vektor Enterprise provides a self-hosted control plane deployable via Helm charts onto your private Kubernetes clusters (AWS EKS, GCP GKE, Azure AKS) with on-premises LLM routing and SSO/SAML 2.0 governance.',
    },
  ];

  return (
    <section id="faq" className="relative border-t border-[#f0f0ec] px-6 md:px-16 py-20 md:py-24">
      <div className="max-w-[840px] mx-auto">
        {/* Eyebrow */}
        <div className="font-mono text-[10px] uppercase tracking-[0.16em] text-[#8f8f88] mb-4">
          05 // FREQUENTLY ASKED QUESTIONS
        </div>

        {/* Two-tone headline */}
        <h2 className="text-[32px] sm:text-[40px] md:text-[44px] font-semibold tracking-[-0.045em] text-[#161614] leading-[1.12] mb-12 text-balance">
          Technical specifications. <br />
          <span className="text-[#b9b9b2]">Clear answers without vendor ambiguity.</span>
        </h2>

        {/* Accordion list */}
        <div className="divide-y divide-[#f0f0ec] border-y border-[#f0f0ec]">
          {faqs.map((faq, index) => {
            const isOpen = openIndex === index;

            return (
              <div key={index} className="py-5">
                <button
                  onClick={() => setOpenIndex(isOpen ? null : index)}
                  className="w-full flex items-center justify-between text-left gap-4 cursor-pointer group"
                >
                  <span className="text-[15px] font-semibold tracking-[-0.02em] text-[#161614] group-hover:text-black transition-colors">
                    {faq.q}
                  </span>
                  <span className="w-6 h-6 rounded-full bg-[#f6f6f3] flex items-center justify-center shrink-0 text-[#161614] group-hover:bg-[#eaeae7] transition-colors">
                    {isOpen ? <Minus className="w-3 h-3" /> : <Plus className="w-3 h-3" />}
                  </span>
                </button>

                {isOpen && (
                  <div className="mt-3 pr-8 text-[13.5px] leading-[1.65] text-[#71716b] animate-fadeIn">
                    {faq.a}
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
