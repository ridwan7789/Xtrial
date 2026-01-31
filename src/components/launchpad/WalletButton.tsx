import { useWallet } from '@solana/wallet-adapter-react';
import { WalletMultiButton } from '@solana/wallet-adapter-react-ui';
import { Wallet } from 'lucide-react';

export const WalletButton = () => {
  const { connected, publicKey } = useWallet();

  return (
    <div className="wallet-button-wrapper">
      <WalletMultiButton className="!bg-primary !text-primary-foreground hover:!bg-primary/90 !rounded-lg !h-12 !px-6 !font-semibold !text-sm !uppercase !tracking-wider !transition-all !duration-300">
        {connected && publicKey ? (
          <span className="flex items-center gap-2">
            <Wallet className="w-4 h-4" />
            {publicKey.toBase58().slice(0, 4)}...{publicKey.toBase58().slice(-4)}
          </span>
        ) : (
          <span className="flex items-center gap-2">
            <Wallet className="w-4 h-4" />
            Connect Wallet
          </span>
        )}
      </WalletMultiButton>
    </div>
  );
};
