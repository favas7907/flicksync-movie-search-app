import { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { X, Star, Clock, Calendar, Globe, User, Video, Award, Bookmark, BookmarkCheck } from 'lucide-react';
import { Badge } from '@/components/ui/badge';
import { getMovieDetails } from '@/services/omdbService';
import { useLibrary } from '@/hooks/useLibrary';
import { Button } from '@/components/ui/button';
import { cn } from '@/lib/utils';

interface MovieModalProps {
  movieId: string | null;
  onClose: () => void;
}

export function MovieDetailsModal({ movieId, onClose }: MovieModalProps) {
  const [movie, setMovie] = useState<any>(null);
  const [loading, setLoading] = useState(false);
  const { toggleLibrary, isInLibrary } = useLibrary();

  useEffect(() => {
    if (movieId) {
      setLoading(true);
      getMovieDetails(movieId).then((data) => {
        setMovie(data);
        setLoading(false);
      });
    } else {
      setMovie(null);
    }
  }, [movieId]);

  useEffect(() => {
    const handleEsc = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };
    window.addEventListener('keydown', handleEsc);
    return () => window.removeEventListener('keydown', handleEsc);
  }, [onClose]);

  if (!movieId) return null;

  const isSaved = movie ? isInLibrary(movie.imdbID) : false;

  return (
    <AnimatePresence>
      <div className="fixed inset-0 z-50 flex items-center justify-center p-4 md:p-6">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={onClose}
          className="absolute inset-0 bg-black/60 backdrop-blur-sm"
        />
        
        <motion.div
          initial={{ opacity: 0, scale: 0.95, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.95, y: 20 }}
          className="relative z-10 w-full max-w-5xl overflow-hidden rounded-[2.5rem] bg-white shadow-2xl"
        >
          <button
            onClick={onClose}
            className="absolute right-6 top-6 z-20 rounded-full bg-black/5 p-2.5 text-black transition-all hover:bg-black/10 hover:rotate-90 active:scale-90"
            aria-label="Close modal"
          >
            <X className="h-6 w-6" />
          </button>

          <div className="max-h-[85vh] overflow-y-auto">
            {loading ? (
              <div className="flex h-[500px] items-center justify-center">
                <div className="h-12 w-12 animate-spin rounded-full border-4 border-primary border-t-transparent" />
              </div>
            ) : movie ? (
              <div className="grid grid-cols-1 md:grid-cols-12">
                <div className="relative md:col-span-5 lg:col-span-4">
                  <img
                    src={movie.Poster !== 'N/A' ? movie.Poster : 'https://images.unsplash.com/photo-1485846234645-a62644f84728?q=80&w=2059&auto=format&fit=crop'}
                    alt={movie.Title}
                    className="h-full w-full object-cover md:aspect-auto"
                    referrerPolicy="no-referrer"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent md:hidden" />
                </div>
                <div className="flex flex-col p-8 md:col-span-7 md:p-12 lg:col-span-8">
                  <div className="mb-6 flex flex-wrap items-center justify-between gap-4">
                    <div className="flex flex-wrap gap-2">
                      {movie.Genre.split(', ').map((g: string) => (
                        <Badge key={g} variant="secondary" className="bg-primary/10 px-3 py-1 text-xs font-semibold text-primary hover:bg-primary/20">
                          {g}
                        </Badge>
                      ))}
                      <Badge variant="outline" className="border-muted-foreground/20 px-3 py-1 text-xs font-semibold text-muted-foreground">
                        {movie.Rated}
                      </Badge>
                    </div>
                    
                    <Button
                      onClick={() => toggleLibrary(movie)}
                      variant={isSaved ? "default" : "outline"}
                      className={cn(
                        "h-10 gap-2 rounded-xl px-4 font-bold transition-all",
                        isSaved ? "bg-primary text-white" : "border-primary/20 text-primary hover:bg-primary/5"
                      )}
                    >
                      {isSaved ? (
                        <>
                          <BookmarkCheck className="h-4 w-4" />
                          Saved
                        </>
                      ) : (
                        <>
                          <Bookmark className="h-4 w-4" />
                          Save to Library
                        </>
                      )}
                    </Button>
                  </div>
                  
                  <h2 className="mb-4 text-4xl font-black tracking-tight text-foreground md:text-5xl lg:text-6xl">
                    {movie.Title}
                  </h2>
                  
                  <div className="mb-8 flex flex-wrap items-center gap-6 text-sm font-bold text-muted-foreground">
                    <div className="flex items-center gap-2 rounded-full bg-yellow-400/10 px-4 py-1.5 text-yellow-600">
                      <Star className="h-4 w-4 fill-current" />
                      <span>{movie.imdbRating}</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <Clock className="h-4 w-4 text-primary" />
                      <span>{movie.Runtime}</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <Calendar className="h-4 w-4 text-primary" />
                      <span>{movie.Year}</span>
                    </div>
                  </div>

                  <div className="mb-10">
                    <h3 className="mb-3 text-xl font-bold text-foreground">Overview</h3>
                    <p className="text-lg leading-relaxed text-muted-foreground/80">
                      {movie.Plot}
                    </p>
                  </div>

                  <div className="mt-auto grid grid-cols-1 gap-8 border-t pt-8 sm:grid-cols-2">
                    <div className="space-y-6">
                      <div className="flex items-start gap-4">
                        <div className="rounded-xl bg-primary/10 p-2.5 text-primary">
                          <Video className="h-5 w-5" />
                        </div>
                        <div>
                          <p className="text-[10px] font-black uppercase tracking-widest text-muted-foreground">Director</p>
                          <p className="font-bold text-foreground">{movie.Director}</p>
                        </div>
                      </div>
                      <div className="flex items-start gap-4">
                        <div className="rounded-xl bg-primary/10 p-2.5 text-primary">
                          <User className="h-5 w-5" />
                        </div>
                        <div>
                          <p className="text-[10px] font-black uppercase tracking-widest text-muted-foreground">Cast</p>
                          <p className="font-bold text-foreground">{movie.Actors}</p>
                        </div>
                      </div>
                    </div>
                    <div className="space-y-6">
                      <div className="flex items-start gap-4">
                        <div className="rounded-xl bg-primary/10 p-2.5 text-primary">
                          <Globe className="h-5 w-5" />
                        </div>
                        <div>
                          <p className="text-[10px] font-black uppercase tracking-widest text-muted-foreground">Country</p>
                          <p className="font-bold text-foreground">{movie.Country}</p>
                        </div>
                      </div>
                      <div className="flex items-start gap-4">
                        <div className="rounded-xl bg-primary/10 p-2.5 text-primary">
                          <Award className="h-5 w-5" />
                        </div>
                        <div>
                          <p className="text-[10px] font-black uppercase tracking-widest text-muted-foreground">Awards</p>
                          <p className="font-bold text-foreground">{movie.Awards}</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ) : null}
          </div>
        </motion.div>
      </div>
    </AnimatePresence>
  );
}
