import { useState } from 'react';
import { Copy, Check } from 'lucide-react';

const CONTRACT_ADDRESS = 'COMING SOON ON SURGE';

export const ContractAddressBar = () => {
  const [copied, setCopied] = useState(false);

  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText(CONTRACT_ADDRESS);
      setCopied(true);
      setTimeout(() => setCopied(false), 1500);
    } catch (err) {
      console.error('Failed to copy:', err);
    }
  };

  return (
    <button
      onClick={handleCopy}
      className="ca-bar group w-full max-w-xl mx-auto"
      aria-label="Copy contract address"
    >
      <span className="text-muted-foreground text-sm font-medium px-3 py-1 rounded bg-muted/50">
        CA
      </span>
      <span className="flex-1 font-mono text-sm text-foreground/80 truncate">
        {CONTRACT_ADDRESS}
      </span>
      <span className="flex items-center gap-2 text-muted-foreground text-sm font-medium transition-colors group-hover:text-primary">
        {copied ? (
          <>
            <Check className="w-4 h-4" />
            COPIED!
          </>
        ) : (
          <>
            <Copy className="w-4 h-4" />
            COPY
          </>
        )}
      </span>
    </button>
  );
};
