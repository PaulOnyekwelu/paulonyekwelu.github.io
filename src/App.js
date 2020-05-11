import React from 'react';
import './App.scss';
import Header from './components/header';
import AboutMe from './components/about';
import Skills from './components/skills';
import Projects from './components/projects';
import Experience from './components/experience';

function App() {
  return (
    <main className="App">
      <Header />
      <AboutMe />
      <Skills />
      <Projects />
      <Experience />
    </main>
  );
}

export default App;
