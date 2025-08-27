import { Container } from "react-bootstrap";
import Inicio from "../components/inicio/Inicio";
import SobreMi from "../components/sobremi/SobreMi";
import "./HomePage.css";
import Tecnologias from "../components/tecnologias/Tecnologias";
import Proyectos from "../components/proyectos/Proyectos";

const HomePage = () => {
  return (
    <div className="homepage">
      <Inicio />
      <SobreMi />
      <Tecnologias />
      {/* <Proyectos /> */}
    </div>
  );
};

export default HomePage;
