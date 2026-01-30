import { ReactNode } from 'react';
import { Link } from 'react-router-dom';
import { DocsSidebar } from './DocsSidebar';
import { Footer } from './Footer';
import { Menu, X } from 'lucide-react';
import { useState } from 'react';

interface DocsLayoutProps {
  children: ReactNode;
}

export const DocsLayout = ({ children }: DocsLayoutProps) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <div className="min-h-screen flex flex-col bg-background">
      <div className="flex flex-1">
        {/* Desktop Sidebar */}
        <div className="hidden md:block">
          <DocsSidebar />
        </div>

        {/* Mobile Header */}
        <div className="md:hidden fixed top-0 left-0 right-0 z-50 bg-background border-b border-border px-4 py-3">
          <div className="flex items-center justify-between">
            <Link to="/" className="flex items-center gap-2">
              <img src="/logo.png" alt="XTRIAL" className="w-6 h-6" />
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
        </main>
      </div>

      <Footer />
    </div>
  );
};
