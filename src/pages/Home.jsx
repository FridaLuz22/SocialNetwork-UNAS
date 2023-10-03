import Header from '../components/Header';
import Footer from '../components/Footer';
import Publicacion from '../components/Publicacion';
import React, { useState, useEffect } from 'react';

function Home() {
  const [publicaciones, setPublicaciones] = useState([]);

  useEffect(() => {
    // Realiza una petición a la API
    fetch("https://gnius-redunas.rj.r.appspot.com/gnius/api/redunas/inicio/publicaciones-inicio")
      .then((response) => response.json())
      .then((data) => {
        // Guarda los datos en el estado
        setPublicaciones(data);
        console.log(data[0].descripcion);
        console.log(data);
      });
  }, []);
  return (
    <>
    <Header /> 
    {<ul>
      {
        publicaciones.length > 0 &&
        publicaciones.map((publicacion) => (
          <Publicacion
          texto={publicacion.descripcion}
          Titulo={publicacion.nombre}
          />
        ))
      }
    </ul>}
    <div className="flex flex-col min-h-screen">
      <div className="flex flex-col items-center flex-grow p-4 bg-gray-400">
        <Publicacion
          texto="Quisiera saber cuando empieza el siguiente semestre en la Cepre Unas"
          Titulo="Saben cuando empieza la cepre?"
          
        />
        <Publicacion
          texto="La facultad que ganó el corso este año es AGRONOMÍA"
          Titulo="La facultad ganadora del corso"
          imagenEnlace="https://images.unsplash.com/photo-1567015879523-fdef92821626?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1374&q=80"
        />
        <Publicacion
          texto="Estén atentos, ni bien termina la lluvia salimos al corso"
          Titulo="La salida al corso se pospone unos minutos en lo que la lluvia termina"
          imagenEnlace="https://scontent.fjau4-1.fna.fbcdn.net/v/t1.18169-9/25498193_2005718326336144_6861773075668260502_n.png?_nc_cat=111&ccb=1-7&_nc_sid=730e14&_nc_eui2=AeH7LiNghVKbEndjasGxkbrV3AVrmj9Uo2LcBWuaP1SjYhWy6D-GUvJWw5jdSUulimEY6Bw4iCj0xTGMXeE0jV8O&_nc_ohc=or-SaLwAKxYAX_obLC3&_nc_ht=scontent.fjau4-1.fna&oh=00_AfAECbrHuHp8nYP0kM-0un30UGobWV-h4VOFR9ybySS3UA&oe=653D45B3"
        />
        <Publicacion
          texto="Se saldrá a las 3 PM por las respectivas puertas según cada facultad"
          Titulo="La salida al corso será a las 3 PM"
          imagenEnlace="https://scontent.fjau4-1.fna.fbcdn.net/v/t39.30808-6/381165587_705003328339072_2873393590941491323_n.jpg?_nc_cat=101&ccb=1-7&_nc_sid=49d041&_nc_eui2=AeG96NHi9AXjcSm45kFmgsPWvLwq_gfxXQ68vCr-B_FdDlbYxZISrAElme91kBzshW78tah-y7eatWjGmFVoQxgK&_nc_ohc=AFEVJX8_0LYAX8m5THU&_nc_oc=AQmNhmZbFLEq-ybQCGBEc3MJO8WpMsxykvxRkE17iW3oYGvN0aEl9qPqWUgIndmp-LENaKYXeKHD2I9I3pp1eDYd&_nc_ht=scontent.fjau4-1.fna&oh=00_AfBdZYWQv2ouq41pS7RVRM4bdajM2O-d-tR3SykAEnySwg&oe=651B6FC6"
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
        <Publicacion
          texto="Casi no hay videos de la universidad en youtube, no veo ni los corsos o algo así https://www.youtube.com/watch?v=llfjouGUaJA"
          Titulo="¿No hay gente que haga más videos de la UNAS?"
        />
      </div>
    </div>
    <Footer />
    </>
  );
}

export default Home;
