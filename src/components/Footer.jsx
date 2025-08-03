import icon from "../assets/codificacion-white.png";
export default function Footer() {
   return (
      <>
         <footer className="seccion-oscura d-flex flex-column align-items-center justify-content-center">
            <img className="footer-logo" src={icon} alt="logo del portafolio" />
            <p className="footer-texto text-center">
               {" "}
               Aprendo y creo todos los dias. <br />
               Creemos un proyecto juntos
            </p>
            <div className="iconos-redes-sociales d-flex flex-wrap align-items-center justify-content-center">
               <a
                  href="https://github.com/salva5"
                  target="_blank"
                  rel="noopener noreferrer"
               >
                  <i className="bi bi-github"></i>
               </a>
               <a
                  href="https://www.linkedin.com/in/salvador-cahuana-bba962164/"
                  target="_blank"
               >
                  <i className="bi bi-linkedin"></i>
               </a>
               <a
                  href="https://wa.me/+5493518112190?text=¡Hola!%20vi%20tu%20portfolio%20y%20me%20gustaria%20contactar%20contigo"
                  target="_blank"
               >
                  <i className="bi bi-whatsapp"></i>
               </a>
            </div>
            <div className="derechos-autor">
               Creado por Salvador Cahuana(2024) &#169;
            </div>
         </footer>
      </>
   );
}
