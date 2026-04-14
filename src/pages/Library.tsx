import { useState } from 'react';
import { MovieGrid } from '@/components/MovieGrid';
import { MovieDetailsModal } from '@/components/MovieDetailsModal';
import { useLibrary } from '@/hooks/useLibrary';
import { motion, AnimatePresence } from 'motion/react';
import { Badge } from '@/components/ui/badge';
import { Bookmark, PlusCircle } from 'lucide-react';
import { Button } from '@/components/ui/button';

export function Library() {
  const { library } = useLibrary();
  const [selectedMovieId, setSelectedMovieId] = useState<string | null>(null);

  return (
    <div className="min-h-screen bg-background">
      <section className="relative overflow-hidden pt-20 pb-12 md:pt-32 md:pb-16">
        <div className="absolute -bottom-24 -left-24 -z-10 h-96 w-96 rounded-full bg-primary/5 blur-3xl" />
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="flex flex-col items-center text-center"
          >
            <Badge variant="outline" className="mb-6 flex items-center gap-2 border-primary/20 bg-primary/5 px-4 py-1.5 text-xs font-bold uppercase tracking-[0.2em] text-primary">
              <Bookmark className="h-3 w-3" />
              Your Collection
            </Badge>
            <h1 className="mb-4 text-4xl font-black tracking-tight text-foreground sm:text-6xl md:text-7xl">
              My <span className="text-primary">Library</span>
            </h1>
            <p className="mx-auto max-w-2xl text-lg font-medium text-muted-foreground">
              Your personal sanctuary for the films you love. Keep track of what you've watched or want to see next.
            </p>
          </motion.div>
        </div>
      </section>

      <main className="container mx-auto px-4 pb-32">
        <AnimatePresence mode="wait">
          {library.length > 0 ? (
            <motion.div
              key="library-content"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="space-y-12"
            >
              <div className="flex items-center justify-between border-b border-border/50 pb-8">
                <h2 className="text-2xl font-black tracking-tight text-foreground md:text-3xl">
                  Saved Movies
                </h2>
                <Badge variant="secondary" className="bg-primary/10 px-4 py-2 text-sm font-bold text-primary">
                  {library.length} {library.length === 1 ? 'Title' : 'Titles'}
                </Badge>
              </div>
              <MovieGrid movies={library} onMovieClick={setSelectedMovieId} />
            </motion.div>
          ) : (
            <motion.div
              key="library-empty"
              initial={{ opacity: 0, scale: 0.98 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0 }}
              className="flex flex-col items-center justify-center py-24 text-center"
            >
              <div className="mb-10 flex h-28 w-28 items-center justify-center rounded-[2.5rem] bg-primary/5 text-primary shadow-inner">
                <PlusCircle className="h-12 w-12" />
              </div>
              <h3 className="mb-4 text-4xl font-black tracking-tight text-foreground">Your library is empty</h3>
              <p className="mb-10 max-w-md text-lg font-medium text-muted-foreground/70">
                Start adding movies to your collection from the Discover or Trending sections to see them here.
              </p>
            </motion.div>
          )}
        </AnimatePresence>
      </main>

      <MovieDetailsModal movieId={selectedMovieId} onClose={() => setSelectedMovieId(null)} />
    </div>
  );
}
