import React from 'react';
import { useNavigate } from 'react-router-dom';

function Footer() {
  const navigateTo = useNavigate();

  const Home = () => {
    navigateTo('/Home');
  };

  const Videos = () => {
    navigateTo('/Videos');
  };

  const Publicar = () => {
    navigateTo('/Publicar');
  };

  const Mapa = () => {
    navigateTo('/Map');
  };

  const Profile = () => {
    navigateTo('/Profile');
  };

  return (
    <footer className="sticky bottom-0 left-0 z-10">
      <div className="flex justify-center w-full px-4">
        <div className="flex gap-20">
          <a
            href=""
            onClick={Home}
            className="w-6 h-6 mr-2 border-transparent hover:bg-transparent rounded focus:outline-none focus:ring focus:ring-transparent active:shadow-md active:bg-transparent transform transition-transform hover:-translate-y-1 active:-translate-y-0.5"
          >
            <img src="../assets/icons/icon_logo.png" alt=""  />
          </a>
          <a
            href=""
            onClick={Videos}
            className="w-6 h-6 mr-2 border-transparent hover:bg-transparent rounded focus:outline-none focus:ring focus:ring-transparent active:shadow-md active:bg-transparent transform transition-transform hover:-translate-y-1 active:-translate-y-0.5"
          >
            <img src="../assets/icons/icon_video.png" alt="" />
          </a>
          <a
            href=""
            onClick={Publicar}
            className="w-6 h-6 mr-2 border-transparent hover:bg-transparent rounded focus:outline-none focus:ring focus:ring-transparent active:shadow-md active:bg-transparent transform transition-transform hover:-translate-y-1 active:-translate-y-0.5"
          >
            <img src="../assets/icons/icon_more.png" alt="" />
          </a>
          <a
            href=""
            onClick={Mapa}
            className="w-6 h-6 mr-2 border-transparent hover:bg-transparent rounded focus:outline-none focus:ring focus:ring-transparent active:shadow-md active:bg-transparent transform transition-transform hover:-translate-y-1 active:-translate-y-0.5"
          >
            <img src="../assets/icons/icon_map.png" alt="" />
          </a>
          <a
            href=""
            onClick={Profile}
            className="w-6 h-6 mr-2 border-transparent hover:bg-transparent rounded focus:outline-none focus:ring focus:ring-transparent active:shadow-md active:bg-transparent transform transition-transform hover:-translate-y-1 active:-translate-y-0.5"
          >
            <img src="../assets/icons/cuenta_icon.png" alt="" />
          </a>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
