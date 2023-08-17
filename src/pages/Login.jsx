

function Login(){
  return(
    <>
      <div className="flex items-center justify-center">
        <img src="..\public\assets\logos\LogoREDUNAS_1.png" alt=""/>
      </div>
      <div className="bg-stone-200">
        <div className="flex items-center justify-around">
          <a href="">Iniciar Sesión</a>
          <a href="">Registrarse</a>
        </div>
        <div>
          <form action="">
            <div>
              <label htmlFor="">Correo Institucional</label>
              <input type="email" placeholder="example@unas.edu.pe"/>
            </div>
            <div>
              <label htmlFor="">Contraseña</label>
              <input type="password" placeholder="********"/>
              <a href="">¿Olvidaste la contraseña?</a>
            </div>
            <input type="checkbox" /> Recuerdame
            <div>
              <input type="submit" value="Iniciar Sesión" />
              <span>¿No tienes una cuenta?</span>
              <a href="">Regístrate</a>
            </div>          
          </form>
        </div>
      </div>
    </>
  )
}

export default Login;