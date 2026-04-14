import { useState } from 'react';
import { Header } from './components/Header';
import { Footer } from './components/Footer';
import { Discover } from './pages/Discover';
import { Trending } from './pages/Trending';
import { Library } from './pages/Library';
import { LibraryProvider } from './context/LibraryContext';

export type Section = 'discover' | 'trending' | 'library';

export default function App() {
  const [activeSection, setActiveSection] = useState<Section>('discover');

  const renderSection = () => {
    switch (activeSection) {
      case 'discover':
        return <Discover />;
      case 'trending':
        return <Trending />;
      case 'library':
        return <Library />;
      default:
        return <Discover />;
    }
  };

  return (
    <LibraryProvider>
      <div className="flex min-h-screen flex-col bg-slate-50">
        <Header activeSection={activeSection} onSectionChange={setActiveSection} />
        <div className="flex-1">
          {renderSection()}
        </div>
        <Footer />
      </div>
    </LibraryProvider>
  );
}

