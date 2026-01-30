import { ReactNode } from 'react';
import { Link } from 'react-router-dom';
import { DocsSidebar } from './DocsSidebar';
import { Gavel, Menu, X } from 'lucide-react';
import { useState } from 'react';

interface DocsLayoutProps {
  children: ReactNode;
}

export const DocsLayout = ({ children }: DocsLayoutProps) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <div className="min-h-screen flex bg-background">
      {/* Desktop Sidebar */}
      <div className="hidden md:block">
        <DocsSidebar />
      </div>

      {/* Mobile Header */}
      <div className="md:hidden fixed top-0 left-0 right-0 z-50 bg-background border-b border-border px-4 py-3">
        <div className="flex items-center justify-between">
          <Link to="/" className="flex items-center gap-2">
            <Gavel className="w-5 h-5 text-primary" />
            <span className="text-lg font-bold">XTRIAL</span>
          </Link>
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="p-2 text-foreground"
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Sidebar Overlay */}
      {mobileMenuOpen && (
        <div className="md:hidden fixed inset-0 z-40 bg-background/95 backdrop-blur-sm pt-16">
          <DocsSidebar />
        </div>
      )}

      {/* Main Content */}
      <main className="flex-1 min-h-screen pt-16 md:pt-0">
        <div className="max-w-4xl mx-auto px-6 py-12 md:py-16">
          {children}
        </div>

        {/* Docs Footer */}
        <footer className="border-t border-border py-8 px-6">
          <div className="max-w-4xl mx-auto flex flex-col md:flex-row items-center justify-between gap-4">
            <div className="flex items-center gap-2">
              <Gavel className="w-4 h-4 text-primary" />
              <span className="text-sm font-semibold">XTRIAL</span>
            </div>
            <p className="text-xs text-muted-foreground text-center">
              © 2024 XTrial. All rights reserved. An autonomous AI tribunal.
            </p>
          </div>
        </footer>
      </main>
    </div>
  );
};
