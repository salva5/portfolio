

import icon from "../assets/codificacion.png";
export default function Nav() {
  return (
    <>
      <nav className="navbar navbar-expand-md navbar-light">
        <div className="container-fluid">
          <button
            class="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbar-toggler"
            aria-controls="navbarTogglerDemo01"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbar-toggler">
            <a className="navbar-brand" href="#">
              <img src={icon} alt="Logo de la web" width="50" />
            </a>
            <ul className="navbar-nav d-flex justify-content-center align-items-center">
              <li className="nav-item">
                <a className="nav-link active" aria-current="page" href="#yo">
                  Sobre mi
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#projects">
                  Proyectos
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#contact">
                  Contacto
                </a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </>
  )
}