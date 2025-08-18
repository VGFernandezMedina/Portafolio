import { Container } from "react-bootstrap";
import Inicio from "../components/inicio/Inicio";
import SobreMi from "../components/sobremi/SobreMi";
import "./HomePage.css";
import Tecnologias from "../components/tecnologias/Tecnologias";

const HomePage = () => {
  return (
    <Container fluid className="homepage">
      <Inicio />
      <SobreMi />
      <Tecnologias />
    </Container>
  );
};

export default HomePage;
