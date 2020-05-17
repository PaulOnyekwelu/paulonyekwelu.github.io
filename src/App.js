import React from 'react';
import './App.scss';
import Header from './components/header.jsx';
import AboutMe from './components/about.jsx';
import Skills from './components/skills.jsx';
import Projects from './components/projects.jsx';
import Experience from './components/experience.jsx';
import Contact from './components/contact.jsx';

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
