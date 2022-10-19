import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import { Navbar, Footer } from "./components";
import {Home, About, Contact, Error, Projects, Experiences, Skills} from './pages'
import './App.css';

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path='/' element={ <Home />}/>
        <Route path='/about' element={ <About />} />
        <Route path='/contact' element={ <Contact />} />
        <Route path='/projects' element={ <Projects />} />
        <Route path='/experiences' element={ <Experiences />} />
        <Route path='/skills' element={ <Skills />} />
        <Route path='*' element={<Error />} />
      </Routes>
     <Footer />
    </Router>
  );

}

export default App;
