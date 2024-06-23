import nonflix from "../assets/img-projects/nonflix10.png"
import pokemon from "../assets/img-projects/pokemon0.png"
import mokepon from "../assets/img-projects/mokepon2.png"
import nextLevel from "../assets/img-projects/nextlevel0.png"

export default function Projects () {

  const verMasProjects = () => {
    
  }
  return (
    <>
      <section  id="projects" className="proyectos-recientes seccion-clara d-flex flex-column">
        <h2 className="seccion-titulo texto-negro">Mis proyectos</h2>
        <h3 className="seccion-descripcion">
          Estos son algunos proyectos que he realizado
        </h3>
        <div className="container text-center proyectos-contenedor">
          <div className="row">
            <div className="col-12 col-md-6 col-lg-4 column-project">
              <div className="proyecto">
                <img src={nonflix} alt="imagen de proyecto nonflix" />
                <div className="overlay">
                  <p>Nonflix</p>
                  <div className="d-flex gap-2 flex-wrap justify-content-center px-1">
                    <h6><span class="badge text-bg-primary">JavaScript </span></h6>
                    <h6><span class="badge text-bg-primary">HTML </span></h6>
                    <h6><span class="badge text-bg-primary">CSS </span></h6>
                    <h6><span class="badge text-bg-primary">React </span></h6>
                    <h6><span class="badge text-bg-primary">Redux </span></h6>
                    <h6><span class="badge text-bg-primary">Node </span></h6>
                    <h6><span class="badge text-bg-primary">Express</span></h6>
                    <h6><span class="badge text-bg-primary">Sequelize</span></h6>
                    <h6><span class="badge text-bg-primary">PostgreSQL</span></h6>
                  </div>
                  <div className="iconos-contenedor">
                    <a href="https://github.com/salva5/Nonflix" target="_blank" rel="noopener noreferrer">
                      <i class="bi bi-github"></i>
                    </a>
                    <a href="https://nonflix-zeta.vercel.app" target="_blank" rel="noopener noreferrer">
                      <i class="bi bi-laptop"></i>
                    </a>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-12 col-md-6 col-lg-4">
              <div className="proyecto">
                <img src={pokemon} alt="imagen de proyecto nonflix" />
                <div className="overlay">
                  <p>Pokémon</p>
                  <div className="d-flex gap-2 flex-wrap justify-content-center px-1">
                    <h6><span class="badge text-bg-primary">JavaScript </span></h6>
                    <h6><span class="badge text-bg-primary">HTML </span></h6>
                    <h6><span class="badge text-bg-primary">CSS </span></h6>
                    <h6><span class="badge text-bg-primary">React </span></h6>
                    <h6><span class="badge text-bg-primary">Redux </span></h6>
                    <h6><span class="badge text-bg-primary">Node </span></h6>
                    <h6><span class="badge text-bg-primary">Express</span></h6>
                    <h6><span class="badge text-bg-primary">Sequelize</span></h6>
                    <h6><span class="badge text-bg-primary">PostgreSQL</span></h6>
                  </div>
                  <div className="iconos-contenedor">
                    <a href="https://github.com/salva5/PI_Pokemon" target="_blank" rel="noopener noreferrer">
                      <i class="bi bi-github"></i>
                    </a>
                    <a href="" target="_blank" rel="noopener noreferrer">
                      <i class="bi bi-laptop"></i>
                    </a>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-12 col-md-6 col-lg-4">
              <div className="proyecto">
                <img src={mokepon} alt="imagen de proyecto nonflix" />
                <div className="overlay">
                  <p>Mokepon</p>
                  <div className="d-flex gap-2 flex-wrap justify-content-center px-1">
                    <h6><span class="badge text-bg-primary">JavaScript </span></h6>
                    <h6><span class="badge text-bg-primary">HTML </span></h6>
                    <h6><span class="badge text-bg-primary">CSS </span></h6>
                    <h6><span class="badge text-bg-primary">Node </span></h6>
                    <h6><span class="badge text-bg-primary">Express</span></h6>
                  </div>
                  <div className="iconos-contenedor">
                    <a href="https://github.com/salva5/Batalla-de-Mokepones" target="_blank" rel="noopener noreferrer">
                      <i class="bi bi-github"></i>
                    </a>
                    <a href="" target="_blank" rel="noopener noreferrer">
                      <i class="bi bi-laptop"></i>
                    </a>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-12 col-md-6 col-lg-4">
              <div className="proyecto">
                <img src={nextLevel} alt="imagen de proyecto nonflix" />
                <div className="overlay">
                  <p>NextLevel</p>
                  <div className="d-flex gap-2 flex-wrap justify-content-center px-1">
                    <h6><span class="badge text-bg-primary">JavaScript </span></h6>
                    <h6><span class="badge text-bg-primary">HTML </span></h6>
                    <h6><span class="badge text-bg-primary">CSS </span></h6>
                    <h6><span class="badge text-bg-primary">Bootstrap </span></h6>
                  </div>
                  <div className="iconos-contenedor">
                    <a href="https://github.com/salva5/NextLevel" target="_blank" rel="noopener noreferrer">
                      <i class="bi bi-github"></i>
                    </a>
                    <a href="https://salva5.github.io/NextLevel/" target="_blank" rel="noopener noreferrer">
                      <i class="bi bi-laptop"></i>
                    </a>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-12 col-md-6 col-lg-4">
              <div className="proyecto">
                <img src={nextLevel} alt="imagen de proyecto nonflix" />
                <div className="overlay">
                  <p>Proyecto 3</p>
                  <div className="iconos-contenedor">
                    <a href="https://github.com/salva5/Batalla-de-Mokepones" target="_blank" rel="noopener noreferrer">
                      <i class="bi bi-github"></i>
                    </a>
                    <a href="" target="_blank" rel="noopener noreferrer">
                      <i class="bi bi-laptop"></i>
                    </a>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-12 col-md-6 col-lg-4">
              <div className="proyecto">
                <img src={nextLevel} alt="imagen de proyecto nonflix" />
                <div className="overlay">
                  <p>Proyecto 3</p>
                  <div className="iconos-contenedor">
                    <a href="https://github.com/salva5/Batalla-de-Mokepones" target="_blank" rel="noopener noreferrer">
                      <i class="bi bi-github"></i>
                    </a>
                    <a href="" target="_blank" rel="noopener noreferrer">
                      <i class="bi bi-laptop"></i>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
          {/* <button>ver más</button> */}
        </div>
      </section>
    </>
  )
}