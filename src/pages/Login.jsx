import React, { useState } from 'react';

function Login() {
  
  const [isRegistering, setIsRegistering] = useState(false);

  const toggleRegistration = () => {
    setIsRegistering(!isRegistering);
  };

  return (
    
    <div className="flex flex-col items-center justify-center h-screen">
      <div className="mb-4">
        <img src="../assets/logos/LogoREDUNAS_1.png" alt="" />
      </div>
      <div className="bg-stone-200 p-4 rounded-lg space-y-10">
        <div className=" bg-stone-200 flex items-center justify-around mb-2 ">
          
          {!isRegistering ? (
            <>
            
              <a href="#" className= "bg-stone-200 text-black active">Iniciar Sesión</a>
              <a href="#" className= "bg-stone-200  text-black active" onClick={toggleRegistration}>Registrarse</a>
            </>
          ) : (
            <>
              <a href="#" className= "bg-stone-200 text-black" onClick={toggleRegistration}>Iniciar Sesión</a>
              
              <a href="#" className="bg-stone-200 text-black active ">Registrarse</a>
            </>
          )}
        </div>
        <div className=" w-full  ">
          <form action="#" className ="bg-stone-200">
            {!isRegistering && (
              <>
                <div className="mb-2 bg-stone-200">
                  <label className= "bg-stone-200 text-black" htmlFor="email">Correo Electrónico</label>
                  <input   className=" bg-stone-200 input input-bordered input-info w-full max-w-xs" 
                    type="email"
                    id="email"
                    placeholder="example@unas.edu.pe"
                    
                  />
                </div>
                <div className=" bg-stone-200 mb-2">
                  <label htmlFor="password" className ="bg-stone-200 text-black">Contraseña</label>
                  <input 
                    type="password"
                    id="password"
                    placeholder="********"
                    className="bg-stone-200 input input-bordered input-info w-full max-w-xs"
                  />
                  <a href="#" className="block text-center bg-stone-200  ">¿Olvidaste la contraseña?</a>
                </div>
              </>
            )}
            {isRegistering && (
              <div>
                <div className='mb-0.1 bg-stone-200 '>
                  <label htmlFor="fullName" className='bg-stone-200 text-black'>Nombre Completo</label>
                  <input
                    type="text"
                    id="fullName"
                    placeholder="Tu Nombre Completo"
                    className=" bg-stone-200 input input-bordered input-info w-full max-w-xs "
                  />
                </div >
                <div className="mb-2 bg-stone-200">
                  <label htmlFor="phone" className='bg-stone-200 text-black'>Teléfono</label>
                  <input
                    type="tel"
                    id="phone"
                    placeholder="Número de Teléfono"
                    className=" bg-stone-200 input input-bordered input-info w-full max-w-xs"
                  />
                </div>
              </div>
            )}
            <label className="bg-stone-200 mb-2 text-black">
              <input type="checkbox"  /> Acepto los términos y condiciones
            </label>
            <div>
              <input
                type="submit"
                value={isRegistering ? 'Registrarse' : 'Iniciar Sesión'}
                className="btn btn-active btn-accent w-full"
              />
              <p  className="mt-2 bg-stone-200 text-black cursor-pointer"
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
