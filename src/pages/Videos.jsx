import React from 'react';
import Footer from '../components/Footer';

function Videos() {
  const containerStyle = {
    minHeight: '100vh',
    backgroundColor: 'gray',
  };

  return (
    <>
      <div style={containerStyle} className="flex justify-center items-center">
        <div className="border border-gray-300 p-4 rounded w-full max-w-screen-md">
          {/* Sección de Título */}
          <div className="border-b border-gray-300 mb-4 pb-4">
            <header className="flex items-center justify-between">
              <div className="flex items-center">
                <h1 className="text-3xl text-black font-extrabold animate-pulse">Videos</h1>
              </div>
              <button className="text-black text-xl hover:text-yellow-500 border-transparent hover:bg-transparent font-semibold py-2 px-4 rounded focus:outline-none focus:ring focus:ring-transparent active:shadow-md active-bg-transparent transform transition-transform hover:-translate-y-1 active:-translate-y-0.5 ">
                <img src="../assets/icons/buscador.png" className="w-8 h-8 mr-2" alt="Búsqueda" />
              </button>
            </header>
          </div>

          {/* Sección de Nombre de Usuario */}
          <div className="border-b mb-4 pb-4 border-transparent hover-bg-transparent text-black font-semibold py-2 px-4 rounded focus:outline-none focus:ring focus:ring-transparent active:shadow-md active-bg-transparent transform transition-transform hover:-translate-y-1 active:-translate-y-0.5">
            <button className="text-black font-bold flex items-center">
              <img src="../assets/icons/PerfilUsuario.png" alt="Cámara" className="w-8 h-8 mr-2" />
              Jecner Núñez
            </button>
          </div>

          {/* Frame de Video */}
          <div className="border border-gray-300 mb-4 rounded">
            <iframe
              src="https://www.youtube.com/watch?v=VjYsYVm6zQ0"
              width="100%"
              height="350"
              title="Video Title"
              frameborder="0"
              allowfullscreen
            ></iframe>
          </div>
        </div>
        
      </div>
      <Footer />
    </>
  );
}

export default Videos;
