import Header from '../components/Header';
import Footer from '../components/Footer';
import Publicacion from '../components/Publicacion';

function Home() {
  console.log("BYEEEE")
  return (
    <div className="flex flex-col min-h-screen">
      <Header /> 
      <div className="flex flex-col items-center flex-grow p-4">
        <Publicacion
          texto="Acá en esta publicación tenemos texto."
          numero={1}
        />
        <Publicacion
          texto="Pensandolo bien quisiera poner este texto."
          numero={2}
        />
        <Publicacion
          texto="Mejor volvamos a: Acá en esta publicación tenemos texto."
          numero={3}
        />
        <Publicacion
          texto="Mejor volvamos a: Acá en esta publicación tenemos texto."
          numero={4}
        />
        <Publicacion
          texto="Mejor volvamos a: Acá en esta publicación tenemos texto."
          numero={5}
        />
        <Publicacion
          texto="Mejor volvamos a: Acá en esta publicación tenemos texto."
          numero={6}
        />
        <Publicacion
          texto="Mejor volvamos a: Acá en esta publicación tenemos texto."
          numero={7}
        />
      </div>
      <Footer />
    </div>
  );
}

export default Home;
