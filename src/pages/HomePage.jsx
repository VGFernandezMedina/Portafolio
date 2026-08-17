import Inicio from "../components/inicio/Inicio";
import SobreMi from "../components/sobremi/SobreMi";
import "./HomePage.css";
import Tecnologias from "../components/tecnologias/Tecnologias";
import Proyectos from "../components/proyectos/Proyectos";
import Servicios from "../components/servicios/Servicios";
import Certificados from "../components/certificados/Certificados";
import { Helmet } from "react-helmet-async";

const HomePage = () => {
  return (
    <>
      <Helmet>
        <title>Gabriel Fernández | Desarrollador Web</title>
        <meta
          name="description"
          content="Bienvenidos a mi portafolio web! Soy Gabriel, acá muestro mis proyectos y experiencias en desarrollo frontend y backend."
        />
      </Helmet>
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
    </>
  );
};

export default HomePage;
