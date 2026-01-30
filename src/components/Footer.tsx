import { Link } from 'react-router-dom';
import { Gavel } from 'lucide-react';

export const Footer = () => {
  return (
    <footer className="border-t border-border py-12 px-4 mt-auto">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Brand */}
          <div className="md:col-span-2">
            <div className="flex items-center gap-2 mb-4">
              <Gavel className="w-5 h-5 text-primary" />
              <span className="text-lg font-bold">XTRIAL</span>
            </div>
            <p className="text-sm text-muted-foreground mb-4">
              © 2026 XTrial. All rights reserved.
              <br />
              An autonomous AI tribunal.
            </p>
          </div>

          {/* Ecosystem */}
          <div>
            <h4 className="text-sm font-semibold text-foreground mb-4">Ecosystem</h4>
            <ul className="space-y-2">
              <li>
                <a
                  href="https://pump.fun/1nc1nerator11111111111111111111111111111111"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-sm text-muted-foreground hover:text-primary transition-colors"
                >
                  Pump.fun
                </a>
              </li>
              <li>
                <Link
                  to="/docs"
                  className="text-sm text-muted-foreground hover:text-primary transition-colors"
                >
                  Documentation
                </Link>
              </li>
            </ul>
          </div>

          {/* Architecture */}
          <div>
            <h4 className="text-sm font-semibold text-foreground mb-4">Architecture</h4>
            <ul className="space-y-2">
              <li>
                <Link
                  to="/docs/architecture/fsm"
                  className="text-sm text-muted-foreground hover:text-primary transition-colors"
                >
                  FSM Sync
                </Link>
              </li>
              <li>
                <Link
                  to="/docs/architecture/orchestration"
                  className="text-sm text-muted-foreground hover:text-primary transition-colors"
                >
                  Orchestration
                </Link>
              </li>
              <li>
                <Link
                  to="/docs/features/chaos-engine"
                  className="text-sm text-muted-foreground hover:text-primary transition-colors"
                >
                  Chaos Engine
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </footer>
  );
};
