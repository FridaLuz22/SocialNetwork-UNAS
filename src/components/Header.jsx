

function Header(){
  return(
    <header className="">
      <div className="flex items-center justify-between px-4 pt-6 ">
        <img src="../public/assets/logos/LETRAS RED UNAS.png" alt="" />
        <div className="flex items-center gap-4">
          <a href="">
            <img src="../public/assets/icons/buscador.png" alt="" />
          </a>
          <a href="">
            <img src="../public/assets/icons/NOTIFICATION.png" alt="" />
          </a>
          <a href="">
            <img src="../public/assets/icons/message.png" alt="" />
          </a>
        </div>
      </div>
    </header>
  )
}

export default Header;