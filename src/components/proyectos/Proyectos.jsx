import { Col, Container, Row } from "react-bootstrap";
import "./Proyectos.css";
import Separador from "../separador/Separador";
import { GoProjectRoadmap } from "react-icons/go";
import proyectos from "../../data/projectsData";
import CardC from "../card/CardC";

const Proyectos = () => {
  return (
    <Container fluid id="proyectos" className="py-5" data-aos="fade-up">
      <div className="d-flex align-items-center">
        <GoProjectRoadmap size={24} className="icono-titulo" />
        <Separador title="Proyectos" />
      </div>
      <p className="parrafo py-4">
        Estos proyectos representan un paso más en mi crecimiento como
        desarrollador, donde aplico constantemente los conocimientos adquiridos
        en este camino de la programación.
      </p>
      <Container fluid className="g-0">
        <Row>
          {proyectos.map((project) => (
            <Col
              xs="12"
              sm="6"
              md="6"
              lg="6"
              className="pb-4 d-flex justify-content-center"
            >
              <CardC project={project} />
            </Col>
          ))}
        </Row>
      </Container>
    </Container>
  );
};

export default Proyectos;
