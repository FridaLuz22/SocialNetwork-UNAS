import Header from '../components/Header';
import Footer from '../components/Footer';

function Home() {
  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      
      <div className="flex-grow p-4 flex flex-col items-center">
      
        <div className="p-4 border  mb-4 text-center" style={{ width: '90%' }}>
          <h2 className="text-xl font-semibold">Publicación 1</h2>

                <div className="flex flex-wrap justify-center items-center space-x-40 space-y-4 md:space-y-0">
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
        <div className="p-4 border mb-4 text-center" style={{ width: '90%' }}>
          <h2 className="text-xl font-semibold">Publicación 1</h2>
          <div className="flex flex-wrap justify-center items-center space-x-40 space-y-4 md:space-y-0">
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
        <div className="p-4 border mb-4 text-center" style={{ width: '90%' }}>
          <h2 className="text-xl font-semibold">Publicación 1</h2>
          <div className="flex flex-wrap justify-center items-center space-x-40 space-y-4 md:space-y-0">
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
      
      
      <Footer />
    </div>
  );
}

export default Home;
