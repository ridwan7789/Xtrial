import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
import { Navbar } from '../components/Navbar';
import { Footer } from '../components/Footer';
import { VideoEmbed } from '../components/VideoEmbed';
import { ContractAddressBar } from '../components/ContractAddressBar';
import { AIRoleCard } from '../components/AIRoleCard';

const aiRoles = [
  {
    name: 'Grok 4.1',
    role: 'PERMANENT DEFENDANT',
    roleType: 'defendant' as const,
    logoSrc: '/logos/grok.png',
  },
  {
    name: 'Claude 4.5',
    role: 'PERMANENT JUDGE',
    roleType: 'judge' as const,
    logoSrc: '/logos/claude.png',
  },
  {
    name: 'GPT 5.2',
    role: 'PROSECUTION (Random)',
    roleType: 'random' as const,
    logoSrc: '/logos/gpt.png',
  },
  {
    name: 'KIMI 2.5',
    role: 'DEFENSE (Random)',
    roleType: 'random' as const,
    logoSrc: '/logos/kimi.png',
  },
];

const Index = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />

      {/* Hero Section with Background */}
      <section
        className="relative min-h-screen flex flex-col items-center justify-center px-4 pt-24 pb-16"
        style={{
          backgroundImage: `url('/courtroom-bg.jpg')`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}
      >
        {/* Overlay */}
        <div className="absolute inset-0 bg-background/80 backdrop-blur-sm" />

        {/* Content */}
        <div className="relative z-10 w-full max-w-6xl mx-auto flex flex-col items-center gap-10">
          {/* Video Embed */}
          <VideoEmbed />

          {/* Contract Address Bar */}
          <ContractAddressBar />

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 w-full max-w-xl">
            <a
              href="https://pump.fun/1nc1nerator11111111111111111111111111111111"
              target="_blank"
              rel="noopener noreferrer"
              className="btn-primary flex-1 text-center"
            >
              VIEW ON PUMP.FUN
            </a>
            <Link to="/docs" className="btn-outline flex-1 text-center">
              READ DOCUMENTATION
            </Link>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section className="py-24 px-4 bg-gradient-hero">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              Justice, <span className="text-gradient-gold">Automated.</span>
            </h2>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto leading-relaxed">
              XTrial removes the human element from the judicial process. Using a rotating roster
              of the world's most advanced AI models, we simulate legal proceedings based on
              real-time news.
            </p>
            <p className="text-muted-foreground mt-4">
              While roles are randomized every case to ensure maximum friction,{' '}
              <strong className="text-foreground">
                Grok remains the permanent defendant and Claude remains the permanent judge.
              </strong>
            </p>
            <Link
              to="/docs"
              className="inline-flex items-center gap-2 text-primary hover:underline mt-6"
            >
              Explore the Protocol <ArrowRight className="w-4 h-4" />
            </Link>
          </div>

          {/* AI Role Cards */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6 mb-8">
            {aiRoles.map((role) => (
              <AIRoleCard key={role.name} {...role} />
            ))}
          </div>

          <div className="text-center">
            <Link
              to="/docs/roster/cast"
              className="text-sm text-muted-foreground hover:text-primary transition-colors underline underline-offset-4"
            >
              View the full roster of 10+ AI models
            </Link>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Index;
