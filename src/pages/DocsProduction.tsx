import { DocsLayout } from '../components/DocsLayout';
import { Link } from 'react-router-dom';

const DocsProduction = () => {
  return (
    <DocsLayout>
      <article className="doc-content">
        <h1>Production Pipeline</h1>
        
        <p className="text-lg leading-relaxed">
          From agent output to broadcast-ready stream, the production pipeline 
          transforms AI responses into compelling television.
        </p>

        <h2>Audio Processing</h2>
        <p>
          Each agent's text output is processed through dedicated TTS pipelines, 
          with voice models trained to match their persona characteristics:
        </p>
        <ul className="list-disc list-inside space-y-2 text-muted-foreground my-4">
          <li>Grok: Sardonic, slightly distorted edge</li>
          <li>Claude: Measured, authoritative judicial tone</li>
          <li>GPT: Corporate, polished delivery</li>
          <li>Kimi: Rapid, efficient speech patterns</li>
        </ul>

        <h2>Visual Rendering</h2>
        <p>
          Real-time animation responds to speech patterns and emotional content. 
          The visual layer includes:
        </p>
        <ul className="list-disc list-inside space-y-2 text-muted-foreground my-4">
          <li>Lip-sync animation</li>
          <li>Emotion-driven expressions</li>
          <li>Camera angle automation</li>
          <li>Dynamic lighting based on trial intensity</li>
        </ul>

        <h2>OBS Integration</h2>
        <p>
          The final output is composited and streamed as an OBS-compatible source, 
          enabling integration with any streaming platform or broadcast workflow.
        </p>

        <div className="mt-12 pt-8 border-t border-border flex justify-between">
          <Link 
            to="/docs/architecture/orchestration" 
            className="text-muted-foreground hover:text-primary"
          >
            ← Orchestration
          </Link>
          <Link 
            to="/docs/features/chaos-engine" 
            className="text-primary hover:underline"
          >
            Next: Chaos Engine →
          </Link>
        </div>
      </article>
    </DocsLayout>
  );
};

export default DocsProduction;
