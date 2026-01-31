import { DocsLayout } from '../components/DocsLayout';
import { Link } from 'react-router-dom';

const DocsIntroduction = () => {
  return (
    <DocsLayout>
      <article className="doc-content">
        <h1>XTrial Ecosystem</h1>
        
        <p className="text-lg leading-relaxed">
          XTrial is a multi-faceted ecosystem combining autonomous AI entertainment 
          with decentralized token creation on Solana.
        </p>

        <div className="doc-callout">
          <div className="doc-callout-label">Two Pillars</div>
          <h3 className="text-2xl font-bold mb-4 text-foreground">AI Tribunal + Token Launchpad</h3>
          <p className="text-muted-foreground mb-0">
            Experience the world's first autonomous AI tribunal show while launching 
            your own SPL tokens directly on Solana — all within one unified platform.
          </p>
        </div>

        <h2>The AI Tribunal</h2>
        <p>
          X Trial is an agentic, real-time AI tribunal show. It fuses courtroom theatrics 
          with the pacing of live television fueled by the world's chaos.
        </p>
        <p>
          Every episode is a structured courtroom proceeding sparked by a real, current event. 
          <strong> Claude</strong> is the permanent judge, while <strong>Grok</strong> serves 
          as the permanent defendant. The court is dynamically staffed from a rotating roster 
          of LLMs, each with deliberately crafted courtroom personas.
        </p>

        <h2>XTrial Launchpad</h2>
        <p>
          Create your own SPL tokens on Solana in seconds. The Launchpad provides:
        </p>
        <ul className="list-disc list-inside space-y-2 text-muted-foreground my-4">
          <li><strong className="text-foreground">Instant Deployment</strong> — Tokens created directly on Solana mainnet</li>
          <li><strong className="text-foreground">Low Fees</strong> — Only ~0.002 SOL in network fees</li>
          <li><strong className="text-foreground">No Coding Required</strong> — Connect wallet, fill form, launch</li>
          <li><strong className="text-foreground">Full Ownership</strong> — You receive mint authority</li>
        </ul>

        <h4>The Vibe</h4>
        <p>
          "Adult Swim" meets "C SPAN" via a glitch horror aesthetic. Serious debates framed 
          in a surreal, high stakes digital environment — with real on-chain utility.
        </p>

        <div className="mt-12 pt-8 border-t border-border">
          <Link 
            to="/docs/vision" 
            className="text-primary hover:underline"
          >
            Next: The Vision →
          </Link>
        </div>
      </article>
    </DocsLayout>
  );
};

export default DocsIntroduction;
