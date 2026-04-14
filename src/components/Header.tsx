import { Film, Menu, X } from 'lucide-react';
import { useState } from 'react';
import { Section } from '@/App';
import { cn } from '@/lib/utils';

interface HeaderProps {
  activeSection: Section;
  onSectionChange: (section: Section) => void;
}

export function Header({ activeSection, onSectionChange }: HeaderProps) {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const navItems: { label: string; id: Section }[] = [
    { label: 'Discover', id: 'discover' },
    { label: 'Trending', id: 'trending' },
    { label: 'My Library', id: 'library' },
  ];

  const handleNavClick = (id: Section) => {
    onSectionChange(id);
    setIsMenuOpen(false);
  };

  return (
    <header className="sticky top-0 z-40 w-full border-b border-border/40 bg-background/80 backdrop-blur-xl">
      <div className="container mx-auto flex h-20 items-center justify-between px-4 md:h-24 md:px-6">
        <div 
          className="flex cursor-pointer items-center gap-4 transition-opacity hover:opacity-80"
          onClick={() => handleNavClick('discover')}
        >
          <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-primary text-primary-foreground shadow-2xl shadow-primary/20 transition-transform hover:scale-105 active:scale-95 md:h-12 md:w-12 md:rounded-2xl">
            <Film className="h-5 w-5 md:h-6 md:w-6" />
          </div>
          <span className="text-xl font-black tracking-tight text-foreground md:text-2xl">
            Flick<span className="text-primary">Sync</span>
          </span>
        </div>

        {/* Desktop Navigation */}
        <nav className="hidden md:block">
          <ul className="flex items-center gap-12">
            {navItems.map((item) => (
              <li key={item.id}>
                <button
                  onClick={() => handleNavClick(item.id)}
                  className={cn(
                    "relative py-2 text-xs font-black uppercase tracking-[0.25em] transition-all hover:text-primary",
                    activeSection === item.id 
                      ? "text-primary tracking-[0.35em]" 
                      : "text-muted-foreground/50"
                  )}
                >
                  {item.label}
                  {activeSection === item.id && (
                    <span className="absolute -bottom-1 left-0 h-0.5 w-full bg-primary rounded-full" />
                  )}
                </button>
              </li>
            ))}
          </ul>
        </nav>

        {/* Mobile Menu Toggle */}
        <button 
          className="rounded-xl p-2 text-foreground md:hidden"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </button>
      </div>

      {/* Mobile Navigation */}
      {isMenuOpen && (
        <div className="border-t bg-background/95 backdrop-blur-xl md:hidden">
          <ul className="flex flex-col p-4">
            {navItems.map((item) => (
              <li key={item.id}>
                <button
                  onClick={() => handleNavClick(item.id)}
                  className={cn(
                    "w-full py-4 text-left text-sm font-black uppercase tracking-[0.2em] transition-all",
                    activeSection === item.id 
                      ? "text-primary" 
                      : "text-muted-foreground/60"
                  )}
                >
                  {item.label}
                </button>
              </li>
            ))}
          </ul>
        </div>
      )}
    </header>
  );
}
