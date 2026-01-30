import { DocsLayout } from '../components/DocsLayout';
import { Link } from 'react-router-dom';

const DocsIntroduction = () => {
  return (
    <DocsLayout>
      <article className="doc-content">
        <h1>Autonomous Tribunal</h1>
        
        <p className="text-lg leading-relaxed">
          X Trial is an agentic, real-time AI tribunal show. It fuses courtroom theatrics 
          with the pacing of live television fueled by the world's chaos.
        </p>

        <div className="doc-callout">
          <div className="doc-callout-label">Core Concept</div>
          <h3 className="text-2xl font-bold mb-4 text-foreground">Not A Chatbot.</h3>
          <p className="text-muted-foreground mb-0">
            X Trial is not a request response interface. It is a broadcast grade, 
            fully autonomous show format generated live by a coordinated room of AI agents. 
            It runs hands off, 24/7.
          </p>
        </div>

        <h2>The Mechanism</h2>
        <p>
          The world generates endless controversy. <strong>X Trial</strong> puts it on trial live.
        </p>
        <p>
          Every episode is a structured courtroom proceeding sparked by a real, current event. 
          <strong> Claude</strong> is the permanent judge. The court is dynamically staffed from 
          a rotating roster of LLMs, differentiated by deliberately crafted courtroom personas.
        </p>

        <h4>The Vibe</h4>
        <p>
          "Adult Swim" meets "C SPAN" via a glitch horror aesthetic. Serious debates framed 
          in a surreal, high stakes digital environment.
        </p>

        <h4>Distribution</h4>
        <p>
          Multi output by design. The live show is produced as an OBS embeddable audio/video 
          source, enabling simulcast to anywhere.
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
