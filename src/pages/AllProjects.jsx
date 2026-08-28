import "./AllProjects.css";
import { Link } from "react-router-dom";
import { Col, Container, Row } from "react-bootstrap";
import proyectos from "../data/projectsData";
import CardC from "../components/card/CardC";
import BackButton from "../components/backbutton/BackButton";
import { Helmet } from "react-helmet-async";

const AllProjects = () => {
  return (
    <>
      <Helmet>
        <title>Proyectos Web | Gabriel Fernández</title>

        <meta
          name="description"
          content="Explorá mis proyectos de desarrollo web y conocé los sitios y aplicaciones que desarrollé utilizando tecnologías frontend y backend."
        />
      </Helmet>
      <Container fluid as="section" className="py-4 px-0">
        <Row className="p-0 m-0 justify-content-center">
          <Col lg="10" className="">
            <BackButton />
            <div
              className="title-div-detail-page"
              data-aos="fade-up"
              data-aos-duration="600"
            >
              <p className="p1-title">Desarrollo Full Stack</p>
              <h1 className="title-detail-page">Proyectos realizados</h1>
              <p className="mt-4 p1-description">
                Una colección de proyectos frontend y full stack desarrollados
                con JavaScript, React, Node.js y MongoDB. Cada uno presenta
                distintos desafíos técnicos, desde interfaces responsivas hasta
                APIs, autenticación e integración con servicios externos.
              </p>
            </div>
            <Container fluid className="g-0 pt-4">
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
                    data-aos-duration="1600"
                  >
                    <CardC project={project} />
                  </Col>
                ))}
              </Row>
            </Container>
          </Col>
        </Row>
      </Container>
    </>
  );
};

export default AllProjects;
