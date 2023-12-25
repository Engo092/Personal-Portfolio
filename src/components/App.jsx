import { useState, useEffect } from 'react';
import '../styles/App.css';
import Header from './Header.jsx';
import About from './About.jsx';
import Projects from './Projects.jsx';
import Footer from './Footer.jsx';

function App() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <>
      <Header/>
      <About/>
      <Projects/>
      <Footer/>
    </>
  );
}

export default App;