import { useNavigate} from 'react-router-dom';

function Footer() {
  const navigateTo = useNavigate();

  const Home=()=>{
    navigateTo('/Home');
  };

  const Videos=()=>{
    navigateTo('/Videos') 
  };

  const Publicar =()=>{
    navigateTo('/Publicar') 
  };

  const Mapa=()=>{
    navigateTo('/Map') 
  };

  const Profile=()=>{
    navigateTo('/Profile') 
  };

  

  

  return (
    
    <footer>
      <div className="fixed flex justify-center w-full px-4 bottom-3">
        <div className="flex gap-20"> {/* Aumenté el valor de gap a 8 para más separación */}
          <a href=""  onClick={Home} >
            <img src="../assets/icons/icon_logo.png" alt=""  />
          </a>
          <a href="" onClick={Videos}>
            <img src="../assets/icons/icon_video.png" alt="" />
          </a>
          <a href="" onClick={Publicar}>
            <img src="../assets/icons/icon_more.png" alt="" />
          </a>
          <a href="" onClick={Mapa}>
            <img src="../assets/icons/icon_map.png" alt="" />
          </a>
          <a href="" onClick={Profile}>
            <img src="../assets/icons/cuenta_icon.png" alt="" />
          </a>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
