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

export function Home() {
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
    <div className="min-h-screen bg-slate-50/50">
      <section className="relative overflow-hidden py-24 md:py-32 lg:py-40">
        {/* Decorative elements */}
        <div className="absolute -top-24 -right-24 -z-10 h-96 w-96 rounded-full bg-primary/5 blur-3xl" />
        <div className="absolute -bottom-24 -left-24 -z-10 h-96 w-96 rounded-full bg-primary/10 blur-3xl" />
        
        <div className="container mx-auto px-4 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
          >
            <Badge variant="outline" className="mb-6 border-primary/20 bg-primary/5 px-4 py-1 text-xs font-bold uppercase tracking-widest text-primary">
              Unlimited Movie Library
            </Badge>
            <h1 className="mb-6 text-6xl font-black tracking-tight text-foreground md:text-8xl">
              Flick<span className="text-primary">Sync</span>
            </h1>
            <p className="mx-auto mb-12 max-w-2xl text-lg font-medium leading-relaxed text-muted-foreground md:text-xl">
              Search movies instantly. Discover your next favorite film with our clean and professional movie library.
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
              <div className="mb-12 flex flex-col items-center justify-between gap-4 border-b pb-8 md:flex-row">
                <div>
                  <h2 className="text-3xl font-black tracking-tight text-foreground">
                    Search Results
                  </h2>
                  <p className="text-sm font-bold text-muted-foreground">
                    Showing top results for "{searchTerm}"
                  </p>
                </div>
                <Badge variant="secondary" className="bg-primary/10 px-4 py-1.5 text-sm font-bold text-primary">
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
