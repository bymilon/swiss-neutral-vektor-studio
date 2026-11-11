import React, { useState } from 'react';
import { X, Check, Terminal, Shield, ArrowRight } from 'lucide-react';

interface SandboxModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const SandboxModal: React.FC<SandboxModalProps> = ({ isOpen, onClose }) => {
  const [clusterName, setClusterName] = useState('vektor-sandbox-01');
  const [selectedRuntime, setSelectedRuntime] = useState<'firecracker' | 'kubernetes'>('firecracker');
  const [status, setStatus] = useState<'idle' | 'provisioning' | 'ready'>('idle');

  if (!isOpen) return null;

  const handleLaunch = (e: React.FormEvent) => {
    e.preventDefault();
    setStatus('provisioning');
    setTimeout(() => {
      setStatus('ready');
    }, 1200);
  };

  const handleReset = () => {
    setStatus('idle');
    onClose();
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/30 backdrop-blur-xs select-none">
      <div 
        className="relative w-full max-w-lg rounded-[14px] border border-[#e3e3df] bg-white whisper-shadow overflow-hidden animate-fadeIn"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Modal Header */}
        <div className="h-[44px] px-5 flex items-center justify-between border-b border-[#f0f0ec] bg-white">
          <div className="flex items-center gap-2">
            <span className="w-2.5 h-2.5 rounded-full brand-gradient-bg" />
            <span className="text-[13px] font-semibold text-[#161614] tracking-tight">
              Launch Isolated Agent Sandbox
            </span>
          </div>
          <button
            onClick={onClose}
            className="w-6 h-6 rounded flex items-center justify-center text-[#71716b] hover:text-[#161614] hover:bg-[#f6f6f3] transition-colors cursor-pointer"
          >
            <X className="w-4 h-4" />
          </button>
        </div>

        {/* Modal Body */}
        <div className="p-6">
          {status === 'idle' && (
            <form onSubmit={handleLaunch} className="space-y-4">
              <div>
                <label className="block text-[11px] font-medium text-[#71716b] mb-1">
                  SANDBOX CLUSTER IDENTIFIER
                </label>
                <input
                  type="text"
                  value={clusterName}
                  onChange={(e) => setClusterName(e.target.value)}
                  className="w-full px-3 py-2 rounded-[6px] border border-[#e6e6e2] text-[13px] font-mono text-[#161614] focus:outline-hidden focus:border-[#161614] transition-colors bg-[#fcfcfb]"
                  placeholder="e.g. cluster-runtime-dev"
                  required
                />
              </div>

              <div>
                <label className="block text-[11px] font-medium text-[#71716b] mb-1.5">
                  ISOLATION ENGINE
                </label>
                <div className="grid grid-cols-2 gap-3">
                  <button
                    type="button"
                    onClick={() => setSelectedRuntime('firecracker')}
                    className={`p-3 rounded-[8px] border text-left cursor-pointer transition-all ${
                      selectedRuntime === 'firecracker'
                        ? 'border-[#161614] bg-[#fcfcfb] ring-1 ring-[#161614]/10'
                        : 'border-[#e6e6e2] hover:border-[#b9b9b2]'
                    }`}
                  >
                    <div className="flex items-center gap-1.5 font-semibold text-[12px] text-[#161614]">
                      <Terminal className="w-3.5 h-3.5 text-[#8b5cf6]" />
                      <span>Firecracker</span>
                    </div>
                    <div className="text-[11px] text-[#71716b] mt-1">
                      Ephemeral microVM, 34ms cold boot, local socket.
                    </div>
                  </button>

                  <button
                    type="button"
                    onClick={() => setSelectedRuntime('kubernetes')}
                    className={`p-3 rounded-[8px] border text-left cursor-pointer transition-all ${
                      selectedRuntime === 'kubernetes'
                        ? 'border-[#161614] bg-[#fcfcfb] ring-1 ring-[#161614]/10'
                        : 'border-[#e6e6e2] hover:border-[#b9b9b2]'
                    }`}
                  >
                    <div className="flex items-center gap-1.5 font-semibold text-[12px] text-[#161614]">
                      <Shield className="w-3.5 h-3.5 text-[#16a34a]" />
                      <span>Cluster K8s</span>
                    </div>
                    <div className="text-[11px] text-[#71716b] mt-1">
                      gVisor sandbox, VPC peering, enterprise IAM.
                    </div>
                  </button>
                </div>
              </div>

              <div className="p-3 rounded-[6px] bg-[#fafaf8] border border-[#f0f0ec] text-[11.5px] text-[#71716b]">
                <span className="font-semibold text-[#161614]">Invariants guarantee:</span> All generated code runs strictly within ephemeral memory namespaces. Zero telemetry egress.
              </div>

              <div className="pt-2 flex items-center justify-end gap-2.5">
                <button
                  type="button"
                  onClick={onClose}
                  className="px-4 py-2 text-[12.5px] font-medium text-[#71716b] hover:text-[#161614] cursor-pointer"
                >
                  Cancel
                </button>
                <button
                  type="submit"
                  className="px-5 py-2 text-[12.5px] font-medium text-white bg-[#161614] hover:bg-neutral-800 rounded-full cursor-pointer flex items-center gap-1.5"
                >
                  <span>Boot MicroVM</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </button>
              </div>
            </form>
          )}

          {status === 'provisioning' && (
            <div className="py-8 text-center space-y-3">
              <div className="w-8 h-8 rounded-full border-2 border-[#161614] border-t-transparent animate-spin mx-auto" />
              <div className="text-[14px] font-semibold text-[#161614]">
                Booting Firecracker MicroVM…
              </div>
              <div className="text-[12px] font-mono text-[#8a8a84]">
                › Allocating isolated vCPU & memory space (34ms)
              </div>
            </div>
          )}

          {status === 'ready' && (
            <div className="py-4 space-y-4">
              <div className="flex items-center gap-2 text-[#16a34a] font-semibold text-[14px]">
                <Check className="w-4 h-4" />
                <span>Sandbox Active & Isolated</span>
              </div>
              <div className="p-3.5 rounded-[6px] bg-[#161614] text-[#e9e9e6] font-mono text-[11.5px] space-y-1">
                <div>Cluster: {clusterName}</div>
                <div>Engine: {selectedRuntime} (gVisor secured)</div>
                <div className="text-[#8b5cf6]">Status: Invariant check listening on 127.0.0.1:4040</div>
              </div>
              <div className="flex justify-end gap-2 pt-2">
                <button
                  onClick={handleReset}
                  className="px-5 py-2 text-[12.5px] font-medium text-white bg-[#161614] hover:bg-neutral-800 rounded-full cursor-pointer"
                >
                  Close & Explore Runtime
                </button>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};
