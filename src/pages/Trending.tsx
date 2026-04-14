import { useState, useEffect } from 'react';
import { MovieGrid } from '@/components/MovieGrid';
import { MovieDetailsModal } from '@/components/MovieDetailsModal';
import { Loader } from '@/components/Loader';
import { ErrorState } from '@/components/ErrorState';
import { searchMovies } from '@/services/omdbService';
import { motion } from 'motion/react';
import { Badge } from '@/components/ui/badge';
import { TrendingUp } from 'lucide-react';

export function Trending() {
  const [movies, setMovies] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [selectedMovieId, setSelectedMovieId] = useState<string | null>(null);

  useEffect(() => {
    const fetchTrending = async () => {
      setLoading(true);
      setError(null);
      
      // Simulate trending by searching for popular high-quality terms
      const keywords = ['Marvel', 'Star Wars', 'Batman', 'Dune'];
      const randomKeyword = keywords[Math.floor(Math.random() * keywords.length)];
      
      try {
        const data = await searchMovies(randomKeyword);
        if (data.Response === 'True') {
          setMovies(data.Search);
        } else {
          setError(data.Error || 'Failed to fetch trending movies');
        }
      } catch (err) {
        setError('Something went wrong. Please try again later.');
      } finally {
        setLoading(false);
      }
    };

    fetchTrending();
  }, []);

  return (
    <div className="min-h-screen bg-background">
      <section className="relative overflow-hidden pt-20 pb-12 md:pt-32 md:pb-16">
        <div className="absolute -top-24 -right-24 -z-10 h-96 w-96 rounded-full bg-primary/5 blur-3xl" />
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="flex flex-col items-center text-center"
          >
            <Badge variant="outline" className="mb-6 flex items-center gap-2 border-primary/20 bg-primary/5 px-4 py-1.5 text-xs font-bold uppercase tracking-[0.2em] text-primary">
              <TrendingUp className="h-3 w-3" />
              What's Hot Now
            </Badge>
            <h1 className="mb-4 text-4xl font-black tracking-tight text-foreground sm:text-6xl md:text-7xl">
              Trending <span className="text-primary">Movies</span>
            </h1>
            <p className="mx-auto max-w-2xl text-lg font-medium text-muted-foreground">
              Explore the most popular and highly anticipated titles currently making waves in the world of cinema.
            </p>
          </motion.div>
        </div>
      </section>

      <main className="container mx-auto px-4 pb-32">
        {loading ? (
          <Loader />
        ) : error ? (
          <ErrorState message={error} />
        ) : (
          <div className="space-y-12">
            <div className="flex items-center justify-between border-b border-border/50 pb-8">
              <h2 className="text-2xl font-black tracking-tight text-foreground md:text-3xl">
                Popular Picks
              </h2>
              <Badge variant="secondary" className="bg-primary/10 px-4 py-2 text-sm font-bold text-primary">
                {movies.length} Trending
              </Badge>
            </div>
            <MovieGrid movies={movies} onMovieClick={setSelectedMovieId} />
          </div>
        )}
      </main>

      <MovieDetailsModal movieId={selectedMovieId} onClose={() => setSelectedMovieId(null)} />
    </div>
  );
}
