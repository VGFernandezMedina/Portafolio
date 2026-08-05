import { Link } from "react-router-dom";
import "./AllProjects.css";
import { Col, Container, Row } from "react-bootstrap";
import { FaArrowLeft } from "react-icons/fa";
import proyectos from "../data/projectsData";
import CardC from "../components/card/CardC";

const AllProjects = () => {
  return (
    <Container fluid className="py-4 px-0">
      <Row className="p-0 m-0">
        <Col className="col-detail-page">
          <Link to="/" className="return-link text-decoration-none text-white">
            <div className="div-return">
              <FaArrowLeft />
              <p className="my-0">Volver al Inicio</p>
            </div>
          </Link>

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
