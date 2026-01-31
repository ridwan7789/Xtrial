import { Link } from 'react-router-dom';
import { ArrowLeft, Rocket, Zap } from 'lucide-react';
import { WalletButton } from '@/components/launchpad/WalletButton';
import { CreateTokenForm } from '@/components/launchpad/CreateTokenForm';
import { TokenList } from '@/components/launchpad/TokenList';
import { Footer } from '@/components/Footer';

const Launchpad = () => {
  return (
    <div className="min-h-screen flex flex-col bg-background">
      {/* Header */}
      <header className="sticky top-0 z-50 border-b border-border bg-background/80 backdrop-blur-xl">
        <div className="max-w-7xl mx-auto px-4 py-3 sm:py-4"> {/* Reduced padding on mobile */}
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-3 sm:gap-4"> {/* Smaller gap on mobile */}
              <Link
                to="/"
                className="flex items-center gap-2 text-muted-foreground hover:text-foreground transition-colors"
              >
                <ArrowLeft className="w-4 h-4" />
                <span className="hidden sm:inline">Back</span>
              </Link>

              <div className="flex items-center gap-2 sm:gap-3"> {/* Smaller gap on mobile */}
                <img src="/logo.png" alt="XTRIAL" className="w-6 h-6 sm:w-8 sm:h-8" /> {/* Smaller logo on mobile */}
                <div>
                  <h1 className="text-lg sm:text-xl font-bold tracking-wide flex items-center gap-1 sm:gap-2"> {/* Smaller text on mobile */}
                    XTRIAL <span className="text-primary">LAUNCHPAD</span>
                  </h1>
                  <p className="text-[10px] sm:text-xs text-muted-foreground hidden sm:block">
                    Create Solana tokens in seconds
                  </p>
                </div>
              </div>
            </div>

            <WalletButton />
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="py-8 sm:py-12 px-4 border-b border-border"> {/* Reduced padding on mobile */}
        <div className="max-w-4xl mx-auto text-center">
          <div className="inline-flex items-center gap-2 px-3 py-1.5 sm:px-4 sm:py-2 rounded-full bg-primary/10 border border-primary/30 text-primary text-xs sm:text-sm font-medium mb-4 sm:mb-6"> {/* Smaller badge on mobile */}
            <Zap className="w-3 h-3 sm:w-4 sm:h-4" /> {/* Smaller icon on mobile */}
            Powered by Solana
          </div>

          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-3 sm:mb-4"> {/* Better font scaling */}
            Launch Your Token <span className="text-primary">Today</span>
          </h2>

          <p className="text-base sm:text-lg text-muted-foreground max-w-xl mx-auto"> {/* Better text sizing */}
            Create your own SPL token on Solana blockchain. No coding required.
            Just connect your wallet, fill in the details, and launch.
          </p>
        </div>
      </section>

      {/* Main Content */}
      <main className="flex-1 py-8 sm:py-12 px-4"> {/* Reduced padding on mobile */}
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 gap-6 sm:gap-8"> {/* Stack on mobile with smaller gap */}
            {/* Create Token Form */}
            <div>
              <CreateTokenForm />
            </div>

            {/* Token List */}
            <div>
              <TokenList />
            </div>
          </div>

          {/* Info Section */}
          <div className="mt-8 sm:mt-12 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 sm:gap-6"> {/* Better grid on mobile */}
            <div className="glass-card p-4 sm:p-6 rounded-xl text-center">
              <Rocket className="w-6 h-6 sm:w-8 sm:h-8 mx-auto mb-2 sm:mb-3 text-primary" />
              <h3 className="font-semibold text-sm sm:text-base mb-1 sm:mb-2"> {/* Better text sizing */}
                Instant Deployment
              </h3>
              <p className="text-xs sm:text-sm text-muted-foreground">
                Your token is created directly on the Solana blockchain in seconds
              </p>
            </div>

            <div className="glass-card p-4 sm:p-6 rounded-xl text-center">
              <Zap className="w-6 h-6 sm:w-8 sm:h-8 mx-auto mb-2 sm:mb-3 text-primary" />
              <h3 className="font-semibold text-sm sm:text-base mb-1 sm:mb-2"> {/* Better text sizing */}
                Low Fees
              </h3>
              <p className="text-xs sm:text-sm text-muted-foreground">
                Pay only the minimal Solana transaction fees (~0.002 SOL)
              </p>
            </div>

            <div className="glass-card p-4 sm:p-6 rounded-xl text-center col-span-full md:col-span-1"> {/* Span full width on small screens */}
              <img src="/logo.png" alt="XTRIAL" className="w-6 h-6 sm:w-8 sm:h-8 mx-auto mb-2 sm:mb-3" />
              <h3 className="font-semibold text-sm sm:text-base mb-1 sm:mb-2"> {/* Better text sizing */}
                XTrial Powered
              </h3>
              <p className="text-xs sm:text-sm text-muted-foreground">
                Part of the XTrial ecosystem - The World's First AI Tribunal
              </p>
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default Launchpad;
