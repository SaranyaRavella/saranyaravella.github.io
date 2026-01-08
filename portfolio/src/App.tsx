
import Hero from './components/Hero';
import About from './components/About';
import Experience from './components/Experience';
import Skills from './components/Skills';
import Contact from './components/Contact';
import Navbar from './components/Navbar';

import CustomCursor from './components/CustomCursor';
import Education from './components/Education';

function App() {
  return (
    <div className="App">
      <CustomCursor />
      <Navbar />
      <main className="container">
        <Hero />
        <About />
        <Experience />
        <Skills />
        <Education />
        <Contact />
      </main>
    </div>
  );
}

export default App;
