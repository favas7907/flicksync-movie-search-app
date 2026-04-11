import { useState, useEffect, useRef } from 'react';
import { Search, X } from 'lucide-react';
import { Input } from '@/components/ui/input';

interface SearchBarProps {
  onSearch: (query: string) => void;
  initialValue?: string;
}

export function SearchBar({ onSearch, initialValue = '' }: SearchBarProps) {
  const [query, setQuery] = useState(initialValue);
  const inputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    // Auto-focus on mount
    const timer = setTimeout(() => {
      inputRef.current?.focus();
    }, 100);
    return () => clearTimeout(timer);
  }, []);

  const handleClear = () => {
    setQuery('');
    inputRef.current?.focus();
  };

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter') {
      onSearch(query);
    }
  };

  useEffect(() => {
    onSearch(query);
  }, [query, onSearch]);

  return (
    <div className="relative mx-auto w-full max-w-2xl px-4 sm:px-0">
      <div className="group relative flex items-center">
        <div className="absolute left-6 text-muted-foreground transition-colors group-focus-within:text-primary">
          <Search className="h-5 w-5" />
        </div>
        <Input
          ref={inputRef}
          type="text"
          placeholder="Search for movies, series..."
          className="h-16 w-full rounded-2xl border-2 border-transparent bg-white pl-16 pr-16 text-lg font-medium shadow-2xl shadow-primary/5 ring-offset-background transition-all placeholder:text-muted-foreground/40 focus-visible:border-primary/20 focus-visible:bg-white focus-visible:ring-8 focus-visible:ring-primary/5"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          onKeyDown={handleKeyDown}
        />
        {query && (
          <button
            onClick={handleClear}
            className="absolute right-6 rounded-full p-1.5 text-muted-foreground transition-all hover:bg-muted hover:text-foreground active:scale-90"
            aria-label="Clear search"
          >
            <X className="h-5 w-5" />
          </button>
        )}
      </div>
    </div>
  );
}
