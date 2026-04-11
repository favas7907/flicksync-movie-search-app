import { Search } from 'lucide-react';
import { motion } from 'motion/react';

export function EmptyState() {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.95 }}
      animate={{ opacity: 1, scale: 1 }}
      exit={{ opacity: 0 }}
      className="flex flex-col items-center justify-center py-32 text-center"
    >
      <div className="mb-8 flex h-24 w-24 items-center justify-center rounded-full bg-primary/5 text-primary">
        <Search className="h-12 w-12" />
      </div>
      <h3 className="mb-3 text-3xl font-black text-foreground">Start typing to discover movies 🎬</h3>
      <p className="max-w-md text-lg font-medium text-muted-foreground">
        We'll find the best matches from the OMDb database. Try "Batman" or "Inception".
      </p>
    </motion.div>
  );
}
