import React, { createContext, useContext, useState, useEffect } from 'react';

export interface Movie {
  Title: string;
  Year: string;
  imdbID: string;
  Poster: string;
  Type: string;
}

interface LibraryContextType {
  library: Movie[];
  toggleLibrary: (movie: Movie) => void;
  isInLibrary: (imdbID: string) => boolean;
}

const LibraryContext = createContext<LibraryContextType | undefined>(undefined);

export function LibraryProvider({ children }: { children: React.ReactNode }) {
  const [library, setLibrary] = useState<Movie[]>([]);

  useEffect(() => {
    const savedLibrary = localStorage.getItem('flicksync_library');
    if (savedLibrary) {
      try {
        setLibrary(JSON.parse(savedLibrary));
      } catch (e) {
        console.error('Failed to parse library from localStorage', e);
      }
    }
  }, []);

  const saveToLibrary = (movie: Movie) => {
    const updatedLibrary = [...library, movie];
    setLibrary(updatedLibrary);
    localStorage.setItem('flicksync_library', JSON.stringify(updatedLibrary));
  };

  const removeFromLibrary = (imdbID: string) => {
    const updatedLibrary = library.filter((m) => m.imdbID !== imdbID);
    setLibrary(updatedLibrary);
    localStorage.setItem('flicksync_library', JSON.stringify(updatedLibrary));
  };

  const isInLibrary = (imdbID: string) => {
    return library.some((m) => m.imdbID === imdbID);
  };

  const toggleLibrary = (movie: Movie) => {
    if (isInLibrary(movie.imdbID)) {
      removeFromLibrary(movie.imdbID);
    } else {
      saveToLibrary(movie);
    }
  };

  return (
    <LibraryContext.Provider value={{ library, toggleLibrary, isInLibrary }}>
      {children}
    </LibraryContext.Provider>
  );
}

export function useLibrary() {
  const context = useContext(LibraryContext);
  if (context === undefined) {
    throw new Error('useLibrary must be used within a LibraryProvider');
  }
  return context;
}
