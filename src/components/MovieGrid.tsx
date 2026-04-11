import { MovieCard } from './MovieCard';
import { motion, AnimatePresence } from 'motion/react';

interface MovieGridProps {
  movies: any[];
  onMovieClick: (id: string) => void;
}

export function MovieGrid({ movies, onMovieClick }: MovieGridProps) {
  return (
    <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5">
      <AnimatePresence mode="popLayout">
        {movies.map((movie) => (
          <motion.div
            key={movie.imdbID}
            layout
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.9 }}
            transition={{ duration: 0.2 }}
          >
            <MovieCard movie={movie} onClick={() => onMovieClick(movie.imdbID)} />
          </motion.div>
        ))}
      </AnimatePresence>
    </div>
  );
}
