import React, { useState } from 'react';
import { Copy, Check, Terminal, Play, RotateCcw } from 'lucide-react';

export const CommandSection: React.FC = () => {
  const [copied, setCopied] = useState(false);
  const [isRunning, setIsRunning] = useState(false);
  const [logs, setLogs] = useState<string[]>([
    'ready to initialize isolated engineering microVM.',
  ]);

  const command = 'npx vektor init --isolated-cluster';

  const handleCopy = () => {
    navigator.clipboard?.writeText(command);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const handleRunSimulation = () => {
    setIsRunning(true);
    setLogs(['$ ' + command]);

    setTimeout(() => {
      setLogs((prev) => [
        ...prev,
        '› Downloading runtime engine v1.4.2 (14MB)... [done]',
      ]);
    }, 400);

    setTimeout(() => {
      setLogs((prev) => [
        ...prev,
        '› Initializing isolated Firecracker microVM (vCPU: 2, Mem: 512MB)... [32ms]',
      ]);
    }, 900);

    setTimeout(() => {
      setLogs((prev) => [
        ...prev,
        '› Ingesting local AST: 4,812 symbols resolved... [118ms]',
      ]);
    }, 1400);

    setTimeout(() => {
      setLogs((prev) => [
        ...prev,
        '✓ Autonomous agent cluster verified: zero type regressions.',
        '› Workspace available at: https://local.vektor.dev:4040',
      ]);
      setIsRunning(false);
    }, 2000);
  };

  return (
    <section className="relative border-t border-[#f0f0ec] px-6 md:px-16 py-20 md:py-24 text-center">
      <div className="max-w-[840px] mx-auto">
        {/* Eyebrow */}
        <div className="font-mono text-[10px] uppercase tracking-[0.16em] text-[#8f8f88] mb-4">
          02 // ONE COMMAND BOOTSTRAP
        </div>

        {/* Two-tone headline */}
        <h2 className="text-[32px] sm:text-[40px] md:text-[44px] font-semibold tracking-[-0.045em] text-[#161614] leading-[1.12] mb-4 text-balance">
          One terminal command. <br />
          <span className="text-[#b9b9b2]">Zero infrastructure configuration.</span>
        </h2>

        <p className="text-[13.5px] leading-[1.65] text-[#71716b] max-w-xl mx-auto mb-10 text-balance">
          No complex cloud setup, API gateway credentials, or container daemon wrestling. Spin up a sandboxed agent cluster directly from your local terminal.
        </p>

        {/* Centered Command Bar */}
        <div className="rounded-[10px] border border-[#e6e6e2] bg-white p-2.5 sm:p-3 card-shadow max-w-xl mx-auto flex items-center justify-between gap-3 text-left">
          <div className="flex items-center gap-3 pl-2 overflow-x-auto">
            <span className="text-[#8a8a84] font-mono text-[13px]">$</span>
            <code className="font-mono text-[13.5px] font-medium text-[#161614] whitespace-nowrap">
              {command}
            </code>
          </div>

          <div className="flex items-center gap-2 shrink-0">
            <button
              onClick={handleRunSimulation}
              disabled={isRunning}
              title="Run simulation in sandbox"
              className="hidden sm:inline-flex items-center gap-1.5 px-3 py-1.5 rounded-[6px] text-[12px] font-medium text-[#161614] bg-[#f6f6f3] hover:bg-[#eaeae7] transition-colors cursor-pointer disabled:opacity-50"
            >
              <Play className="w-3 h-3 text-[#8b5cf6]" />
              <span>{isRunning ? 'Running…' : 'Simulate'}</span>
            </button>

            <button
              onClick={handleCopy}
              className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-[6px] text-[12px] font-medium text-white bg-[#161614] hover:bg-neutral-800 transition-colors cursor-pointer"
            >
              {copied ? (
                <>
                  <Check className="w-3.5 h-3.5 text-[#22c55e]" />
                  <span>Copied</span>
                </>
              ) : (
                <>
                  <Copy className="w-3.5 h-3.5" />
                  <span>Copy</span>
                </>
              )}
            </button>
          </div>
        </div>

        {/* Live Terminal Output Box */}
        <div className="mt-5 max-w-xl mx-auto rounded-[8px] border border-[#e6e6e2] bg-[#161614] text-[#e9e9e6] p-4 text-left font-mono text-[11px] leading-[1.6] shadow-sm">
          <div className="flex items-center justify-between pb-2 mb-2 border-b border-white/10 text-[10px] text-white/50">
            <span className="flex items-center gap-1.5">
              <span className="w-2 h-2 rounded-full bg-[#16a34a]" />
              <span>firecracker-microvm-stdout</span>
            </span>
            <button
              onClick={() => setLogs(['ready to initialize isolated engineering microVM.'])}
              className="hover:text-white transition-colors cursor-pointer"
              title="Reset terminal"
            >
              <RotateCcw className="w-3 h-3" />
            </button>
          </div>
          <div className="space-y-1 max-h-[180px] overflow-y-auto dark-scroll pr-1">
            {logs.map((log, index) => (
              <div 
                key={index} 
                className={log.startsWith('✓') ? 'text-[#22c55e]' : log.startsWith('›') ? 'text-[#8b5cf6]' : 'text-neutral-300'}
              >
                {log}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
