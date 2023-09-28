import Footer from '../components/Footer';

function Profile(){
  return (
    <>
      <header className="">
        <a href="">
          <img src="../assets/icons/flecha.png" alt="" />
        </a>
        <div className="flex items-center justify-between px-4 pt-8 ">
        <h2>Perfil</h2>
        <div className="flex items-center gap-6">
            <a href="">
              <img src="../assets/icons/editar.png" alt="" />
            </a>
            <a href="">
              <img src="../assets/icons/message.png" alt="" />
            </a>
          </div>
        </div>
      </header>  
      <div className="flex items-center gap-8">
            <a href="">
              <img src="../assets/icons/usuario_avatar.png" alt="" />
            </a>
            <h2>Nombre usuario</h2>
      </div>
      <Footer />
    </>
  );
  }
  
  export default Profile;
