import { useState, useEffect } from 'react';
import { SearchBar } from '@/components/SearchBar';
import { MovieGrid } from '@/components/MovieGrid';
import { MovieDetailsModal } from '@/components/MovieDetailsModal';
import { Loader } from '@/components/Loader';
import { EmptyState } from '@/components/EmptyState';
import { ErrorState } from '@/components/ErrorState';
import { useMovies } from '@/hooks/useMovies';
import { motion, AnimatePresence } from 'motion/react';
import { Badge } from '@/components/ui/badge';

export function Discover() {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedMovieId, setSelectedMovieId] = useState<string | null>(null);
  const { movies, loading, error } = useMovies(searchTerm);

  useEffect(() => {
    // Only scroll if we are not at the top already
    if (movies.length > 0 && window.scrollY > 300) {
      window.scrollTo({ top: 400, behavior: 'smooth' });
    }
  }, [movies]);

  return (
    <div className="min-h-screen bg-background">
      <section className="relative overflow-hidden pt-20 pb-16 md:pt-32 md:pb-24">
        {/* Decorative elements */}
        <div className="absolute -top-24 -right-24 -z-10 h-96 w-96 rounded-full bg-primary/5 blur-3xl" />
        <div className="absolute -bottom-24 -left-24 -z-10 h-96 w-96 rounded-full bg-primary/10 blur-3xl" />
        
        <div className="container mx-auto px-4 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            className="flex flex-col items-center"
          >
            <Badge variant="outline" className="mb-8 border-primary/20 bg-primary/5 px-4 py-1.5 text-xs font-bold uppercase tracking-[0.2em] text-primary">
              Unlimited Movie Library
            </Badge>
            <h1 className="mb-6 text-5xl font-black tracking-tight text-foreground sm:text-7xl md:text-8xl lg:text-9xl">
              Flick<span className="text-primary">Sync</span>
            </h1>
            <p className="mx-auto mb-12 max-w-2xl text-lg font-medium leading-relaxed text-muted-foreground md:text-xl">
              Discover your next favorite film with our high-performance movie search engine. Clean, fast, and professional.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <SearchBar onSearch={setSearchTerm} initialValue={searchTerm} />
          </motion.div>
        </div>
      </section>

      <main className="container mx-auto px-4 pb-32">
        <AnimatePresence mode="wait">
          {loading ? (
            <motion.div
              key="loader"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="pt-10"
            >
              <Loader />
            </motion.div>
          ) : error ? (
            <ErrorState message={error} />
          ) : movies.length > 0 ? (
            <motion.div
              key="results"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="pt-10"
            >
              <div className="mb-12 flex flex-col items-center justify-between gap-6 border-b border-border/50 pb-10 md:flex-row">
                <div className="text-center md:text-left">
                  <h2 className="text-3xl font-black tracking-tight text-foreground md:text-4xl">
                    Search Results
                  </h2>
                  <p className="mt-1 text-sm font-bold text-muted-foreground">
                    Showing top results for "{searchTerm}"
                  </p>
                </div>
                <Badge variant="secondary" className="bg-primary/10 px-4 py-2 text-sm font-bold text-primary">
                  {movies.length} titles found
                </Badge>
              </div>
              <MovieGrid movies={movies} onMovieClick={setSelectedMovieId} />
            </motion.div>
          ) : (
            <EmptyState />
          )}
        </AnimatePresence>
      </main>

      <MovieDetailsModal movieId={selectedMovieId} onClose={() => setSelectedMovieId(null)} />
    </div>
  );
}
