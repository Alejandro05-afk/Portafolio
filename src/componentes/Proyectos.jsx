import React from 'react';
import Menu from './Menu';
function Proyectos() {
  return (
    <section id="porta" > 
        <div>
            <h1 class= "proyectos">Mis proyectos</h1>
        </div >
        <div class='container'>
            <div class='item'>
                <img src="https://byrontosh.netlify.app/images/portfolio-1.jpg" alt="" />
                <h2>Proyecto - 1</h2>
                <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Facere iusto dolores illum cupiditate nulla veniam natus nostrum adipisci porro vel voluptate numquam recusandae, delectus consequatur, autem quam voluptatum qui itaque?</p>
                <button>MAS INFORMACION</button>
            </div>
            <div class='item'>
                <img src="https://byrontosh.netlify.app/images/portfolio-2.jpg" alt="" />
                <h2>Proyecto - 2</h2>
                <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Facere iusto dolores illum cupiditate nulla veniam natus nostrum adipisci porro vel voluptate numquam recusandae, delectus consequatur, autem quam voluptatum qui itaque?</p>
                <button>MAS INFORMACION</button>
            </div>
            <div class='item'>
                <img src="https://byrontosh.netlify.app/images/portfolio-3.jpg" alt="" />
                <h2>Proyecto - 3</h2>
                <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Facere iusto dolores illum cupiditate nulla veniam natus nostrum adipisci porro vel voluptate numquam recusandae, delectus consequatur, autem quam voluptatum qui itaque?</p>
                <button>MAS INFORMACION</button>
            </div>
        </div>
    </section>
  );
}

export default Proyectos;