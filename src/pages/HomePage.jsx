import { Container } from "react-bootstrap";
import Inicio from "../components/inicio/Inicio";
import SobreMi from "../components/sobremi/SobreMi";
import "./HomePage.css";

const HomePage = () => {
  return (
    <Container fluid className="homepage">
      <Inicio />
      <SobreMi />
    </Container>
  );
};

export default HomePage;
