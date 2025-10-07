import { Container } from "react-bootstrap";
import Inicio from "../components/inicio/Inicio";
import SobreMi from "../components/sobremi/SobreMi";
import "./HomePage.css";
import Tecnologias from "../components/tecnologias/Tecnologias";
import Proyectos from "../components/proyectos/Proyectos";
import Servicios from "../components/servicios/Servicios";
import Certificados from "../components/certificados/Certificados";

const HomePage = () => {
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
