import { Link } from "react-router-dom";
import salva from "../assets/yo.jpg";


export default function AboutMe () {
  return(
    <>
      <section className="hero align-items-stretch">
        <div className="hero-principal">
          <img src={salva} alt="Foto de Salvador Cahuana" />
          
          <h1>Hola, soy <span className="text-primary rounded-3 p-1">Salvador Cahuana</span> </h1> 
          <h5 className="text-light-emphasis">Desarrollador Web Full Stack. De Córdoba, Argentina. <br /> Apasionado por los desafios</h5>
        
          <a href="https://www.linkedin.com/in/salvador-cahuana-bba962164/" target="_blank">
            <h6><span class="badge color-badge">Disponible para trabajar</span></h6>
          </a>
          <div className="enlaces-contact">
            <Link to="CV" target="_blank">
              <i class="bi bi-file-earmark-fill"></i>
              Ver CV
            </Link>
            <a href="https://www.linkedin.com/in/salvador-cahuana-bba962164/" target="_blank">
              <i class="bi bi-linkedin"></i>
              LinkedIn
            </a>
            <a href="https://github.com/salva5" target="_blank" rel="noopener noreferrer">
              <i class="bi bi-github"></i>
              Github
            </a>
          </div>
          
        </div>
      </section>
      <section  id="yo" className="sobre-mi seccion-oscura d-flex align-items-center">
        <div className="contenedor">
          <h2 className="seccion-titulo">Sobre mí</h2>
          <p className="seccion-texto">
            Desde los 17 años la programación se convirtió en mi fascinación y desde entonces no he dejado de aprender. Me apasionan los desafíos y siempre busco enriquecerme de conocimientos. Una de las cosas que me motiva a seguir explorando este apasionante mundo de la programación es descubrir constantemente nuevas formas creativas de resolver problemas. Actualmente estoy aprendiendo Java.
          </p>
        </div>
      </section>
    </>
  )
}