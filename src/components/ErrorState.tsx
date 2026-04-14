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
      initial={{ opacity: 0, scale: 0.98 }}
      animate={{ opacity: 1, scale: 1 }}
      exit={{ opacity: 0 }}
      className="flex flex-col items-center justify-center py-40 text-center"
    >
      <div className="mb-10 flex h-28 w-28 items-center justify-center rounded-[2rem] bg-destructive/5 text-destructive shadow-inner">
        <AlertCircle className="h-12 w-12" />
      </div>
      <h3 className="mb-4 text-4xl font-black tracking-tight text-foreground">{message}</h3>
      <p className="mb-10 max-w-md text-lg font-medium text-muted-foreground/70">
        Something went wrong while fetching the data. Please check your connection or try again later.
      </p>
      {onRetry && (
        <Button 
          onClick={onRetry} 
          variant="outline" 
          className="h-12 gap-3 rounded-2xl border-primary/20 px-8 font-bold hover:bg-primary/5 hover:text-primary"
        >
          <RefreshCw className="h-5 w-5" />
          Retry Search
        </Button>
      )}
    </motion.div>
  );
}
