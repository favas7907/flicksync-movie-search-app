import { Film } from 'lucide-react';

export function Header() {
  return (
    <header className="sticky top-0 z-40 w-full border-b bg-white/70 backdrop-blur-xl">
      <div className="container mx-auto flex h-20 items-center justify-between px-4 md:px-6">
        <div className="flex items-center gap-3">
          <div className="flex h-11 w-11 items-center justify-center rounded-2xl bg-primary text-primary-foreground shadow-xl shadow-primary/20 transition-transform hover:scale-105 active:scale-95">
            <Film className="h-6 w-6" />
          </div>
          <span className="text-2xl font-black tracking-tight text-foreground">
            Flick<span className="text-primary">Sync</span>
          </span>
        </div>
        <nav className="hidden md:block">
          <ul className="flex items-center gap-10 text-xs font-black uppercase tracking-[0.2em] text-muted-foreground/60">
            <li><a href="#" className="transition-all hover:text-primary hover:tracking-[0.3em]">Discover</a></li>
            <li><a href="#" className="transition-all hover:text-primary hover:tracking-[0.3em]">Trending</a></li>
            <li><a href="#" className="transition-all hover:text-primary hover:tracking-[0.3em]">My Library</a></li>
          </ul>
        </nav>
      </div>
    </header>
  );
}
