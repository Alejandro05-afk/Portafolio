# Portafolio Template

Este es un proyecto de plantilla de portafolio web desarrollado con React y Vite.

## Estructura de Archivos

La estructura de archivos del proyecto se ve así:

  graph TD;
    portafolio-template --> node_modules
    portafolio-template --> public
    portafolio-template --> src
      src --> assets
      src --> componentes
        componentes --> Contact.jsx
        componentes --> Estilo.css
        componentes --> Expert.jsx
        componentes --> Menu.jsx
        componentes --> Proyectos.jsx
        componentes --> QuienSoy.jsx
        componentes --> Testimonial.jsx
      src --> App.css
      src --> App.jsx
      src --> index.css
      src --> main.jsx
    portafolio-template --> .gitignore
    portafolio-template --> eslint.config.js
    portafolio-template --> index.html
    portafolio-template --> package-lock.json
    portafolio-template --> package.json
    portafolio-template --> README.md
    portafolio-template --> vite.config.js

    Componentes Principales
Los principales componentes del proyecto son:

Contact.jsx: Componente para la sección de contacto.
Expert.jsx: Componente para la sección de expertos.
Menu.jsx: Componente para el menú de navegación.
Proyectos.jsx: Componente para la sección de proyectos.
QuienSoy.jsx: Componente para la sección de quién soy.
Testimonial.jsx: Componente para la sección de testimonios.

Cómo Iniciar el Proyecto

Clona el repositorio:
git clone (https://github.com/Alejandro05-afk/Portafolio.git)

Instala las dependencias:
cd portafolio-template
npm install

Inicia el servidor de desarrollo:
npm run dev
