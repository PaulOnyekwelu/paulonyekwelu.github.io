import React from 'react';
import './App.scss';
import Header from './components/header';
import AboutMe from './components/about';
import Skills from './components/skills';
import Projects from './components/projects';
import Experience from './components/experience';
import Contact from './components/contact';

function App() {
  return (
    <main className="App">
      <Header />
      <AboutMe />
      <Skills />
      <Projects />
      <Experience />
      <Contact />
    </main>
  );
}

export default App;
