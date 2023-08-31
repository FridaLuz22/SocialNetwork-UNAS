import { useState } from 'react';
// import Home from './pages/Home';
import { useNavigate} from 'react-router-dom';
function Login() {
  const navigateTo = useNavigate();
  const [isRegistering, setIsRegistering] = useState(false);

  const toggleRegistration = () => {
    setIsRegistering(!isRegistering);
  };

  const iniciarSesion =()=>{
    navigateTo('/Home');
  }

  return ( 
    <div className="flex flex-col items-center justify-center h-screen">
      <div className="mb-4">
        <img src="../assets/logos/LogoREDUNAS_1.png" alt="" />
      </div>
      <div className="p-4 space-y-10 rounded-lg bg-stone-200">
        <div className="flex items-center justify-around mb-2 bg-stone-200">
          
          {!isRegistering ? (
            <>         
              <a href="#" className= "text-black bg-stone-200 active">Iniciar Sesión</a>
              <a href="#" className= "text-black bg-stone-200 active" onClick={toggleRegistration}>Registrarse</a>
            </>
          ) : (
            <>
              <a href="#" className= "text-black bg-stone-200" onClick={toggleRegistration}>Iniciar Sesión</a>
              
              <a href="#" className="text-black bg-stone-200 active ">Registrarse</a>
            </>
          )}
        </div>
        <div className="w-full ">
          <form action="#" className ="bg-stone-200">
            {!isRegistering && (
              <>
                <div className="mb-2 bg-stone-200">
                  <label className= "text-black bg-stone-200" htmlFor="email">Correo Electrónico</label>
                  <input   className="w-full max-w-xs bg-stone-200 input input-bordered input-info" 
                    type="email"
                    id="email"
                    placeholder="example@unas.edu.pe"
                    
                  />
                </div>
                <div className="mb-2 bg-stone-200">
                  <label htmlFor="password" className ="text-black bg-stone-200">Contraseña</label>
                  <input 
                    type="password"
                    id="password"
                    placeholder="********"
                    className="w-full max-w-xs bg-stone-200 input input-bordered input-info"
                  />
                  <a href="#" className="block text-center bg-stone-200 ">¿Olvidaste la contraseña?</a>
                </div>
                <label className="mb-2 text-black bg-stone-200">
                  <input type="checkbox"  /> Recuérdame
                </label>
                <div>
                  <input
                  type="submit"
                  value={'Iniciar Sesión'}
                  className="w-full btn btn-active btn-accent" 
                  onClick={iniciarSesion}
                  />
                </div>           
              </>
            )}
            {isRegistering && (
              <div>
                <div className='mb-0.1 bg-stone-200 '>
                  <label htmlFor="fullName" className='text-black bg-stone-200'>Nombre Completo</label>
                  <input
                    type="text"
                    id="fullName"
                    placeholder="Tu Nombre Completo"
                    className="w-full max-w-xs bg-stone-200 input input-bordered input-info"
                  />
                </div >
                <div className="mb-2 bg-stone-200">
                  <label htmlFor="phone" className='text-black bg-stone-200'>Teléfono</label>
                  <input
                    type="tel"
                    id="phone"
                    placeholder="Número de Teléfono"
                    className="w-full max-w-xs bg-stone-200 input input-bordered input-info"
                  />
                </div>
                <label className="mb-2 text-black bg-stone-200">
                  <input type="checkbox"  /> Acepto los términos y condiciones
                </label>
                <div>
                  <input
                  type="submit"
                  value={'Registrarse'}
                  className="w-full btn btn-active btn-accent"
                  />
                </div>  
              </div>
            )}
            <div>
              <p  className="mt-2 text-black cursor-pointer bg-stone-200"
                  onClick={toggleRegistration}>
                  {isRegistering
                    ? '¿Ya tienes una cuenta? Inicia Sesión'
                    : '¿No tienes una cuenta? Regístrate'}
              </p>
            </div>
          </form>
        </div>
      </div>
    </div>
    
  );
}

export default Login;
