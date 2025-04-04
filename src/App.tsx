import Layout from './components/layout/Layout';
import Hero from './components/sections/Hero';
import About from './components/sections/About';
import Experience from './components/sections/Experience';
import Skills from './components/sections/Skills';
import Projects from './components/sections/Projects';
import Contact from './components/sections/Contact';
import ThankYou from './components/sections/Thankyou';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './App.css';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/thank-you" element={<ThankYou />} />
        <Route path="/" element={
          <Layout>
            <div className="space-y-24">
              <Hero />
              <About />
              <Experience />
              <Skills />
              <Projects />
              <Contact />
            </div>
          </Layout>
        } />
      </Routes>
    </BrowserRouter>
  );
}

export default App;