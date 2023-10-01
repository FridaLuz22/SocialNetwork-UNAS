import React from 'react';

function CreatePost() {
  const containerStyle = {
    minHeight: '100vh', //  altura de la ventana
    backgroundColor: 'white', // Color de fondo 
  };

  return (
    <div style={containerStyle} className="flex justify-center items-center">
      <div className="border border-gray-300 p-4 rounded w-full max-w-screen-md">
        {/* 1*/}
        <div className="border-b border-gray-300 mb-4 pb-4">
          <header className="flex items-center justify-between">
            <div className="flex items-center">
              <button className="flex items-center text-black">
                <img
                  src="../assets/icons/FlechaIzquierda.png"  // Ruta 
                  alt="Botón de Imagen"
                  className="w-6 h-6 mr-2 border-transparent  hover:bg-transparent  rounded focus:outline-none focus:ring focus:ring-transparent active:shadow-md active:bg-transparent transform transition-transform hover:-translate-y-1 active:-translate-y-0.5 "  // Clases para establecer el tamaño de la imagen
                />
                
              </button>
              <h1 className="text-xl  text-black font-extrabold animate-pulse">Crear Publicación</h1>
            </div>
            <button className="text-black text-xl  hover:text-yellow-500 border-transparent  hover:bg-transparent  font-semibold py-2 px-4 rounded focus:outline-none focus:ring focus:ring-transparent active:shadow-md active:bg-transparent transform transition-transform hover:-translate-y-1 active:-translate-y-0.5 ">Listo</button>
          </header>
        </div>

        {/* 2 */}
        <div className="border-b mb-4 pb-4  border-transparent  hover:bg-transparent text-black font-semibold py-2 px-4 rounded focus:outline-none focus:ring focus:ring-transparent active:shadow-md active:bg-transparent transform transition-transform hover:-translate-y-1 active:-translate-y-0.5">
          <button className="text-black font-bold flex items-center">
            <img src="../assets/icons/PerfilUsuario.png" alt="Cámara" className="w-8 h-8 mr-2  " />
            Jecner Núñez
          </button>
        </div>

        {/* 3 */}
        <div className="border-b border-gray-300 mb-4 pb-4">
          <textarea
            className="w-full border text-black bg-stone-200 border-gray-300 p-2 h-59" 
            placeholder="Escribe tu publicación aquí"
          ></textarea>
        </div>

        {/* 4*/}
        <div className="border-b border-gray-300 mb-4 pb-4 hover:bg-stone-200 text-black font-semibold py-2 px-4 rounded focus:outline-none focus:ring focus:ring-stone-200 active:shadow-md active:bg-stone-100 transform transition-transform hover:-translate-y-1 active:-translate-y-0.5 ">

          <button className="text-black flex items-center">
            <img src="../assets/icons/Camara.png" alt="Cámara" className="w-4 h-4 mr-2" />
            Cámara
          </button>
        </div>


        {/* 5*/}
        
        <div className="border-b border-gray-300 mb-4 pb-4 hover:bg-stone-200 text-black font-semibold py-2 px-4 rounded focus:outline-none focus:ring focus:ring-stone-200 active:shadow-md active:bg-stone-100 transform transition-transform hover:-translate-y-1 active:-translate-y-0.5">
          <button className="text-black flex items-center">
            <img src="../assets/icons/FotoVideo.png" alt="Cámara" className="w-4 h-4 mr-2" />
            Foto/Video
          </button>
        </div>

        {/*6 */}
        
        <div className="border-b border-gray-300 mb-4 pb-4 hover:bg-stone-200 text-black font-semibold py-2 px-4 rounded focus:outline-none focus:ring focus:ring-stone-200 active:shadow-md active:bg-stone-100 transform transition-transform hover:-translate-y-1 active:-translate-y-0.5">
          <button className="text-black flex items-center">
            <img src="../assets/icons/Etiquetar.png" alt="Cámara" className="w-4 h-4 mr-2" />
            Etiquetar Personas
          </button>
        </div>
        

        {/* 7*/}
        <div className="border-b border-gray-300 mb-4 pb-4 hover:bg-stone-200 text-black font-semibold py-2 px-4 rounded focus:outline-none focus:ring focus:ring-stone-200 active:shadow-md active:bg-stone-100 transform transition-transform hover:-translate-y-1 active:-translate-y-0.5">
          <button className="text-black flex items-center">
            <img src="../assets/icons/EnVivo.png" alt="Cámara" className="w-4 h-4 mr-2" />
            En Vivo
          </button>
        </div>
      </div>
    </div>
  );
}

export default CreatePost;
