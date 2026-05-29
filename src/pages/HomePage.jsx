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
      duration: 500,
      once: false,
      offset: 10,
      easing: "ease-in-out",
    });

    setTimeout(() => {
      AOS.refresh();
    }, 500);
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
