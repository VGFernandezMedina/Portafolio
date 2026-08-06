import { Link } from "react-router-dom";
import "./AllProjects.css";
import { Col, Container, Row } from "react-bootstrap";
import { FaArrowLeft } from "react-icons/fa";
import proyectos from "../data/projectsData";
import CardC from "../components/card/CardC";

const AllProjects = () => {
  return (
    <Container fluid className="py-4 px-0">
      <Row className="p-0 m-0 justify-content-center">
        <Col lg="10" className="">
          <Link to="/" className="return-link text-decoration-none text-white">
            <div className="div-return">
              <FaArrowLeft />
              <p className="my-0">Volver al Inicio</p>
            </div>
          </Link>
          <div className="title-div-detail-page">
            <p className="p1-title" data-aos="fade-up" data-aos-duration="800">
              Desarrollo Full Stack
            </p>
            <h1
              className="title-detail-page"
              data-aos="fade-up"
              data-aos-duration="1000"
            >
              Proyectos realizados
            </h1>
            <p
              className="mt-4 p1-description"
              data-aos="fade-up"
              data-aos-duration="1200"
            >
              Una colección de proyectos frontend y full stack desarrollados con
              JavaScript, React, Node.js y MongoDB. Cada uno presenta distintos
              desafíos técnicos, desde interfaces responsivas hasta APIs,
              autenticación e integración con servicios externos.
            </p>
          </div>
          <Container fluid className="g-0">
            <Row>
              {proyectos.map((project) => (
                <Col
                  key={project.id}
                  xs="12"
                  sm="6"
                  md="6"
                  lg="4"
                  className="pb-4 d-flex justify-content-center"
                  data-aos="fade"
                  data-aos-duration="1800"
                >
                  <CardC project={project} />
                </Col>
              ))}
            </Row>
          </Container>
        </Col>
      </Row>
    </Container>
  );
};

export default AllProjects;
