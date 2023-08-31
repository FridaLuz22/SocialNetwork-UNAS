import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';
import '/i18n.js'

function Login() {
  
  const [isRegistering, setIsRegistering] = useState(false);
  const { t, i18n } = useTranslation(); // Agrega i18n aquí

  const toggleRegistration = () => {
    setIsRegistering(!isRegistering);
  };

  const changeLanguage = (language) => {
    console.log("hola");
    i18n.changeLanguage(language); // Cambiar el idioma usando i18n
    console.log("cambiado")
    console.log(language)
    console.log(i18n.language)
  };  

  return (
    
    <div className="flex flex-col items-center  h-screen">
      <div className="mt-4 self-end">
      <select className='text-black' name="idiomas" id="idiomas"
      onChange={(e) => changeLanguage(e.target.value)}
      value={i18n.language}>
        <option value="es">Español</option>
        <option value="en">English</option>
        <option value="ch">中国人</option>
      </select>
      </div>
      <div className="mt-4 mb-2.7">
        <img src="../assets/logos/LogoREDUNAS_1.png" alt="" />
      </div>
      <div className="bg-stone-200 p-4 rounded-lg space-y-10">
        <div className=" bg-stone-200 flex items-center justify-around mb-2 ">
          
          {!isRegistering ? (
            <>
            
              <a href="#" className= "bg-stone-200 text-black active">{t('initSesion')}</a>
              <a href="#" className= "bg-stone-200  text-black active" onClick={toggleRegistration}>{t('register')}</a>
            </>
          ) : (
            <>
              <a href="#" className= "bg-stone-200 text-black" onClick={toggleRegistration}>{t('initSesion')}</a>
              
              <a href="#" className="bg-stone-200 text-black active ">{t('register')}</a>
            </>
          )}
        </div>
        <div className=" w-full  ">
          <form action="#" className ="bg-stone-200">
            {!isRegistering && (
              <>
                <div className="mb-2 bg-stone-200">
                  <label className= "bg-stone-200 text-black" htmlFor="email">{t('emailAddress')}</label>
                  <input   className=" bg-stone-200 input input-bordered input-info w-full max-w-xs" 
                    type="email"
                    id="email"
                    placeholder={t('email')}
                    
                  />
                </div>
                <div className=" bg-stone-200 mb-2">
                  <label htmlFor="password" className ="bg-stone-200 text-black">{t('password')}</label>
                  <input 
                    type="password"
                    id="password"
                    placeholder="********"
                    className="bg-stone-200 input input-bordered input-info w-full max-w-xs"
                  />
                  <a href="#" className="block text-center bg-stone-200  ">{t('lblpass')}</a>
                </div>
              </>
            )}
            {isRegistering && (
              <div>
                <div className='mb-0.1 bg-stone-200 '>
                  <label htmlFor="fullName" className='bg-stone-200 text-black'>{t('fname')}</label>
                  <input
                    type="text"
                    id="fullName"
                    placeholder={t('yourfname')}
                    className=" bg-stone-200 input input-bordered input-info w-full max-w-xs "
                  />
                </div >
                <div className="mb-2 bg-stone-200">
                  <label htmlFor="phone" className='bg-stone-200 text-black'>{t('telf')}</label>
                  <input
                    type="tel"
                    id="phone"
                    placeholder={t('ntelf')}
                    className=" bg-stone-200 input input-bordered input-info w-full max-w-xs"
                  />
                </div>
              </div>
            )}
            <label className="bg-stone-200 mb-2 text-black">
              <input type="checkbox"  /> {t('terms')}
            </label>
            <div>
              <input
                type="submit"
                value={isRegistering ? t('register') : t('initSesion')}
                className="btn btn-active btn-accent w-full"
              />
              <p  className="mt-2 bg-stone-200 text-black cursor-pointer"
                  onClick={toggleRegistration}>
                  {isRegistering
                    ? t('siregi')
                    : t('noregi')}
                </p>

            </div>
          </form>
        </div>
      </div>
    </div>
    
  );
}

export default Login;
