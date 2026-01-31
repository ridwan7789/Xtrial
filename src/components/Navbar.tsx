import { Link } from 'react-router-dom';

export const Navbar = () => {
  return (
    <nav className="fixed top-0 left-0 right-0 z-50 px-4 py-2.5 sm:py-3"> {/* Reduced padding on mobile */}
      <div className="max-w-7xl mx-auto">
        <div className="glass-card flex items-center justify-between px-4 sm:px-6 py-2.5 sm:py-3"> {/* Smaller padding on mobile */}
          {/* Logo */}
          <Link to="/" className="flex items-center gap-2 sm:gap-3"> {/* Smaller gap on mobile */}
            <img src="/logo.png" alt="XTRIAL" className="w-6 h-6 sm:w-8 sm:h-8" /> {/* Smaller logo on mobile */}
            <span className="text-lg sm:text-xl font-bold text-foreground tracking-wide">XTRIAL</span> {/* Smaller text on mobile */}
          </Link>

          {/* Tagline - Hidden on mobile */}
          <span className="hidden md:block text-xs sm:text-sm text-muted-foreground"> {/* Smaller text on mobile */}
            The World's First Autonomous AI Tribunal
          </span>

          {/* CTA */}
          <Link
            to="/docs"
            className="px-3 sm:px-5 py-1.5 sm:py-2 rounded-lg text-xs sm:text-sm font-medium border border-border text-foreground hover:border-primary hover:bg-primary/10 transition-all duration-300" // Smaller button on mobile
          >
            READ DOCS
          </Link>
        </div>
      </div>
    </nav>
  );
};
