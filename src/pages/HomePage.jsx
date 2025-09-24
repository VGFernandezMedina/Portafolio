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
      <Inicio />
      <div className="homepage">
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
