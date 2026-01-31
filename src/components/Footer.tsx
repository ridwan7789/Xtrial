import { Link } from 'react-router-dom';

export const Footer = () => {
  return (
    <footer className="border-t border-border py-12 sm:py-16 px-4 mt-auto bg-background"> {/* Reduced padding on mobile */}
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8 sm:gap-6 md:gap-8">
          {/* Brand */}
          <div className="sm:col-span-2 md:col-span-1"> {/* Adjust column span for better mobile layout */}
            <div className="flex items-center gap-2 mb-4">
              <img src="/logo.png" alt="XTRIAL" className="w-6 h-6" />
              <span className="text-lg font-bold tracking-wide">XTRIAL</span>
            </div>
            <p className="text-xs sm:text-sm text-muted-foreground"> {/* Smaller text on mobile */}
              © 2024 XTrial. All rights reserved.
              <br />
              An autonomous AI tribunal.
            </p>
          </div>

          {/* Ecosystem */}
          <div>
            <h4 className="text-xs font-semibold text-foreground tracking-widest mb-4 sm:mb-6"> {/* Smaller margin on mobile */}
              ECOSYSTEM
            </h4>
            <ul className="space-y-2 sm:space-y-3"> {/* Smaller spacing on mobile */}
              <li>
                <Link
                  to="/"
                  className="text-xs sm:text-sm text-muted-foreground hover:text-foreground transition-colors block py-1" // Added padding for touch targets
                >
                  Main Website
                </Link>
              </li>
              <li>
                <Link
                  to="/launchpad"
                  className="text-xs sm:text-sm text-muted-foreground hover:text-foreground transition-colors block py-1" // Added padding for touch targets
                >
                  XTrial Launchpad
                </Link>
              </li>
              <li>
                <a
                  href="https://x.com/xtrial"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-xs sm:text-sm text-muted-foreground hover:text-foreground transition-colors block py-1" // Added padding for touch targets
                >
                  X / Twitter
                </a>
              </li>
            </ul>
          </div>

          {/* Documentation Column 1 */}
          <div>
            <h4 className="text-xs font-semibold text-foreground tracking-widest mb-4 sm:mb-6"> {/* Smaller margin on mobile */}
              DOCUMENTATION
            </h4>
            <ul className="space-y-2 sm:space-y-3"> {/* Smaller spacing on mobile */}
              <li>
                <Link
                  to="/docs"
                  className="text-xs sm:text-sm text-muted-foreground hover:text-foreground transition-colors block py-1" // Added padding for touch targets
                >
                  Introduction
                </Link>
              </li>
              <li>
                <Link
                  to="/docs/vision"
                  className="text-xs sm:text-sm text-muted-foreground hover:text-foreground transition-colors block py-1" // Added padding for touch targets
                >
                  Vision
                </Link>
              </li>
              <li>
                <Link
                  to="/docs/architecture/fsm"
                  className="text-xs sm:text-sm text-muted-foreground hover:text-foreground transition-colors block py-1" // Added padding for touch targets
                >
                  FSM Sync
                </Link>
              </li>
            </ul>
          </div>

          {/* Documentation Column 2 */}
          <div className="sm:pt-0 md:pt-10"> {/* Removed top padding on small screens */}
            <ul className="space-y-2 sm:space-y-3"> {/* Smaller spacing on mobile */}
              <li>
                <Link
                  to="/docs/architecture/orchestration"
                  className="text-xs sm:text-sm text-muted-foreground hover:text-foreground transition-colors block py-1" // Added padding for touch targets
                >
                  Orchestration
                </Link>
              </li>
              <li>
                <Link
                  to="/docs/features/chaos-engine"
                  className="text-xs sm:text-sm text-muted-foreground hover:text-foreground transition-colors block py-1" // Added padding for touch targets
                >
                  Chaos Engine
                </Link>
              </li>
              <li>
                <Link
                  to="/docs/roster/cast"
                  className="text-xs sm:text-sm text-muted-foreground hover:text-foreground transition-colors block py-1" // Added padding for touch targets
                >
                  The Cast
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </footer>
  );
};
