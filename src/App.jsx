
import { ThemeProvider } from './context/ThemeContext';
import DigitalNerves from './components/DigitalNerves'; // Import DigitalNerves
import Header from './components/Header';
import Hero from './components/Hero';
import About from './components/About';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Contact from './components/Contact';
import Footer from './components/Footer';

function App() {
  return (
    <ThemeProvider>
      <div className="relative min-h-screen bg-slate-50 dark:bg-slate-900 transition-colors duration-500 font-sans">
        <DigitalNerves /> {/* Add Digital Nerves Background */}
        <Header />

        <main>
          <Hero />
          <About />
          <Skills />
          <Projects />
          <Contact />
        </main>

        <Footer />
      </div>
    </ThemeProvider>
  );
}

export default App;