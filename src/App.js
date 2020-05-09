import React from 'react';
import './App.scss';
import Header from './components/header';
import AboutMe from './components/about';
import Skills from './components/skills';

function App() {
  return (
    <main className="App">
      <Header />
      <AboutMe />
      <Skills />
    </main>
  );
}

export default App;
