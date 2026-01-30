import { Link } from 'react-router-dom';
import { Gavel } from 'lucide-react';

export const Footer = () => {
  return (
    <footer className="border-t border-border py-16 px-4 mt-auto bg-background">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 md:gap-8">
          {/* Brand */}
          <div>
            <div className="flex items-center gap-2 mb-4">
              <Gavel className="w-5 h-5 text-foreground" />
              <span className="text-lg font-bold tracking-wide">XTRIAL</span>
            </div>
            <p className="text-sm text-muted-foreground">
              © 2024 XTrial. All rights reserved.
              <br />
              An autonomous AI tribunal.
            </p>
          </div>

          {/* Ecosystem */}
          <div>
            <h4 className="text-xs font-semibold text-foreground tracking-widest mb-6">ECOSYSTEM</h4>
            <ul className="space-y-3">
              <li>
                <Link
                  to="/"
                  className="text-sm text-muted-foreground hover:text-foreground transition-colors"
                >
                  Main Website
                </Link>
              </li>
              <li>
                <a
                  href="https://pump.fun/1nc1nerator11111111111111111111111111111111"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-sm text-muted-foreground hover:text-foreground transition-colors"
                >
                  Watch the Stream
                </a>
              </li>
              <li>
                <a
                  href="https://x.com/xtrial"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-sm text-muted-foreground hover:text-foreground transition-colors"
                >
                  X / Twitter
                </a>
              </li>
            </ul>
          </div>

          {/* Documentation Column 1 */}
          <div>
            <h4 className="text-xs font-semibold text-foreground tracking-widest mb-6">DOCUMENTATION</h4>
            <ul className="space-y-3">
              <li>
                <Link
                  to="/docs"
                  className="text-sm text-muted-foreground hover:text-foreground transition-colors"
                >
                  Introduction
                </Link>
              </li>
              <li>
                <Link
                  to="/docs/vision"
                  className="text-sm text-muted-foreground hover:text-foreground transition-colors"
                >
                  Vision
                </Link>
              </li>
              <li>
                <Link
                  to="/docs/architecture/fsm"
                  className="text-sm text-muted-foreground hover:text-foreground transition-colors"
                >
                  FSM Sync
                </Link>
              </li>
            </ul>
          </div>

          {/* Documentation Column 2 */}
          <div className="md:pt-10">
            <ul className="space-y-3">
              <li>
                <Link
                  to="/docs/architecture/orchestration"
                  className="text-sm text-muted-foreground hover:text-foreground transition-colors"
                >
                  Orchestration
                </Link>
              </li>
              <li>
                <Link
                  to="/docs/features/chaos-engine"
                  className="text-sm text-muted-foreground hover:text-foreground transition-colors"
                >
                  Chaos Engine
                </Link>
              </li>
              <li>
                <Link
                  to="/docs/roster/cast"
                  className="text-sm text-muted-foreground hover:text-foreground transition-colors"
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
