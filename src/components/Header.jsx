import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

function Header() {
  const navigateTo = useNavigate();
  const [searchVisible, setSearchVisible] = useState(false);
  const [searchText, setSearchText] = useState('');

  const Notification = () => {
    navigateTo('/Notification');
  };

  const Messages = () => {
    navigateTo('/Messages');
  };

  const toggleSearch = () => {
    setSearchVisible(!searchVisible);
    setSearchText(''); // Limpiar el texto de búsqueda cuando se muestra el campo de búsqueda
  };

  const handleInputChange = (e) => {
    setSearchText(e.target.value);
  };

  return (
    <header className="sticky top-0 left-0 z-10 shadow-md p-4">
      <div className="flex items-center justify-between px-4 pt-6">
        <img src="../public/assets/logos/LETRAS RED UNAS.png" alt="" />
        <div className="flex items-center gap-4">
          {searchVisible ? (
            <div className="relative">
              <input
                type="text"
                placeholder="Buscar..."
                className="border text-black rounded-md p-2 pl-8 focus:outline-none focus:ring focus:ring-transparent"
                value={searchText}
                onChange={handleInputChange}
              />
              <div
                className="absolute left-2 top-2 cursor-pointer"
                onClick={toggleSearch}
              >
                <img
                  src="../assets/icons/close.png"
                  alt="X"
                  className="w-4 h-4 text-red-500"
                />
              </div>
            </div>
          ) : (
            <a
              href=""
              onMouseDown={toggleSearch}
              className="w-8 h-8 mr-2 border-transparent hover:bg-transparent rounded focus:outline-none focus:ring focus:ring-transparent active:shadow-md active:bg-transparent transform transition-transform hover:-translate-y-1 active:-translate-y-0.5"
            >
              <img src="../assets/icons/buscador.png" alt="" />
            </a>
          )}
          <a
            href=""
            onClick={Notification}
            className="w-8 h-8 border-transparent hover:bg-transparent rounded focus:outline-none focus:ring focus:ring-transparent active:shadow-md active:bg-transparent transform transition-transform hover:-translate-y-1 active:-translate-y-0.5"
          >
            <img src="../assets/icons/NOTIFICATION.png" alt="" />
          </a>
          <a
            href=""
            onClick={Messages}
            className="w-8 h-8 border-transparent hover:bg-transparent rounded focus:outline-none focus:ring focus:ring-transparent active:shadow-md active:bg-transparent transform transition-transform hover:-translate-y-1 active:-translate-y-0.5"
          >
            <img src="../assets/icons/message.png" alt="" />
          </a>
        </div>
      </div>
    </header>
  );
}

export default Header;



