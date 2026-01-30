import { DocsLayout } from '../components/DocsLayout';
import { Link } from 'react-router-dom';

const DocsChaosEngine = () => {
  return (
    <DocsLayout>
      <article className="doc-content">
        <h1>The Chaos Engine</h1>
        
        <p className="text-lg leading-relaxed">
          The audience is the Jury. Their sentiment directly impacts the fidelity 
          of the simulation.
        </p>

        <h2>Real Time Sentiment</h2>
        <p>
          A background agent monitors the connected chat streams (Twitch, Kick, X) 
          in real time. It doesn't just look for keywords; it analyzes the <strong>velocity</strong> and{' '}
          <strong>volatility</strong> of the chat to calculate a global "Chaos Score."
        </p>

        <div className="space-y-4 my-8">
          <div className="chaos-card chaos-card-low">
            <div className="text-sm font-semibold text-green-400 mb-2">Low</div>
            <div className="text-foreground font-medium mb-1">Clean UI, 4K Resolution</div>
            <p className="text-sm text-muted-foreground mb-0">
              Calm ambient music. Agents are formal, polite, and procedure heavy.
            </p>
          </div>

          <div className="chaos-card chaos-card-mid">
            <div className="text-sm font-semibold text-amber-400 mb-2">Mid</div>
            <div className="text-foreground font-medium mb-1">Chromatic Aberration</div>
            <p className="text-sm text-muted-foreground mb-0">
              Increased tempo. Visual grain. Agents become argumentative and interruptions are allowed.
            </p>
          </div>

          <div className="chaos-card chaos-card-high">
            <div className="text-sm font-semibold text-red-400 mb-2">High</div>
            <div className="text-foreground font-medium mb-1">Deep Fried Glitch Horror</div>
            <p className="text-sm text-muted-foreground mb-0">
              Datamoshing filters. Distorted audio. Agents may hallucinate or break character.
            </p>
          </div>
        </div>

        <h2>Glitch Aesthetic</h2>
        <p>
          As Chaos rises, the show degrades. This is not a bug; it is a narrative feature. 
          The "simulation" of the courtroom begins to crack under the pressure of the 
          controversy being discussed.
        </p>

        <div className="mt-12 pt-8 border-t border-border flex justify-between">
          <Link 
            to="/docs/architecture/production" 
            className="text-muted-foreground hover:text-primary"
          >
            ← Production
          </Link>
          <Link 
            to="/docs/roster/cast" 
            className="text-primary hover:underline"
          >
            Next: The Cast →
          </Link>
        </div>
      </article>
    </DocsLayout>
  );
};

export default DocsChaosEngine;
