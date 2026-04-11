import { Film } from 'lucide-react';

export function Footer() {
  return (
    <footer className="border-t bg-white py-16">
      <div className="container mx-auto px-4">
        <div className="flex flex-col items-center justify-between gap-8 md:flex-row">
          <div className="flex items-center gap-3">
            <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-primary/10 text-primary">
              <Film className="h-5 w-5" />
            </div>
            <span className="text-xl font-black tracking-tight text-foreground">
              Flick<span className="text-primary">Sync</span>
            </span>
          </div>
          
          <div className="flex flex-wrap justify-center gap-x-8 gap-y-4 text-xs font-black uppercase tracking-[0.2em] text-muted-foreground/60">
            <a href="#" className="transition-colors hover:text-primary">Privacy Policy</a>
            <a href="#" className="transition-colors hover:text-primary">Terms of Service</a>
            <a href="#" className="transition-colors hover:text-primary">Contact Us</a>
          </div>

          <p className="text-sm font-bold text-muted-foreground/40">
            © 2026 FlickSync. All rights reserved.
          </p>
        </div>
        
        <div className="mt-12 border-t pt-8 text-center">
          <div className="flex flex-wrap justify-center gap-x-6 gap-y-2 text-[10px] font-black uppercase tracking-widest text-muted-foreground/30">
            <span>Powered by OMDb API</span>
            <span>•</span>
            <span>Built with React + Vite + Tailwind</span>
            <span>•</span>
            <span>Designed for Excellence</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
