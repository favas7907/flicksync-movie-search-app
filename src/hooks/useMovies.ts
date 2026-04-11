import { useState, useEffect, useCallback } from 'react';
import { searchMovies } from '@/services/omdbService';
import { useDebounce } from './useDebounce';

export function useMovies(searchTerm: string) {
  const [movies, setMovies] = useState<any[]>([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  
  const debouncedSearchTerm = useDebounce(searchTerm, 500);

  const performSearch = useCallback(async (query: string) => {
    const trimmedQuery = query.trim();
    if (trimmedQuery.length < 3) {
      setMovies([]);
      setError(null);
      return;
    }

    setLoading(true);
    setError(null);
    
    try {
      const data = await searchMovies(trimmedQuery);
      
      if (data.Response === 'True') {
        setMovies(data.Search);
      } else {
        setMovies([]);
        setError(data.Error || 'No results found');
      }
    } catch (err) {
      setError('Failed to fetch movies. Please try again.');
    } finally {
      setLoading(false);
    }
  }, []);

  useEffect(() => {
    performSearch(debouncedSearchTerm);
  }, [debouncedSearchTerm, performSearch]);

  return { movies, loading, error };
}
