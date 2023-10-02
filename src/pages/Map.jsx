import React from 'react';
import Footer from '../components/Footer';

function Map() {
  const containerStyle = {
    minHeight: '100vh', //  altura de la ventana
    backgroundColor: 'gray', // Color de fondo
    
  };

  const frameStyle = {
    boxShadow: '0 0 10px rgba(0, 0, 0, 0.2)', // Agrega una sombra gris al frame
  };

  return (
    <>
      <div style={containerStyle} className="flex justify-center ">
        <div className="border border-gray-300 p-4 rounded w-full max-w-screen-md">
          {/* 1 */}
          <div className="border-b border-gray-300 mb-4 pb-4">
            <header className="flex items-center justify-between">
              <div className="flex items-center">
                <h1 className="text-3xl text-black font-extrabold animate-pulse">Mapa UNAS</h1> {/* Cambiado a text-2xl */}
              </div>
              <button className="text-black text-xl hover:text-yellow-500 border-transparent hover:bg-transparent font-semibold py-2 px-4 rounded focus:outline-none focus:ring focus:ring-transparent active:shadow-md active:bg-transparent transform transition-transform hover:-translate-y-1 active:-translate-y-0.5 ">
                <img src="../assets/icons/buscador.png" className="w-8 h-8 mr-2" />
              </button>
            </header>
          </div>


        

          {/* 3 */}
        
          <div className="w-full h-82  border-b border-gray-300 mb-4 pb-4">
            <div className="w-full h-82 border text-black bg-stone-200 border-gray-300 p-2">
              <img src="../assets/icons/mapa.png" className="w-full h-full object-cover" alt="Mapa" />
            </div>
          </div>


        </div>
      </div>

      <Footer />
    </>
  );
}

export default Map;

