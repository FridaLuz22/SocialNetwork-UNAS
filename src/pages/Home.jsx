import './Home.css';
import React from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';

function Home() {
  return (
    <>
      <Header />
      <div className="frames-container">
        <div className="frame">
          <h2>Publicación 1</h2>
          <div className="buttons">
            <button className="button-primary button-with-image button-image1">
              Botón 1
            </button>
            <button className="button-secondary button-with-image button-image2">
              Botón 2
            </button>
            <button className="button-tertiary button-with-image button-image3">
              Botón 3
            </button>
          </div>
        </div>

        <div className="frame">
          <h2>Publicación 2</h2>
          <div className="buttons">
            <button className="button-primary button-with-image button-image1">
              Botón 1
            </button>
            <button className="button-secondary button-with-image button-image2">
              Botón 2
            </button>
            <button className="button-tertiary button-with-image button-image3">
              Botón 3
            </button>
          </div>
        </div>

        <div className="frame">
          <h2>Publicación 3</h2>
          <div className="buttons">
            <button className="button-primary button-with-image button-image1">
              Botón 1
            </button>
            <button className="button-secondary button-with-image button-image2">
              Botón 2
            </button>
            <button className="button-tertiary button-with-image button-image3">
              Botón 3
            </button>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}

export default Home;
