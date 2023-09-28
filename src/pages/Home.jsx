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
          texto="Quisiera saber cuando empieza el siguiente semestre en la Cepre Unas"
          Titulo="Saben cuando empieza la cepre?"
        />
        <Publicacion
          texto="La facultad que ganó el corso este año es AGRONOMÍA"
          Titulo="La facultad ganadora del corso"
        />
        <Publicacion
          texto="Estén atentos, ni bien termina la lluvia salimos al corso"
          Titulo="La salida al corso se pospone unos minutos en lo que la lluvia termina"
        />
        <Publicacion
          texto="Se saldrá a las 3 PM por las respectivas puertas según cada facultad"
          Titulo="La salida al corso será a las 3 PM"
        />
        <Publicacion
          texto="Hace poco tuve la oportunidad e ingresé a la universidad después de mucho tiempo y
           mientras eso estuve trabajando en empleos sencillos que te pagaban el mínimo, por
           eso quise estudiar y mejorar para el futuro, pero cerca de terminar este primer semestre me
           siento decepcionada, sabía que era difícil porque no soy la mejor estudiante que me sentiría 
           cansada y que hay que estudiar mucho, pero antes en mi trabajo me sentía más útil y veía mis logros,
           podía mantenerme y queria mucho a mis colegas de trabajo que casi siempre eran mayores.
           Pero aquí no logro conectarme con mis compañeros y mis notas son bajas y trabajo a medias.
           Muchos me felicitan por estar en la universidad y siento culpa por sentirme desgraciada y creo
           robe un cupo a alguien que si lo necesitaba. Con las personas con las que he hablado me
           dicen que me aguante que no me esfuerzo lo suficiente y que va a mejorar con el tiempo,
          otros me aconsejan que deje de estudiar por qué no me ven feliz y desde el principio no me veía ilusionada.
          Me gustaría escuchar sus recomendaciones."
          Titulo="Hola no sé qué hacer..."
        />
        <Publicacion
          texto="Hola, sinceramente puede que mi pregunta no deba ir aquí pero necesito opiniones, estoy preparándome
          para entrar a la carrera de mecatrónica y me gustaría saber que tan necesaria es una calculadora gráfica o que
          tan útil puede llegar a ser, actualmente tengo una científica la fx 570 LA PLUS de casio , he visto que las calculadoras
          gráficas tienen funciones útiles que agilizan el tiempo pero valdrá la pena comprar una para la carrera? He oído que no las
          sueles dejar usar en lo exámenes y no creo que sea buena idea hacerme dependiente de una si luego no podré usarla al 100%"
          Titulo="Es buena idea comprar una calculadora gráfica?"
        />
        <Publicacion
          texto=" "
          Titulo="Gente que esté ejerciendo/estudiando la carrera de Contabilidad,
          ¿Cómo fue su experiencia? ¿recomiendan seguirla? ¿Se encuentra trabajo de eso? Gracias."
        />
      </div>
      <Footer />
    </div>
  );
}

export default Home;
