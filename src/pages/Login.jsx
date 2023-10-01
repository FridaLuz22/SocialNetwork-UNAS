import { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { useNavigate } from 'react-router-dom';
import '/i18n.js';

function Login() {
  const navigateTo = useNavigate();
  const [isRegistering, setIsRegistering] = useState(false);
  const { t, i18n } = useTranslation(); // Agrega i18n aquí

  const toggleRegistration = () => {
    setIsRegistering(!isRegistering);
  };

  const changeLanguage = (language) => {
    i18n.changeLanguage(language); // Cambiar el idioma usando i18n
  };

  const iniciarSesion = () => {
    navigateTo('/Home');
  };

  
  return (
    <div className="flex flex-col items-center h-screen">
      <div className="self-end mt-0.1">
        <select
          className="text-black"
          name="idiomas"
          id="idiomas"
          onChange={(e) => changeLanguage(e.target.value)}
          value={i18n.language}
        >
          <option value="es">Español</option>
          <option value="en">English</option>
          <option value="ch">中国人</option>
        </select>
      </div>
      <div >
        <img src="../assets/logos/LogoREDUNAS_1.png" alt=""  className="w-40 h-40" />
      </div>
      
      <div className="p-8   space-y-5 rounded-[40px] bg-stone-200">
        <div className="flex items-center   justify-around  bg-stone-200">
          {!isRegistering ? (
            <>
              <a
                href="#"
                className="text-1xl text-black text-center animate-pulse font-bold border-b-2 border-yellow-400 bg-stone-200"
              >
                {t('initSesion')}
              </a>
              <a href="#" className="text-black bg-stone-200 active" onClick={toggleRegistration}>
                {t('register')}
              </a>
            </>
          ) : (
            <>
              <a href="#" className="text-black bg-stone-200" onClick={toggleRegistration}>
                {t('initSesion')}
              </a>
              <a
                href="#"
                className="text-1xl  text-black text-center animate-pulse font-bold border-b-2 border-yellow-400 bg-stone-200"
              >
                {t('register')}
              </a>
            </>
          )}
        </div>
        <div className="w-full ">
          <form action="#" className="bg-stone-200">
            {!isRegistering && (
              <>
                <div className="mb-2 bg-stone-200">
                  <label className="text-black text-sm bg-stone-200" htmlFor="email">
                    {t('emailAddress')}
                  </label>
                  <input
                    className="w-full mb-2 text-sm bg-stone-200 input input-bordered input-info"
                    type="email"
                    id="email"
                    placeholder={t('email')}
                  />
                </div>
                <div className="mb-2 bg-stone-200">
                  <label htmlFor="password" className="text-black text-sm bg-stone-200">
                    {t('password')}
                  </label>
                  <input
                    type="password"
                    id="password"
                    placeholder="********"
                    className="w-full mb-2 text-sm bg-stone-200 input input-bordered input-info"
                  />
                  <a href="#" className="block text-right text-sm bg-stone-200">
                    <span className="text-blue-500 bg-stone-200">{t('¿Olvidaste la contraseña?')}</span>
                  </a>
                </div>
                <label className="mb-2 text-sm text-black bg-stone-200">
                  <input type="checkbox" className="bg-stone-200 text-white" /> {t('Recuerdame')}
                </label>

                <div>
                  <input
                    type="submit"
                    value={t('initSesion')}
                    className="  w-full btn btn-active btn-accent"
                    onClick={iniciarSesion}
                  />
                </div>
              </>
            )}
            {isRegistering && (
              <>
                <div className="bg-stone-200 ">
                  <div className="mb-0.1 bg-stone-200 ">
                    <label htmlFor="fullName" className="text-black text-sm bg-stone-200">
                      {t('fname')}
                    </label>
                    <input
                      type="text"
                      id="fullName"
                      placeholder={t('yourfname')}
                      className="w-full mb-2 text-sm bg-stone-200 input input-bordered input-info"
                    />
                  </div>
                  
                  <div className="mb-0.1 bg-stone-200">
                    <label htmlFor="registerEmail" className="text-black text-sm bg-stone-200">
                      {t('Correo institucional')}
                    </label>
                    <input
                      type="email"
                      id="registerEmail"
                      placeholder={t('email')}
                      className="w-full mb-2 text-sm bg-stone-200 input input-bordered input-info"
                    />
                  </div>
                  <div className="mb-0.1 bg-stone-200">
                    <label htmlFor="registerPassword" className="text-black text-sm bg-stone-200">
                      {t('password')}
                    </label>
                    <input
                      type="password"
                      id="registerPassword"
                      placeholder="********"
                      className="w-full mb-2 text-sm bg-stone-200 input input-bordered input-info"
                    />
                  </div>
                  <div className="mb-0.1 bg-stone-200">
                    <label htmlFor="confirmRegisterPassword" className="text-black text-sm bg-stone-200">
                      {t('Confirmar contraseña')}
                    </label>
                    <input
                      type="password"
                      id="confirmRegisterPassword"
                      placeholder="********"
                      className="w-full mb-2 text-sm bg-stone-200 input input-bordered input-info"
                    />
                  </div>
                  <label className="mb-2 text-sm text-black bg-stone-200">
                    <input type="checkbox" className="mb-2   bg-stone-200" /> {t('terms')}
                  </label>
                  <div>
                    <input
                      type="submit"
                      value={t('register')}
                      className="w-full  btn btn-active btn-accent"
                    />
                  </div>
                </div>
              </>
            )}
            <div>
              <p className="mt-2 text-sm text-black cursor-pointer bg-stone-200" onClick={toggleRegistration}>
                {isRegistering ? t('siregi') : t('noregi')}
              </p>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}

export default Login;
