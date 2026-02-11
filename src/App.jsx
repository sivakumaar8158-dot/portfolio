import { Routes, Route } from 'react-router-dom';
import { ThemeProvider } from './context/ThemeContext';
import DigitalNerves from './components/DigitalNerves';
import GlobalBackground from './components/GlobalBackground';
import Header from './components/Header';
import Hero from './components/Hero';
import About from './components/About';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Contact from './components/Contact';
import Footer from './components/Footer';
import ProjectDetails from './components/ProjectDetails';

function App() {
  return (
    <ThemeProvider>
      <div className="relative min-h-screen bg-slate-50 dark:bg-slate-900 transition-colors duration-500 font-sans">
        <GlobalBackground />
        <DigitalNerves />
        <Header />

        <Routes>
          <Route path="/" element={
            <main>
              <Hero />
              <About />
              <Skills />
              <Projects />
              <Contact />
            </main>
          } />
          <Route path="/project/:id" element={<ProjectDetails />} />
        </Routes>

        <Footer />
      </div>
    </ThemeProvider>
  );
}

export default App;