import React from 'react';

function Publicacion({ texto, numero }) {
  const className = `frame-${numero}`;

  return (
    <div className={className}>
      <div className="p-4 mb-4 text-center border" style={{ width: '90%' }}>
        <h2 className="text-xl font-semibold">Publicación {numero}</h2>
        <p>{texto}</p>
        <div className="flex flex-wrap items-center justify-center space-x-40 space-y-4 md:space-y-0">
          <button className="btn btn-base-100 btn-outline btn-with-image btn-image1">
            <img src="../assets/icons/reaccion.png" alt="" className="w-6 h-6" />
          </button>
          <button className="btn btn-base-100 btn-outline btn-with-image btn-image1">
            <img src="../assets/icons/comentar.png" alt="" className="w-6 h-6" />
          </button>
          <button className="btn btn-base-100 btn-outline btn-with-image btn-image1">
            <img src="../assets/icons/compartir.png" alt="" className="w-6 h-6" />
          </button>
        </div>
      </div>
    </div>
  );
}

export default Publicacion;
