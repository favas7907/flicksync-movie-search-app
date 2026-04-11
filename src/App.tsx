import { Header } from './components/Header';
import { Footer } from './components/Footer';
import { Home } from './pages/Home';

export default function App() {
  return (
    <div className="flex min-h-screen flex-col bg-slate-50">
      <Header />
      <div className="flex-1">
        <Home />
      </div>
      <Footer />
    </div>
  );
}

