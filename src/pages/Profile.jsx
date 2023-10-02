import React from 'react';
import Footer from '../components/Footer';
import { useNavigate} from 'react-router-dom';

function Profile() {
  const navigateTo = useNavigate();

  const Login=()=>{
    navigateTo('/Login');
  };


  const containerStyle = {
    minHeight: '100vh',
    backgroundColor: 'gray',
  };

  return (
    <>
      <div style={containerStyle} className="flex justify-center items-center">
        <div className="border border-gray-300 p-4 rounded w-full max-w-screen-md">
          {/* 1 */}
          <div className="border-b border-gray-300 mb-4 pb-4">
            <header className="flex items-center justify-between">
              <div className="flex items-center">
                <h1 className="text-3xl text-black font-extrabold animate-pulse">Menu</h1>
              </div>
              <button className="text-black text-xl hover:text-yellow-500 border-transparent hover:bg-transparent font-semibold py-2 px-4 rounded focus:outline-none focus:ring focus:ring-transparent active:shadow-md active-bg-transparent transform transition-transform hover:-translate-y-1 active:-translate-y-0.5 ">
                <img src="../assets/icons/buscador.png" className="w-8 h-8 mr-2" />
              </button>
            </header>
          </div>

          {/* 2 */}
          <div className="border-b mb-4 pb-4 border-transparent hover-bg-transparent text-black font-semibold py-2 px-4 rounded focus:outline-none focus:ring focus:ring-transparent active:shadow-md active-bg-transparent transform transition-transform hover:-translate-y-1 active:-translate-y-0.5">
            <button className="text-black font-bold flex items-center">
              <img src="../assets/icons/PerfilUsuario.png" alt="Cámara" className="w-8 h-8 mr-2" />
              Jecner Núñez
            </button>
          </div>

           {/* 1 */}
           <div className="border-b border-gray-300 mb-4 pb-4">
            <header className="flex items-center justify-between">
              <div className="border-b border-gray-300 mb-4 pb-4 hover-bg-stone-200 text-black font-semibold py-2 px-4 rounded focus:outline-none focus:ring focus:ring-stone-200 active:shadow-md active-bg-stone-100 transform transition-transform hover:-translate-y-1 active:-translate-y-0.5 ">
                  <button className="text-black flex items-center">
                    <img src="../assets/icons/Grupos.png" alt="Cámara" className="w-6 h-6 mr-2" />
                    Grupos
                  </button>
              </div>
              <div className="border-b border-gray-300 mb-4 pb-4 hover-bg-stone-200 text-black font-semibold py-2 px-4 rounded focus:outline-none focus:ring focus:ring-stone-200 active:shadow-md active-bg-stone-100 transform transition-transform hover:-translate-y-1 active:-translate-y-0.5 ">
                    <button className="text-black flex items-center">
                      <img src="../assets/icons/Usuarios.png" alt="Cámara" className="w-6 h-6 mr-2" />
                      Usuarios
                    </button>
              </div>
            </header>
          </div>

          {/* 4 */}
          <div className="border-b border-gray-300 mb-4 pb-4 hover-bg-stone-200 text-black font-semibold py-2 px-4 rounded focus:outline-none focus:ring focus:ring-stone-200 active:shadow-md active-bg-stone-100 transform transition-transform hover:-translate-y-1 active:-translate-y-0.5 ">
            <button className="text-black flex items-center">
              <img src="../assets/icons/Ayuda.png" alt="Cámara" className="w-4 h-4 mr-2" />
              Ayuda & Soporte
            </button>
          </div>

          {/* 5 */}
          <div className="border-b border-gray-300 mb-4 pb-4 hover-bg-stone-200 text-black font-semibold py-2 px-4 rounded focus:outline-none focus:ring focus:ring-stone-200 active:shadow-md active-bg-stone-100 transform transition-transform hover:-translate-y-1 active:-translate-y-0.5">
            <button className="text-black flex items-center">
              <img src="../assets/icons/Engranaje.png" alt="Cámara" className="w-4 h-4 mr-2" />
              Configuración  & Privacidad
            </button>
          </div>

          {/* 6 */}
          <div className="flex justify-center items-center mb-4">
            <div className="border-b border-gray-300 pb-4 hover:bg-stone-200 text-black font-semibold py-2 px-4 rounded focus:outline-none focus:ring focus:ring-stone-200 active:shadow-md active:bg-stone-100 transform transition-transform hover:-translate-y-1 active:-translate-y-0.5">
              <button className="text-black flex items-center" onClick={Login}>
                Cerrar Sesión
              </button>
            </div>
           
          </div>
          
        </div>
      </div>
      <Footer />
    </>
  );
}

export default Profile;
