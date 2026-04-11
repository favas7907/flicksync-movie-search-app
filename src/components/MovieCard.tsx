import { motion } from 'motion/react';
import { Calendar } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';

interface MovieCardProps {
  movie: {
    Title: string;
    Year: string;
    imdbID: string;
    Poster: string;
    Type: string;
  };
  onClick: () => void;
}

export function MovieCard({ movie, onClick }: MovieCardProps) {
  const posterUrl = movie.Poster !== 'N/A' ? movie.Poster : 'https://images.unsplash.com/photo-1485846234645-a62644f84728?q=80&w=2059&auto=format&fit=crop';

  return (
    <motion.div
      whileHover={{ y: -8 }}
      transition={{ type: 'spring', stiffness: 400, damping: 25 }}
      className="h-full"
    >
      <Card 
        className="group flex h-full cursor-pointer flex-col overflow-hidden border-none bg-white shadow-sm transition-all duration-300 hover:shadow-2xl hover:shadow-primary/10"
        onClick={onClick}
      >
        <div className="relative aspect-[2/3] overflow-hidden bg-muted">
          <img
            src={posterUrl}
            alt={movie.Title}
            loading="lazy"
            className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-110"
            referrerPolicy="no-referrer"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/20 to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
          <div className="absolute bottom-4 left-4 right-4 translate-y-4 opacity-0 transition-all duration-300 group-hover:translate-y-0 group-hover:opacity-100">
            <Badge className="w-full bg-primary py-1.5 text-xs font-bold text-white hover:bg-primary">
              View Details
            </Badge>
          </div>
        </div>
        <CardContent className="flex flex-1 flex-col p-5">
          <h3 className="line-clamp-2 text-lg font-black leading-tight text-foreground transition-colors group-hover:text-primary">
            {movie.Title}
          </h3>
          <div className="mt-auto pt-4 flex items-center justify-between text-xs font-bold uppercase tracking-widest text-muted-foreground">
            <div className="flex items-center gap-1.5">
              <Calendar className="h-3.5 w-3.5 text-primary/60" />
              <span>{movie.Year}</span>
            </div>
            <Badge variant="outline" className="border-primary/20 bg-primary/5 text-[10px] font-black text-primary">
              {movie.Type}
            </Badge>
          </div>
        </CardContent>
      </Card>
    </motion.div>
  );
}
