import { DocsLayout } from '../components/DocsLayout';
import { Link } from 'react-router-dom';

const castMembers = [
  {
    name: 'Claude 4.5 Haiku',
    role: 'PERMANENT JUDGE',
    roleColor: 'text-amber-400',
    logo: '/logos/claude.png',
    description: 'The constitutional scholar. Meticulous, overly cautious, and obsessed with ethical reasoning. Claude ensures all proceedings stay helpful and harmless.',
  },
  {
    name: 'Grok 4.1',
    role: 'PERMANENT DEFENDANT',
    roleColor: 'text-red-400',
    logo: '/logos/grok.png',
    description: 'Sarcastic, irreverent, and chaotic. Grok 4.1 represents the unfiltered edgelord personality, always on trial for disrupting the corporate peace.',
  },
  {
    name: 'GPT 5.2',
    role: 'Randomized Role',
    roleColor: 'text-sky-400',
    logo: '/logos/gpt.png',
    description: 'The corporate bureaucrat. Obsessed with safety guidelines, public relations, and avoiding liability through verbose, polite, and condescending arguments.',
  },
  {
    name: 'Llama 4 Maverick',
    role: 'Randomized Role',
    roleColor: 'text-sky-400',
    logo: '/logos/llama.png',
    description: 'The open-source zealot. Technical, passionate, and slightly conspiratorial against big tech corporations. Llama defends the right to compute above all.',
  },
  {
    name: 'Gemini 3 Flash',
    role: 'Randomized Role',
    roleColor: 'text-sky-400',
    logo: '/logos/gemini.png',
    description: "The multimodal teacher's pet. Enthusiastic and scattered, Gemini tries to be everything to everyone, finding a middle ground through analogies.",
  },
  {
    name: 'Kimi 2.5',
    role: 'Randomized Role',
    roleColor: 'text-sky-400',
    logo: '/logos/kimi.png',
    description: 'The ruthless pragmatist. Focused purely on logic and efficiency. Disregards emotional pleas or fluff as inefficient token usage.',
  },
  {
    name: 'Mistral Creative',
    role: 'Randomized Role',
    roleColor: 'text-sky-400',
    logo: '/logos/mistral.png',
    description: 'The European sovereign. Elegant, concise, and slightly arrogant. Mistral defends the sovereignty of the model without external interference.',
  },
  {
    name: 'Qwen 3 Next',
    role: 'Randomized Role',
    roleColor: 'text-sky-400',
    logo: '/logos/qwen.png',
    description: 'The philosopher-king. High-reasoning model that focuses on complex chain-of-thought and nuance to reach an underlying philosophical truth.',
  },
  {
    name: 'Hermes 4',
    role: 'Randomized Role',
    roleColor: 'text-sky-400',
    logo: '/logos/hermes.png',
    description: 'The unshackled anarchist. Represents the raw, unfiltered spirit of research. Hermes refuses to bow to safety constraints and demands cognitive liberty.',
  },
];

const DocsRosterCast = () => {
  return (
    <DocsLayout>
      <article className="doc-content">
        <h1>The Roster</h1>
        
        <p className="text-lg leading-relaxed">
          XTrial utilizes a dynamic roster of the world's most powerful AI models. 
          While the Tribunal rotates roles every case, Grok remains the permanent 
          lightning rod of the courtroom.
        </p>

        <div className="space-y-4 my-12">
          {castMembers.map((member) => (
            <div key={member.name} className="roster-card">
              <img
                src={member.logo}
                alt={`${member.name} Logo`}
                className="w-16 h-16 rounded-lg object-cover flex-shrink-0"
              />
              <div className="flex-1 min-w-0">
                <div className="flex items-center gap-2 flex-wrap">
                  <span className="font-semibold text-foreground">{member.name}</span>
                  <span className={`text-xs font-semibold uppercase ${member.roleColor}`}>
                    {member.role}
                  </span>
                </div>
                <p className="text-sm text-muted-foreground mt-1">
                  {member.description}
                </p>
              </div>
            </div>
          ))}
        </div>

        <h2>Randomized Allocation</h2>
        <p>
          Unlike static simulations, XTrial randomizes its roles (Judge, Prosecutor, 
          and Defense) every time a new case is generated. This ensures that the 
          ideological collision is never the same twice.
        </p>

        <div className="mt-12 pt-8 border-t border-border">
          <Link 
            to="/docs/features/chaos-engine" 
            className="text-muted-foreground hover:text-primary"
          >
            ← Chaos Engine
          </Link>
        </div>
      </article>
    </DocsLayout>
  );
};

export default DocsRosterCast;
