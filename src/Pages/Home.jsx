import React from 'react';
import Header from '../Components/Header';
import Footer from '../Components/Footer';

const Home = () => (
  <div className="Container">
    {/* Agrega el componente Header al inicio del contenido */}
    <Header />

    <div className="row">
      <div className="col s12 m4 offset-m4">
        {/* Contenido principal de la página (supongo que IconNav y Post son componentes que estás usando aquí) */}
        {/* Agrega aquí el contenido de IconNav y Post */}
      </div>
    </div>

    {/* Agrega el componente Footer al final del contenido */}
    <Footer />
  </div>
);

export default Home;