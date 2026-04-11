import { AlertCircle, RefreshCw } from 'lucide-react';
import { motion } from 'motion/react';
import { Button } from '@/components/ui/button';

interface ErrorStateProps {
  message: string;
  onRetry?: () => void;
}

export function ErrorState({ message, onRetry }: ErrorStateProps) {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.95 }}
      animate={{ opacity: 1, scale: 1 }}
      exit={{ opacity: 0 }}
      className="flex flex-col items-center justify-center py-32 text-center"
    >
      <div className="mb-8 flex h-24 w-24 items-center justify-center rounded-full bg-destructive/5 text-destructive">
        <AlertCircle className="h-12 w-12" />
      </div>
      <h3 className="mb-3 text-3xl font-black text-foreground">{message}</h3>
      <p className="mb-8 max-w-md text-lg font-medium text-muted-foreground">
        Try searching for something else or check your spelling.
      </p>
      {onRetry && (
        <Button 
          onClick={onRetry} 
          variant="outline" 
          className="gap-2 border-primary/20 hover:bg-primary/5 hover:text-primary"
        >
          <RefreshCw className="h-4 w-4" />
          Retry Search
        </Button>
      )}
    </motion.div>
  );
}
