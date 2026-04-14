import { Search } from 'lucide-react';
import { motion } from 'motion/react';

export function EmptyState() {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.98 }}
      animate={{ opacity: 1, scale: 1 }}
      exit={{ opacity: 0 }}
      className="flex flex-col items-center justify-center py-40 text-center"
    >
      <div className="mb-10 flex h-28 w-28 items-center justify-center rounded-[2rem] bg-primary/5 text-primary shadow-inner">
        <Search className="h-12 w-12" />
      </div>
      <h3 className="mb-4 text-4xl font-black tracking-tight text-foreground">Start typing to discover movies 🎬</h3>
      <p className="max-w-md text-lg font-medium text-muted-foreground/70">
        Explore thousands of titles from the OMDb database. Try searching for "Interstellar" or "The Godfather".
      </p>
    </motion.div>
  );
}
