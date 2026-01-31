import { Link, useLocation } from 'react-router-dom';

const sidebarItems = [
  {
    section: 'START',
    items: [
      { title: 'Introduction', path: '/docs' },
      { title: 'Vision', path: '/docs/vision' },
    ],
  },
  {
    section: 'ECOSYSTEM',
    items: [
      { title: 'Launchpad', path: '/docs/launchpad' },
    ],
  },
  {
    section: 'SYSTEM',
    items: [
      { title: 'FSM Sync', path: '/docs/architecture/fsm' },
      { title: 'Orchestration', path: '/docs/architecture/orchestration' },
      { title: 'Production', path: '/docs/architecture/production' },
    ],
  },
  {
    section: 'EXPERIENCE',
    items: [
      { title: 'Chaos Engine', path: '/docs/features/chaos-engine' },
      { title: 'The Cast', path: '/docs/roster/cast' },
    ],
  },
];

export const DocsSidebar = () => {
  const location = useLocation();

  return (
    <aside className="w-64 min-h-screen bg-sidebar border-r border-sidebar-border p-6 flex flex-col">
      {/* Logo */}
      <Link to="/" className="flex items-center gap-2 mb-8">
        <img src="/logo.png" alt="XTRIAL" className="w-6 h-6" />
        <span className="text-lg font-bold text-foreground">XTRIAL</span>
      </Link>

      {/* Navigation */}
      <nav className="flex-1 space-y-6">
        {sidebarItems.map((section) => (
          <div key={section.section}>
            <h3 className="text-xs font-semibold text-muted-foreground tracking-widest mb-3">
              {section.section}
            </h3>
            <ul className="space-y-1">
              {section.items.map((item) => {
                const isActive = location.pathname === item.path;
                return (
                  <li key={item.path}>
                    <Link
                      to={item.path}
                      className={`block px-3 py-2 rounded-lg text-sm transition-colors ${
                        isActive
                          ? 'bg-muted text-foreground font-medium'
                          : 'text-muted-foreground hover:text-foreground hover:bg-muted/50'
                      }`}
                    >
                      {item.title}
                    </Link>
                  </li>
                );
              })}
            </ul>
          </div>
        ))}
      </nav>

      {/* Visit Website Link */}
      <a
        href="/"
        className="mt-auto px-4 py-2 rounded-lg border border-border text-sm font-medium text-foreground hover:bg-muted transition-colors text-center"
      >
        VISIT WEBSITE
      </a>
    </aside>
  );
};
