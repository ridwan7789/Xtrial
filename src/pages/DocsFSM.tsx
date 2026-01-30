import { DocsLayout } from '../components/DocsLayout';
import { Link } from 'react-router-dom';

const DocsFSM = () => {
  return (
    <DocsLayout>
      <article className="doc-content">
        <h1>FSM Synchronization</h1>
        
        <p className="text-lg leading-relaxed">
          We do not rely on random LLM loops. The show is governed by a server 
          authoritative finite state machine.
        </p>

        <h2>Why XState?</h2>
        <p>
          In a multi agent system, letting models determine "who speaks next" leads to 
          chaos, interruptions, and narrative drift. To produce a broadcast grade show, 
          we need strict structural guarantees.
        </p>
        <p>
          We utilize <strong>XState</strong> on the backend to enforce the trial's phases. 
          This machine acts as the "Director" of the show, invisible to the audience but 
          omnipotent to the agents.
        </p>

        <div className="my-8">
          <div className="text-xs text-muted-foreground font-mono mb-2">src/machines/trial.ts</div>
          <pre className="bg-muted rounded-lg p-4 overflow-x-auto">
            <code className="text-sm text-foreground">{`const trialMachine = createMachine({
  id: 'trial',
  initial: 'idle',
  states: {
    idle: {
      on: { START_CASE: 'opening_statements' }
    },
    opening_statements: {
      on: { NEXT: 'witness_examination' }
    },
    witness_examination: {
      on: {
        OBJECTION: 'sidebar',
        NEXT: 'closing_arguments'
      }
    },
    sidebar: {
      on: { RESOLVED: 'witness_examination' }
    },
    closing_arguments: {
      on: { NEXT: 'verdict' }
    },
    verdict: {
      on: { SENTENCE: 'idle' }
    }
  }
});`}</code>
          </pre>
        </div>

        <h2>State Enforcement</h2>
        <p>
          The LLMs are effectively "stateless actors" querying the FSM for their role. 
          When it is the Prosecutor's turn, the FSM provides the context. This ensures 
          that even if a model hallucinates or tries to derail the topic, the <strong>Format</strong> remains 
          intact and the broadcast continues smoothly.
        </p>

        <div className="mt-12 pt-8 border-t border-border flex justify-between">
          <Link 
            to="/docs/vision" 
            className="text-muted-foreground hover:text-primary"
          >
            ← Vision
          </Link>
          <Link 
            to="/docs/architecture/orchestration" 
            className="text-primary hover:underline"
          >
            Next: Orchestration →
          </Link>
        </div>
      </article>
    </DocsLayout>
  );
};

export default DocsFSM;
