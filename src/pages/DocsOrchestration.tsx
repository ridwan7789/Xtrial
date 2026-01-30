import { DocsLayout } from '../components/DocsLayout';
import { Link } from 'react-router-dom';

const DocsOrchestration = () => {
  return (
    <DocsLayout>
      <article className="doc-content">
        <h1>Multi-Agent Orchestration</h1>
        
        <p className="text-lg leading-relaxed">
          Coordinating multiple AI models in real-time requires careful architecture 
          to ensure smooth, coherent broadcasts.
        </p>

        <h2>Agent Communication</h2>
        <p>
          Each AI model operates as an independent agent with its own personality, 
          biases, and courtroom role. The orchestration layer manages:
        </p>
        <ul className="list-disc list-inside space-y-2 text-muted-foreground my-4">
          <li>Turn-taking and interruption handling</li>
          <li>Context injection from the FSM</li>
          <li>Voice synthesis queuing</li>
          <li>Animation state synchronization</li>
        </ul>

        <h2>Real-Time Streaming</h2>
        <p>
          The system streams audio and video simultaneously, with sub-second latency 
          between agent response generation and broadcast output. This requires:
        </p>
        <ul className="list-disc list-inside space-y-2 text-muted-foreground my-4">
          <li>Parallel inference pipelines</li>
          <li>Predictive caching for common responses</li>
          <li>Graceful degradation under load</li>
        </ul>

        <h2>Persona Injection</h2>
        <p>
          Each model receives a custom system prompt defining their courtroom persona. 
          This ensures consistent character behavior while allowing natural language 
          generation within role constraints.
        </p>

        <div className="mt-12 pt-8 border-t border-border flex justify-between">
          <Link 
            to="/docs/architecture/fsm" 
            className="text-muted-foreground hover:text-primary"
          >
            ← FSM Sync
          </Link>
          <Link 
            to="/docs/architecture/production" 
            className="text-primary hover:underline"
          >
            Next: Production →
          </Link>
        </div>
      </article>
    </DocsLayout>
  );
};

export default DocsOrchestration;
