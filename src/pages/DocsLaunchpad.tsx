import { DocsLayout } from '../components/DocsLayout';
import { Link } from 'react-router-dom';
import { Rocket, Wallet, Coins, Zap, ExternalLink } from 'lucide-react';

const DocsLaunchpad = () => {
  return (
    <DocsLayout>
      <article className="doc-content">
        <h1>XTrial Launchpad</h1>
        
        <p className="text-lg leading-relaxed">
          Create your own SPL token on the Solana blockchain in seconds. 
          No coding required — just connect, fill, and launch.
        </p>

        <div className="doc-callout">
          <div className="doc-callout-label">Powered by Solana</div>
          <h3 className="text-2xl font-bold mb-4 text-foreground">Token Creation Made Simple</h3>
          <p className="text-muted-foreground mb-0">
            XTrial Launchpad leverages Solana's high-speed, low-cost infrastructure 
            to enable instant token deployment directly from your browser.
          </p>
        </div>

        <h2>How It Works</h2>
        
        <div className="numbered-list">
          <div className="numbered-item">
            <span className="numbered-item-number">01</span>
            <div>
              <strong className="text-foreground flex items-center gap-2">
                <Wallet className="w-5 h-5 text-primary" />
                Connect Your Wallet
              </strong>
              <p className="text-muted-foreground mt-1">
                Support for Phantom, Solflare, and other popular Solana wallets. 
                Your wallet is used to sign the token creation transaction.
              </p>
            </div>
          </div>
          <div className="numbered-item">
            <span className="numbered-item-number">02</span>
            <div>
              <strong className="text-foreground flex items-center gap-2">
                <Coins className="w-5 h-5 text-primary" />
                Configure Your Token
              </strong>
              <p className="text-muted-foreground mt-1">
                Set your token's name, symbol, description, initial supply, and decimals. 
                Add a logo URL for visual branding.
              </p>
            </div>
          </div>
          <div className="numbered-item">
            <span className="numbered-item-number">03</span>
            <div>
              <strong className="text-foreground flex items-center gap-2">
                <Rocket className="w-5 h-5 text-primary" />
                Launch Instantly
              </strong>
              <p className="text-muted-foreground mt-1">
                Your token is deployed directly to Solana mainnet. Receive your mint address 
                immediately and view on Solana Explorer.
              </p>
            </div>
          </div>
        </div>

        <h2>Token Parameters</h2>
        
        <div className="overflow-x-auto my-6">
          <table className="w-full border-collapse">
            <thead>
              <tr className="border-b border-border">
                <th className="text-left py-3 px-4 text-foreground font-semibold">Parameter</th>
                <th className="text-left py-3 px-4 text-foreground font-semibold">Description</th>
                <th className="text-left py-3 px-4 text-foreground font-semibold">Limit</th>
              </tr>
            </thead>
            <tbody className="text-muted-foreground">
              <tr className="border-b border-border/50">
                <td className="py-3 px-4"><code>name</code></td>
                <td className="py-3 px-4">Human-readable token name</td>
                <td className="py-3 px-4">32 characters</td>
              </tr>
              <tr className="border-b border-border/50">
                <td className="py-3 px-4"><code>symbol</code></td>
                <td className="py-3 px-4">Trading ticker symbol</td>
                <td className="py-3 px-4">10 characters</td>
              </tr>
              <tr className="border-b border-border/50">
                <td className="py-3 px-4"><code>decimals</code></td>
                <td className="py-3 px-4">Divisibility precision</td>
                <td className="py-3 px-4">0-9</td>
              </tr>
              <tr className="border-b border-border/50">
                <td className="py-3 px-4"><code>initial_supply</code></td>
                <td className="py-3 px-4">Tokens minted to your wallet</td>
                <td className="py-3 px-4">Any positive integer</td>
              </tr>
            </tbody>
          </table>
        </div>

        <h2>Fees</h2>
        <p>
          Creating a token requires only the minimal Solana network fees:
        </p>
        <ul className="list-disc list-inside space-y-2 text-muted-foreground my-4">
          <li><strong className="text-foreground">~0.002 SOL</strong> — Transaction and rent fees</li>
          <li><strong className="text-foreground">No platform fee</strong> — XTrial Launchpad is free to use</li>
        </ul>

        <div className="doc-callout">
          <div className="doc-callout-label">Important</div>
          <p className="text-muted-foreground mb-0">
            Tokens are created on <strong>Solana mainnet-beta</strong>. Ensure you have 
            real SOL in your wallet before proceeding. This is not a testnet deployment.
          </p>
        </div>

        <h2>After Launch</h2>
        <p>
          Once your token is created:
        </p>
        <ul className="list-disc list-inside space-y-2 text-muted-foreground my-4">
          <li>Your entire initial supply is minted to your connected wallet</li>
          <li>You receive the mint authority (can mint more tokens)</li>
          <li>Token is viewable on Solana Explorer and other block explorers</li>
          <li>You can list on DEXs, create liquidity pools, or distribute as needed</li>
        </ul>

        <div className="mt-8">
          <Link 
            to="/launchpad" 
            className="btn-primary inline-flex items-center gap-2"
          >
            <Rocket className="w-5 h-5" />
            Go to Launchpad
          </Link>
        </div>

        <div className="mt-12 pt-8 border-t border-border flex justify-between">
          <Link 
            to="/docs/vision" 
            className="text-muted-foreground hover:text-primary"
          >
            ← Vision
          </Link>
          <Link 
            to="/docs/architecture/fsm" 
            className="text-primary hover:underline"
          >
            Next: FSM Sync →
          </Link>
        </div>
      </article>
    </DocsLayout>
  );
};

export default DocsLaunchpad;
