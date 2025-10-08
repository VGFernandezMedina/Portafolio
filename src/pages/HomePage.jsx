import Inicio from "../components/inicio/Inicio";
import SobreMi from "../components/sobremi/SobreMi";
import "./HomePage.css";
import Tecnologias from "../components/tecnologias/Tecnologias";
import Proyectos from "../components/proyectos/Proyectos";
import Servicios from "../components/servicios/Servicios";
import Certificados from "../components/certificados/Certificados";
import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

const HomePage = () => {
  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: false,
    });
  }, []);

  return (
    <div>
      <div className="homepage">
        <Inicio />
        <SobreMi />
        <Tecnologias />
        <Proyectos />
        <Servicios />
        <Certificados />
      </div>
    </div>
  );
};

export default HomePage;
