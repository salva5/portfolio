import js from "../assets/img-stack/icons8-javascript.gif"
import bootstrap from "../assets/img-stack/bootstrap.png"
import react from "../assets/img-stack/react.png"
import node from "../assets/img-stack/node.png"
import postgreSQL from "../assets/img-stack/postgresql.png"
import express from "../assets/img-stack/express.png"
import redux from "../assets/img-stack/redux.png"
import html from "../assets/img-stack/html5.png"
import css from "../assets/img-stack/css-3.png"
import sequelize from "../assets/img-stack/sequelize.png"
import git from "../assets/img-stack/git.png"
import github from "../assets/img-stack/github.png"
import linux from "../assets/img-stack/linux.png"
import java from "../assets/img-stack/java.png"
import sql from "../assets/img-stack/sql.png"


export default function Tecnologias () {
  return(
    <>
      <section className="experiencia seccion-clara">
        <div className="container d-flex flex-column align-items-center justify-content-center">
          <h2 className="seccion-titulo">Tecnologias</h2>
          <div className="row justify-content-center align-items-center">
            <div className=" col-12 col-md-8  text-center mt-5 container-img">
              <img src={js} alt="" />
              <img src={java} alt="" />
              <img src={node} alt="" />      
              <img src={html} alt="" />
              <img src={css} alt="" />
              <img src={react} alt="" />  
              <img src={redux} alt="" />
              <img src={bootstrap} alt="" />  
              <img src={git} alt="" />
              <img src={github} alt="" />
              <img src={linux} alt="" />
              <img id="express" src={express} alt="" /> 
              <img src={sequelize} alt="" />
              <img src={sql} alt="" />
              <img src={postgreSQL} alt="" />
              
            </div>
          </div>
        </div>
      </section>
    </>
  )
}