import { Film } from 'lucide-react';

export function Header() {
  return (
    <header className="sticky top-0 z-40 w-full border-b border-border/40 bg-background/80 backdrop-blur-xl">
      <div className="container mx-auto flex h-24 items-center justify-between px-4 md:px-6">
        <div className="flex items-center gap-4">
          <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-primary text-primary-foreground shadow-2xl shadow-primary/20 transition-transform hover:scale-105 active:scale-95">
            <Film className="h-6 w-6" />
          </div>
          <span className="text-2xl font-black tracking-tight text-foreground">
            Flick<span className="text-primary">Sync</span>
          </span>
        </div>
        <nav className="hidden md:block">
          <ul className="flex items-center gap-12 text-xs font-black uppercase tracking-[0.25em] text-muted-foreground/50">
            <li><a href="#" className="transition-all hover:text-primary hover:tracking-[0.35em]">Discover</a></li>
            <li><a href="#" className="transition-all hover:text-primary hover:tracking-[0.35em]">Trending</a></li>
            <li><a href="#" className="transition-all hover:text-primary hover:tracking-[0.35em]">My Library</a></li>
          </ul>
        </nav>
      </div>
    </header>
  );
}
