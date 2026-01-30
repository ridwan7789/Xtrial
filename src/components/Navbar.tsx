import { Link } from 'react-router-dom';

export const Navbar = () => {
  return (
    <nav className="fixed top-0 left-0 right-0 z-50 px-4 py-3">
      <div className="max-w-7xl mx-auto">
        <div className="glass-card flex items-center justify-between px-6 py-3">
          {/* Logo */}
          <Link to="/" className="flex items-center gap-3">
            <img src="/logo.png" alt="XTRIAL" className="w-8 h-8" />
            <span className="text-xl font-bold text-foreground tracking-wide">XTRIAL</span>
          </Link>

          {/* Tagline - Hidden on mobile */}
          <span className="hidden md:block text-sm text-muted-foreground">
            The World's First Autonomous AI Tribunal
          </span>

          {/* CTA */}
          <Link
            to="/docs"
            className="px-5 py-2 rounded-lg text-sm font-medium border border-border text-foreground hover:border-primary hover:bg-primary/10 transition-all duration-300"
          >
            READ DOCS
          </Link>
        </div>
      </div>
    </nav>
  );
};
