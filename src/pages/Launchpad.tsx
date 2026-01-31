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
        <div className="max-w-7xl mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-4">
              <Link 
                to="/" 
                className="flex items-center gap-2 text-muted-foreground hover:text-foreground transition-colors"
              >
                <ArrowLeft className="w-4 h-4" />
                <span className="hidden sm:inline">Back</span>
              </Link>
              
              <div className="flex items-center gap-3">
                <img src="/logo.png" alt="XTRIAL" className="w-8 h-8" />
                <div>
                  <h1 className="text-xl font-bold tracking-wide flex items-center gap-2">
                    XTRIAL <span className="text-primary">LAUNCHPAD</span>
                  </h1>
                  <p className="text-xs text-muted-foreground hidden sm:block">
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
      <section className="py-12 px-4 border-b border-border">
        <div className="max-w-4xl mx-auto text-center">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 border border-primary/30 text-primary text-sm font-medium mb-6">
            <Zap className="w-4 h-4" />
            Powered by Solana
          </div>
          
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Launch Your Token <span className="text-primary">Today</span>
          </h2>
          
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Create your own SPL token on Solana blockchain. No coding required. 
            Just connect your wallet, fill in the details, and launch.
          </p>
        </div>
      </section>

      {/* Main Content */}
      <main className="flex-1 py-12 px-4">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
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
          <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="glass-card p-6 rounded-xl text-center">
              <Rocket className="w-8 h-8 mx-auto mb-3 text-primary" />
              <h3 className="font-semibold mb-2">Instant Deployment</h3>
              <p className="text-sm text-muted-foreground">
                Your token is created directly on the Solana blockchain in seconds
              </p>
            </div>
            
            <div className="glass-card p-6 rounded-xl text-center">
              <Zap className="w-8 h-8 mx-auto mb-3 text-primary" />
              <h3 className="font-semibold mb-2">Low Fees</h3>
              <p className="text-sm text-muted-foreground">
                Pay only the minimal Solana transaction fees (~0.002 SOL)
              </p>
            </div>
            
            <div className="glass-card p-6 rounded-xl text-center">
              <img src="/logo.png" alt="XTRIAL" className="w-8 h-8 mx-auto mb-3" />
              <h3 className="font-semibold mb-2">XTrial Powered</h3>
              <p className="text-sm text-muted-foreground">
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
