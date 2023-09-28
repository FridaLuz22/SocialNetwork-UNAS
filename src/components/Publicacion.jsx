import React from 'react';

function Publicacion({ texto, Titulo }) {
  const className = Titulo;

  const iconStyles = {
    width: '30px',
    height: '30px',
  };

  const tituloStyles = {
    fontSize: '1.4rem', 
    fontWeight: 'bold', 
    marginBottom: '1rem', 
  };

  const textoStyles = {
    fontSize: '1.1rem',
  };

  return (
    <div className="p-4 mb-4 text-center border" style={{ width: '90%' }}>
      <h2 style={tituloStyles}>{Titulo}</h2>
      <p style={textoStyles}>{texto}</p>
      <div className="flex items-center justify-center space-x-40 space-y-4 md:space-y-0">
        <div className="flex items-center justify-center space-x-40 space-y-4 md:space-y-0">
          <div className="flex flex-col items-center">
            <button className="btn btn-base-100 btn-outline btn-with-image btn-image1">
              <img src="../assets/icons/reaccion.png" alt="" style={iconStyles} />
            </button>
          </div>
          <div className="flex flex-col items-center">
            <button className="btn btn-base-100 btn-outline btn-with-image btn-image1">
              <img src="../assets/icons/comentar.png" alt="" style={iconStyles} />
            </button>
          </div>
          <div className="flex flex-col items-center">
            <button className="btn btn-base-100 btn-outline btn-with-image btn-image1">
              <img src="../assets/icons/compartir.png" alt="" style={iconStyles} />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Publicacion;
