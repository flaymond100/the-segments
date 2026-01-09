import { Header } from './components/Header';
import { Hero } from './components/Hero';
import { Release } from './components/Release';
import { Listen } from './components/Listen';
import { Video } from './components/Video';
import { Tour } from './components/Tour';
import { About } from './components/About';
import { Newsletter } from './components/Newsletter';
import { Contact } from './components/Contact';
import { Footer } from './components/Footer';
import './App.css';

function App() {
  return (
    <div className="min-h-screen bg-bg">
      <Header />
      <main>
        <Hero />
        <Release />
        <Listen />
        <Video />
        <Tour />
        <About />
        <Newsletter />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}

export default App;
