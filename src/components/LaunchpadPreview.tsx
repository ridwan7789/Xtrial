import { Link } from 'react-router-dom';
import { Rocket, Zap, Coins, ArrowRight, Wallet } from 'lucide-react';

export const LaunchpadPreview = () => {
  return (
    <div className="w-full max-w-4xl mx-auto">
      <div className="relative aspect-video rounded-xl overflow-hidden border border-border/50 shadow-2xl shadow-primary/10 bg-card">
        {/* Background gradient */}
        <div className="absolute inset-0 bg-gradient-to-br from-primary/10 via-background to-accent/20" />
        
        {/* Content */}
        <div className="relative z-10 h-full flex flex-col items-center justify-center p-8 text-center">
          {/* Badge */}
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/20 border border-primary/30 text-primary text-sm font-medium mb-6">
            <Zap className="w-4 h-4" />
            Powered by Solana
          </div>
          
          {/* Title */}
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            XTRIAL <span className="text-primary">LAUNCHPAD</span>
          </h2>
          
          {/* Description */}
          <p className="text-muted-foreground max-w-lg mb-8">
            Create your own SPL token on Solana blockchain in seconds. 
            No coding required. Just connect, fill, and launch.
          </p>
          
          {/* Features */}
          <div className="flex flex-wrap justify-center gap-6 mb-8">
            <div className="flex items-center gap-2 text-sm text-muted-foreground">
              <Wallet className="w-4 h-4 text-primary" />
              Connect Wallet
            </div>
            <div className="flex items-center gap-2 text-sm text-muted-foreground">
              <Coins className="w-4 h-4 text-primary" />
              Create Token
            </div>
            <div className="flex items-center gap-2 text-sm text-muted-foreground">
              <Rocket className="w-4 h-4 text-primary" />
              Instant Deploy
            </div>
          </div>
          
          {/* CTA Button */}
          <Link
            to="/launchpad"
            className="btn-primary inline-flex items-center gap-2 group"
          >
            <Rocket className="w-5 h-5" />
            Launch Your Token
            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </Link>
        </div>
        
        {/* Decorative elements */}
        <div className="absolute top-4 left-4">
          <img src="/logo.png" alt="XTRIAL" className="w-10 h-10 opacity-50" />
        </div>
        
        {/* Glow effect */}
        <div className="absolute inset-0 pointer-events-none rounded-xl ring-1 ring-inset ring-white/10" />
      </div>
    </div>
  );
};
