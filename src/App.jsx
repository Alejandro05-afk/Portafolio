import React from 'react';
import './componentes/Estilo.css';
import Menu from './componentes/Menu';
import QuienSoy from './componentes/QuienSoy';
import Proyectos from './componentes/Proyectos';
import Expert from './componentes/expert';
import Testimonial from './componentes/testimonial';
import Contact from './componentes/Contact';
function App() {
  return (
    <>
    <Menu/>
    <QuienSoy/>
    <Proyectos/>
    <Expert/>
    <Testimonial/>
    <Contact/>
    </>
  );
}

export default App;

