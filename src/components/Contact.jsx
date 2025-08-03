export default function Contact() {
  return (
    <>
      <section id="contact" className="contacto seccion-oscura">
        <div className="container">
          <div className="container text-center rectangulo d-flex justify-content-evenly">
            <div className="row">
              <div className="col-12 col-md-4 seccion-titulo">Hablemos</div>
              <div className="col-12 col-md-4 descripcion"></div>
              <div className="col-12 col-md-4 ">
                <a href="mailto:salvador.cahuana3@gmail.com">
                  <button type="button">
                    
                    <i class="bi bi-envelope-check-fill"></i>
                    <span>salvador.cahuana3@gmail.com</span> 
                  </button>
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
