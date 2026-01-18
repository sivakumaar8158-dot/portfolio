import { useState } from 'react'
import Navigation from './components/Navbar'
import Hero from './components/Hero'
import Skills from './components/Skills'
import Projects from './components/Projects'
import Contact from './components/Contact'
import Footer from './components/Footer'
import 'bootstrap/dist/css/bootstrap.min.css';
import './index.css'

function App() {

    return (
        <div className="bg-gray-50 dark:bg-gray-900 min-h-screen">
            <div className="noise-overlay"></div>
            <Navigation />
            <Hero />
            <Skills />
            <Projects />
            <Contact />
            <Footer />
        </div>
    )
}

export default App
