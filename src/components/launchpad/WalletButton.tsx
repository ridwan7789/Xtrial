import { useWallet } from '@solana/wallet-adapter-react';
import { WalletMultiButton } from '@solana/wallet-adapter-react-ui';
import { Wallet } from 'lucide-react';

export const WalletButton = () => {
  const { connected, publicKey } = useWallet();

  return (
    <div className="wallet-button-wrapper">
      <WalletMultiButton className="!bg-primary !text-primary-foreground hover:!bg-primary/90 !rounded-lg !h-10 sm:!h-12 !px-3 sm:!px-6 !font-semibold !text-xs sm:!text-sm !uppercase !tracking-wider !transition-all !duration-300 !whitespace-nowrap">
        {connected && publicKey ? (
          <span className="flex items-center gap-1 sm:gap-2">
            <Wallet className="w-3 sm:w-4 h-3 sm:h-4" />
            <span className="truncate max-w-[60px] sm:max-w-[100px]">{publicKey.toBase58().slice(0, 4)}...{publicKey.toBase58().slice(-4)}</span>
          </span>
        ) : (
          <span className="flex items-center gap-0.5 sm:gap-1">
            <Wallet className="w-3 sm:w-4 h-3 sm:h-4 opacity-0 sm:opacity-100" /> {/* Hidden on mobile, visible on desktop to maintain spacing */}
            <span className="whitespace-nowrap">Connect Wallet</span>
          </span>
        )}
      </WalletMultiButton>
    </div>
  );
};
