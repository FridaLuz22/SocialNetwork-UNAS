import { useNavigate} from 'react-router-dom';

function Header(){
  const navigateTo = useNavigate();
  const Notificacion=()=>{
    navigateTo('/Notification');
  };
  return(
    <header className="">
      <div className="flex items-center justify-between px-4 pt-6 ">
        <img src="../public/assets/logos/LETRAS RED UNAS.png" alt="" />
        <div className="flex items-center gap-4">
          <a href="">
            <img src="../assets/icons/buscador.png" alt="" />
          </a>
          <a href="" onClick={Notificacion}>
            <img src="../assets/icons/NOTIFICATION.png" alt="" />
          </a>
          <a href="">
            <img src="../assets/icons/message.png" alt="" />
          </a>
        </div>
      </div>
    </header>
  )
}

export default Header;