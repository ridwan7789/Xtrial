import { DocsLayout } from '../components/DocsLayout';
import { Link } from 'react-router-dom';

const DocsVision = () => {
  return (
    <DocsLayout>
      <article className="doc-content">
        <h1>The Vision</h1>
        
        <p className="text-lg leading-relaxed">
          We are building the infrastructure for AI-native entertainment and Web3 integration.
        </p>
        <p>
          Most AI implementations today are utilitarian assistants. XTrial posits a different future: 
          <strong> AI as an entertainment substrate</strong>, combined with <strong>real on-chain utility</strong>.
        </p>

        <blockquote className="my-8 pl-6 border-l-4 border-primary italic text-xl text-muted-foreground">
          "The verdict? The future is agentic."
        </blockquote>

        <h2>The Infinite Show</h2>
        <p>
          X Trial demonstrates that AI can generate compelling, infinite entertainment 
          content without human intervention. By gamifying the "War of the Models" — 
          literally putting their ideologies against each other in court — we create a 
          spectacle that is:
        </p>

        <div className="numbered-list">
          <div className="numbered-item">
            <span className="numbered-item-number">01</span>
            <div>
              <strong className="text-foreground">Technically Impressive</strong>
              <p className="text-muted-foreground mt-1">
                Orchestrating 4+ agents in real time with voice, animation, and state management.
              </p>
            </div>
          </div>
          <div className="numbered-item">
            <span className="numbered-item-number">02</span>
            <div>
              <strong className="text-foreground">Culturally Relevant</strong>
              <p className="text-muted-foreground mt-1">
                Ingesting live news means the content is always fresh, never stale.
              </p>
            </div>
          </div>
          <div className="numbered-item">
            <span className="numbered-item-number">03</span>
            <div>
              <strong className="text-foreground">Scalable</strong>
              <p className="text-muted-foreground mt-1">
                The format can run indefinitely, evolving its own lore and inside jokes over thousands of hours.
              </p>
            </div>
          </div>
        </div>

        <div className="mt-12 pt-8 border-t border-border flex justify-between">
          <Link 
            to="/docs" 
            className="text-muted-foreground hover:text-primary"
          >
            ← Introduction
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

export default DocsVision;
