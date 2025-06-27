import React from 'react';

function Menu() {
  return (
    <>
      <header id = "home">
        <nav>
          <ul>
            <li><a href="#home">Home</a></li>
            <li><a href="#porta">Portfolio</a></li>
            <li><a href="#about">About</a></li>
            <li><a href="#exp">Expert</a></li>
            <li><a href="#test">Testimonials</a></li>
            <li><a href="#contact">Contacts</a></li>
          </ul>
        </nav>
        <h1>Welcome To My Online Portfolio</h1>
        <a href="#porta" class="portfolio-btn">PORTFOLIO</a>
      </header>
    </>
  );
}

export default Menu;