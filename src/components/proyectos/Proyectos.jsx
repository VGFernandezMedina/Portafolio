import { Col, Container, Row } from "react-bootstrap";
import "./Proyectos.css";
import Separador from "../separador/Separador";
import { GoProjectRoadmap } from "react-icons/go";
import proyectos from "../../data/projectsData";
import CardC from "../card/CardC";

const Proyectos = () => {
  return (
    <Container fluid id="proyectos" className="py-5">
      <Separador
        title="Proyectos"
        Icon={GoProjectRoadmap}
        iconClass="proyectos-icon"
      />
      <p className="parrafo pt-4 pb-5">
        Estos proyectos representan un paso más en mi crecimiento como
        desarrollador, donde aplico constantemente los conocimientos adquiridos
        en este camino de la programación.
      </p>
      <Container fluid className="g-0">
        <Row>
          {proyectos.map((project) => (
            <Col
              key={project.id}
              xs="12"
              sm="6"
              md="6"
              lg="6"
              className="pb-4 d-flex justify-content-center"
              data-aos="fade-up"
              data-aos-duration="1000"
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
