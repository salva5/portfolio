import "./App.css";

import Nav from "./components/Nav";
import AboutMe from "./components/AboutMe";
import Tecnologias from "./components/Tecnologias";
import Projects from "./components/Projects";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
function App() {
  return (
    <>
      <Nav />
      <AboutMe />
      <Tecnologias/>
      <Projects/>
      <Contact/>
      <Footer/>
    </>
  );
}

export default App;
