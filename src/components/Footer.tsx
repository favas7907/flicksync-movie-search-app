import { Film, Github, Twitter, Instagram } from 'lucide-react';

export function Footer() {
  return (
    <footer className="border-t border-border/40 bg-white py-20">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 gap-12 md:grid-cols-4">
          <div className="col-span-1 md:col-span-2">
            <div className="mb-6 flex items-center gap-3">
              <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-primary/10 text-primary">
                <Film className="h-5 w-5" />
              </div>
              <span className="text-xl font-black tracking-tight text-foreground">
                Flick<span className="text-primary">Sync</span>
              </span>
            </div>
            <p className="max-w-sm text-sm font-medium leading-relaxed text-muted-foreground">
              Your ultimate destination for movie discovery. Explore, save, and sync your favorite films with our high-performance library.
            </p>
            <div className="mt-8 flex gap-4">
              <a href="#" className="flex h-10 w-10 items-center justify-center rounded-full bg-muted text-muted-foreground transition-all hover:bg-primary hover:text-white">
                <Twitter className="h-4 w-4" />
              </a>
              <a href="#" className="flex h-10 w-10 items-center justify-center rounded-full bg-muted text-muted-foreground transition-all hover:bg-primary hover:text-white">
                <Instagram className="h-4 w-4" />
              </a>
              <a href="#" className="flex h-10 w-10 items-center justify-center rounded-full bg-muted text-muted-foreground transition-all hover:bg-primary hover:text-white">
                <Github className="h-4 w-4" />
              </a>
            </div>
          </div>
          
          <div>
            <h4 className="mb-6 text-xs font-black uppercase tracking-[0.2em] text-foreground">Platform</h4>
            <ul className="space-y-4 text-sm font-bold text-muted-foreground/60">
              <li><a href="#" className="transition-colors hover:text-primary">Discover</a></li>
              <li><a href="#" className="transition-colors hover:text-primary">Trending</a></li>
              <li><a href="#" className="transition-colors hover:text-primary">My Library</a></li>
              <li><a href="#" className="transition-colors hover:text-primary">API Status</a></li>
            </ul>
          </div>

          <div>
            <h4 className="mb-6 text-xs font-black uppercase tracking-[0.2em] text-foreground">Legal</h4>
            <ul className="space-y-4 text-sm font-bold text-muted-foreground/60">
              <li><a href="#" className="transition-colors hover:text-primary">Privacy Policy</a></li>
              <li><a href="#" className="transition-colors hover:text-primary">Terms of Service</a></li>
              <li><a href="#" className="transition-colors hover:text-primary">Cookie Policy</a></li>
              <li><a href="#" className="transition-colors hover:text-primary">Contact Us</a></li>
            </ul>
          </div>
        </div>
        
        <div className="mt-20 border-t border-border/40 pt-10">
          <div className="flex flex-col items-center justify-between gap-6 md:flex-row">
            <p className="text-sm font-bold text-muted-foreground/40">
              © 2026 FlickSync. All rights reserved.
            </p>
            <div className="flex flex-wrap justify-center gap-x-6 gap-y-2 text-[10px] font-black uppercase tracking-widest text-muted-foreground/30">
              <span>Powered by OMDb API</span>
              <span>•</span>
              <span>Built with React + Vite + Tailwind</span>
              <span>•</span>
              <span>Designed for Excellence</span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
